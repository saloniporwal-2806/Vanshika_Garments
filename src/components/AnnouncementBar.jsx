import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { storeInfo, getWhatsAppLink } from '../data/storeInfo';

export default function AnnouncementBar() {
  return (
    <div className="bg-burgundy-900 text-cream-200 text-xs sm:text-sm py-2 px-4 border-b border-burgundy-800 tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse shrink-0" />
          <span>
            <strong className="text-gold font-medium">Festive & Wedding Season Special:</strong> Handpicked Kurtis, Kurta Sets, Linen Shirts & Kids Wear
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a
            href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1 hover:text-gold transition-colors"
          >
            <Phone className="w-3 h-3 text-gold" />
            <span className="hidden md:inline">{storeInfo.phoneDisplay}</span>
            <span className="md:hidden">Call</span>
          </a>
          <span className="text-burgundy-600">|</span>
          <a
            href={getWhatsAppLink("Hello Vanshika Garments, I'd like to inquire about your collection.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gold-light hover:text-cream-50 font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct WhatsApp Order</span>
          </a>
        </div>
      </div>
    </div>
  );
}
