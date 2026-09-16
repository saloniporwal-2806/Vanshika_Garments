import React from 'react';
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-12 sm:py-16 bg-cream-100 border-t border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Customer Love & Reviews</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-burgundy-950">
            Trusted by Families Across the City
          </h2>
          <p className="mt-2 text-charcoal-muted text-xs sm:text-base">
            Over 15,000+ satisfied clients have experienced our tailoring, fabric quality, and personalized WhatsApp service.
          </p>
        </div>

        {/* Testimonials Grid (1 col on mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-beige-300 shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-gold-light shrink-0" />
                </div>

                {/* Outfit Category Badge */}
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cream-200 text-burgundy-800 border border-beige-300">
                  {t.category}
                </span>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed italic break-words">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & City */}
              <div className="pt-3.5 sm:pt-4 mt-3.5 sm:mt-4 border-t border-beige-200 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-charcoal truncate">
                    {t.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-charcoal-muted truncate">{t.city} • {t.date}</p>
                </div>
                <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium shrink-0">
                  <CheckCircle className="w-3 h-3 shrink-0" />
                  <span>{t.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
