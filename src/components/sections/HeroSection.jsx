import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, CheckCircle2, Flame, ShieldCheck, Tag } from 'lucide-react';
import MakhanaParticleCanvas from './MakhanaParticleCanvas';

export default function HeroSection() {
  const highlights = [
    '100% Hand Roasted (No Trans Fat)',
    'High Protein & Fiber Rich',
    'Chemical & Pesticide Free',
    'Traceable to Origin Farmers',
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-36 pb-16 overflow-hidden bg-dark-950 bg-grid-pattern">
      {/* Interactive Floating Particle Canvas */}
      <MakhanaParticleCanvas />

      {/* Radiant Background Glow Flares */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-amber-400/30 text-xs font-mono font-bold text-amber-400 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>FLAVOR BHI, FITNESS BHI</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-slate-100 mb-6"
            >
              Discover the Magic of <span className="gradient-text">SNOWFLAKZ</span> Makhana<span className="text-amber-400">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl"
            >
              Light, crunchy, and 100% hand-roasted lotus seed snacks packed with high protein and bold gourmet seasonings like Peri Peri, Salt & Pepper, and Spicy Jalapeno. Guilt-free goodness in every bite!
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            >
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2.5 glass-panel p-2.5 rounded-xl border border-white/5 text-xs font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#shop"
                className="px-8 py-4 rounded-full font-display font-bold text-sm md:text-base text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:shadow-cyan-glow transition-all duration-300 flex items-center gap-2"
              >
                <span>Shop Best Sellers</span>
                <ShoppingBag className="w-5 h-5" />
              </a>

              <a
                href="#promo"
                className="px-8 py-4 rounded-full glass-panel border border-white/10 text-slate-100 hover:text-amber-400 hover:border-amber-400/50 transition-all text-sm md:text-base font-bold flex items-center gap-2"
              >
                <Tag className="w-5 h-5 text-amber-400" />
                <span>Claim 25% Off Coupon</span>
              </a>
            </motion.div>
          </div>

          {/* Right Hero Image Card Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative glass-panel p-4 rounded-3xl border border-white/15 overflow-hidden group shadow-2xl"
            >
              <img
                src="/assets/hero.jpg"
                alt="SNOWFLAKZ Makhana Hero Pack"
                className="w-full h-[400px] sm:h-[480px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = '/assets/10-1-scaled.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent rounded-2xl" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/20 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider block">
                    FEATURED SNACK BOWL
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-100">
                    A BOWL OF MAKHANA
                  </h3>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs font-mono">
                  100% ROASTED
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
