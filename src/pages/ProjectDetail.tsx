import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Folder, CheckCircle2, AlertCircle } from "lucide-react";
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
            {/* Left side - Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Main Image */}
              <div className="relative aspect-video glass-card overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                  <Folder className="w-24 h-24 text-primary/20" />
                </div>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-3 gap-4">
                {project.images.slice(0, 3).map((image, index) => (
                  <motion.div
                    key={index}
                    className="aspect-video glass-card overflow-hidden cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                      <Folder className="w-8 h-8 text-primary/20" />
                    </div>
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

            {/* Right side - Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {project.title}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">Duration</span>
                  </div>
                  <p className="text-foreground font-semibold">{project.duration}</p>
                </div>
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">Role</span>
                  </div>
                  <p className="text-foreground font-semibold">{project.role}</p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    🛠️
                  </span>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium bg-secondary/50 text-foreground rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </span>
                  Key Features
                </h3>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-primary/10"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                  </span>
                  Challenges Overcome
                </h3>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/20"
                    >
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* More Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">
              More <span className="text-primary">Projects</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((p, index) => (
                  <Link key={p.id} to={`/projects/${p.id}`}>
                    <motion.div
                      className="glass-card-hover p-4 group cursor-pointer"
                      whileHover={{ y: -5, scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <div className="aspect-video rounded-lg bg-secondary/50 mb-4 overflow-hidden flex items-center justify-center">
                        <Folder className="w-12 h-12 text-primary/30" />
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {p.shortDescription}
                      </p>
                    </motion.div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
