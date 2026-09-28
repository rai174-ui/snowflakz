import React, { useState } from 'react';
import { PackageCheck, Menu, X, Leaf, Send } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import SampleInquiryModal from '../ui/SampleInquiryModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('sample');

  const { cartCount, setIsCartOpen } = useCart();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Farming & Processing', href: '#sourcing' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const openModal = (tab) => {
    setModalTab(tab);
    setModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Corporate B2B Info Bar */}
      <div className="bg-slate-900 text-white text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2 font-sans border-b border-slate-800">
        <Leaf className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>100% Organic & Hygienically Processed • <strong className="text-amber-400">B2B Wholesale, Bulk Export & Samples Available</strong></span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm py-3 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo using snowflakzlgo.png */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <img
              src="/assets/snowflakzlgo.png"
              alt="Snowflakz Foods Logo"
              className="h-11 md:h-12 w-auto object-contain"
              onError={(e) => { e.target.src = '/assets/logo.jpg'; }}
            />
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Commercial Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Sample Basket Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-lg text-slate-700 hover:text-amber-600 transition-colors border border-slate-200 hover:border-amber-400 flex items-center gap-1.5 text-xs font-bold"
              aria-label="Open sample request basket"
            >
              <PackageCheck className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">Sample Basket</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => openModal('inquiry')}
              className="hidden sm:inline-flex btn-primary text-xs px-4 py-2.5 font-bold"
            >
              Bulk Inquiry
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 font-sans">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-800 hover:text-amber-600 py-1.5"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => openModal('sample')}
                className="btn-primary w-full text-center py-2.5 text-xs font-bold"
              >
                Request Samples
              </button>
              <button
                onClick={() => openModal('inquiry')}
                className="btn-secondary w-full text-center py-2.5 text-xs font-bold"
              >
                Bulk Inquiry
              </button>
            </div>
          </div>
        )}
      </header>

      <SampleInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
    </>
  );
}
