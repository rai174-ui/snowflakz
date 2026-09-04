import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  variant = 'primary',
  href,
  cursorText = '',
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setCursorText, setCursorVariant } = useTheme();

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * 0.3;
    const distanceY = (e.clientY - centerY) * 0.3;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseEnter = () => {
    setCursorVariant('hover');
    if (cursorText) setCursorText(cursorText);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setCursorVariant('default');
    setCursorText('');
  };

  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-icy-500";
  
  const variants = {
    primary: "bg-gradient-to-r from-icy-500 to-violet-600 text-dark-950 font-bold hover:shadow-cyan-glow px-6 py-3 text-sm md:text-base",
    secondary: "glass-panel text-slate-100 hover:text-icy-500 border border-white/10 hover:border-icy-500/50 px-6 py-3 text-sm md:text-base",
    outline: "border border-icy-500/40 text-icy-500 hover:bg-icy-500/10 px-5 py-2.5 text-xs md:text-sm tracking-wider uppercase",
    ghost: "text-slate-300 hover:text-icy-500 px-4 py-2 text-sm",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={buttonRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 200, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}
