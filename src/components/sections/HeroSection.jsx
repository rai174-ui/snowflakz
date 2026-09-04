import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Award, Zap, ShieldCheck, Globe } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import SnowflakeCanvas from './SnowflakeCanvas';

export default function HeroSection() {
  const clientProofs = [
    { text: 'Awwwards Site of the Day', icon: Award },
    { text: 'FWA of the Month Winner', icon: Zap },
    { text: 'Webby Awards Nominee', icon: ShieldCheck },
    { text: '50+ Digital Products Shipped', icon: Globe },
    { text: '99.8% Lighthouse Performance Rating', icon: Zap },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-grid-pattern">
      {/* Background Interactive Particle Canvas */}
      <SnowflakeCanvas particleCount={70} speedMultiplier={1.0} />

      {/* Radiant Gradient Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-icy-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="max-w-4xl">
          {/* Badge Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-icy-500/30 text-xs font-semibold text-icy-400 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-icy-500 animate-pulse" />
            <span>Digital Creative Studio & Front-End Architects</span>
          </motion.div>

          {/* Kinetic Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-slate-100 mb-6"
          >
            Crafting <span className="gradient-text">Crystalline</span> Digital Experiences & Next-Gen Interfaces<span className="text-icy-500">.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8"
          >
            We bridge high-concept creative design, 3D WebGL, and ultra-fast front-end architecture to engineer digital products that balance aesthetic flair with accessible performance.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#work" variant="primary" cursorText="EXPLORE">
              <span>View Case Studies</span>
              <ArrowDownRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton href="#contact" variant="secondary" cursorText="BUILD">
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Client Proof Ticker / Partner Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-full mt-16 pt-6 border-t border-white/10 glass-panel overflow-hidden"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...clientProofs, ...clientProofs].map((proof, idx) => {
            const Icon = proof.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 mx-8 text-xs sm:text-sm font-mono tracking-wide text-slate-400"
              >
                <Icon className="w-4 h-4 text-icy-400" />
                <span>{proof.text}</span>
                <span className="ml-8 text-white/20">•</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
