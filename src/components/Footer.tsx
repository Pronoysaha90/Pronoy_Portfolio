import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Email", href: "mailto:pronoysaha723@gmail.com" },
  { label: "GitHub", href: "https://github.com/Pronoysaha90" },
  { label: "LinkedIn", href: "https://linkedin.com/in/pronoysaha90" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-transparent">
      <div className="container mx-auto px-6 py-10 max-w-5xl">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          {/* Left: Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground font-['Playfair_Display'] mb-1">
              Pronoy Saha
            </h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Web Developer · Dhaka, Bangladesh
            </p>
          </motion.div>

          {/* Right: Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-muted-foreground hover:text-[#EF88AD] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pronoy Saha
          </p>
          <p className="text-xs text-[#A53860]">
            Available for remote collaboration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
