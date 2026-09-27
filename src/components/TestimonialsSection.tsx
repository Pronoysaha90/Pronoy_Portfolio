import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    handle: "CEO at TechFlow, New York (USA)",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=SJ&backgroundColor=0ea5e9",
    content: "Pronoy rebuilt our e-commerce frontend in React and it completely transformed our conversion rates. His communication was top-notch despite the timezone difference.",
  },
  {
    name: "Fahim Rahman",
    handle: "Founder, Bengal Tours (Dhaka, BD)",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=FR&backgroundColor=f59e0b",
    content: "Excellent work on our travel agency website. The booking system integration was smooth, and the site looks premium. Best web developer I've worked with in BD!",
  },
  {
    name: "James Carter",
    handle: "Product Manager, London (UK)",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=JC&backgroundColor=10b981",
    content: "Finding a reliable frontend dev is tough. Pronoy not only writes clean code but also brings great UX suggestions to the table. Will definitely hire him again.",
  },
  {
    name: "Nusrat Jahan",
    handle: "Owner, Elegant Boutique (Sylhet, BD)",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=NJ&backgroundColor=ec4899",
    content: "Pronoy is a lifesaver. We needed our clothing store's Shopify site up in two weeks and he delivered flawlessly. Very professional and easy to work with.",
  },
  {
    name: "Elena Rossi",
    handle: "Lead Designer, Milan (Italy)",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=ER&backgroundColor=8b5cf6",
    content: "Pronoy's expertise in Tailwind CSS and React is unmatched. He took our Figma designs and converted them into a pixel-perfect, responsive web app in record time.",
  },
  {
    name: "Tanvir Ahmed",
    handle: "CTO, NextGen IT (Chittagong, BD)",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=TA&backgroundColor=0ea5e9",
    content: "Great experience working with Pronoy. He fixed the bugs in our existing React project and optimized the load time significantly. Highly recommended for complex projects.",
  },
  {
    name: "Marcus Berg",
    handle: "Agency Owner, Stockholm (Sweden)",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=MB&backgroundColor=f43f5e",
    content: "I hired Pronoy for a custom WordPress site. He understood the requirements perfectly and delivered a blazing fast, SEO-friendly website that our client loved.",
  },
  {
    name: "David Wilson",
    handle: "Startup Founder, Sydney (Australia)",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=DW&backgroundColor=14b8a6",
    content: "Fast turnaround, extremely clean codebase, and he actually cares about the final product. Pronoy is a rare talent when it comes to modern web development.",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div
    className="glass-card p-5 min-w-[300px] max-w-[350px] mx-3"
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
      />
      <div>
        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
        <p className="text-muted-foreground text-xs">{testimonial.handle}</p>
      </div>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">
      "{testimonial.content}"
    </p>
  </motion.div>
);

const TestimonialsSection = () => {
  // Duplicate testimonials for infinite scroll effect
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.reverse(), ...testimonials.reverse()];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 animated-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">
            Client <span className="text-primary text-glow">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What people say about working with me
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="marquee-container mb-6 overflow-hidden">
        <div className="flex animate-marquee-left">
          {row1.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="marquee-container overflow-hidden">
        <div className="flex animate-marquee-right">
          {row2.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
