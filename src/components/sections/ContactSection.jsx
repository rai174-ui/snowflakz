import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Clock, Calendar, Mail, MapPin, Sparkles } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import GlassCard from '../ui/GlassCard';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    budget: '$10k - $25k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hqTime, setHqTime] = useState('');

  // Live HQ Timezone Tracker (GMT+5:30)
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setHqTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 bg-dark-900 overflow-hidden border-t border-white/10">
      {/* Background Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-t from-icy-500/10 via-violet-600/10 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Callout Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-icy-500/30 text-xs font-semibold text-icy-400 mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-100 tracking-tight leading-tight">
            Let's build something <span className="gradient-text">extraordinary</span> together<span className="text-icy-500">.</span>
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
            Have a project in mind, an inquiry, or want to explore an interactive digital experience? Get in touch with our front-end architects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: HQ Status & Quick Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="border-white/15">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
                <Clock className="w-5 h-5 text-icy-400" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Current HQ Time</span>
                  <span className="text-base font-mono font-bold text-slate-100">{hqTime || '10:38:00 AM'} GMT+5:30</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-sm font-semibold text-slate-200">
                  Accepting New Projects for Q3 / Q4 2026
                </span>
              </div>
            </GlassCard>

            <GlassCard className="border-white/15 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-icy-500/10 border border-icy-500/30 text-icy-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Direct Inquiry</span>
                  <a href="mailto:hello@snowflakz.com" className="text-base font-semibold text-slate-200 hover:text-icy-400 transition-colors">
                    hello@snowflakz.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Schedule Intro Call</span>
                  <a href="https://snowflakz.com" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-slate-200 hover:text-violet-400 transition-colors flex items-center gap-1">
                    <span>Book 30-min Strategy Call</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <GlassCard className="lg:col-span-7 border-white/15">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-100 mb-2">Message Transmitted!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Thank you for reaching out. A Snowflakz front-end architect will review your project brief and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-mono font-bold text-icy-400 border border-icy-500/40 hover:bg-icy-500/10 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-icy-500 focus:ring-1 focus:ring-icy-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-icy-500 focus:ring-1 focus:ring-icy-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Required Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-slate-100 focus:outline-none focus:border-icy-500 focus:ring-1 focus:ring-icy-500 text-sm"
                    >
                      <option value="UI/UX Design">Digital Product & UI/UX</option>
                      <option value="Creative Front-End">Creative Front-End Engineering</option>
                      <option value="3D & WebGL">3D, WebGL & Canvas Shaders</option>
                      <option value="Brand Identity">Brand Identity & Motion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Project Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-slate-100 focus:outline-none focus:border-icy-500 focus:ring-1 focus:ring-icy-500 text-sm"
                    >
                      <option value="<$10k">&lt; $10,000</option>
                      <option value="$10k - $25k">$10,000 - $25,000</option>
                      <option value="$25k - $50k">$25,000 - $50,000</option>
                      <option value="$50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                    Project Brief / Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your goals, timeline, and deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-icy-500 focus:ring-1 focus:ring-icy-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-display font-bold text-dark-950 bg-gradient-to-r from-icy-500 to-violet-600 hover:shadow-cyan-glow transition-all duration-300 flex items-center justify-center gap-2 text-base focus:outline-none focus:ring-2 focus:ring-icy-500"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
