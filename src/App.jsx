import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import CustomCursor from './components/ui/CustomCursor';
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

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        {/* Custom Interactive Follower */}
        <CustomCursor />

        {/* Header Navigation */}
        <Navbar />

        {/* E-commerce Shopping Basket Drawer */}
        <CartDrawer />

        {/* Main Content */}
        <main id="main-content" className="relative z-10">
          <HeroSection />
          <ValuePillarsSection />
          <ProductGrid />
          <PromoBannerSection />
          <SourcingSection />
          <ReviewsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
}
