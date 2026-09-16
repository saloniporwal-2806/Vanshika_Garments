import React from 'react';
import { Scissors, Truck, MessageSquareQuote, ShieldCheck } from 'lucide-react';

export default function FeaturesBanner() {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-burgundy-600" />,
      title: "100% Quality Fabric",
      desc: "Pure cotton, Chanderi silk, Banarasi brocade & French linen tailored for Indian seasons."
    },
    {
      icon: <Scissors className="w-5 h-5 sm:w-6 sm:h-6 text-gold-dark" />,
      title: "Alteration Support",
      desc: "Kurtas, shirts and trousers can be altered to your personalized fit with ease."
    },
    {
      icon: <MessageSquareQuote className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
      title: "WhatsApp Stylist",
      desc: "Direct guidance or close-up fabric photos on WhatsApp before placing your order."
    },
    {
      icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-burgundy-600" />,
      title: "Pan-India Delivery",
      desc: "Carefully steam-ironed, sanitize-packaged, and dispatched with trusted courier partners."
    }
  ];

  return (
    <section id="features" className="py-10 sm:py-14 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-beige-300 shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col items-start"
            >
              <div className="p-2.5 sm:p-3 rounded-xl bg-cream-100 border border-beige-300 mb-3 sm:mb-4">
                {f.icon}
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-1.5">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
