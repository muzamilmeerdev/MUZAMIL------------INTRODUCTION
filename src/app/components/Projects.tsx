import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Folder, ExternalLink, ShoppingCart, Cloud, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'Modern online shopping platform with cart functionality and product catalog',
    icon: ShoppingCart,
    color: 'from-purple-500 to-pink-500',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://muzamilmeerdev.github.io/e-commerce/',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather information app with location-based forecasts',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    tags: ['JavaScript', 'API', 'Web'],
    link: 'https://muzamilmeerdev.github.io/weather-app/',
  },
  {
    title: 'GitHub Profile',
    description: 'Explore my open-source projects and contributions on GitHub',
    icon: Github,
    color: 'from-green-500 to-emerald-500',
    tags: ['Open Source', 'Projects', 'Code'],
    link: 'https://github.com/muzamilmeerdev',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500" />
              <Folder className="w-6 h-6 text-green-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: any) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-500/30 shadow-lg hover:shadow-[0_8px_32px_0_rgba(34,197,94,0.2)] transition-all duration-300 overflow-hidden"
    >
      {/* Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Button */}
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 font-semibold hover:gap-3 transition-all duration-300">
          View Project
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}