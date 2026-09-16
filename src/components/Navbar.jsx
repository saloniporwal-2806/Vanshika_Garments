import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Search, Phone } from 'lucide-react';
import { storeInfo, getWhatsAppLink } from '../data/storeInfo';

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

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Women & Girls', href: '#women-girls' },
    { name: 'Men & Boys', href: '#men-boys' },
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Lookbook', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-cream-100/95 backdrop-blur-md shadow-md border-b border-burgundy-900/10 py-2.5 sm:py-3' 
        : 'bg-cream-200 border-b border-beige-300 py-3 sm:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-burgundy-600 text-cream-50 flex items-center justify-center font-serif text-base sm:text-xl font-bold shadow-md ring-2 ring-gold/40 group-hover:bg-burgundy-700 transition-colors shrink-0">
            VG
          </div>
          <div className="truncate">
            <span className="font-serif text-base sm:text-2xl font-bold tracking-tight text-burgundy-950 block leading-tight truncate">
              Vanshika <span className="text-gold-dark font-normal">Garments</span>
            </span>
            <span className="text-[9px] sm:text-xs text-charcoal-muted tracking-widest uppercase font-medium block truncate">
              Girls • Women • Boys • Men
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 text-sm font-medium text-charcoal">
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

        {/* Actions (Search, WhatsApp, Call, Mobile Toggle) */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Quick Search Trigger */}
          <button
            onClick={onSearchClick}
            type="button"
            className="p-2 text-charcoal-light hover:text-burgundy-600 hover:bg-cream-300/60 rounded-full transition-colors"
            title="Search Catalogue"
            aria-label="Search Catalogue"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Desktop WhatsApp CTA Button */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-burgundy-600 hover:bg-burgundy-700 shadow-sm transition-all hover:shadow-luxury transform hover:-translate-y-0.5"
            aria-label="WhatsApp Enquiry"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>WhatsApp Enquiry</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal rounded-lg hover:bg-cream-300 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-burgundy-700" /> : <Menu className="w-6 h-6 text-charcoal" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[57px] sm:top-[69px] bottom-0 z-50 bg-charcoal/50 backdrop-blur-xs lg:hidden animate-in fade-in duration-200">
          <div className="bg-cream-100 border-b border-beige-300 px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm sm:text-base font-medium text-charcoal hover:bg-burgundy-50 hover:text-burgundy-700 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-beige-300 flex flex-col gap-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-md active:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white shrink-0" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-burgundy-600 text-white font-semibold text-sm shadow-sm active:bg-burgundy-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-light shrink-0" />
                <span>Call Us ({storeInfo.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
