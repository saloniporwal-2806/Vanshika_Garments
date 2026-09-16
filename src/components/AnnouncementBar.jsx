import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { storeInfo, getWhatsAppLink } from '../data/storeInfo';

export default function AnnouncementBar() {
  return (
    <div className="bg-burgundy-900 text-cream-200 text-xs py-2 px-3 sm:px-4 border-b border-burgundy-800 tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-center gap-1.5 text-center sm:text-left">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs">
            <strong className="text-gold font-medium">Festive & Wedding Special:</strong> Kurtis, Kurta Sets, Linen Shirts & Kids Wear
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] sm:text-xs shrink-0">
          <a
            href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1 hover:text-gold transition-colors py-0.5"
            aria-label="Call Vanshika Garments"
          >
            <Phone className="w-3 h-3 text-gold shrink-0" />
            <span>{storeInfo.phoneDisplay}</span>
          </a>
          <span className="text-burgundy-600">|</span>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gold-light hover:text-cream-50 font-medium transition-colors py-0.5"
            aria-label="WhatsApp Order"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>WhatsApp Order</span>
          </a>
        </div>
      </div>
    </div>
  );
}
