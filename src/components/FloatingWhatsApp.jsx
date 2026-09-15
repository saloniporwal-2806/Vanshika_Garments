import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/storeInfo';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative mb-2.5 max-w-[260px] bg-white rounded-2xl p-3 shadow-xl border border-beige-300 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 p-1 rounded-full bg-cream-300 hover:bg-cream-400 text-charcoal shadow-sm"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1 animate-ping" />
            <div>
              <p className="text-xs font-bold text-charcoal">Need help with sizing?</p>
              <p className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                Chat with our store styling assistant directly on WhatsApp!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        href={getWhatsAppLink("Hello Vanshika Garments, I'm visiting your website and would like assistance with your clothing collection.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Direct WhatsApp Chat"
      >
        {/* Glow Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500 relative z-10" />
      </a>
    </div>
  );
}
