import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Globe, Download } from "lucide-react";
import heroImage from "@/assets/pronoy-hero.png";
import resumePdf from "@/assets/Resume.pdf";

const roles = [
  "Full-Stack Web Developer",
  "React.js Developer",
  "WordPress & Shopify Expert",
  "UI/UX Enthusiast",
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Pronoysaha90",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/pronoysaha90",
    label: "LinkedIn",
  },
  {
    icon: Globe,
    href: "https://pronoysaha90.github.io/Portfolio_Pronoy/",
    label: "Website",
  },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent"
    >
      {/* Giant "PRONOY" background text — more visible deep maroon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-[10rem] md:text-[16rem] lg:text-[22rem] font-black uppercase leading-none tracking-tighter font-['Playfair_Display']"
          style={{
            WebkitTextStroke: "1px #670D2F",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            opacity: 0.08,
          }}
        >
          PRONOY
        </motion.span>
      </div>

      {/* Radial red glow top-right */}
      <div
        className="absolute right-0 top-0 w-2/3 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 85% 40%, rgba(103,13,47,0.35) 0%, transparent 65%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-4 lg:gap-6 items-center min-h-[80vh]">
          {/* ── LEFT CONTENT ── */}
          <div className="flex flex-col items-start text-left">
            {/* Hello label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-sm text-[#EF88AD] tracking-[0.25em] uppercase font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] text-white leading-tight mb-2"
            >
              Pronoy{" "}
              <span style={{ color: "#EF88AD" }}>Saha</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/80 font-medium mb-4 h-8 flex items-center"
            >
              {displayed}
              <span
                className="ml-0.5 inline-block w-0.5 h-5 align-middle animate-pulse"
                style={{ background: "#EF88AD" }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm md:text-base text-white/55 leading-relaxed mb-8 max-w-md"
            >
              Building modern, scalable, and visually engaging web experiences
              using React, WordPress, and Shopify with a focus on conversion
              and clean code that holds up six months later.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 mb-8"
            >
              {[
                { num: "1+", label: "Years Exp." },
                { num: "20+", label: "Projects" },
                { num: "15+", label: "Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-white">
                    {s.num.replace("+", "")}
                    <span style={{ color: "#A53860" }}>+</span>
                  </p>
                  <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                className="btn-glow flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href={resumePdf}
                download="Pronoy_Saha_Resume.pdf"
                className="btn-glass flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-3"
            >
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border text-white/60 hover:text-[#EF88AD] transition-all duration-300"
                  style={{
                    borderColor: "rgba(165,56,96,0.35)",
                    background: "rgba(103,13,47,0.2)",
                  }}
                  whileHover={{ scale: 1.12, y: -2, borderColor: "#A53860" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT CONTENT — Profile Image (visible on ALL screens) ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow behind image */}
            <div
              className="absolute inset-0 z-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(165,56,96,0.4) 0%, transparent 65%)",
                filter: "blur(50px)",
              }}
            />

            <motion.div
              className="relative z-10 w-56 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-[380px] lg:h-[480px] rounded-2xl overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                boxShadow: "0 0 60px rgba(103,13,47,0.35)",
                border: "1.5px solid rgba(165,56,96,0.25)",
              }}
            >
              <img
                src={heroImage}
                alt="Pronoy Saha"
                className="w-full h-full object-cover object-top"
              />
              {/* Maroon gradient overlay at bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(58,5,25,0.7) 100%)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
