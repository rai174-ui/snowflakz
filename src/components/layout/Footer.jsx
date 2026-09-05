import React, { useState } from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import PolicyModal from '../ui/PolicyModal';

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPolicy = (e, policyType) => {
    e.preventDefault();
    setActivePolicy(policyType);
  };

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 py-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
            <div className="md:col-span-4 space-y-3">
              <img
                src="/assets/snowflakzlgo.png"
                alt="SNOWFLAKZ Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                SNOWFLAKZ Makhana – Light, crunchy, and 100% roasted lotus seed snacks packed with protein and bold flavors. Guilt-free goodness in every bite!
              </p>
              <div className="pt-2 space-y-1 text-xs text-slate-400 font-sans">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <a href="mailto:info@snowflakz.com" className="hover:text-amber-400">info@snowflakz.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <a href="tel:+919971299631" className="hover:text-emerald-400">+91 99712 99631</a>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-3">
                Quick Links
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><a href="#" className="hover:text-amber-400">Home</a></li>
                <li><a href="https://snowflakz-production.up.railway.app/#shop" className="hover:text-amber-400">Shop</a></li>
                <li><a href="#why-makhana" className="hover:text-amber-400">About Us</a></li>
                <li><a href="#contact" className="hover:text-amber-400">Contact Us</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-3">
                Site & Legal Policies
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>
                  <button onClick={(e) => openPolicy(e, 'privacy')} className="hover:text-amber-400 text-left focus:outline-none">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={(e) => openPolicy(e, 'refund')} className="hover:text-amber-400 text-left focus:outline-none">
                    Refund & Return Policy
                  </button>
                </li>
                <li>
                  <button onClick={(e) => openPolicy(e, 'terms')} className="hover:text-amber-400 text-left focus:outline-none">
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button onClick={(e) => openPolicy(e, 'shipping')} className="hover:text-amber-400 text-left focus:outline-none">
                    Shipping Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Snowflakz.com | All Rights Reserved by snowflakz.com • Powered by <span className="text-amber-400 font-semibold">Zerolimit Automation</span>
            </p>

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

      {/* Interactive Policy Modal */}
      <PolicyModal
        policyType={activePolicy}
        isOpen={Boolean(activePolicy)}
        onClose={() => setActivePolicy(null)}
      />
    </>
  );
}
