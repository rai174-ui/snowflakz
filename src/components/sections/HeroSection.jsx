import React from 'react';
import { ShoppingBag, CheckCircle2, Tag } from 'lucide-react';

export default function HeroSection() {
  const highlights = [
    '100% Hand Roasted (No Trans Fat)',
    'High Protein & Fiber Rich',
    'Chemical & Pesticide Free',
    'Traceable to Origin Farmers',
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 rounded bg-amber-100 text-amber-900 font-semibold text-xs uppercase tracking-wider mb-4">
              A BOWL OF MAKHANA — FLAVOR BHI FITNESS BHI
            </span>

            <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight mb-6">
              Discover the Magic of SNOWFLAKZ Makhana.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              SNOWFLAKZ Makhana – Light, crunchy, and 100% roasted lotus seed snacks packed with protein and bold flavors like Peri Peri, Tangy Tomato, and Salt & Pepper. Guilt-free goodness in every bite!
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded border border-slate-200 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#shop" className="btn-primary">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shop Best Sellers
              </a>

              <a href="#promo" className="btn-secondary">
                <Tag className="w-4 h-4 mr-2 text-amber-600" />
                Get 25% Off Coupon
              </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5">
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-md">
              <img
                src="/assets/hero.jpg"
                alt="SNOWFLAKZ Makhana Hero Pack"
                className="w-full h-auto max-h-[460px] object-cover rounded"
                onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
              />
              <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">100% Roasted Lotus Seed Snack</span>
                <span className="font-bold text-amber-700">HIGH PROTEIN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
