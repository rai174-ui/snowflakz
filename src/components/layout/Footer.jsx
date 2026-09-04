import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          <div className="md:col-span-4 space-y-3">
            <span className="font-serif font-bold text-xl text-white block">
              SNOWFLAKZ
            </span>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              SNOWFLAKZ Makhana – Light, crunchy, and 100% roasted lotus seed snacks packed with protein and bold flavors. Guilt-free goodness in every bite!
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-amber-400">Home</a></li>
              <li><a href="#shop" className="hover:text-amber-400">Shop</a></li>
              <li><a href="#why-makhana" className="hover:text-amber-400">About Us</a></li>
              <li><a href="#contact" className="hover:text-amber-400">Contact Us</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-3">
              Site Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#privacy" className="hover:text-amber-400">Privacy Policy</a></li>
              <li><a href="#refund" className="hover:text-amber-400">Refund & Return</a></li>
              <li><a href="#terms" className="hover:text-amber-400">Terms & Conditions</a></li>
              <li><a href="#shipping" className="hover:text-amber-400">Shipping Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Snowflakz.com | All Rights Reserved by snowflakz.com</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
