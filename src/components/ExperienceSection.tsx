import { motion } from "framer-motion";

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
    <section id="experience" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm text-[#A53860] tracking-[0.2em] uppercase font-medium mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-['Playfair_Display'] leading-tight">
            How the work has unfolded
          </h2>
        </motion.div>

        {/* Timeline Entries */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="border-t border-white/10 py-10 group"
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                {/* Left: Date & Location */}
                <div className="flex-shrink-0">
                  <p className="text-sm text-[#EF88AD] font-medium mb-1">
                    {exp.period}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {exp.location}
                  </p>
                </div>

                {/* Right: Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 font-['Playfair_Display'] group-hover:text-[#EF88AD] transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[#A53860] mb-4 italic">
                    {exp.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    {exp.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-[#A53860] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
