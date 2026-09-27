import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { categoryBanners } from '../../data/products';

export default function CategoryBanner({ categoryKey }) {
  const bannerInfo = categoryBanners[categoryKey];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!bannerInfo) return null;

  const images = bannerInfo.bannerImages || [];
  const currentImage = images[activeImageIndex] || images[0];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mb-10 rounded-2xl overflow-hidden bg-slate-900 text-white shadow-xl border border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Banner Left Details */}
        <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            SNOWFLAKZ FEATURED PRODUCT BANNER
          </span>

          <h3 className="font-serif font-bold text-2xl sm:text-4xl text-white leading-tight">
            {bannerInfo.title}
          </h3>

          <p className="text-amber-400 text-sm font-semibold">
            {bannerInfo.subtitle}
          </p>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {bannerInfo.description}
          </p>

          {/* Key Specs / Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-200 font-sans">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Direct Farm Sourced</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sun-Dried & Dehydrated</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero Preservatives</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bulk & Retail Export Grade</span>
            </div>
          </div>
        </div>

        {/* Banner Right Image Showcase Slider */}
        <div className="lg:col-span-6 relative p-4 sm:p-6 bg-slate-950/60 flex flex-col items-center justify-center min-h-[300px]">
          <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-700 bg-black/40 group">
            <img
              src={currentImage}
              alt={`${bannerInfo.title} showcase`}
              className="w-full h-full object-cover object-center transition-all duration-500"
              onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
            />

            {/* Slider Nav Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-colors shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-colors shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Banner Badge */}
            <span className="absolute bottom-3 left-3 px-3 py-1 rounded bg-slate-900/90 text-white text-[11px] font-bold border border-white/10 backdrop-blur-md">
              Banner Image {activeImageIndex + 1} of {images.length}
            </span>
          </div>

          {/* Thumbnails Row */}
          {images.length > 1 && (
            <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIndex === idx ? 'border-amber-400 scale-105 ring-2 ring-amber-400/50' : 'border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
