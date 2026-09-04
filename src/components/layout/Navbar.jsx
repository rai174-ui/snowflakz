import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, Sparkles, Tag, Search } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { useCart } from '../../context/CartContext';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop Flavors', href: '#shop' },
    { name: 'Why Makhana', href: '#why-makhana' },
    { name: 'Farm Sourcing', href: '#sourcing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-mono text-xs font-bold py-2 px-4 text-center flex items-center justify-center gap-2 relative z-50 shadow-sm">
        <Tag className="w-3.5 h-3.5" />
        <span>LIMITED OFFER: Get 25% OFF On Your First Order! Use Code: <strong>SNOWFLAKZ25</strong></span>
      </div>

      {/* Main Sticky Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3 glass-nav shadow-xl' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 p-0.5 shadow-md">
              <img
                src="/assets/logo.jpg"
                alt="SNOWFLAKZ Logo"
                className="w-full h-full object-cover rounded-[10px]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-slate-900 rounded-[10px] hidden items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl md:text-2xl text-slate-100 tracking-tight">
                SNOWFLAKZ<span className="text-amber-400">.</span>
              </span>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest -mt-1 font-semibold">
                MAKHANA SNACKS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-5 py-2 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full glass-panel border border-white/10 hover:border-amber-400/50 text-slate-200 hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 flex items-center justify-center"
              aria-label="Open shopping basket"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold font-mono text-[10px] flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA */}
            <a
              href="#shop"
              className="px-5 py-2.5 rounded-full font-display font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:shadow-cyan-glow transition-all duration-300"
            >
              Shop Flavors
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full glass-panel border border-white/10 text-slate-200"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-slate-950 font-bold text-[9px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-full glass-panel border border-white/10 text-slate-200"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
