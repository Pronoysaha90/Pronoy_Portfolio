import { motion } from "framer-motion";
import { Folder, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import SectionLabel from "./ui/SectionLabel";

const ProjectsSection = () => {
  // Show first 6 projects on home page
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-14 md:py-20 relative font-sans">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-10 md:mb-12">
          <SectionLabel index="05">Projects</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-fg font-serif leading-tight">
              Featured <span className="italic">Projects</span>
            </h2>
            <p className="mt-3 text-muted text-sm md:text-base max-w-xl">
              A selection of my recent full-stack applications and e-commerce platforms
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10 md:mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/projects/${project.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="rounded-2xl border border-line bg-surface/40 overflow-hidden h-full flex flex-col group cursor-pointer hover:border-fg/40 transition-colors"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="relative h-60 overflow-hidden bg-surface-2">
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <Folder className="w-16 h-16 text-muted/20" />
                    </div>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-full border border-line bg-bg/80 text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-medium text-fg group-hover:text-fg transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted line-clamp-2 mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="mt-auto pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-muted group-hover:text-fg transition-colors">
                      <span>View details</span>
                      <span>↗</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 rounded-full border border-line bg-surface/60 px-8 py-3.5 text-sm font-medium text-fg backdrop-blur-sm transition-all hover:border-fg hover:bg-surface active:scale-95 shadow-lg shadow-black/20"
          >
            <span>View all projects</span>
            <span className="font-mono text-xs text-muted group-hover:text-fg">({projects.length})</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
