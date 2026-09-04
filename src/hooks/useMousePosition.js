import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, vx: 0, vy: 0 });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      const vx = e.clientX - lastX;
      const vy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        vx,
        vy
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}
