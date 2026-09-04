import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, Phone, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Customer Order',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 bg-dark-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-amber-400/30 text-xs font-mono font-bold text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>WE ARE HERE TO HELP</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight mb-4">
            Contact & Wholesale Inquiries<span className="text-amber-400">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have questions about an order, wholesale distribution, or bulk corporate gifting? Reach out to the SNOWFLAKZ Makhana team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="border-white/10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Customer Support</span>
                  <a href="mailto:hello@snowflakz.com" className="text-base font-semibold text-slate-100 hover:text-amber-400 transition-colors">
                    hello@snowflakz.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Customer Care Hotline</span>
                  <a href="tel:+919876543210" className="text-base font-semibold text-slate-100 hover:text-emerald-400 transition-colors">
                    +91 98765 43210 (Mon-Sat, 9AM - 7PM)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Headquarters</span>
                  <span className="text-sm text-slate-300">
                    SNOWFLAKZ Foods Pvt Ltd, Industrial Area, Sector 62, India
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Form Side */}
          <GlassCard className="lg:col-span-7 border-white/15">
            {submitted ? (
              <div className="text-center py-12 px-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-100 mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
                  Thank you for contacting SNOWFLAKZ Makhana. Our customer support team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-mono font-bold text-amber-400 border border-amber-400/40 hover:bg-amber-400/10 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 focus:outline-none focus:border-amber-400 text-sm"
                    >
                      <option value="Customer Order">Customer Order / Tracking</option>
                      <option value="Wholesale">Wholesale & Distribution</option>
                      <option value="Corporate Gifting">Corporate Gifting</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Message / Inquiry Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-display font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:shadow-cyan-glow transition-all flex items-center justify-center gap-2 text-sm"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
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
