import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Sparkles, ZoomIn } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { storeInfo } from '../data/storeInfo';

export default function GalleryLightbox() {
  const [activeIdx, setActiveIdx] = useState(null);

  const isOpen = activeIdx !== null;
  const currentItem = isOpen ? galleryItems[activeIdx] : null;

  const nextImage = () => {
    setActiveIdx((prev) => (prev !== null ? (prev + 1) % galleryItems.length : 0));
  };

  const prevImage = () => {
    setActiveIdx((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0));
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [isOpen, activeIdx]);

  const getGalleryWhatsAppLink = (item) => {
    const msg = `Hello Vanshika Garments, I am interested in ${item?.title || 'this lookbook style'}. Please share more details.`;
    return `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-cream-100 border-t border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Store Lookbook</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-burgundy-950">
            The Vanshika Style Lookbook
          </h2>
          <p className="mt-2 text-charcoal-muted text-xs sm:text-base">
            Click any picture to open full-screen lightbox view or inquire directly for tailored lookbook styles on WhatsApp.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-luxury transition-all duration-300 border border-beige-300 bg-cream-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Zoom Icon Pill */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-xs text-charcoal opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold-light">
                    {item.category}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-cream-50">
                    {item.code}
                  </span>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-cream-50 leading-snug truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-200 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {isOpen && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal/90 backdrop-blur-md transition-opacity"
            onClick={() => setActiveIdx(null)}
          />

          {/* Lightbox Container */}
          <div className="relative z-10 max-w-4xl w-full bg-charcoal rounded-2xl sm:rounded-3xl overflow-hidden border border-burgundy-900/40 shadow-2xl flex flex-col md:flex-row max-h-[92vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveIdx(null)}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-charcoal-light/90 hover:bg-burgundy-600 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Preview Container */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[280px] sm:min-h-[380px] md:min-h-[500px]">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain mx-auto"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-charcoal/70 hover:bg-white text-white hover:text-charcoal transition-colors shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-charcoal/70 hover:bg-white text-white hover:text-charcoal transition-colors shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Side Info & Direct WhatsApp Inquiry */}
            <div className="w-full md:w-80 bg-charcoal p-4 sm:p-6 flex flex-col justify-between text-white space-y-4 border-t md:border-t-0 md:border-l border-charcoal-light">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-wider text-gold">
                    {currentItem.category}
                  </span>
                  <span className="text-xs font-mono text-cream-300">
                    {activeIdx + 1} / {galleryItems.length}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-cream-50 leading-snug break-words">
                  {currentItem.title}
                </h3>

                <p className="text-xs text-cream-300 leading-relaxed">
                  {currentItem.caption}
                </p>

                <div className="p-3 rounded-xl bg-charcoal-light/60 border border-charcoal-muted/30 text-xs space-y-1">
                  <span className="text-gold-light font-semibold block">Lookbook Code:</span>
                  <span className="font-mono text-cream-100">{currentItem.code}</span>
                  <p className="text-[11px] text-cream-300/80 pt-1">
                    Custom stitching, matching accessories, and alterations available on request.
                  </p>
                </div>
              </div>

              {/* WhatsApp Action */}
              <div className="space-y-2 pt-3 border-t border-charcoal-light">
                <a
                  href={getGalleryWhatsAppLink(currentItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:bg-emerald-800"
                >
                  <MessageCircle className="w-4 h-4 text-white shrink-0" />
                  <span>Enquire This Look on WhatsApp</span>
                </a>

                <p className="text-[10px] text-center text-cream-300/60">
                  Direct reply from Vanshika Garments store team
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
