import React, { useState, useRef } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBanner from './components/FeaturesBanner';
import CategoriesSection from './components/CategoriesSection';
import ProductCatalogue from './components/ProductCatalogue';
import ProductDetailModal from './components/ProductDetailModal';
import GalleryLightbox from './components/GalleryLightbox';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    const el = document.getElementById('catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 500);
    }
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    const el = document.getElementById('catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-200 text-charcoal font-sans selection:bg-burgundy-600 selection:text-cream-50">
      
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Luxury Header & Navigation */}
      <Navbar onSearchClick={handleSearchClick} />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 4. Brand Trust Badges & Highlights */}
        <FeaturesBanner />

        {/* 5. Girls & Women / Boys & Men Category Showcases */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* 6. Interactive Product Catalogue (Search, Filters, Sorting) */}
        <ProductCatalogue
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onQuickView={(prod) => setSelectedProduct(prod)}
          searchInputRef={searchInputRef}
        />

        {/* 7. Lookbook Gallery & Lightbox */}
        <GalleryLightbox />

        {/* 8. Customer Testimonials & Reviews */}
        <Testimonials />

        {/* 9. Interactive FAQ Accordion */}
        <FaqSection />

        {/* 10. Store Location & WhatsApp Contact Form */}
        <ContactSection />
      </main>

      {/* 11. Luxury Footer */}
      <Footer onCategoryClick={handleSelectCategory} />

      {/* 12. Floating WhatsApp Assistant Button */}
      <FloatingWhatsApp />

      {/* 13. Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          key={selectedProduct.id}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}
