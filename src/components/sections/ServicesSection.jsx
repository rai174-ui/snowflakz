import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Code2, Sparkles, Palette, ChevronDown, CheckCircle } from 'lucide-react';
import { servicesData, processStepsData } from '../../data/services';
import GlassCard from '../ui/GlassCard';

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState('01');

  const iconMap = {
    Layout,
    Code2,
    Sparkles,
    Palette,
  };

  return (
    <section id="services" className="relative py-28 bg-dark-900 overflow-hidden border-t border-white/5">
      {/* Background Flare */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-icy-400 uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Capabilities & Workflow</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight mb-4">
            Services & Architectural Process<span className="text-icy-500">.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We provide full-spectrum digital product engineering—from high-concept design system tokens to performance front-end development and 3D WebGL interactions.
          </p>
        </div>

        {/* Services Accordion List */}
        <div className="space-y-4 mb-24">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            const isExpanded = expandedId === service.id;

            return (
              <GlassCard
                key={service.id}
                hoverTilt={false}
                className="border-white/10 hover:border-icy-500/30 transition-all duration-300 !p-0"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-icy-500 rounded-2xl"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 rounded-xl bg-icy-500/10 border border-icy-500/30 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-icy-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-icy-400 block mb-1">
                        TIER {service.id}
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-100">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block text-xs text-slate-400 font-mono">
                      {service.tagline}
                    </span>
                    <div className={`p-2 rounded-full glass-panel border border-white/10 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-icy-400' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-white/10 px-6 sm:px-8 pb-8 pt-6"
                    >
                      <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-3xl leading-relaxed">
                        {service.description}
                      </p>

                      <h4 className="text-xs font-mono font-semibold text-icy-400 uppercase tracking-wider mb-4">
                        Core Capabilities & Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {service.capabilities.map((cap, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 glass-panel p-3 rounded-xl border border-white/5">
                            <CheckCircle className="w-4 h-4 text-icy-400 shrink-0" />
                            <span className="text-xs sm:text-sm text-slate-200">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>

        {/* Process Steps Timeline */}
        <div>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-100 mb-10 text-center">
            Methodology & Workflow Stepper
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStepsData.map((p, idx) => (
              <GlassCard key={p.step} className="border-white/10 relative">
                <div className="text-4xl font-display font-black text-white/10 mb-4">
                  {p.step}
                </div>
                <h4 className="font-display font-bold text-lg text-slate-100 mb-2">
                  {p.name}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {p.description}
                </p>
                {idx < processStepsData.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-icy-500/50 to-transparent z-20" />
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
