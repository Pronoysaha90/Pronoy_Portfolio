import { motion } from "framer-motion";
import { Code2, Award, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";

const platforms = [
  {
    name: "Beecrowd",
    handle: "pronoysaha623",
    stats: "350+ points",
    status: "Active",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-line",
  },
  {
    name: "Codeforces",
    handle: "pronoy623",
    stats: "Max Rating: 818",
    status: "Competed",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-line",
  },
  {
    name: "HackerRank",
    handle: "pronoysaha623",
    stats: "Hackos: 372",
    status: "Active",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-line",
  },
  {
    name: "LeetCode",
    handle: "Pronoy",
    stats: "Practicing",
    status: "Active",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-line",
  },
];

const certifications = [
  {
    title: "Programming Contests & Research",
    issuer: "IEEE Computer Society, SEU Student Branch Chapter",
    date: "Nov 2025",
    link: "https://media.licdn.com/dms/image/v2/D5622AQE8YNQ_7elZiQ/feedshare-shrink_800/B56Ztlny2lG0Ag-/0/1766936493962?e=1772064000&v=beta&t=aD3mUtrX_CrXhcIdqZUE4xCycygwVoeeD2gz2xHgMAE",
  },
  {
    title: "JavaScript (Basic) Certificate by HackerRank",
    issuer: "Online Course",
    date: "Nov 2025",
    link: "https://www.hackerrank.com/certificates/iframe/882a40b0878f",
  },
  {
    title: "SQL (Basic) Certificate by HackerRank",
    issuer: "Online Course",
    date: "Nov 2025",
    link: "https://www.hackerrank.com/certificates/iframe/1f9ce1b170c6",
  },
];

const ProblemSolvingSection = () => {
  return (
    <section id="problem-solving" className="py-14 md:py-20 relative font-sans">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-10 md:mb-12">
          <SectionLabel index="03">Problem Solving</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-fg font-serif leading-tight">
              Problem Solving &amp; <span className="italic">Certifications</span>
            </h2>
            <p className="mt-3 text-muted text-sm md:text-base max-w-xl">
              Competitive programming profiles and professional certifications
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 w-full">
          {/* Problem Solving */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-surface border border-line flex items-center justify-center">
                <Code2 className="w-5 h-5 text-fg" />
              </div>
              <h3 className="text-xl font-medium text-fg">
                Problem Solving
              </h3>
            </div>

            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="p-5 border border-line bg-surface/40 rounded-2xl flex items-center justify-between transition-colors hover:border-fg/40"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${platform.bgColor} flex items-center justify-center`}
                    >
                      <span className={`font-bold text-lg ${platform.color}`}>
                        {platform.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-fg">
                        {platform.name}
                      </p>
                      <p className="text-xs text-muted font-mono">
                        {platform.handle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${platform.color}`}>
                      {platform.stats}
                    </p>
                    <p className="text-xs text-faint">
                      {platform.status}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-surface border border-line flex items-center justify-center">
                <Award className="w-5 h-5 text-fg" />
              </div>
              <h3 className="text-xl font-medium text-fg">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="p-5 border border-line bg-surface/40 rounded-2xl flex items-center justify-between group transition-colors hover:border-fg/40"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface border border-line flex items-center justify-center text-fg">
                      <CheckCircle2 className="w-5 h-5 text-fg" />
                    </div>
                    <div>
                      <p className="font-medium text-fg group-hover:text-fg transition-colors">
                        {cert.title}
                      </p>
                      <p className="text-xs text-muted">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <span className="text-xs font-mono">{cert.date}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvingSection;
