import React from 'react';
import { ShoppingBag, Tag, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const shopUrl = 'https://snowflakz-production.up.railway.app/#shop';

  return (
    <section className="bg-slate-50 py-8 md:py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Main 70% Viewport Clickable Hero Image Banner */}
        <a
          href={shopUrl}
          className="group relative w-full h-[70vh] min-h-[480px] max-h-[750px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white block transition-transform duration-300 hover:scale-[1.005]"
          title="Click to Explore SNOWFLAKZ Makhana Shop"
        >
          <img
            src="/assets/heropage.png"
            alt="SNOWFLAKZ Makhana Hero Showcase"
            className="w-full h-full object-cover sm:object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.target.src = '/assets/hero.jpg'; }}
          />

          {/* Subtle Hover Gradient & Badge Overlay */}
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors duration-300" />

          {/* Floating Click Callout Badge */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-slate-900/90 text-white backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
            <span className="font-bold text-xs sm:text-sm uppercase tracking-wider font-sans">
              Shop All Flavors
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>

          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-amber-500 text-slate-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
            FLAVOR BHI, FITNESS BHI
          </div>
        </a>

        {/* Hero Caption & Quick CTAs */}
        <div className="mt-8 text-center max-w-3xl">
          <h1 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 mb-3">
            Discover the Magic of SNOWFLAKZ Makhana
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mb-6">
            Light, crunchy, and 100% hand-roasted lotus seed snacks packed with protein and bold flavors like Peri Peri, Salt & Pepper, and Spicy Jalapeno.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href={shopUrl} className="btn-primary">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now (25% OFF)
            </a>
            <a href="#why-makhana" className="btn-secondary">
              Why Makhana?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
