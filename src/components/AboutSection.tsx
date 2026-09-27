import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 relative">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
          {/* Left: Label + Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-[#A53860] tracking-[0.2em] uppercase font-medium mb-6">
              About
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-foreground font-['Playfair_Display'] leading-tight">
              A practice across product, commerce, and operations.
            </h2>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              I work across the stack when a product needs it, and stay close to the frontend
              when the job is conversion, clarity, and craft. Most of my work lives in the space
              between a brand and a working system: a store that has to sell, a service site
              that has to book, a dashboard that has to run a business.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
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
