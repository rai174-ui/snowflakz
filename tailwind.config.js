/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Merriweather', 'serif'],
      },
      colors: {
        brand: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
          900: '#78350F',
          dark: '#0F172A',
        }
      },
      borderRadius: {
        'ast': '5px', // Astra Theme Standard Button Radius
      }
    },
  },
  plugins: [],
};
