import React, { useState } from 'react';
import { PackageCheck, Send, ArrowRight, Sparkles } from 'lucide-react';
import SampleInquiryModal from '../ui/SampleInquiryModal';

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('sample');

  const openModal = (tab) => {
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <section className="relative w-full h-[90vh] min-h-[620px] flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/55 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center font-sans">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          100% ORGANIC & HYGIENICALLY PROCESSED SNACKS & SPICES
        </span>

        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6 drop-shadow-lg leading-tight">
          Discover the Magic of Snowflakz Foods
        </h1>

        <p className="text-white/90 text-base sm:text-xl mb-10 max-w-2xl drop-shadow-md leading-relaxed font-sans">
          Premium organic roasted lotus seeds (Makhana), sun-dried cumin seeds, dry coconut, dehydrated garlic, and onion. Directly sourced from certified farms.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => openModal('sample')}
            className="btn-primary text-base sm:text-lg px-8 py-3.5 shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2.5 w-full sm:w-auto"
          >
            <PackageCheck className="w-5 h-5" />
            <span>Request Free Samples</span>
          </button>

          <button
            onClick={() => openModal('inquiry')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold rounded-lg px-8 py-3.5 text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all duration-300 w-full sm:w-auto"
          >
            <Send className="w-5 h-5 text-amber-400" />
            <span>Bulk Commercial Inquiry</span>
          </button>
        </div>
      </div>
      
      {/* Floating Click Callout Badge */}
      <button
        onClick={() => openModal('sample')}
        className="absolute bottom-6 right-6 bg-slate-900/90 text-white backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-xl flex items-center gap-2 hover:bg-amber-500 hover:text-slate-950 transition-colors z-20 hidden md:flex font-sans"
      >
        <span className="font-bold text-sm uppercase tracking-wider">
          Request Product Samples
        </span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <SampleInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
    </section>
  );
}
