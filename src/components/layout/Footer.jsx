import React from 'react';
import { Sparkles, ArrowUp, ShieldCheck, Tag, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop Flavors', href: '#shop' },
    { name: 'Why Makhana', href: '#why-makhana' },
    { name: 'Farm Sourcing', href: '#sourcing' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const policyLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Refund & Return Policy', href: '#refund' },
    { name: 'Shipping Policy', href: '#shipping' },
    { name: 'Terms & Conditions', href: '#terms' },
  ];

  return (
    <footer className="relative bg-dark-950 text-slate-400 py-16 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/assets/logo.jpg"
                alt="SNOWFLAKZ Logo"
                className="w-10 h-10 object-cover rounded-xl border border-white/10"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="font-display font-extrabold text-2xl text-slate-100 tracking-tight">
                SNOWFLAKZ<span className="text-amber-400">.</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              SNOWFLAKZ Makhana — Light, crunchy, and 100% roasted lotus seed snacks packed with protein and bold gourmet flavors like Peri Peri, Salt & Pepper, and Spicy Jalapeno.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Hand-Roasted • Chemical & Pesticide Free</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-slate-200 text-xs uppercase tracking-wider mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-amber-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Links */}
          <div className="md:col-span-4">
            <h4 className="font-display font-semibold text-slate-200 text-xs uppercase tracking-wider mb-4 font-mono">
              Site & Legal Policies
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              {policyLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-amber-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="glass-panel p-3.5 rounded-2xl border border-white/10 bg-slate-900">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">
                Subscribe for Exclusive Offers
              </span>
              <p className="text-[11px] text-slate-400 mb-2">Get 25% off coupon code delivered instantly.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  onClick={() => alert('Thank you for subscribing! Your 25% OFF coupon SNOWFLAKZ25 is ready.')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Snowflakz.com | All Rights Reserved by snowflakz.com</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 text-slate-300 hover:text-amber-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
