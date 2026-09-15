import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Search, MapPin } from 'lucide-react';
import { getWhatsAppLink } from '../data/storeInfo';

export default function Navbar({ onSearchClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Women & Girls', href: '#women-girls' },
    { name: 'Men & Boys', href: '#men-boys' },
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Lookbook', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Store & Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-cream-100/95 backdrop-blur-md shadow-md border-b border-burgundy-900/10 py-3' 
        : 'bg-cream-200 border-b border-beige-300 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-burgundy-600 text-cream-50 flex items-center justify-center font-serif text-xl font-bold shadow-md ring-2 ring-gold/40 group-hover:bg-burgundy-700 transition-colors">
            VG
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-burgundy-900 block leading-tight">
              Vanshika <span className="text-gold-dark font-normal">Garments</span>
            </span>
            <span className="text-[10px] sm:text-xs text-charcoal-muted tracking-widest uppercase font-medium block">
              Girls • Women • Boys • Men
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium text-charcoal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-charcoal-light hover:text-burgundy-600 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burgundy-600 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions (Search, WhatsApp, Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search trigger */}
          <button
            onClick={onSearchClick}
            type="button"
            className="p-2 text-charcoal-light hover:text-burgundy-600 hover:bg-cream-300/60 rounded-full transition-colors"
            title="Search Catalogue"
            aria-label="Search Catalogue"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* WhatsApp CTA Button */}
          <a
            href={getWhatsAppLink("Hello Vanshika Garments, I would like to inquire about your clothing collection.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-burgundy-600 hover:bg-burgundy-700 shadow-sm transition-all hover:shadow-luxury transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>WhatsApp Enquiry</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal rounded-lg hover:bg-cream-300 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-burgundy-700" /> : <Menu className="w-6 h-6 text-charcoal" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-100 border-b border-beige-300 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-charcoal hover:bg-burgundy-50 hover:text-burgundy-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-beige-200 flex flex-col gap-2">
            <a
              href={getWhatsAppLink("Hello Vanshika Garments, I would like to inquire about your collection.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-burgundy-600 text-white font-medium text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Chat on WhatsApp</span>
            </a>
            
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cream-300 text-charcoal font-medium text-sm hover:bg-cream-400 transition-colors"
            >
              <MapPin className="w-4 h-4 text-burgundy-600" />
              <span>Visit Store (Shop 18-21, Fashion Arcade)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
