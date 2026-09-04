import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function MobileDrawer({ isOpen, onClose, navLinks }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-dark-950/80 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 w-full max-w-sm h-full bg-dark-900 border-l border-white/10 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-icy-500" />
                  <span className="font-display font-bold text-lg text-slate-100">Snowflakz</span>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close mobile menu"
                  className="p-2 text-slate-400 hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-icy-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between text-2xl font-display font-semibold text-slate-200 hover:text-icy-500 py-2 border-b border-white/5 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-icy-500" />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10">
              <MagneticButton
                href="#contact"
                onClick={onClose}
                variant="primary"
                className="w-full justify-center"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <p className="mt-4 text-center text-xs text-slate-500">
                Available for Q3/Q4 Projects • HQ GMT+5:30
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
