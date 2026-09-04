import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { reviewsData } from '../../data/reviews';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2 font-sans">
            REAL CUSTOMER REVIEWS
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 mb-2">
            Customers Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9 out of 5 stars</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((review) => (
            <div key={review.id} className="plain-card p-5 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-500 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-xs leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-xs text-slate-900 flex items-center gap-1">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </h4>
                  <span className="text-[11px] text-slate-500 block">{review.location}</span>
                </div>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
