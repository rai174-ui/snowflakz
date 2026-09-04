import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { cursorText, cursorVariant } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible, prefersReducedMotion]);

  if (prefersReducedMotion || !isVisible) return null;

  const isSmallDevice = typeof window !== 'undefined' && window.innerWidth < 768;
  if (isSmallDevice) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - (cursorVariant === 'hover' ? 24 : 16),
          y: mousePosition.y - (cursorVariant === 'hover' ? 24 : 16),
          width: cursorVariant === 'hover' ? 48 : 32,
          height: cursorVariant === 'hover' ? 48 : 32,
          scale: cursorVariant === 'click' ? 0.8 : 1,
          backgroundColor: cursorVariant === 'hover' ? 'rgba(0, 242, 254, 0.15)' : 'rgba(124, 58, 237, 0.1)',
          borderColor: cursorVariant === 'hover' ? 'rgba(0, 242, 254, 0.8)' : 'rgba(0, 242, 254, 0.3)',
          borderWidth: '1px',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.5 }}
      >
        {cursorText && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold tracking-widest text-icy-500 uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-icy-500 shadow-cyan-glow"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorVariant === 'hover' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.1 }}
      />
    </>
  );
}
