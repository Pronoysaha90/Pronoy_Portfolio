import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  // Show first 4 projects on home page
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/projects/${project.id}`}>
                <motion.div
                  className="glass-card-hover overflow-hidden h-full flex flex-col group cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Fallback icon (kept) */}
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <Folder className="w-16 h-16 text-primary/20" />
                    </div>

                    {/* Image */}
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover relative z-10"
                    />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover overlay (UNCHANGED) */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 z-20"
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
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center">
          <Link to="/projects">
            <motion.button
              className="btn-glass flex items-center gap-3 px-8 py-4 text-lg group"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:text-primary" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
