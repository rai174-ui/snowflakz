import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const shopUrl = 'https://snowflakz-production.up.railway.app/#shop';

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/assets/intro.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
          Discover the Magic of Snowflakz Foods
        </h1>
        <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl drop-shadow-md">
          Light, crunchy, and 100% hand-roasted lotus seed snacks packed with protein and bold flavors like Peri Peri, Salt & Pepper, and Spicy Jalapeno.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={shopUrl} className="btn-primary text-lg px-8 py-3 shadow-xl hover:scale-105 transition-transform">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Shop Now (25% OFF)
          </a>
          <a href="#why-makhana" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold rounded-lg px-8 py-3 transition-all duration-300">
            Why Makhana?
          </a>
        </div>
      </div>
      
      {/* Floating Click Callout Badge */}
      <a
        href={shopUrl}
        className="absolute bottom-6 right-6 bg-slate-900/90 text-white backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-xl flex items-center gap-2 hover:bg-amber-500 hover:text-slate-950 transition-colors z-20 hidden md:flex"
      >
        <span className="font-bold text-sm uppercase tracking-wider font-sans">
          Shop All Flavors
        </span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </section>
  );
}
