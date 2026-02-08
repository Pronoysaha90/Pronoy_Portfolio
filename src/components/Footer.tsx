import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Heart } from "lucide-react";
import NavLink from "./NavLink";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const contactLinks = [
  { label: "G P GO 76 Mohakhali, Dhaka, Bangladesh", href: null },
  { label: "+880 1745-547460", href: "tel:+8801745547460" },
  { label: "pronoysaha723@gmail.com", href: "mailto:pronoysaha723@gmail.com" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Pronoysaha90", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/pronoysaha90", label: "LinkedIn" },
  { icon: Globe, href: "https://pronoysaha90.github.io/Portfolio_Pronoy/", label: "Website" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <NavLink
              href="#home"
              className="text-2xl font-mono font-bold text-foreground mb-4 block"
            >
              <span className="text-primary">Pronoy</span> Saha
            </NavLink>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Web Developer specializing in React.js and modern web technologies.
              Building beautiful, performant, and user-friendly applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pronoy Saha. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
