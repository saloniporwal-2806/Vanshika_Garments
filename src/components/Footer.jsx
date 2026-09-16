import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUp, Heart, Sparkles, Check, MapPin, Mail } from 'lucide-react';
import { storeInfo, getWhatsAppLink } from '../data/storeInfo';

export default function Footer({ onCategoryClick }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-charcoal text-cream-200 border-t border-burgundy-900/40">
      
      {/* Top Banner inside Footer */}
      <div className="border-b border-charcoal-light py-8 sm:py-10 bg-burgundy-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50 flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0" />
              <span>Get Exclusive Festive New Arrivals First</span>
            </h3>
            <p className="text-xs sm:text-sm text-cream-300">
              Join our WhatsApp VIP broadcast or subscribe for weekly new style drops.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row max-w-md gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl bg-charcoal text-white text-xs sm:text-sm border border-charcoal-light focus:border-gold outline-none flex-1 min-w-0"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-burgundy-600 hover:bg-burgundy-500 text-white font-semibold text-xs sm:text-sm transition-colors shrink-0 flex items-center justify-center gap-1.5 active:bg-burgundy-700"
            >
              {subscribed ? <Check className="w-4 h-4 text-emerald-300" /> : null}
              <span>{subscribed ? 'Subscribed' : 'Join VIP'}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Story Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-burgundy-600 text-cream-50 flex items-center justify-center font-serif text-xl font-bold shadow-md ring-2 ring-gold/40 shrink-0">
                VG
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-cream-50">
                Vanshika <span className="text-gold">Garments</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-cream-300 leading-relaxed">
              Serving our customers with premium ethnic and modern everyday clothing for Girls, Women, Boys, and Men. 
              Known for fine fabric quality, authentic Indian craftsmanship, and genuine personal care.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow transition-colors"
                aria-label="Official WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp ({storeInfo.phoneDisplay})</span>
              </a>

              <a
                href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal-light hover:bg-charcoal-muted text-white text-xs font-semibold transition-colors"
                aria-label="Call Vanshika Garments"
              >
                <Phone className="w-3 h-3 text-gold shrink-0" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Girls & Women Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-gold">
              Women & Girls
            </h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('kurtis')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Designer Kurtis
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('kurta-sets')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Kurta Sets & Dupattas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('co-ords')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Chic Co-ord Sets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('women-dresses')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Party & Midi Dresses
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('girls-festive')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Girls Festive & Lehengas
                </button>
              </li>
            </ul>
          </div>

          {/* Boys & Men Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-gold">
              Men & Boys
            </h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('men-shirts')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Pure Linen & Twill Shirts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('men-kurta')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Ethnic Kurta Pajamas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('t-shirts')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Pique Cotton Polo T-Shirts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('lowers')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Commuter Stretch Lowers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick('boys-wear')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Boys Nehru Jacket Sets
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-gold">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-cream-300">
              {storeInfo.address && (
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span className="break-words">{storeInfo.address}</span>
                </p>
              )}
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <a
                  href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
                  className="hover:text-gold transition-colors"
                >
                  {storeInfo.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: {storeInfo.phoneDisplay}
                </a>
              </p>
              {storeInfo.email && (
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                  <a
                    href={`mailto:${storeInfo.email}`}
                    className="hover:text-gold transition-colors break-all"
                  >
                    {storeInfo.email}
                  </a>
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Back to Top */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-charcoal-light flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/70">
          <p className="flex items-center gap-1 text-center sm:text-left flex-wrap justify-center sm:justify-start">
            <span>&copy; {new Date().getFullYear()} Vanshika Garments. All Rights Reserved. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline shrink-0" />
            <span>for family fashion.</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-light hover:bg-burgundy-800 text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
