import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { getWhatsAppLink } from '../data/storeInfo';

export default function Hero({ onExploreClick }) {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-cream-200">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-festive-pattern bg-[length:24px_24px]" />
      
      {/* Soft gradient accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-burgundy-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-gold-light/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Elegant Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy-100 border border-burgundy-200 text-burgundy-800 text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4 text-gold-dark" />
              <span>Timeless Indian Ethnic & Modern Family Wear</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl xl:text-6xl font-extrabold text-burgundy-950 tracking-tight leading-[1.15]">
              Dressing Every Family with <span className="gold-gradient-text">Grace, Quality & Style</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Step into <strong>Vanshika Garments</strong> — your trusted fashion destination for exquisite 
              <strong> Girls & Women’s ethnic sets, kurtis, party dresses</strong> and 
              <strong> Boys & Men’s premium shirts, kurta-pajamas and comfortable casuals</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-burgundy-600 text-white font-semibold text-base shadow-luxury hover:bg-burgundy-700 transition-all hover:shadow-luxury-hover transform hover:-translate-y-0.5"
              >
                <span>Explore Full Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppLink("Hello Vanshika Garments, I would like to explore your latest collection and ask about size availability.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cream-100 text-charcoal border border-beige-400 font-semibold text-base shadow-sm hover:bg-white hover:border-burgundy-400 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Instant WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-beige-300 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left">
                <ShieldCheck className="w-5 h-5 text-burgundy-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-charcoal">100% Tested</h4>
                  <p className="text-[11px] text-charcoal-muted">Pure Fabrics</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Award className="w-5 h-5 text-gold-dark shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-charcoal">Fair Pricing</h4>
                  <p className="text-[11px] text-charcoal-muted">Direct Value</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left">
                <HeartHandshake className="w-5 h-5 text-burgundy-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-charcoal">15k+ Happy</h4>
                  <p className="text-[11px] text-charcoal-muted">Customers</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Luxury Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Luxury Showcase Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-cream-100 group">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
                  alt="Vanshika Garments Women & Festive Wear Collection"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-xl border border-white/60 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-wider uppercase font-bold text-burgundy-700">Spotlight Style</span>
                      <h4 className="font-serif text-base font-bold text-charcoal">Chanderi Silk Festive Kurti Set</h4>
                      <p className="text-xs text-charcoal-muted">Available in S, M, L, XL, XXL</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-charcoal-muted line-through block">₹3,899</span>
                      <span className="font-serif text-lg font-bold text-burgundy-800">₹2,499</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offset Secondary Image Card (Men's & Linen Collection) */}
              <div className="hidden sm:block absolute -bottom-8 -left-10 z-20 w-48 rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white group hover:scale-105 transition-all">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80"
                  alt="Men Pure Linen Shirts Collection"
                  className="w-full h-44 object-cover object-top"
                />
                <div className="p-2.5 bg-cream-100 text-center">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-dark block">Men's Linen</span>
                  <span className="text-xs font-bold text-charcoal">From ₹1,499</span>
                </div>
              </div>

              {/* Floating Decorative Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-burgundy-700 text-cream-50 px-4 py-2 rounded-full shadow-lg border-2 border-gold font-serif text-xs font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-light" />
                <span>New Festive 2026</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
