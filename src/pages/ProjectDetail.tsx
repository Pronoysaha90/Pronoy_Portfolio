import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Folder,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT – Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Main Image (NO GRADIENT) */}
              <div className="relative aspect-video glass-card overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {project.images.slice(0, 3).map((image, index) => (
                  <motion.div
                    key={index}
                    className="aspect-video glass-card overflow-hidden cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.live !== "#" && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow flex-1 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Site
                  </motion.a>
                )}

                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass flex-1 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* RIGHT – Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                  {project.category}
                </span>

                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                  {project.title}
                </h1>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="w-4 h-4" />
                    Duration
                  </div>
                  <p className="font-semibold">{project.duration}</p>
                </div>

                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <User className="w-4 h-4" />
                    Role
                  </div>
                  <p className="font-semibold">{project.role}</p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 text-sm bg-secondary/50 rounded-lg border border-primary/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Challenges</h3>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/20"
                    >
                      <AlertCircle className="w-5 h-5 text-amber-500 mt-1" />
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
