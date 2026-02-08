import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    category: "Training",
    organization: "IBCS-PRIMAX",
    title: "Android Application Development Training",
    duration: "Oct 2022 – Dec 2022",
    durationBadge: "3 mos",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Completed comprehensive training in Android application development using Java and XML.",
      "Built hands-on projects including user interfaces, database integration, and API implementation.",
      "Gained practical experience in mobile app architecture and design patterns.",
    ],
    icon: GraduationCap,
    iconBg: "from-blue-500 to-blue-600",
  },
  {
    category: "Professional Experience",
    organization: "FB International BD, Dhaka",
    title: "Web Developer",
    duration: "Dec 2024 – Sep 2025",
    durationBadge: "9 mos",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Designed and developed responsive websites and custom web apps using HTML, CSS, JavaScript, and Tailwind CSS.",
      "Integrated WordPress/WooCommerce, ensured SEO best practices, and handled maintenance, debugging, and performance optimization.",
      "Delivered high-quality projects with clean design, intuitive navigation, and enhanced user experience.",
    ],
    icon: Briefcase,
    iconBg: "from-primary to-glow-blue",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Professional <span className="text-primary text-glow">Journey</span>
          </h2>
          <p className="section-subtitle">
            My career path and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-3 md:left-5 top-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                >
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary animate-pulse" />
                </motion.div>

                {/* Card */}
                <motion.div
                  className="glass-card-hover p-6 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-glow-cyan to-glow-blue" />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.iconBg} flex items-center justify-center shadow-lg`}>
                        <exp.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground">
                          {exp.organization}
                        </h3>
                        <p className="text-primary font-medium text-sm md:text-base">
                          {exp.title}
                        </p>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </div>
                      <span className="px-2.5 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full border border-primary/30">
                        {exp.durationBadge}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xs">📋</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        Key Achievements & Responsibilities
                      </span>
                    </div>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
