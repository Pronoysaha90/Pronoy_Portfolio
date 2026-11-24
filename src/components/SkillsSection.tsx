import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projects } from '@/data/projects';
import SectionLabel from './ui/SectionLabel';
import SplitText from './ui/SplitText';
import Magnetic from './Magnetic';
import Reveal from './ui/Reveal';
import TechOrbit from './TechOrbit';

const EASE = [0.16, 1, 0.3, 1] as const;

export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  blurb: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    index: '01',
    title: 'Languages',
    blurb: 'Strong algorithmic foundation with modern typed and scripting languages for reliable software.',
    skills: ['JavaScript', 'TypeScript', 'C', 'C++', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    id: 'frontend',
    index: '02',
    title: 'Frontend',
    blurb: 'Responsive, accessible, and high-performance user interfaces built with React and modern styling.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Framer Motion', 'Bootstrap'],
  },
  {
    id: 'backend',
    index: '03',
    title: 'Backend',
    blurb: 'Service-oriented backends with secure REST APIs, authentication, and high throughput.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Microservices', 'JWT Auth', 'WebSockets'],
  },
  {
    id: 'databases',
    index: '04',
    title: 'Databases',
    blurb: 'Relational and document stores, designed with indexing and normalization in mind.',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Indexing', 'Normalization'],
  },
  {
    id: 'cms',
    index: '05',
    title: 'CMS & E-Commerce',
    blurb: 'Custom Shopify stores, WordPress themes, Liquid development, and conversion-optimized checkout flows.',
    skills: ['Shopify', 'WordPress', 'WooCommerce', 'Liquid', 'Elementor', 'Speed Optimization'],
  },
  {
    id: 'tools',
    index: '06',
    title: 'Tools & Cloud',
    blurb: 'Containerised, versioned and ready to deploy with modern developer tooling and cloud platforms.',
    skills: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'VS Code', 'Postman', 'AWS', 'Vercel'],
  },
];

const ALL_SKILLS = [...new Set(SKILL_CATEGORIES.flatMap((c) => c.skills))];

const ORBITS = [
  ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Next.js', 'Redux'],
  ['Shopify', 'WordPress', 'Liquid', 'Node.js', 'PostgreSQL', 'MongoDB'],
  ['Docker', 'Git', 'GitHub', 'AWS', 'REST APIs', 'Postman'],
];

function projectsUsing(skill: string): string[] {
  const s = skill.toLowerCase().replace(/\.js$/, '');
  return projects
    .filter((p) =>
      p.tech.some(
        (t) =>
          t.toLowerCase().replace(/\.js$/, '') === s ||
          t.toLowerCase().includes(s) ||
          s.includes(t.toLowerCase()),
      ),
    )
    .map((p) => p.title);
}

function SkillChip({ name, i }: { name: string; i: number }) {
  const reduce = useReducedMotion();
  const used = projectsUsing(name);

  return (
    <motion.li
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -12, filter: 'blur(4px)', transition: { duration: 0.25 } }}
      transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
      className="list-none"
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
      >
        <Magnetic strength={0.4}>
          <div className="group relative rounded-full border border-line bg-bg px-5 py-3 text-[clamp(1rem,1.5vw,1.25rem)] tracking-[-0.02em] transition-colors duration-300 hover:border-fg hover:bg-fg hover:text-bg cursor-default">
            {name}
            {used.length > 0 && (
              <span className="pointer-events-none absolute top-full left-1/2 z-20 mt-2 w-max max-w-[240px] -translate-x-1/2 translate-y-1 rounded-md border border-line bg-surface px-3 py-2 font-mono text-[10px] leading-relaxed tracking-[0.06em] text-muted opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-2xl">
                Used in {used.slice(0, 2).join(', ')}
              </span>
            )}
          </div>
        </Magnetic>
      </motion.div>
    </motion.li>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState(SKILL_CATEGORIES[0].id);
  const cat = SKILL_CATEGORIES.find((c) => c.id === active) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="relative px-4 py-14 md:px-8 md:py-20 font-sans" aria-labelledby="expertise-title">
      {/* 02 — EXPERTISE Section Title matching theme_changing_portfolio */}
      <div className="mb-10 grid gap-8 md:mb-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel index="02">Expertise</SectionLabel>
        </div>
        <div className="md:col-span-8">
          <SplitText
            as="h2"
            text="Skills & Expertise"
            className="block text-[clamp(2.4rem,6vw,5.6rem)] leading-[0.95] font-medium tracking-[-0.05em] text-fg"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[46ch] text-muted text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed">
              Technologies and tools I use to bring ideas to life
            </p>
          </Reveal>
        </div>
      </div>

      {/* 3D Tech Orbit (Full bleed stage) */}
      <Reveal className="-mx-4 mb-12 md:-mx-8 md:mb-16">
        <TechOrbit rings={ORBITS} label="Pronoy's skills in orbit" />
        <p className="mt-2 text-center font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
          Scroll or drag to turn me · {ALL_SKILLS.length} skills in orbit
        </p>
      </Reveal>

      {/* Interactive Category Tabs (Full width 12-col grid) */}
      <div className="grid gap-12 md:grid-cols-12 md:gap-6">
        {/* Left: Tablist */}
        <div
          role="tablist"
          aria-label="Skill categories"
          aria-orientation="vertical"
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:col-span-5 md:mx-0 md:block md:overflow-visible md:px-0 md:pb-0"
        >
          {SKILL_CATEGORIES.map((c) => {
            const on = c.id === active;
            return (
              <button
                key={c.id}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={on}
                aria-controls="skills-panel"
                onMouseEnter={() => setActive(c.id)}
                onFocus={() => setActive(c.id)}
                onClick={() => setActive(c.id)}
                className={`group relative flex shrink-0 items-baseline gap-4 rounded-full border px-4 py-2 text-left transition-colors duration-500 md:w-full md:rounded-none md:border-0 md:border-t md:px-0 md:py-6 ${
                  on ? 'border-fg md:border-line' : 'border-line'
                }`}
              >
                <span
                  className={`hidden font-mono text-xs transition-colors md:inline ${
                    on ? 'text-fg font-medium' : 'text-faint'
                  }`}
                >
                  {c.index}
                </span>
                <span
                  className={`text-[15px] whitespace-nowrap transition-all duration-500 ease-out md:text-[clamp(1.6rem,2.8vw,2.6rem)] md:tracking-[-0.04em] ${
                    on ? 'text-fg md:translate-x-3' : 'text-muted group-hover:text-fg'
                  }`}
                >
                  {on ? <span className="md:font-serif md:italic font-normal">{c.title}</span> : c.title}
                </span>
                {on && (
                  <motion.span
                    layoutId="skill-bar"
                    className="absolute top-[-1px] left-0 hidden h-px w-full bg-fg md:block"
                    transition={{ duration: 0.6, ease: EASE }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Sticky Active Tab Panel */}
        <div className="md:col-span-6 md:col-start-7">
          <div className="md:sticky md:top-32">
            <div
              id="skills-panel"
              role="tabpanel"
              aria-labelledby={`tab-${cat.id}`}
              className="relative min-h-[340px] rounded-[2px] border border-line p-6 md:p-10"
            >
              {/* Giant faint outline index number in top right corner */}
              <span
                aria-hidden="true"
                className="text-outline pointer-events-none absolute -top-6 right-4 font-serif text-[9rem] leading-none italic select-none md:text-[12rem]"
              >
                {cat.index}
              </span>
              <AnimatePresence mode="wait">
                <motion.div key={cat.id} className="relative z-10">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="max-w-[36ch] text-muted text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed"
                  >
                    {cat.blurb}
                  </motion.p>
                  <ul className="mt-10 flex flex-wrap gap-3">
                    {cat.skills.map((s, i) => (
                      <SkillChip key={s} name={s} i={i} />
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
