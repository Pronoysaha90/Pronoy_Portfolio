import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";

const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Southeast University",
    location: "Dhaka",
    duration: "Nov 2023 - Present",
    status: "Ongoing",
    cgpa: "3.55",
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

const EducationSection = () => {
  return (
    <section id="education" className="py-14 md:py-20 relative font-sans">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-10 md:mb-12">
          <SectionLabel index="07">Education</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-fg font-serif leading-tight">
              Academic <span className="italic">Background</span>
            </h2>
            <p className="mt-3 text-muted text-sm md:text-base">
              My educational foundation in computing and technology
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-line bg-surface/40 hover:border-fg/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-muted block mb-3">
                  {item.duration}
                </span>
                <h3 className="text-xl font-serif text-fg mb-2">
                  {item.degree}
                </h3>
                <p className="text-muted text-sm mb-4">
                  {item.institution} · {item.location}
                </p>
              </div>

              <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-muted">
                <span>Result: {item.cgpa || item.gpa}</span>
                <span className="text-fg">{item.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
