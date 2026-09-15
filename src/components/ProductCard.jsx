import React from 'react';
import { Eye, MessageCircle, Star } from 'lucide-react';
import { getProductWhatsAppLink } from '../data/storeInfo';

export default function ProductCard({ product, onQuickView }) {
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-beige-300 shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col">
      
      {/* Image Container with Badges and Overlay Actions */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {product.tag && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm bg-burgundy-600 text-white">
              {product.tag}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white shadow-sm">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Top Right Product Code Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono font-medium text-charcoal border border-beige-300">
          {product.code}
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="px-4 py-2.5 rounded-xl bg-white text-charcoal font-semibold text-xs shadow-lg hover:bg-burgundy-600 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View Details</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Rating and Reviews */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-amber-600 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-charcoal-muted font-normal">({product.reviewsCount})</span>
            </div>
            <span className="text-[11px] text-charcoal-muted uppercase tracking-wider font-medium">
              {product.group === 'women' ? "Women / Girls" : "Men / Boys"}
            </span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-sm sm:text-base font-bold text-charcoal group-hover:text-burgundy-700 transition-colors line-clamp-2 cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          {/* Fabric Badge */}
          <p className="text-xs text-charcoal-muted line-clamp-1">
            <span className="font-medium text-charcoal">Fabric:</span> {product.fabric}
          </p>

          {/* Size Pills */}
          <div className="flex flex-wrap gap-1 pt-1">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="px-1.5 py-0.5 rounded bg-cream-200 text-[10px] text-charcoal font-medium border border-beige-300"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="px-1 py-0.5 text-[10px] text-charcoal-muted">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Pricing & WhatsApp Order CTA */}
        <div className="pt-2 border-t border-beige-200">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-serif text-lg sm:text-xl font-bold text-burgundy-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs sm:text-sm text-charcoal-muted line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="w-full py-2 px-2.5 rounded-lg border border-burgundy-300 bg-cream-100 hover:bg-cream-200 text-burgundy-800 font-medium text-xs transition-colors flex items-center justify-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <a
              href={getProductWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
