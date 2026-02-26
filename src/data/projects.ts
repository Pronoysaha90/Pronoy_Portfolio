import fashionShopImg from "@/assets/fashionShop.jpg";
import rollingRepairImg from "@/assets/rolling-repair.png";
import travelBookingImg from "@/assets/blueGem.png";
import webGraphiconImg from "@/assets/webGraphiea.png";
import foodhunter from "@/assets/foodhunter.jpg";
import pizzaCraft from "@/assets/pizzaCraft.png";
import travelnesthub from "@/assets/travelnesthub.png";
import hamptonswealth from "@/assets/hamptonswealth.png";
import shopamornaturals from "@/assets/shopamornaturals.png";
import thestrongpoint from "@/assets/thestrongpoint.png";
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
  category: string; // old (kept for safety)
  categories: string[]; // NEW (for multi filter)
}

export const projects: Project[] = [
  // =============================
  // React + Public
  // =============================

  {
    id: "food",
    title: "Food Website",
    shortDescription:
      "A modern food ordering platform built with React.js and Tailwind CSS, featuring dynamic filtering and an interactive cart for a seamless user experience.",
    fullDescription:
      "This project is a modern and professionally designed food ordering platform developed using React.js and Tailwind CSS. The website features a clean and intuitive layout to provide a smooth and engaging user experience. Each feature, including dynamic food filtering and an interactive cart system, is clearly presented to ensure seamless navigation.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Radix UI"],
    live: "https://food-hunter.vercel.app/",
    github: "https://github.com/Pronoysaha90/FoodHunter",
    images: [foodhunter, foodhunter],
    features: ["Hero Section", "foods Categories", "Food Order Process"],
    challenges: ["Handling foods images & categories", "UX optimization"],
    duration: "1 month",
    role: "Frontend Developer",
    category: "Food-Ecommerce",
    categories: ["react", "public", "all"],
  },

  {
    id: "WebGraphicon Business Website",
    title: "WebGraphicon Business Website",
    shortDescription:
      "A clean, responsive business website built with modern web technologies. It showcases services, features, and key information in a professional layout with smooth navigation and modern UI.",
    fullDescription:
      "The website is designed with a clean, professional layout and smooth animations to create a strong user experience.It includes all essential business pages such as About, Services, Projects, Blog, and Contact. Each section is organized on separate pages to clearly showcase company information, service details, completed projects, blog content, and contact options. The design is fully responsive and optimized for performance across all devices.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    live: "https://web-graphicon-business.vercel.app/",
    github: "https://github.com/Pronoysaha90/WebGraphicon_Business",
    images: [webGraphiconImg, webGraphiconImg],
    features: ["Smooth scrolling", "Project showcase", "Responsive layout"],
    challenges: ["Animation timing", "Cross-browser support"],
    duration: "3 weeks",
    role: "Frontend Developer",
    category: "Business",
    categories: ["react", "public", "all"],
  },

  {
    id: "PizzaCraft Food Website",
    title: "PizzaCraft Food Website",
    shortDescription:
      "A vibrant, conversion-focused landing page for a premium pizza delivery service featuring a dynamic menu , integrated promotional offers , and customer testimonials to provide a seamless, responsive ordering experience.",
    fullDescription:
      "This project is a professional web application built for Pizza Craft, a brand focused on high-quality, handcrafted pizzas. The site uses a clean landing page with clear 'Order Now' buttons to help customers find what they need quickly. It includes a menu that displays popular items like the Classic Margherita and BBQ Chicken, along with prices and ratings. To drive sales, I integrated a special offers section where users can find discount codes like FLASH30 for 30% off. The site also features a testimonial section to build trust and a detailed footer with store hours and contact information. Every part of the layout is optimized for speed and clarity to reflect the brand's fast, 30-minute delivery guarantee.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
    live: "https://pizza-craft-two.vercel.app/",
    github: "https://github.com/Pronoysaha90/PizzaCraft",
    images: [pizzaCraft, pizzaCraft],
    features: [
      "Interactive product Images",
      "Advanced filtering system",
      "Responsive design",
    ],
    challenges: [
      "Smooth animation performance",
      "Reusable component structure",
    ],
    duration: "3 Weeks",
    role: "Frontend Developer",
    category: "Food-Ecommerce",
    categories: ["react", "public", "all"],
  },

  {
    id: "fashion-shop",
    title: "FashionShop E-commerce",
    shortDescription:
      "Developed a responsive e-commerce frontend with dark-mode UI, interactive components, and reusable React components.",
    fullDescription:
      "A modern e-commerce platform built with React.js featuring a sleek dark-mode UI. The application includes interactive components like image sliders, countdown timers, and advanced product filters.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
    live: "https://react-fashion-shop-three.vercel.app/",
    github: "https://github.com/Pronoysaha90/React_FashionShop",
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
    duration: "1 month",
    role: "Frontend Developer",
    category: "E-commerce",
    categories: ["react", "public", "all"],
  },

  // =============================
  // WordPress + Public
  // =============================

  {
    id: "rolling-repair",
    title: "Rolling Repair Website",
    shortDescription:
      "A modern and user-friendly website built for an automotive repair company. Designed with a clean landing page and separate service pages, including integrated online booking via Square Appointments for easy service scheduling.",
    fullDescription:
      "This project is a modern and professionally designed website developed for an automotive repair company. The client required a clean landing page along with a dedicated service page featuring Suspension Repairs, Brake Repairs, Engine Repair, and Spark Plugs & Coils.The website was designed with a simple and modern layout to ensure a smooth and hassle-free experience for customers. Each service is clearly presented on a separate page for better clarity and navigation. To streamline the booking process, Square Appointments was integrated, allowing customers to easily schedule their services online.",
    tech: ["WordPress", "Elementor", "CSS", "JavaScript"],
    live: "https://rollingrepair.org",
    github: null,
    images: [rollingRepairImg, rollingRepairImg],
    features: [
      "SEO optimized pages",
      "Service showcase",
      "Booking Service",
      "Mobile responsive",
    ],
    challenges: ["Page speed optimization", "Custom Elementor layouts"],
    duration: "2 Weeks",
    role: "Web Developer",
    category: "Service",
    categories: ["wordpress", "public", "all"],
  },

  {
    id: "travel affiliate website",
    title: "Travel Affiliate Website",
    shortDescription:
      "A modern and user-friendly travel website built for BlueGem Travels. Designed with organized package, hotel, and restaurant service pages, including an integrated booking system via WPForms for seamless service reservations.",
    fullDescription:
      "This project is a modern and professionally designed WordPress website developed for BlueGem Travels, a travel agency offering customized hotel, restaurant, and tour package services.The website features a clean and intuitive layout to provide a smooth and engaging user experience. Each service, including individual hotels, restaurants, and tour packages, is clearly presented on dedicated pages for better clarity and navigation.",
    tech: ["WordPress", "Elementor", "WPFroms", "CSS", "JavaScript"],
    live: "https://travelnesthub.com/",
    github: null,
    images: [travelBookingImg, travelBookingImg],
    features: [
      "Destination gallery",
      "Tour packages",
      "Booking forms",
      "Testimonials",
    ],
    challenges: ["Handling large images", "UX optimization"],
    duration: "3 weeks",
    role: "Web Developer",
    category: "Travel",
    categories: ["wordpress", "public", "all"],
  },

  {
    id: "travel-booking",
    title: "Travel Booking Website",
    shortDescription:
      "TravelNestHub is a professional WordPress-based travel affiliate platform integrated with Travelpayouts API to offer seamless booking for international flights, airport transfers, and global travel deals.",
    fullDescription:
      "TravelNestHub is a professionally designed travel booking engine built on WordPress, leveraging the power of the Travelpayouts API to provide users with a seamless search and booking experience. The platform specializes in comparing international flights, arranging airport transfers, and curating last-minute travel deals to ensure affordability for global travelers. As the developer, I integrated real-time affiliate widgets and search forms into a fully responsive UI, ensuring a smooth user journey across all devices. By combining clean aesthetics with optimized monetization strategies, I created a high-performing travel hub that bridges the gap between travelers and world-class service providers.",
    tech: ["WordPress", "Elementor", "travelpayouts API", "Gtranslate"],
    live: "https://travelnesthub.com/",
    github: null,
    images: [travelnesthub, travelnesthub],
    features: [
      "Meta-Search Flight Engine",
      "Dedicated Airport Transfer Booking",
      "Last-Minute Deals",
    ],
    challenges: [
      "API Integration & Synchronization",
      "Monetization Optimization",
    ],
    duration: "3 weeks",
    role: "Web Developer",
    category: "Travel",
    categories: ["wordpress", "public", "all"],
  },

    {
    id: "hamptonswealth",
    title: "Corporate Business Website",
    shortDescription:
      "Hamptons Wealth is a high-end corporate WordPress platform designed for financial consultancy, specializing in wealth management, SMSF, and smart property investment strategies.",
    fullDescription:
      "Hamptons Wealth is a high-end financial services website designed to help users secure their financial future and build tax-efficient wealth. Developed using WordPress, this platform is specifically optimized for the Australian market, presenting complex financial topics such as Self-Managed Super Funds (SMSF) and property investment in a clear, professional, and accessible manner. The website establishes a strong corporate identity while providing a seamless consultation booking facility to effectively capture and convert potential leads.",
    
    tech: ["WordPress", "Elementor", "Contact Form 7", "JavaScript"],
    live: "https://hamptonswealth.com.au/",
    github: null,
    images: [hamptonswealth, hamptonswealth],
    features: [
      "Service-Oriented Architecture",
      "Consultation Booking System",
      "Educational Content Hub",
    ],
    challenges: [
      "Content Hierarchy & Clarity",
      "Establishing Trust",
    ],
    duration: "2 weeks",
    role: "Web Developer",
    category: "Business",
    categories: ["wordpress", "public", "all"],
  },

    {
    id: "shopamornaturals",
    title: "Natural Beauty Products Website",
    shortDescription:
      "Amor Naturals is a premium E-commerce platform built on WordPress, offering a curated collection of handcrafted, natural skincare and grooming products for both men and women.",
    fullDescription:
      "Amor Naturals is a sophisticated Direct-to-Consumer (D2C) E-commerce website dedicated to natural beauty and personal care. Developed using WordPress and WooCommerce, the platform provides a seamless shopping experience for high-quality organic products, including body butters, hair growth oils, and specialized men’s grooming essentials. The website is designed with a clean, elegant aesthetic that reflects the brand's commitment to purity and wellness, featuring a user-friendly interface that guides customers from product discovery to a secure checkout.",
    
    tech: ["WordPress", "Elementor", "WooCommerce", "WPForms"],
    live: "https://shopamornaturals.com/",
    github: null,
    images: [shopamornaturals, shopamornaturals],
    features: [
      "Complete E-commerce Ecosystem",
      "Product Variation & Bundling",
      "Customer Engagement Tools",
    ],
    challenges: [
      "Balancing Visual Quality with Performance",
      "Streamlining the User Journey",
    ],
    duration: "1 weeks",
    role: "Web Developer",
    category: "E-commerce",
    categories: ["wordpress", "public", "all"],
  },
  
      {
    id: "thestrongpoint",
    title: "Lifestyle Community Portal",
    shortDescription:
      "The Strongpoint is a dynamic community-driven membership platform designed to empower individuals through personal growth, disciplined living, and exclusive leadership resources.",
    fullDescription:
      "The Strongpoint is a comprehensive Lifestyle and Personal Development portal built to foster a resilient global community. Developed with a focus on high-impact engagement, the platform offers a curated 'Homestead' membership experience where users access exclusive podcasts, blogs, and leadership tools. The website features a multi-tiered membership system (The Forge, The Crucible), providing tailored paths for individuals seeking accountability, mentorship, and a structured environment for self-improvement. It combines a professional corporate aesthetic with a rugged, community-focused feel to inspire action and long-term growth.",
    
    tech: ["WordPress", "Elementor", "WooCommerce", "WPForms"],
    live: "https://thestrongpoint.com/",
    github: null,
    images: [thestrongpoint, thestrongpoint],
    features: [
      "Multi-Tiered Membership System",
      "Interactive Community (The Homestead)",
      "Integrated E-commerce & Newsletter",
    ],
    challenges: [
      "Content Architecture",
      "Membership Workflow",
    ],
    duration: "2 weeks",
    role: "Web Developer",
    category: "Lifestyle & Leadership",
    categories: ["wordpress", "public", "all"],
  },

  // =============================
  // Software / Tools
  // =============================

  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription: "Real-time weather app with forecasts and geolocation.",
    fullDescription:
      "Weather dashboard using OpenWeather API with animated UI.",
    tech: ["React", "API", "CSS"],
    live: "#",
    github: "https://github.com/Pronoysaha90",
    images: [beeImg, beeImg],
    features: ["Live weather data", "5-day forecast", "City search"],
    challenges: ["API limits", "Data accuracy"],
    duration: "2 weeks",
    role: "Frontend Developer",
    category: "Utility",
    categories: ["software-tools", "react", "public", "all"],
  },
];
