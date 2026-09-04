import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Cpu, Flame, Layers } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

export default function AboutSection() {
  const principles = [
    {
      icon: Cpu,
      title: 'Performance First Architecture',
      description: 'Zero frame-drops, optimized bundle sizes (<150KB initial payload), and Lighthouse 95+ target across all viewports.'
    },
    {
      icon: Layers,
      title: 'Motion with Purpose',
      description: 'Spring-based easing physics, contextual cursor follower states, and micro-interactions that enhance spatial awareness.'
    },
    {
      icon: Shield,
      title: 'WCAG 2.1 AA Accessibility',
      description: 'Strict keyboard navigation, contrast compliance, visible focus rings, and full respect for prefers-reduced-motion.'
    },
    {
      icon: Flame,
      title: 'Crystalline Creative Flair',
      description: 'Playful WebGL shaders, frosted glass glassmorphism, and kinetic typography that leave a lasting digital footprint.'
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-dark-950 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-icy-400 uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Studio Ethos & Philosophy</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight mb-6">
              Where Creative Coding Meets Front-End Precision<span className="text-icy-500">.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Snowflakz was founded on the belief that digital products shouldn't force a trade-off between expressive creativity and lightning-fast usability.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Inspired by the unique geometry of snowflakes—where no two crystalline forms are identical—we engineer bespoke digital experiences tailored specifically to each brand's identity and user ecosystem.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <GlassCard className="text-center p-6 border-white/10">
              <span className="font-display font-black text-4xl sm:text-5xl text-icy-400 block mb-1">50+</span>
              <span className="text-xs font-mono text-slate-400 uppercase">Products Shipped</span>
            </GlassCard>
            <GlassCard className="text-center p-6 border-white/10">
              <span className="font-display font-black text-4xl sm:text-5xl text-violet-400 block mb-1">99.8%</span>
              <span className="text-xs font-mono text-slate-400 uppercase">Lighthouse Avg</span>
            </GlassCard>
            <GlassCard className="text-center p-6 border-white/10">
              <span className="font-display font-black text-4xl sm:text-5xl text-emerald-400 block mb-1">100%</span>
              <span className="text-xs font-mono text-slate-400 uppercase">WCAG AA Compliant</span>
            </GlassCard>
            <GlassCard className="text-center p-6 border-white/10">
              <span className="font-display font-black text-4xl sm:text-5xl text-amber-400 block mb-1">60FPS</span>
              <span className="text-xs font-mono text-slate-400 uppercase">Fluid Motion</span>
            </GlassCard>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <GlassCard key={idx} className="border-white/10">
                <div className="w-10 h-10 rounded-xl bg-icy-500/10 border border-icy-500/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-icy-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-100 mb-2">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {p.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
