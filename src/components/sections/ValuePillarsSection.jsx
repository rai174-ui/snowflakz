import React from 'react';
import { Flame, ShieldCheck, MapPin, HeartPulse } from 'lucide-react';

export default function ValuePillarsSection() {
  const pillars = [
    {
      icon: Flame,
      title: 'Delightful Taste',
      tagline: 'Hand-Roasted & Seasoned to Perfection',
      description: 'Hand-roasted and perfectly seasoned, our Makhana delivers taste that’s rich, clean, and absolutely irresistible.'
    },
    {
      icon: ShieldCheck,
      title: 'Chemical Free',
      tagline: 'Zero Pesticides or Preservatives',
      description: 'Our Makhana is completely free from chemicals, pesticides, or harmful preservatives.'
    },
    {
      icon: MapPin,
      title: 'Traceable to Source',
      tagline: 'Direct Farm Transparency',
      description: 'Sourced from trusted farmers, our Makhana is fully traceable to its origin — no secrets, just honesty.'
    },
    {
      icon: HeartPulse,
      title: 'Healthy Snacking',
      tagline: 'High Protein & Fiber Rich',
      description: 'A bowl of Makhana for every craving. Packed with natural plant protein, low calories, and zero trans fat.'
    }
  ];

  return (
    <section id="why-makhana" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2 font-sans">
            WHY CHOOSE SNOWFLAKZ FOODS
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 mb-4">
            Roasted to Perfection Healthy Makhana for Every Craving
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Clean, light, and delicious snacking crafted by Snowflakz Foods for health-conscious lovers across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="plain-card p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-1">
                    {p.tagline}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
