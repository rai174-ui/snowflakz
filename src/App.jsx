import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import CartDrawer from './components/layout/CartDrawer';
import HeroSection from './components/sections/HeroSection';
import ValuePillarsSection from './components/sections/ValuePillarsSection';
import ProductGrid from './components/sections/ProductGrid';
import PromoBannerSection from './components/sections/PromoBannerSection';
import SourcingSection from './components/sections/SourcingSection';
import ReviewsSection from './components/sections/ReviewsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import ExpoPage from './pages/ExpoPage';

// Strip Banner Component for Expo
function ExpoStripBanner() {
  return (
    <div className="bg-amber-500 text-slate-950 px-4 py-2 text-center text-sm font-semibold flex items-center justify-center flex-wrap">
      <span>
        🚀 Join Snowflakz Foods as a Co-Organizer at the <strong>India International Farming Expo 2027</strong>!
      </span>
      <a href="#expo" className="underline hover:text-white transition-colors ml-2 whitespace-nowrap">
        Learn More &rarr;
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
        {/* Strip Banner at very top */}
        {!isExpoPage && <ExpoStripBanner />}
        
        {/* Header Navigation */}
        <Navbar />

        {/* E-commerce Shopping Basket Drawer */}
        <CartDrawer />

        {/* Main Content conditionally rendered */}
        <main id="main-content">
          {isExpoPage ? (
            <ExpoPage />
          ) : (
            <>
              <HeroSection />
              <ValuePillarsSection />
              <ProductGrid />
              <PromoBannerSection />
              <SourcingSection />
              <ReviewsSection />
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
