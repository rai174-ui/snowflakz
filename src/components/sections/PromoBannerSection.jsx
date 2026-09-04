import React, { useState } from 'react';
import { Tag, Copy, Check, ShoppingBag } from 'lucide-react';

export default function PromoBannerSection() {
  const [copied, setCopied] = useState(false);
  const code = 'SNOWFLAKZ25';

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="promo" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500 text-white text-xs font-bold uppercase tracking-wider mb-3">
              <Tag className="w-3.5 h-3.5" />
              SPECIAL PROMO
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white mb-2">
              Get 25% Off On Your First Purchase!
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Use promo code <strong className="text-amber-400 font-mono">SNOWFLAKZ25</strong> at checkout to claim instant 25% discount.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="bg-slate-800 p-3 rounded border border-slate-700 flex items-center justify-between gap-4 w-full sm:w-auto">
              <span className="font-mono font-bold text-amber-400 text-base px-2">{code}</span>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs rounded transition-colors flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <a href="#shop" className="btn-primary w-full sm:w-auto text-center">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
