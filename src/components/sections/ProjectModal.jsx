import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Tag, Calendar, Building } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
          />

          {/* Modal Content Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative z-10 w-full max-w-3xl glass-panel rounded-3xl border border-white/15 p-6 sm:p-8 md:p-10 bg-dark-900 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header & Close Button */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono font-semibold tracking-wider text-icy-400 uppercase">
                  {project.category} • Case Study
                </span>
                <h2 id="modal-title" className="font-display font-bold text-2xl sm:text-4xl text-slate-100 mt-1">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-1">
                  {project.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 text-slate-400 hover:text-white glass-panel rounded-full focus:outline-none focus:ring-2 focus:ring-icy-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Gradient Visual Header */}
            <div className={`w-full h-48 sm:h-64 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 flex items-center justify-center p-6 mb-8 relative overflow-hidden`}>
              <div className="text-center z-10">
                <span className="text-5xl sm:text-7xl font-display font-extrabold text-white/10 uppercase tracking-widest block select-none">
                  {project.category}
                </span>
                <span className="text-slate-200 font-mono text-sm mt-2 block">
                  Interactive Live Showcase Available
                </span>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-icy-400" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Client</span>
                  <span className="text-sm font-semibold text-slate-200">{project.client}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-icy-400" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Year</span>
                  <span className="text-sm font-semibold text-slate-200">{project.year}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-icy-400" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Category</span>
                  <span className="text-sm font-semibold text-slate-200">{project.category}</span>
                </div>
              </div>
            </div>

            {/* Deep Description */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-lg text-slate-200 mb-2">Overview & Scope</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="mb-8">
                <h3 className="font-display font-semibold text-lg text-slate-200 mb-3">Impact & Key Metrics</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="glass-panel p-4 rounded-xl border border-white/5 text-center">
                      <span className="font-display font-bold text-2xl text-icy-400 block">{metric.value}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deliverables */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-lg text-slate-200 mb-3">Key Deliverables</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-icy-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-slate-300 border border-white/10">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                Close Case Study
              </button>
              <MagneticButton
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                <span>Explore Prototype</span>
                <ExternalLink className="w-4 h-4" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
