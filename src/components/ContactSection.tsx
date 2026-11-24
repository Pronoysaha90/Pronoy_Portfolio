import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { scrollToId } from '@/lib/scroll';
import SectionLabel from './ui/SectionLabel';
import SplitText from './ui/SplitText';
import Magnetic from './Magnetic';
import Reveal from './ui/Reveal';

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const t = useRef(0);
  useEffect(() => () => window.clearTimeout(t.current), []);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          t.current = window.setTimeout(() => setCopied(false), 1800);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-fg hover:text-fg"
      aria-live="polite"
    >
      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
      {copied ? 'Copied to clipboard' : 'Copy email'}
    </button>
  );
}

function BackToTop() {
  const { scrollYProgress } = useScroll();

  return (
    <Magnetic strength={0.5}>
      <button
        type="button"
        onClick={() => scrollToId('home')}
        aria-label="Back to top"
        className="group relative grid h-16 w-16 place-items-center rounded-full border border-line transition-colors hover:bg-fg hover:text-bg cursor-pointer"
      >
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
          <motion.circle
            cx="32"
            cy="32"
            r="31"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
        <ArrowUp size={18} className="transition-transform duration-500 group-hover:-translate-y-1" />
      </button>
    </Magnetic>
  );
}

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/pronoysaha90',
    icon: Linkedin,
    note: 'Connect',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Pronoysaha90',
    icon: Github,
    note: '@Pronoysaha90',
  },
  {
    label: 'Email',
    href: 'mailto:pronoysaha723@gmail.com',
    icon: Mail,
    note: 'Write to me',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/8801745547460',
    icon: MessageCircle,
    note: 'Chat on WhatsApp',
  },
  {
    label: 'Location',
    href: 'https://maps.google.com/?q=Mohakhali,Dhaka,Bangladesh',
    icon: MapPin,
    note: 'Dhaka, BD',
  },
  {
    label: 'Résumé',
    href: '/assets/Resume.pdf',
    icon: Download,
    note: 'PDF',
    download: true,
  },
];

export default function ContactSection() {
  const email = 'pronoysaha723@gmail.com';

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-14 md:pt-20 font-sans"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto px-6 relative z-10">
        <SectionLabel index="08">Contact</SectionLabel>

      <h2
        id="contact-title"
        className="mt-8 text-[clamp(2.6rem,6.4vw,6.8rem)] leading-[0.9] font-medium tracking-[-0.055em] md:mt-10 text-fg"
      >
        <SplitText text="Have an idea?" className="block" />
        <SplitText
          text="Let's make it happen."
          delay={0.15}
          className="block font-serif font-normal tracking-[-0.035em] italic"
        />
      </h2>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-7">
          <Reveal>
            <p className="max-w-[42ch] text-muted text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed">
              Internships, full-time roles, collaborations or a good engineering conversation — my inbox is open.
            </p>
            <Magnetic strength={0.15} className="mt-6 max-w-full">
              <a
                href={`mailto:${email}`}
                className="group relative inline-block max-w-full text-[clamp(1.35rem,2.8vw,2.5rem)] font-medium tracking-[-0.035em] break-all text-fg"
              >
                {email}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-fg transition-transform duration-700 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </a>
            </Magnetic>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CopyEmail email={email} />
              <Magnetic>
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent("Hello Pronoy — let's work together")}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
                >
                  Start a conversation
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://wa.me/8801745547460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition-all"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <ul className="md:col-span-4 md:col-start-9">
          {contactLinks.map((l, i) => (
            <Reveal as="li" key={l.label} delay={i * 0.06}>
              <a
                href={l.href}
                {...(l.download
                  ? { download: true }
                  : l.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="group flex items-center justify-between gap-4 border-t border-line py-3.5 transition-colors last:border-b"
              >
                <span className="flex items-center gap-4">
                  <l.icon
                    size={17}
                    strokeWidth={1.5}
                    className="text-muted transition-colors group-hover:text-fg"
                  />
                  <span className="text-lg tracking-[-0.02em] transition-transform duration-500 ease-out group-hover:translate-x-1.5 text-fg">
                    {l.label}
                  </span>
                </span>
                <span className="flex items-center gap-3 font-mono text-[11px] text-muted group-hover:text-fg transition-colors">
                  {l.note}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>

      <footer className="mt-12 border-t border-line md:mt-16">
        <div className="flex flex-col-reverse gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-sm text-muted">
            <p>© {new Date().getFullYear()} Pronoy Saha. Designed &amp; built by me.</p>
            <p className="font-mono text-[11px] tracking-[0.12em] text-faint uppercase">
              React · TypeScript · Tailwind CSS · Framer Motion
            </p>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden font-mono text-[11px] tracking-[0.2em] text-muted uppercase sm:block">
              Back to top
            </span>
            <BackToTop />
          </div>
        </div>
      </footer>
      </div>
    </section>
  );
}
