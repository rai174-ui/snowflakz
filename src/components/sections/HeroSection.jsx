import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const shopUrl = 'https://snowflakz-production.up.railway.app/#shop';

  const banners = [
    { id: 1, src: '/assets/banner/1.png', alt: 'Snowflakz Foods Banner 1' },
    { id: 2, src: '/assets/banner/2.jpg', alt: 'Snowflakz Foods Banner 2' },
    { id: 3, src: '/assets/banner/3.jpg', alt: 'Snowflakz Foods Banner 3' },
    { id: 4, src: '/assets/banner/4.jpg', alt: 'Snowflakz Foods Banner 4' },
    { id: 5, src: '/assets/banner/5.jpg', alt: 'Snowflakz Foods Banner 5' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="bg-slate-50 py-6 md:py-10 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Interactive Banner Slider Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white group">
          <a
            href={shopUrl}
            className="block w-full"
            title="Click to Explore Snowflakz Foods Shop"
          >
            <img
              src={banners[currentIndex].src}
              alt={banners[currentIndex].alt}
              className="w-full h-auto max-h-[600px] object-contain block mx-auto transition-all duration-500"
              onError={(e) => { e.target.src = '/assets/banner/1.png'; }}
            />
          </a>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous banner"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors shadow-md z-10 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next banner"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors shadow-md z-10 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

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

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-slate-900/40 px-3 py-1.5 rounded-full backdrop-blur-xs">
            {banners.map((b, idx) => (
              <button
                key={b.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-amber-400 w-6' : 'bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
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
