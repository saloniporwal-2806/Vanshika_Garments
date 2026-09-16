import React, { useState, useEffect } from 'react';
import { X, Star, MessageCircle, Check, Share2, ShieldCheck, RefreshCw, Truck } from 'lucide-react';
import { getProductWhatsAppLink } from '../data/storeInfo';

export default function ProductDetailModal({ product, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [copied, setCopied] = useState(false);

  // Close on Escape key press & prevent background scroll
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Save original overflow
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [product, onClose]);

  if (!product) return null;

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappLink = getProductWhatsAppLink(product);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-beige-300 w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="sticky sm:absolute top-3 right-3 sm:top-4 sm:right-4 z-30 ml-auto p-2 rounded-full bg-cream-200/90 hover:bg-cream-300 text-charcoal shadow-sm transition-colors block"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 p-4 sm:p-8 pt-0 sm:pt-8">
          
          {/* Left: Product Images & Gallery */}
          <div className="space-y-2.5 sm:space-y-3">
            <div className="relative aspect-[3/4] max-h-[360px] sm:max-h-none rounded-2xl overflow-hidden bg-cream-100 border border-beige-300 mx-auto w-full">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
              
              {product.tag && (
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-burgundy-600 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase">
                  {product.tag}
                </div>
              )}
            </div>

            {/* Thumbnails if multiple images exist */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-16 sm:w-16 sm:h-20 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx ? 'border-burgundy-600 ring-2 ring-burgundy-200' : 'border-beige-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details, Size Selector, WhatsApp CTA */}
          <div className="flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              {/* Product Code & Group */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] sm:text-xs font-mono font-medium text-charcoal-muted bg-cream-200 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-beige-300">
                  CODE: {product.code}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-burgundy-700">
                  {product.group === 'women' ? 'Girls & Women Collection' : 'Boys & Men Collection'}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-burgundy-950 leading-tight break-words">
                {product.name}
              </h2>

              {/* Ratings */}
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-charcoal">{product.rating}</span>
                <span className="text-charcoal-muted text-[11px] sm:text-xs">({product.reviewsCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 sm:gap-3 py-2 border-y border-beige-200">
                <span className="font-serif text-xl sm:text-3xl font-bold text-burgundy-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs sm:text-base text-charcoal-muted line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Save {discountPercent}%
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed break-words">
                {product.description}
              </p>

              {/* Fabric & Fit Details */}
              <div className="bg-cream-100 p-3 rounded-xl border border-beige-300 space-y-1 text-xs">
                <div>
                  <span className="font-semibold text-charcoal">Fabric:</span> {product.fabric}
                </div>
                <div>
                  <span className="font-semibold text-charcoal">Silhouette & Fit:</span> {product.fit}
                </div>
                <div>
                  <span className="font-semibold text-charcoal">Recommended Occasion:</span> {product.occasion}
                </div>
              </div>

              {/* Color Swatches */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-charcoal block">
                    Select Color: <span className="text-burgundy-700">{selectedColor}</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          selectedColor === c
                            ? 'bg-burgundy-700 text-white border-burgundy-700 shadow-sm'
                            : 'bg-cream-100 text-charcoal border-beige-300 hover:border-burgundy-400'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-charcoal">
                    Select Size: <span className="text-burgundy-700">{selectedSize}</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-charcoal-muted">
                    Alterations available in-store
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-[38px] sm:min-w-[42px] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-semibold border transition-all ${
                        selectedSize === s
                          ? 'bg-burgundy-600 text-white border-burgundy-600 shadow-sm ring-2 ring-burgundy-200'
                          : 'bg-white text-charcoal border-beige-300 hover:border-burgundy-500'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Buttons: WhatsApp Order & Share */}
            <div className="pt-3 border-t border-beige-300 space-y-2.5">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-base shadow-md transition-all active:bg-emerald-800"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-emerald-600 shrink-0" />
                <span>Enquire / Order via WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-charcoal-muted pt-1">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-burgundy-700 transition-colors py-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Link Copied!' : 'Share Product'}</span>
                </button>

                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Ready in Stock
                </span>
              </div>

              {/* Service Guarantees */}
              <div className="grid grid-cols-3 gap-1 sm:gap-2 pt-2 border-t border-beige-200 text-center text-[9px] sm:text-[10px] text-charcoal-muted">
                <div className="p-1">
                  <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-auto text-burgundy-700 mb-0.5" />
                  <span>Pan-India Shipping</span>
                </div>
                <div className="p-1">
                  <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-auto text-burgundy-700 mb-0.5" />
                  <span>Easy Exchange</span>
                </div>
                <div className="p-1">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-auto text-burgundy-700 mb-0.5" />
                  <span>100% Quality</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
