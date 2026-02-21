import fashionShopImg from "@/assets/fashionshop.png";
import rollingRepairImg from "@/assets/rolling-repair.png";
import travelBookingImg from "@/assets/travel-booking.png";
import portfolioImg from "@/assets/pronoy-hero.jpg";
import beeImg from "@/assets/bee.svg";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  live: string;
  github: string | null;
  images: string[];
  features: string[];
  challenges: string[];
  duration: string;
  role: string;
  category: string;          // old (kept for safety)
  categories: string[];      // NEW (for multi filter)
}

export const projects: Project[] = [

  // =============================
  // React + Public
  // =============================

  {
    id: "fashion-shop",
    title: "FashionShop E-commerce",
    shortDescription:
      "Developed a responsive e-commerce frontend with dark-mode UI, interactive components, and reusable React components.",
    fullDescription:
      "A modern e-commerce platform built with React.js featuring a sleek dark-mode UI. The application includes interactive components like image sliders, countdown timers, and advanced product filters.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
    live: "https://react-fashion-shop-three.vercel.app/",
    github: "https://github.com/Pronoysaha90",
    images: [fashionShopImg, fashionShopImg],
    features: [
      "Dark mode UI with smooth theme switching",
      "Interactive product slider",
      "Advanced filtering system",
      "Responsive design",
    ],
    challenges: [
      "Smooth animation performance",
      "Reusable component structure",
    ],
    duration: "2 months",
    role: "Frontend Developer",
    category: "E-commerce",
    categories: ["react", "public", "all"],
  },

  {
    id: "portfolio-v1",
    title: "Personal Portfolio v1",
    shortDescription:
      "My first personal portfolio showcasing projects and skills.",
    fullDescription:
      "A minimalist portfolio built using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    live: "#",
    github: "https://github.com/Pronoysaha90",
    images: [portfolioImg, portfolioImg],
    features: [
      "Smooth scrolling",
      "Project showcase",
      "Responsive layout",
    ],
    challenges: [
      "Animation timing",
      "Cross-browser support",
    ],
    duration: "3 weeks",
    role: "Frontend Developer",
    category: "Portfolio",
    categories: ["react", "public", "all"],
  },

  // =============================
  // WordPress + Public
  // =============================

  {
    id: "rolling-repair",
    title: "Rolling Repair Website",
    shortDescription:
      "Developed a responsive business website with SEO optimization.",
    fullDescription:
      "A professional service website built with WordPress and Elementor Pro focusing on performance and SEO.",
    tech: ["WordPress", "Elementor", "CSS", "JavaScript"],
    live: "https://rollingrepair.org",
    github: null,
    images: [rollingRepairImg, rollingRepairImg],
    features: [
      "SEO optimized pages",
      "Service showcase",
      "Contact forms",
      "Mobile responsive",
    ],
    challenges: [
      "Page speed optimization",
      "Custom Elementor layouts",
    ],
    duration: "1 month",
    role: "Web Developer",
    category: "Business",
    categories: ["wordpress", "public", "all"],
  },

  {
    id: "travel-booking",
    title: "Travel Booking Website",
    shortDescription:
      "Built a modern travel booking website with optimized performance.",
    fullDescription:
      "A travel platform showcasing destinations, tour packages, and booking forms.",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    live: "https://bluegemtravels.com/",
    github: null,
    images: [travelBookingImg, travelBookingImg],
    features: [
      "Destination gallery",
      "Tour packages",
      "Booking forms",
      "Testimonials",
    ],
    challenges: [
      "Handling large images",
      "UX optimization",
    ],
    duration: "6 weeks",
    role: "Web Developer",
    category: "Travel",
    categories: ["wordpress", "public", "all"],
  },

  // =============================
  // Software / Tools
  // =============================

  {
    id: "task-manager",
    title: "Task Manager App",
    shortDescription:
      "A productivity app with drag-and-drop task management.",
    fullDescription:
      "Task management app built with React featuring priorities and categories.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/Pronoysaha90",
    images: [beeImg, beeImg],
    features: [
      "Drag & drop tasks",
      "Priority labels",
      "Dark mode",
    ],
    challenges: [
      "State management",
      "Drag & drop UX",
    ],
    duration: "1 month",
    role: "Frontend Developer",
    category: "Productivity",
    categories: ["software-tools", "react", "public", "all"],
  },

  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription:
      "Real-time weather app with forecasts and geolocation.",
    fullDescription:
      "Weather dashboard using OpenWeather API with animated UI.",
    tech: ["React", "API", "CSS"],
    live: "#",
    github: "https://github.com/Pronoysaha90",
    images: [beeImg, beeImg],
    features: [
      "Live weather data",
      "5-day forecast",
      "City search",
    ],
    challenges: [
      "API limits",
      "Data accuracy",
    ],
    duration: "2 weeks",
    role: "Frontend Developer",
    category: "Utility",
    categories: ["software-tools", "react", "public", "all"],
  },
    {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription:
      "Real-time weather app with forecasts and geolocation.",
    fullDescription:
      "Weather dashboard using OpenWeather API with animated UI.",
    tech: ["React", "API", "CSS"],
    live: "#",
    github: "https://github.com/Pronoysaha90",
    images: [beeImg, beeImg],
    features: [
      "Live weather data",
      "5-day forecast",
      "City search",
    ],
    challenges: [
      "API limits",
      "Data accuracy",
    ],
    duration: "2 weeks",
    role: "Frontend Developer",
    category: "Utility",
    categories: ["software-tools", "react", "public", "all"],
  },

];
