import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import CartDrawer from './components/layout/CartDrawer';
import HeroSection from './components/sections/HeroSection';
import ProductGrid from './components/sections/ProductGrid';
import PromoBannerSection from './components/sections/PromoBannerSection';
import SourcingSection from './components/sections/SourcingSection';
import ReviewsSection from './components/sections/ReviewsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import ExpoPage from './pages/ExpoPage';

// Strip Banner Component for Expo (Prominently placed towards bottom of header with green farming expo theme)
function ExpoStripBanner() {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white px-4 py-2.5 text-center text-xs sm:text-sm font-semibold shadow-md border-b border-emerald-700/50 flex items-center justify-center flex-wrap gap-2 sm:gap-3 z-30">
      <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shrink-0 shadow-sm">
        🌾 EXPO 2027
      </span>
      <span className="tracking-wide text-slate-100">
        Join Snowflakz Foods as a Co-Organizer at the <strong className="font-extrabold text-amber-300 underline decoration-amber-400/40">India International Farming Expo 2027</strong>!
      </span>
      <a
        href="#expo"
        className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-3.5 py-1 rounded-full text-xs transition-all shadow-md hover:scale-105 ml-1 whitespace-nowrap"
      >
        <span>Learn More & Register</span>
        <span className="font-black">&rarr;</span>
      </a>
    </div>
  );
}

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isExpoPage = currentHash === '#expo';

  return (
    <ThemeProvider>
      <CartProvider>
        {/* Header Navigation */}
        <Navbar />

        {/* Prominent Strip Banner positioned below Header / towards bottom of Nav */}
        {!isExpoPage && <ExpoStripBanner />}

        {/* E-commerce & Sample Request Basket Drawer */}
        <CartDrawer />

        {/* Main Content conditionally rendered */}
        <main id="main-content">
          {isExpoPage ? (
            <ExpoPage />
          ) : (
            <>
              {/* 1. Hero Section */}
              <HeroSection />
              
              {/* 2. Products Range */}
              <ProductGrid />

              {/* 3. Farming Sources (Organic & Hygienic Farming & Processing) */}
              <SourcingSection />

              {/* 4. B2B Wholesale & Sample Request Banner */}
              <PromoBannerSection />

              {/* 6. Customer Reviews */}
              <ReviewsSection />

              {/* 7. Contact & Commercial Inquiry Form */}
              <ContactSection />
            </>
          )}
        </main>

        {/* Footer */}
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
}
