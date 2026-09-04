import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../../data/projects';
import { useTheme } from '../../context/ThemeContext';

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const { setCursorText, setCursorVariant } = useTheme();

  const categories = ['All', 'UI/UX', 'WebGL/3D', 'React', 'Branding'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const handleCardMouseEnter = () => {
    setCursorVariant('hover');
    setCursorText('VIEW');
  };

  const handleCardMouseLeave = () => {
    setCursorVariant('default');
    setCursorText('');
  };

  return (
    <section id="work" className="relative py-28 bg-dark-950/90 overflow-hidden">
      {/* Background Subtle Flare */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-icy-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-icy-400 uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight">
              Featured Case Studies<span className="text-icy-500">.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0 glass-panel p-1.5 rounded-full border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-icy-500 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-icy-500 to-violet-600 text-dark-950 font-bold shadow-cyan-glow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                  className="group cursor-pointer h-full flex flex-col justify-between border-white/10 hover:border-icy-500/40 transition-all duration-300"
                >
                  {/* Card Visual Header */}
                  <div className={`w-full h-52 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/10 flex items-center justify-center relative overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-500`}>
                    <div className="absolute inset-0 bg-dark-950/40 group-hover:bg-transparent transition-colors duration-300" />
                    <span className="font-display font-black text-4xl text-white/10 uppercase tracking-widest group-hover:text-white/20 transition-colors">
                      {project.category}
                    </span>

                    {/* Quick Expand Button Hover Badge */}
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full glass-panel border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-4 h-4 text-icy-400" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                      <span className="text-icy-400 font-semibold">{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-100 group-hover:text-icy-400 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm line-clamp-2 mb-6">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Card Footer Deliverable Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/10">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
