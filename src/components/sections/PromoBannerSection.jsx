import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Copy, Check, ShoppingBag, Gift } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

export default function PromoBannerSection() {
  const [copied, setCopied] = useState(false);
  const code = 'SNOWFLAKZ25';

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="promo" className="relative py-20 bg-dark-900 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GlassCard className="border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 p-8 md:p-12 relative overflow-hidden">
          {/* Background Decorative Icon */}
          <Gift className="absolute -right-6 -bottom-6 w-48 h-48 text-amber-400/10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 font-mono text-xs font-bold mb-4">
                <Tag className="w-3.5 h-3.5" />
                <span>FIRST ORDER SPECIAL DISCOUNT</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight mb-4">
                Get 25% Off On Your First Purchase!
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Experience the magic of SNOWFLAKZ hand-roasted lotus seed snacks. Enter promo code at checkout to unlock instant savings.
              </p>
            </div>

            {/* Code Box & CTA */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 items-stretch">
              <div className="glass-panel p-3.5 rounded-2xl border border-white/15 flex items-center justify-between gap-3 bg-slate-950">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Coupon Code</span>
                  <span className="font-mono font-bold text-lg text-amber-400 tracking-widest">{code}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href="#shop"
                className="py-3.5 px-6 rounded-2xl font-display font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:shadow-cyan-glow transition-all text-center flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Makhana Flavors</span>
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
