import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import GalleryPage from './pages/GalleryPage'; // Import GalleryPage
import GalleryCategoryPage from './pages/GalleryCategoryPage'; // Import GalleryCategoryPage

import WhatsAppButton from './components/WhatsAppButton';
export function App() {
  const [language, setLanguage] = useState('en');
  const [activePage, setActivePage] = useState('home');
  const HomePage = () => <>
      <HeroSection language={language} />
      <ServicesSection language={language} />
      <PortfolioSection language={language} />
      <TestimonialsSection language={language} />
      <ContactSection language={language} />
    </>;
  return <Router>
      <div className={`w-full min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <Navigation language={language} setLanguage={setLanguage} activePage={activePage} setActivePage={setActivePage} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage language={language} />} />
            <Route path="/blog/:id" element={<BlogPostPage language={language} />} />
            {/* Add Gallery Routes */}
            <Route path="/gallery" element={<GalleryPage language={language} />} /> {/* Pass language prop */}
            <Route path="/gallery/:categoryId" element={<GalleryCategoryPage language={language} />} /> {/* Pass language prop */}
          </Routes>
        </main>
        <Footer language={language} />
        <WhatsAppButton language={language} />
      </div>
    </Router>;
}
