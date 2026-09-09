import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const shopUrl = 'https://snowflakz-production.up.railway.app/#shop';

  return (
    <section className="bg-slate-50 py-6 md:py-10 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Video Banner Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-black group">
          <a
            href={shopUrl}
            className="block w-full"
            title="Click to Explore Snowflakz Foods Shop"
          >
            <video
              src="/assets/intro.mp4"
              className="w-full h-auto max-h-[600px] object-cover block mx-auto"
              autoPlay
              loop
              muted
              playsInline
            />
          </a>

          {/* Floating Click Callout Badge */}
          <a
            href={shopUrl}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-slate-900/90 text-white backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 hover:bg-amber-500 hover:text-slate-950 transition-colors z-10"
          >
            <span className="font-bold text-xs uppercase tracking-wider font-sans">
              Shop All Flavors
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Caption & Quick CTAs */}
        <div className="mt-8 text-center max-w-3xl">
          <h1 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 mb-3">
            Discover the Magic of Snowflakz Foods
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
