import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, Folder, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const filterCategories = [
  "all",
  "wordpress",
  "react",
  "software-tools",
  "public",
  "private",
];

const Projects = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtering logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.tech.join(" ").toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "all" ||
      project.categories?.includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-primary text-glow">Projects</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl">
              A comprehensive collection of my work, showcasing various technologies and solutions.
            </p>
          </motion.div>

          {/* ================= SEARCH ================= */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Search Box */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by project or technology..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm capitalize transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-lg"
                      : "bg-secondary text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {cat.replace("-", "/")}
                </button>
              ))}
            </div>
          </div>

          {/* ================= PROJECT GRID ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  layout
                >
                  <Link to={`/projects/${project.id}`}>
                    <motion.div
                      className="glass-card-hover overflow-hidden h-full flex flex-col group cursor-pointer"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image */}
                      <div className="relative h-60 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center z-0">
                          <Folder className="w-16 h-16 text-primary/20" />
                        </div>

                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover relative z-10"
                        />

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 z-20">
                          <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 backdrop-blur-sm">
                            {project.category}
                          </span>
                        </div>

                        {/* Hover Overlay (UNCHANGED) */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4 z-20"
                        >
                          <div className="flex gap-3">
                            {project.live !== "#" && (
                              <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="w-10 h-10 glass-card flex items-center justify-center text-primary hover:bg-primary/20"
                                whileHover={{ scale: 1.1 }}
                              >
                                <ExternalLink className="w-5 h-5" />
                              </motion.a>
                            )}

                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="w-10 h-10 glass-card flex items-center justify-center text-primary hover:bg-primary/20"
                                whileHover={{ scale: 1.1 }}
                              >
                                <Github className="w-5 h-5" />
                              </motion.a>
                            )}
                          </div>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2">
                          {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center mt-12 text-muted-foreground">
              No projects found.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
