import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import WorkSection from './components/sections/WorkSection';
import ServicesSection from './components/sections/ServicesSection';
import LabSection from './components/sections/LabSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <ThemeProvider>
      {/* Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <LabSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}
