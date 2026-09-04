import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop Flavors', href: '#shop' },
    { name: 'Why Makhana', href: '#why-makhana' },
    { name: 'Farm Sourcing', href: '#sourcing' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      {/* Astra Promo Bar */}
      <div className="bg-slate-900 text-white text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <Tag className="w-3.5 h-3.5 text-amber-400" />
        <span>Get 25% OFF On Your First Order! Use Code: <strong className="text-amber-400">SNOWFLAKZ25</strong></span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <img
              src="/assets/logo.jpg"
              alt="SNOWFLAKZ Logo"
              className="h-10 w-auto object-contain rounded"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl md:text-2xl text-slate-900 tracking-tight">
                SNOWFLAKZ
              </span>
              <span className="text-[10px] font-sans font-bold text-amber-600 uppercase tracking-wider -mt-1">
                Flavor Bhi Fitness Bhi
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6">
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

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded text-slate-700 hover:text-amber-600 transition-colors border border-slate-200"
              aria-label="Open basket"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-white font-bold text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <a href="#shop" className="hidden sm:inline-flex btn-primary">
              Shop Now
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3">
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
            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center mt-2"
            >
              Shop Now
            </a>
          </div>
        )}
      </header>
    </>
  );
}
