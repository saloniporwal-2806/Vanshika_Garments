import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/storeInfo';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative mb-2 max-w-[210px] sm:max-w-[260px] bg-white rounded-2xl p-2.5 sm:p-3 shadow-xl border border-beige-300 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 p-1 rounded-full bg-cream-300 hover:bg-cream-400 text-charcoal shadow-sm transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1 animate-ping" />
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-charcoal">Need help with styles or size?</p>
              <p className="text-[10px] sm:text-[11px] text-charcoal-muted leading-tight mt-0.5">
                Chat with our assistant directly on WhatsApp!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Direct WhatsApp Chat"
      >
        {/* Glow Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-emerald-500 relative z-10" />
      </a>
    </div>
  );
}
