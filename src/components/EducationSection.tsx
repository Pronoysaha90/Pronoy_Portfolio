import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Southeast University",
    location: "Dhaka",
    duration: "Nov 2023 - Present",
    status: "Ongoing",
    cgpa: "3.36",
    expected: "2026",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Graphic Arts Institute",
    location: "Dhaka (BTEB)",
    duration: "Session: 2018-19",
    status: "Completed",
    cgpa: "3.61 / 4.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "The Pole Star Poura High School",
    location: "Dhaka",
    status: "Completed",
    gpa: "4.05",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
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
            <span className="text-primary text-glow">Education</span>
          </h2>
          <p className="section-subtitle">
            My academic journey and qualifications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card-hover p-6 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>

              {/* Degree */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-primary font-medium text-sm mb-3">
                {edu.institution}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                {edu.duration && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.duration}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between">
                {/* CGPA/GPA */}
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground font-medium">
                    {edu.cgpa ? `CGPA: ${edu.cgpa}` : `GPA: ${edu.gpa}`}
                  </span>
                </div>

                {/* Status Badge */}
                <span
                  className={`status-badge ${
                    edu.status === "Ongoing" ? "status-ongoing" : "status-completed"
                  }`}
                >
                  {edu.status}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
