import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sliders, RefreshCw, Sparkles, Code, Play } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SnowflakeCanvas from './SnowflakeCanvas';
import { labItemsData } from '../../data/labItems';

export default function LabSection() {
  const [particleCount, setParticleCount] = useState(80);
  const [speedMultiplier, setSpeedMultiplier] = useState(1.2);
  const [connectionDistance, setConnectionDistance] = useState(150);
  const [glowColor, setGlowColor] = useState('#00F2FE');

  const colorPresets = [
    { label: 'Icy Cyan', hex: '#00F2FE' },
    { label: 'Electric Violet', hex: '#A855F7' },
    { label: 'Neon Emerald', hex: '#34D399' },
    { label: 'Frost Silver', hex: '#E0F2FE' }
  ];

  const handleReset = () => {
    setParticleCount(80);
    setSpeedMultiplier(1.2);
    setConnectionDistance(150);
    setGlowColor('#00F2FE');
  };

  return (
    <section id="lab" className="relative py-28 bg-dark-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-icy-400 uppercase mb-3">
              <Terminal className="w-4 h-4" />
              <span>R&D & Creative Coding Playground</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight">
              Snowflakz Lab<span className="text-icy-500">_</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mt-4 md:mt-0">
            Our sandbox for shader experiments, vector physics, kinetic typography, and high-performance browser micro-interactions.
          </p>
        </div>

        {/* Interactive Shader Canvas Customizer Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Controls Panel */}
          <GlassCard className="lg:col-span-5 flex flex-col justify-between border-white/15">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-slate-200">
                  <Sliders className="w-4 h-4 text-icy-400" />
                  <span>Interactive Physics Tuning</span>
                </div>
                <button
                  onClick={handleReset}
                  aria-label="Reset particle controls"
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-icy-400 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Particle Count Slider */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-300">Node Density</span>
                  <span className="text-icy-400 font-bold">{particleCount} Nodes</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="150"
                  value={particleCount}
                  onChange={(e) => setParticleCount(Number(e.target.value))}
                  className="w-full accent-icy-500 bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Speed Multiplier Slider */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-300">Atmospheric Velocity</span>
                  <span className="text-icy-400 font-bold">{speedMultiplier.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.0"
                  step="0.1"
                  value={speedMultiplier}
                  onChange={(e) => setSpeedMultiplier(Number(e.target.value))}
                  className="w-full accent-icy-500 bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Connection Distance */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-300">Vector Connect Radius</span>
                  <span className="text-icy-400 font-bold">{connectionDistance}px</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="240"
                  value={connectionDistance}
                  onChange={(e) => setConnectionDistance(Number(e.target.value))}
                  className="w-full accent-icy-500 bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Color Presets */}
              <div className="mb-6">
                <span className="text-xs font-mono text-slate-300 block mb-3">Glow Color Preset</span>
                <div className="flex flex-wrap gap-2">
                  {colorPresets.map((preset) => (
                    <button
                      key={preset.hex}
                      onClick={() => setGlowColor(preset.hex)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 border transition-all ${
                        glowColor === preset.hex
                          ? 'border-icy-500 bg-icy-500/20 text-white font-bold'
                          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: preset.hex }} />
                      <span>{preset.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-dark-950/80 border border-white/5 font-mono text-[11px] text-slate-400">
              <span className="text-icy-400 font-bold">INFO:</span> Move cursor over viewport or click to trigger shockwaves. Real-time rendering at 60FPS.
            </div>
          </GlassCard>

          {/* Interactive Viewport */}
          <div className="lg:col-span-7 h-[380px] lg:h-auto rounded-2xl border border-white/15 relative overflow-hidden glass-panel bg-dark-950">
            <SnowflakeCanvas
              particleCount={particleCount}
              speedMultiplier={speedMultiplier}
              connectionDistance={connectionDistance}
              glowColor={glowColor}
              interactive={true}
              className="rounded-2xl"
            />
            <div className="absolute top-4 left-4 z-10 glass-panel px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-icy-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CANVAS_VIEWPORT_ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Lab Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labItemsData.map((item) => (
            <GlassCard key={item.id} className="border-white/10 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="text-icy-400">{item.category}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-emerald-400 border border-emerald-500/20">
                    {item.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-icy-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/10">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
