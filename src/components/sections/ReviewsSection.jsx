import React from 'react';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import { reviewsData } from '../../data/reviews';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-28 bg-dark-900 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-amber-400/30 text-xs font-mono font-bold text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>REAL SNACKERS, REAL REVIEWS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight mb-4">
            Loved Across India<span className="text-amber-400">.</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300 font-mono">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-100">4.9 / 5.0 Rating</span>
            <span className="text-slate-500">• 500+ Verified Buyers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((review) => (
            <GlassCard key={review.id} className="border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-amber-400/20" />
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-100 flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 block">{review.location}</span>
                </div>
                <span className="text-[10px] font-mono text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded">
                  {review.product}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
