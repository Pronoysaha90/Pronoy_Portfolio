import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, FolderOpen, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/pronoy-hero.jpg";

const roles = [
  "Frontend Developer",
  "Web Developer",
  "Problem Solver",
  "React Specialist",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Content - Hero Visual (Mobile First) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:order-2 order-1"
          >
            {/* Glow rings - BIGGER */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] border border-primary/20 rounded-full animate-pulse" />
              <div className="absolute w-88 h-88 md:w-[480px] md:h-[480px] lg:w-[540px] lg:h-[540px] border border-primary/10 rounded-full" style={{ animationDelay: "0.5s" }} />
              <div className="absolute w-96 h-96 md:w-[540px] md:h-[540px] lg:w-[600px] lg:h-[600px] border border-primary/5 rounded-full" style={{ animationDelay: "1s" }} />
            </div>

            {/* Orbiting icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">
                  {/* React icon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 glass-card flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                      <path fillRule="evenodd" d="M12 21c6.627 0 12-4.03 12-9s-5.373-9-12-9S0 7.03 0 12s5.373 9 12 9Zm0-2c5.523 0 10-3.134 10-7s-4.477-7-10-7-10 3.134-10 7 4.477 7 10 7Z" clipRule="evenodd" opacity=".5" />
                    </svg>
                  </div>
                  {/* JS icon */}
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-12 h-12 glass-card flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">JS</span>
                  </div>
                  {/* Tailwind icon */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 glass-card flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z" />
                    </svg>
                  </div>
                  {/* TypeScript icon */}
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-12 h-12 glass-card flex items-center justify-center">
                    <span className="text-sky-400 font-bold text-sm">TS</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Profile image - BIGGER */}
            <motion.div
              className="relative z-10 w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/30"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ boxShadow: "0 0 80px hsla(187, 92%, 50%, 0.4)" }}
            >
              <img
                src={heroImage}
                alt="Pronoy Saha"
                className="w-full h-full object-cover"
              />
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-glow-blue/10" />
            </motion.div>
          </motion.div>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left lg:order-1 order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary text-sm font-mono mb-4"
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-foreground">Pronoy </span>
              <span className="text-primary text-glow">Saha</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 h-8"
            >
              <span className="text-foreground">{displayText}</span>
              <span className="text-primary animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Building modern, scalable, and visually engaging web experiences
              using React, Tailwind CSS, and motion-driven UI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                className="btn-glow flex items-center justify-center gap-2 text-primary-foreground"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FolderOpen className="w-5 h-5" />
                Contact Me
              </motion.a>
              <motion.a
                href="#"
                className="btn-glass flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com/Pronoysaha90"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/pronoysaha90"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
