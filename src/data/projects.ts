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
  category: string;
}

export const projects: Project[] = [
  {
    id: "fashion-shop",
    title: "FashionShop E-commerce",
    shortDescription:
      "Developed a responsive e-commerce frontend with dark-mode UI, interactive components, and reusable React components.",
    fullDescription:
      "A modern e-commerce platform built with React.js featuring a sleek dark-mode UI. The application includes interactive components like image sliders, countdown timers, and advanced product filters. Built with a focus on reusability and scalability, the component architecture allows for easy maintenance and future enhancements.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
    live: "https://react-fashion-shop-three.vercel.app/",
    github: "https://github.com/Pronoysaha90",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "Dark mode UI with smooth theme switching",
      "Interactive product slider with auto-play",
      "Advanced filtering and sorting system",
      "Responsive design for all devices",
      "Countdown timers for flash sales",
      "Wishlist and cart functionality",
    ],
    challenges: [
      "Implementing smooth animations without affecting performance",
      "Building a scalable component architecture",
      "Optimizing images for fast loading",
    ],
    duration: "2 months",
    role: "Frontend Developer",
    category: "E-commerce",
  },
  {
    id: "rolling-repair",
    title: "Rolling Repair Website",
    shortDescription:
      "Developed a responsive financial advisory website using WordPress and Elementor with SEO optimization.",
    fullDescription:
      "A professional service website built for Rolling Repair featuring clean design and intuitive navigation. The website was developed using WordPress and Elementor Pro, focusing on SEO best practices and conversion optimization. The site includes contact forms, service showcases, and a blog section for content marketing.",
    tech: ["WordPress", "Elementor Pro", "JavaScript", "CSS3"],
    live: "https://rollingrepair.org",
    github: null,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "Custom Elementor widgets and templates",
      "SEO-optimized page structure",
      "Contact form with email integration",
      "Service showcase with pricing tables",
      "Blog section with categories",
      "Mobile-first responsive design",
    ],
    challenges: [
      "Customizing Elementor for specific design requirements",
      "Implementing advanced SEO strategies",
      "Optimizing site speed on shared hosting",
    ],
    duration: "1 month",
    role: "Web Developer",
    category: "Business",
  },
  {
    id: "travel-booking",
    title: "Travel Booking Website",
    shortDescription:
      "Built a responsive travel booking website with modern UI and optimized performance.",
    fullDescription:
      "A comprehensive travel booking platform designed to provide seamless user experience for travel enthusiasts. Built with WordPress, the site features destination showcases, tour packages, booking forms, and customer testimonials. Special attention was given to visual appeal and loading performance.",
    tech: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    live: "https://bluegemtravels.com/",
    github: null,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "Interactive destination gallery",
      "Tour package comparison",
      "Online booking system",
      "Customer review section",
      "Newsletter subscription",
      "Multi-language support ready",
    ],
    challenges: [
      "Creating engaging visual presentations",
      "Implementing booking workflow",
      "Performance optimization with heavy imagery",
    ],
    duration: "6 weeks",
    role: "Web Developer",
    category: "Travel",
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio v1",
    shortDescription:
      "Designed and developed my first personal portfolio website showcasing projects and skills.",
    fullDescription:
      "My initial personal portfolio built to showcase my development skills and projects. Features a clean, minimalist design with smooth scrolling, project showcases, and contact functionality. Built from scratch using vanilla HTML, CSS, and JavaScript to demonstrate fundamental web development skills.",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    live: "#",
    github: "https://github.com/Pronoysaha90",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "Smooth scroll navigation",
      "Animated skill bars",
      "Project carousel",
      "Contact form with validation",
      "Responsive grid layout",
    ],
    challenges: [
      "Implementing smooth animations with vanilla JS",
      "Cross-browser compatibility",
      "Creating engaging hover effects",
    ],
    duration: "3 weeks",
    role: "Full Stack Developer",
    category: "Portfolio",
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    shortDescription:
      "A productivity app for managing daily tasks with drag-and-drop functionality.",
    fullDescription:
      "A feature-rich task management application built with React. Users can create, organize, and track tasks with an intuitive drag-and-drop interface. Includes features like task priorities, due dates, categories, and progress tracking. Data persistence is handled with local storage for offline capability.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "DnD Kit"],
    live: "#",
    github: "https://github.com/Pronoysaha90",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "Drag and drop task organization",
      "Priority levels and color coding",
      "Due date reminders",
      "Category filtering",
      "Progress statistics",
      "Dark/Light theme toggle",
    ],
    challenges: [
      "Implementing smooth drag-and-drop",
      "State management for complex data",
      "Local storage synchronization",
    ],
    duration: "1 month",
    role: "Frontend Developer",
    category: "Productivity",
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    shortDescription:
      "A weather application with real-time data, forecasts, and location-based services.",
    fullDescription:
      "A comprehensive weather dashboard that provides real-time weather information, 5-day forecasts, and location-based services. Built using React and integrating with weather APIs, the app features beautiful weather animations, detailed metrics, and search functionality for any city worldwide.",
    tech: ["React.js", "OpenWeather API", "CSS3", "Axios"],
    live: "#",
    github: "https://github.com/Pronoysaha90",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "Real-time weather updates",
      "5-day weather forecast",
      "City search functionality",
      "Weather animations",
      "Temperature unit conversion",
      "Geolocation support",
    ],
    challenges: [
      "API rate limiting handling",
      "Creating weather-appropriate animations",
      "Accurate geolocation implementation",
    ],
    duration: "2 weeks",
    role: "Frontend Developer",
    category: "Utility",
  },
];
