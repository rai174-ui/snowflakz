import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function SnowflakeCanvas({
  particleCount = 70,
  speedMultiplier = 1.0,
  connectionDistance = 140,
  glowColor = '#00F2FE',
  interactive = true,
  className = '',
}) {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse & Ripple State
    const mouse = { x: -1000, y: -1000, radius: 180 };
    const ripples = [];

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleClick = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        maxRadius: 220,
        alpha: 0.8,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Create Particles
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8 * speedMultiplier,
        vy: (Math.random() - 0.5) * 0.8 * speedMultiplier,
        radius: Math.random() * 2.5 + 1.2,
        density: Math.random() * 20 + 1,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
        type: i % 5 === 0 ? 'crystal' : 'dot', // 20% 6-point crystal nodes
      });
    }

    // Draw 6-point snowflake crystal
    const drawCrystal = (x, y, r, angle) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = glowColor;
      ctx.lineWidth = 1;

      for (let i = 0; i < 6; i++) {
        ctx.rotate(Math.PI / 3);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, r * 2.5);
        ctx.stroke();

        // Branchlets
        ctx.beginPath();
        ctx.moveTo(0, r * 1.2);
        ctx.lineTo(r * 0.8, r * 1.8);
        ctx.moveTo(0, r * 1.2);
        ctx.lineTo(-r * 0.8, r * 1.8);
        ctx.stroke();
      }
      ctx.restore();
    };

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & Update Shockwave Ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += 4;
        rip.alpha -= 0.015;

        if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 242, 254, ${rip.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }

      // Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx * speedMultiplier;
        p.y += p.vy * speedMultiplier;
        p.angle += p.spin;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse Gravitational Interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const forceDirectionX = dx / dist;
          const forceDirectionY = dy / dist;
          const force = (mouse.radius - dist) / mouse.radius;
          const directionX = forceDirectionX * force * p.density * 0.05;
          const directionY = forceDirectionY * force * p.density * 0.05;

          p.x -= directionX;
          p.y -= directionY;
        }

        // Ripple Force Push
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const rdx = p.x - rip.x;
          const rdy = p.y - rip.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
          if (Math.abs(rdist - rip.radius) < 25) {
            p.x += (rdx / rdist) * 3;
            p.y += (rdy / rdist) * 3;
          }
        }

        // Draw Particle
        if (p.type === 'crystal') {
          drawCrystal(p.x, p.y, p.radius, p.angle);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = glowColor;
          ctx.shadowBlur = 10;
          ctx.shadowColor = glowColor;
          ctx.fill();
        }

        // Draw Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < connectionDistance) {
            const alpha = (1 - cdist / connectionDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [particleCount, speedMultiplier, connectionDistance, glowColor, interactive, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={`absolute inset-0 bg-dark-950/50 ${className}`} />;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-auto z-0 ${className}`}
    />
  );
}
