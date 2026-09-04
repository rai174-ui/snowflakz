import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ShieldCheck, MapPin, HeartPulse, Sparkles } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

export default function ValuePillarsSection() {
  const pillars = [
    {
      icon: Flame,
      title: 'Delightful Taste',
      tagline: 'Hand-Roasted & Seasoned to Perfection',
      description: 'Hand-roasted and perfectly seasoned, our Makhana delivers a rich, clean crunch that is absolutely irresistible.'
    },
    {
      icon: ShieldCheck,
      title: 'Chemical Free',
      tagline: 'Zero Pesticides & Preservatives',
      description: 'Our Makhana is completely free from chemicals, synthetic flavor enhancers, pesticides, or harmful preservatives.'
    },
    {
      icon: MapPin,
      title: 'Traceable to Source',
      tagline: 'Direct Farm-to-Bowl Transparency',
      description: 'Sourced from trusted farmers in Bihar, India. Our Makhana is fully traceable to origin — no secrets, just honesty.'
    },
    {
      icon: HeartPulse,
      title: 'Fitness & Protein',
      tagline: 'Guilt-Free Healthy Snacking',
      description: 'Packed with plant-based protein, dietary fiber, magnesium, and zero trans-fat. A bowl of makhana for every craving!'
    }
  ];

  return (
    <section id="why-makhana" className="relative py-28 bg-dark-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-400/30 text-xs font-mono font-bold text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>THE SNOWFLAKZ DIFFERENCE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight mb-4">
            Roasted to Perfection Healthy Makhana for Every Craving<span className="text-amber-400">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Why settle for oily potato chips or heavy fried snacks? SNOWFLAKZ Makhana combines gourmet flavor profiles with wholesome nutritional benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <GlassCard key={idx} className="border-white/10 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-5 group-hover:bg-amber-400 group-hover:text-slate-950 text-amber-400 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider block mb-1">
                    {p.tagline}
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-100 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
