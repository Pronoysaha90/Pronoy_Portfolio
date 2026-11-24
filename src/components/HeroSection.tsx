import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import Magnetic from './Magnetic';
import RotatingBadge from './RotatingBadge';
import DotField from './DotField';
import HeroImage from './HeroImage';
import { scrollToId } from '@/lib/scroll';

const EASE = [0.16, 1, 0.3, 1] as const;
const NAME = 'PRONOY';

const ROLES = [
  'Full-Stack Developer',
  'React.js Specialist',
  'Shopify & WordPress Expert',
  'UI/UX Enthusiast',
];

function RotatingRole({ start }: { start: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!start) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % ROLES.length), 2600);
    return () => window.clearInterval(id);
  }, [start]);

  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={ROLES[i]}
          className="inline-block whitespace-nowrap"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function LocalTime() {
  const [t, setT] = useState('');
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Dhaka',
    });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);
  return <span className="tabular-nums font-mono text-[11px]">{t || '12:00'} BST</span>;
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const filmY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const nameX = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-18%']);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Pointer parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const rotY = useTransform(px, (v) => v * 1.1);
  const rotX = useTransform(py, (v) => v * -0.9);
  const nameShiftX = useTransform(px, (v) => v * -1.2);

  const [desktop, setDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const on = () => setDesktop(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== 'mouse') return;
    mx.set((e.clientX / window.innerWidth - 0.5) * 18);
    my.set((e.clientY / window.innerHeight - 0.5) * 12);
  };

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: EASE },
  });

  const film = (
    <motion.div
      className="group relative h-full"
      initial={{ clipPath: 'inset(100% -40% 0% -40%)' }}
      animate={{ clipPath: 'inset(-100% -40% 0% -40%)' }}
      transition={{ duration: 1.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
      style={{ perspective: 1400 }}
    >
      <motion.div
        className="h-full"
        initial={{ rotateY: reduce ? 0 : -30, z: reduce ? 0 : -140 }}
        animate={{ rotateY: 0, z: 0 }}
        transition={{ duration: 2.2, delay: 0.4, ease: EASE }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          style={{ rotateY: rotY, rotateX: rotX, transformStyle: 'preserve-3d' }}
          className="relative h-full flex items-end justify-center"
        >
          <HeroImage />
        </motion.div>
      </motion.div>
    </motion.div>
  );

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={onMove}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden px-4 pt-24 md:h-[100svh] md:min-h-[700px] md:px-8 md:pt-28 font-sans"
      aria-label="Introduction"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[20vh] right-[-10vw] -z-10 h-[140vh] w-[80vw] opacity-90"
        style={{
          background: 'radial-gradient(50% 50% at 70% 30%, var(--glow, rgba(255, 255, 255, 0.07)), transparent 70%)',
        }}
      />
      <DotField />

      {/* Desktop film: big, anchored to the floor, standing in front of the giant name */}
      {desktop && (
        <motion.div
          style={{ y: filmY }}
          className="pointer-events-auto hidden md:flex absolute right-[1vw] bottom-0 z-10 h-[calc(100svh-4.5rem)] max-h-[880px] lg:right-[4vw] items-end justify-center"
        >
          {film}
          <div className="absolute bottom-[22%] -left-[12%] z-20">
            <RotatingBadge ready={true} />
          </div>
        </motion.div>
      )}

      {/* Main intro content (Full width, no container clamp) */}
      <div className="relative flex flex-1 flex-col justify-center pb-6 md:pb-20">
        {/* Mobile image at top */}
        {!desktop && (
          <div className="md:hidden relative z-10 mx-auto mt-1 mb-5 flex justify-center items-end">
            <div className="relative h-[310px] xs:h-[360px] sm:h-[420px] w-auto flex items-end justify-center">
              {film}
              <div className="absolute -bottom-1 -right-2 z-20 scale-[0.78] sm:scale-[0.85] origin-bottom-right">
                <RotatingBadge ready={true} />
              </div>
            </div>
          </div>
        )}

        <motion.div style={{ y: textY, opacity: fade }} className="relative z-20 md:max-w-[52%]">
          {/* Availability pill */}
          <motion.div
            {...fadeIn(0.05)}
            className="inline-flex w-fit items-center gap-3 rounded-full border border-line bg-bg/70 px-4 py-1.5 text-[12px] text-muted backdrop-blur-sm"
          >
            <span className="text-fg font-medium">Open to opportunities</span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span className="hidden sm:inline">Dhaka, Bangladesh</span>
          </motion.div>

          {/* Hello & rotating role */}
          <motion.p {...fadeIn(0.15)} className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-serif text-[clamp(1.9rem,3.4vw,3.2rem)] leading-none italic text-fg">
              Hello, I'm
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              <span className="text-faint">— </span>
              <span className="text-fg">
                <RotatingRole start={true} />
              </span>
            </span>
          </motion.p>
        </motion.div>

        {/* The giant name (Exactly matching theme_changing_portfolio) */}
        <motion.h1
          style={{ x: nameX }}
          className="relative z-0 -mx-1 mt-2 text-[18.6vw] md:text-[clamp(4.4rem,20.5vw,22rem)] leading-[0.8] font-semibold tracking-[-0.065em] whitespace-nowrap select-none md:-mx-2"
          aria-label="Hello, I'm Pronoy"
        >
          <motion.span aria-hidden="true" className="inline-block" style={{ x: nameShiftX }}>
            {NAME.split('').map((c, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
                <motion.span
                  className="inline-block will-change-transform"
                  style={{
                    color: `color-mix(in oklab, var(--fg) ${Math.round(100 - (i / (NAME.length - 1)) * 82)}%, var(--name-fade, #232323))`,
                  }}
                  initial={{ y: '105%', rotate: 6 }}
                  animate={{ y: '0%', rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.06, ease: EASE }}
                >
                  {c}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Bio paragraph & Action buttons */}
        <motion.div
          style={{ y: textY, opacity: fade }}
          className="relative z-20 mt-8 md:mt-10 md:max-w-[46%] lg:max-w-[40%]"
        >
          <motion.p
            {...fadeIn(0.7)}
            className="max-w-[36ch] text-[clamp(1.05rem,1.5vw,1.35rem)] leading-[1.4] tracking-[-0.015em] text-muted"
          >
            A developer who turns ideas into <span className="text-fg">digital experiences</span> — from high-converting Shopify stores to scalable React applications.
          </motion.p>

          <motion.div {...fadeIn(0.9)} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollToId('projects')}
                className="group inline-flex items-center gap-3 rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
              >
                View selected work
                <ArrowDownRight
                  size={16}
                  className="transition-transform duration-500 group-hover:rotate-[-45deg]"
                />
              </button>
            </Magnetic>

            <Magnetic>
              <a
                href="/assets/Resume.pdf"
                download="Pronoy_Saha_Resume.pdf"
                className="group inline-flex items-center gap-3 rounded-full border border-line bg-bg/70 px-6 py-3.5 text-sm font-medium text-fg backdrop-blur-sm transition-colors hover:border-fg"
              >
                Download résumé
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="https://wa.me/8801745547460"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-bg/70 px-5 py-3.5 text-sm font-medium text-muted backdrop-blur-sm hover:text-fg hover:border-fg transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-30 -mx-4 flex items-end justify-between border-t border-line bg-bg/60 px-4 py-4 font-mono text-[11px] tracking-[0.2em] text-muted uppercase backdrop-blur-sm md:-mx-8 md:px-8"
      >
        <button
          type="button"
          onClick={() => scrollToId('skills')}
          className="flex items-center gap-3 uppercase text-muted hover:text-fg transition-colors"
        >
          <span className="relative h-8 w-px overflow-hidden bg-line">
            <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-fg" />
          </span>
          Scroll to explore
        </button>
        <span className="hidden sm:block text-muted">Full-Stack Web &amp; E-Commerce</span>
        <LocalTime />
      </motion.div>
    </section>
  );
}
