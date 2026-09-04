import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Flame, Shield, CheckCircle2 } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

export default function SourcingSection() {
  const steps = [
    {
      step: '01',
      title: 'Wetland Harvesting',
      description: 'Lotus seed pods harvested by traditional farmers in pristine freshwater wetlands.',
      icon: Sun,
    },
    {
      step: '02',
      title: 'Sun Drying & Graded Selection',
      description: 'Seeds are sun-dried and meticulously sorted for uniform size and pristine white quality.',
      icon: Shield,
    },
    {
      step: '03',
      title: 'High-Temperature Popping',
      description: 'Heated in cast-iron pans and hand-popped to yield extra light, fluffy makhana kernels.',
      icon: Flame,
    },
    {
      step: '04',
      title: 'Slow Olive-Oil Roasting',
      description: 'Tossed in pure olive oil and tossed with natural herbs & spices for 100% guilt-free crunch.',
      icon: Sparkles,
    }
  ];

  return (
    <section id="sourcing" className="relative py-28 bg-dark-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>FARM TO BOWL TRANSPARENCY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight mb-6">
              Harvested with Care, Roasted to Perfection<span className="text-amber-400">.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Our makhana seeds travel directly from Bihar’s natural lotus ponds to your snacking bowl—free from pesticides, artificial colors, or chemical preservatives.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              We empower local farmer cooperatives by purchasing directly at fair trade prices, ensuring honest sourcing and unmatched quality control.
            </p>
          </div>

          {/* Sourcing Visual Showcase */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel p-3 rounded-2xl border border-white/10 overflow-hidden group bg-slate-900">
              <img
                src="/assets/1718795813makhana-harvesrtwebp.jpg"
                alt="Makhana Harvest"
                className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
              />
              <span className="text-xs font-mono font-bold text-amber-400 block mt-3">
                01. Wetland Harvesting
              </span>
            </div>

            <div className="glass-panel p-3 rounded-2xl border border-white/10 overflow-hidden group bg-slate-900">
              <img
                src="/assets/factory.webp"
                alt="Makhana Roasting Facility"
                className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = '/assets/12-1-scaled.jpg'; }}
              />
              <span className="text-xs font-mono font-bold text-amber-400 block mt-3">
                02. Clean Roasting Facility
              </span>
            </div>
          </div>
        </div>

        {/* Process Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <GlassCard key={s.step} className="border-white/10 relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-display font-black text-amber-400/20">{s.step}</span>
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="font-display font-bold text-lg text-slate-100 mb-2">
                  {s.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {s.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
