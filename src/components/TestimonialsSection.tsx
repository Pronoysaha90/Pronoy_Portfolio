import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    handle: "@sarahj_dev",
    image: "/placeholder.svg",
    content: "Pronoy delivered an exceptional e-commerce website. His attention to detail and coding skills are outstanding!",
  },
  {
    name: "Michael Chen",
    handle: "@mchen_tech",
    image: "/placeholder.svg",
    content: "Working with Pronoy was a great experience. He understood our requirements perfectly and exceeded expectations.",
  },
  {
    name: "Emily Davis",
    handle: "@emily_designs",
    image: "/placeholder.svg",
    content: "The website Pronoy built for us is fast, responsive, and looks amazing. Highly recommend his services!",
  },
  {
    name: "David Kim",
    handle: "@davidk_web",
    image: "/placeholder.svg",
    content: "Pronoy's React and Tailwind expertise is impressive. He transformed our vision into reality flawlessly.",
  },
  {
    name: "Lisa Thompson",
    handle: "@lisa_ux",
    image: "/placeholder.svg",
    content: "Excellent communication and delivery. Pronoy is a true professional who cares about quality.",
  },
  {
    name: "Alex Rodriguez",
    handle: "@alex_codes",
    image: "/placeholder.svg",
    content: "Fast turnaround, clean code, and beautiful designs. Pronoy is my go-to developer for web projects.",
  },
  {
    name: "Jennifer Lee",
    handle: "@jennifer_dev",
    image: "/placeholder.svg",
    content: "Outstanding work on our company website. Pronoy exceeded all expectations with his creative solutions.",
  },
  {
    name: "Robert Williams",
    handle: "@rob_tech",
    image: "/placeholder.svg",
    content: "Professional, reliable, and talented. Pronoy delivered our project ahead of schedule with exceptional quality.",
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
    <section className="py-20 relative overflow-hidden">
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
