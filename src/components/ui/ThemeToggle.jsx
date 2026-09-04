import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative p-2.5 rounded-full glass-panel border border-white/10 hover:border-icy-500/50 text-slate-300 hover:text-icy-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-icy-500"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0.9 }}
        transition={{ type: 'spring', damping: 15, stiffness: 200 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-icy-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}
