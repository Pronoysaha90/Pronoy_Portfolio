import { motion } from "framer-motion";
import { Code2, Award, ExternalLink, CheckCircle2 } from "lucide-react";

const platforms = [
  {
    name: "Beecrowd",
    handle: "pronoysaha623",
    stats: "350+ points",
    status: "Active",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
  },
  {
    name: "Codeforces",
    handle: "pronoy623",
    stats: "Max Rating: 818",
    status: "Competed",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/30",
  },
  {
    name: "HackerRank",
    handle: "pronoysaha623",
    stats: "Hackos: 372",
    status: "Active",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
  },
  {
    name: "LeetCode",
    handle: "Pronoy",
    stats: "Practicing",
    status: "Active",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/30",
  },
];

const certifications = [
  {
    title: "Android Application Development",
    issuer: "IBCS-PRIMAX",
    date: "Dec 2022",
    link: "#",
  },
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
    <section className="py-20 relative">
      <div className="absolute inset-0 animated-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Problem Solving &{" "}
            <span className="text-primary text-glow">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Competitive programming profiles and professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problem Solving */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
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
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`glass-card p-4 border ${platform.borderColor} flex items-center justify-between`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg ${platform.bgColor} flex items-center justify-center`}
                    >
                      <span className={`font-bold text-lg ${platform.color}`}>
                        {platform.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {platform.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {platform.handle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${platform.color}`}>
                      {platform.stats}
                    </p>
                    <p className="text-xs text-muted-foreground">
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
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.title}
                  href={cert.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass-card-hover p-4 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-xs">{cert.date}</span>
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
