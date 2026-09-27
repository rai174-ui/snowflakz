import React, { useState } from 'react';
import { PackageCheck, Send, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import SampleInquiryModal from '../ui/SampleInquiryModal';

export default function PromoBannerSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('sample');

  const openSampleModal = () => {
    setModalTab('sample');
    setModalOpen(true);
  };

  const openInquiryModal = () => {
    setModalTab('inquiry');
    setModalOpen(true);
  };

  return (
    <section id="inquiry-banner" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl border border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider font-sans">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              B2B WHOLESALE & SAMPLE REQUESTS
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white leading-tight">
              Request Free Product Samples for Your Business
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
              Evaluate our 100% organic Makhana, Cumin Seeds, Dry Coconut, Dehydrated Garlic & Onion firsthand. Fast shipping for commercial buyers, exporters, and distributors.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-sans text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fast Sample Express</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom Packing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Export Grade</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 font-sans">
            <button
              onClick={openSampleModal}
              className="btn-primary w-full sm:w-auto text-center px-6 py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <PackageCheck className="w-4 h-4" />
              <span>Request Free Samples</span>
            </button>

            <button
              onClick={openInquiryModal}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold rounded-lg px-6 py-3.5 text-sm w-full sm:w-auto text-center flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4 text-amber-400" />
              <span>Bulk Inquiry</span>
            </button>
          </div>
        </div>
      </div>

      <SampleInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
    </section>
  );
}
