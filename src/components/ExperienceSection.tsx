import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

const experiences = [
  {
    period: "2024 — Present",
    location: "DHAKA · REMOTE",
    title: "Full-Stack Web Developer",
    subtitle: "Independent practice",
    description:
      "Shipped React products, WordPress and Shopify storefronts, and NexusBill, an ISP billing platform with MikroTik automation.",
    achievements: [
      "Designed and built customer-facing sites across food, fashion, travel, and professional services.",
      "Delivered NexusBill: billing, PPPoE, bKash, SMS, and router sync in a one-month build.",
      "Owned component systems, responsive layouts, and the last mile of launch.",
    ],
  },
  {
    period: "2023 — 2024",
    location: "DHAKA · CONTRACT",
    title: "WordPress & Shopify Specialist",
    subtitle: "Client engagements",
    description:
      "Production sites for repair, travel, finance, skincare, and membership brands — booking, commerce, and content under one operator-friendly CMS.",
    achievements: [
      "Integrated Square Appointments, Travelpayouts, WooCommerce, and WPForms.",
      "Customized Shopify Liquid themes with filtering and mobile catalog flows.",
      "Turned service businesses into structured page systems instead of single landing pages.",
    ],
  },
  {
    period: "Oct 2022 — Dec 2022",
    location: "DHAKA · ON-SITE",
    title: "Android Development Training",
    subtitle: "IBCS-PRIMAX",
    description:
      "Completed comprehensive training in Android application development using Java and XML.",
    achievements: [
      "Built hands-on projects including user interfaces, database integration, and API implementation.",
      "Gained practical experience in mobile app architecture and design patterns.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-14 md:py-20 relative font-sans">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="mb-10 md:mb-12">
          <SectionLabel index="04">Experience</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-fg font-serif leading-tight">
              How the work has <span className="italic">unfolded</span>
            </h2>
          </motion.div>
        </div>

        {/* Experience List */}
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 lg:p-10 rounded-2xl border border-line bg-surface/40 hover:border-fg/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <span className="font-mono text-xs tracking-wider text-muted uppercase">
                  {exp.period} · {exp.location}
                </span>
                <span className="text-xs font-mono text-faint">
                  {exp.subtitle}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-fg mb-3">
                {exp.title}
              </h3>

              <p className="text-muted leading-relaxed mb-6 text-[15px] md:text-base max-w-4xl">
                {exp.description}
              </p>

              <ul className="space-y-2.5 border-t border-line/50 pt-5">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-[15px] text-muted">
                    <span className="text-fg mt-1">―</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
