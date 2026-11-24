import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

const AboutSection = () => {
  return (
    <section id="about" className="py-14 md:py-20 relative font-sans">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-start">
          {/* Left: Label + Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <SectionLabel index="01">About</SectionLabel>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-fg font-serif leading-tight">
              A practice across <span className="italic">product, commerce</span>, and operations.
            </h2>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted leading-relaxed text-[15px] font-normal"
          >
            <p>
              I work across the stack when a product needs it, and stay close to the frontend
              when the job is conversion, clarity, and craft. Most of my work lives in the space
              between a brand and a working system: a store that has to sell, a service site
              that has to book, a dashboard that has to run a business.
            </p>
            <p>
              Recent work spans React applications, WordPress and WooCommerce, Shopify
              themes, and a full ISP billing platform with MikroTik automation and bKash
              payments. I care about maintainable components, honest project stories, and
              software that still makes sense six months later.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
