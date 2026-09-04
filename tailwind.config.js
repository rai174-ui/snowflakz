/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070A0F',
          900: '#0B0F17',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
        },
        icy: {
          400: '#38BDF8',
          500: '#00F2FE',
          600: '#0284C7',
          glow: 'rgba(0, 242, 254, 0.25)',
        },
        violet: {
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          glow: 'rgba(124, 58, 237, 0.25)',
        },
        frost: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
        }
      },
      fontFamily: {
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass-glow': '0 0 25px -5px rgba(0, 242, 254, 0.2), 0 0 15px -5px rgba(124, 58, 237, 0.15)',
        'cyan-glow': '0 0 20px -3px rgba(0, 242, 254, 0.4)',
        'violet-glow': '0 0 20px -3px rgba(124, 58, 237, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
