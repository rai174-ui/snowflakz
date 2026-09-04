import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, ArrowUp, Github, Twitter, Linkedin, Dribbble, Instagram, ShieldCheck } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/rai174-ui/snowflakz', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Dribbble', href: 'https://dribbble.com', icon: Dribbble },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  ];

  return (
    <footer className="relative bg-dark-950 text-slate-400 py-16 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 font-display font-extrabold text-2xl text-slate-100">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-icy-500 to-violet-600 p-0.5">
                <div className="w-full h-full bg-dark-950 rounded-[7px] flex items-center justify-center">
                  <Snowflake className="w-4 h-4 text-icy-400" />
                </div>
              </div>
              <span>Snowflakz<span className="text-icy-500">.</span></span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Snowflakz is an independent digital creative studio & front-end architecture lab. Engineering high-performance web products with crystalline aesthetics.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>WCAG 2.1 AA Compliant • 95+ Lighthouse Target</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-slate-200 text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Work', 'Services', 'Lab', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-icy-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4">
            <h4 className="font-display font-semibold text-slate-200 text-sm uppercase tracking-wider mb-4">
              Connect & Code
            </h4>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Snowflakz on ${s.name}`}
                    className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-icy-400 hover:border-icy-500/40 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs font-mono text-slate-500">
              Synced with GitHub: <a href="https://github.com/rai174-ui/snowflakz" target="_blank" rel="noreferrer" className="text-icy-400 hover:underline">rai174-ui/snowflakz</a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Snowflakz Creative Studio. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 hover:border-icy-500/40 text-slate-300 hover:text-icy-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
