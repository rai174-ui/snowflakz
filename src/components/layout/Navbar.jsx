import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowUpRight, Snowflake } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import MagneticButton from '../ui/MagneticButton';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Lab', href: '#lab' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3 glass-nav shadow-lg' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-display font-extrabold text-xl md:text-2xl text-slate-100 tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-icy-500 rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-icy-500 to-violet-600 p-0.5 group-hover:shadow-cyan-glow transition-shadow duration-300">
              <div className="w-full h-full bg-dark-950 rounded-[7px] flex items-center justify-center">
                <Snowflake className="w-4 h-4 text-icy-400 group-hover:rotate-90 transition-transform duration-500" />
              </div>
            </div>
            <span className="text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-icy-400 group-hover:to-violet-500 transition-all">
              Snowflakz<span className="text-icy-500">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-icy-400 hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <MagneticButton href="#contact" variant="primary" cursorText="TALK">
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="p-2.5 rounded-full glass-panel border border-white/10 text-slate-200 hover:text-icy-500 focus:outline-none focus:ring-2 focus:ring-icy-500"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
