import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, Headphones, Sparkles, MapPin, Mail } from 'lucide-react';
import { storeInfo, getWhatsAppLink } from '../data/storeInfo';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    categoryInterest: 'Women Ethnic Wear',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare prefilled WhatsApp message from the form
    const msg = `Hello Vanshika Garments!
Name: ${formState.name}
Phone: ${formState.phone}
Interested in: ${formState.categoryInterest}
Message: ${formState.message || 'I would like to know more about your collection.'}`;
    
    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-cream-100 border-t border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <Headphones className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Connect & Assistance</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-burgundy-950">
            Contact Vanshika Garments
          </h2>
          <p className="mt-2 text-charcoal-muted text-xs sm:text-base">
            We are here to assist you with festive outfits, family coordination, custom fits, and instant WhatsApp inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Direct Phone, WhatsApp & Support Information */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            {/* Store Information Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-beige-300 shadow-card space-y-5">
              
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-burgundy-100 text-burgundy-700 shrink-0">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal">
                    {storeInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mt-0.5">
                    {storeInfo.tagline}
                  </p>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-beige-200">
                
                {/* Phone */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-cream-100 border border-beige-300/80">
                  <div className="p-2 rounded-lg bg-cream-200 text-burgundy-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-charcoal">Phone / Call Now</h4>
                    <a
                      href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs text-burgundy-700 font-semibold hover:underline block mt-0.5 truncate"
                    >
                      {storeInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-cream-100 border border-beige-300/80">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-charcoal">WhatsApp Direct</h4>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-700 font-semibold hover:underline block mt-0.5 truncate"
                    >
                      {storeInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email (Render only if provided) */}
                {storeInfo.email && (
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-cream-100 border border-beige-300/80 sm:col-span-2">
                    <div className="p-2 rounded-lg bg-cream-200 text-burgundy-700 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-charcoal">Email Support</h4>
                      <a
                        href={`mailto:${storeInfo.email}`}
                        className="text-xs text-charcoal-muted hover:text-burgundy-700 transition-colors block mt-0.5 break-all"
                      >
                        {storeInfo.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Address (Render only if provided) */}
                {storeInfo.address && (
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-cream-100 border border-beige-300/80 sm:col-span-2">
                    <div className="p-2 rounded-lg bg-cream-200 text-burgundy-700 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-charcoal">Store Address</h4>
                      <p className="text-xs text-charcoal-muted mt-0.5 break-words">
                        {storeInfo.address}
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Direct Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:bg-emerald-800"
                >
                  <MessageCircle className="w-4 h-4 text-white shrink-0" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl border border-beige-400 bg-cream-100 hover:bg-cream-200 text-charcoal font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:bg-cream-300"
                >
                  <Phone className="w-4 h-4 text-burgundy-700 shrink-0" />
                  <span>Call Now</span>
                </a>
              </div>

            </div>

            {/* Assistance Information Card (Clean, Real Info Only) */}
            <div className="bg-white rounded-2xl p-5 border border-beige-300 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-gold-light/40 text-charcoal shrink-0">
                  <Headphones className="w-5 h-5 text-burgundy-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal">
                    Personalized WhatsApp Assistance
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                    Have questions about sizing, fabric feel, or availability? Message us directly on WhatsApp at <strong>{storeInfo.phoneDisplay}</strong> and we'll share photos, size charts, and order options.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-beige-300 shadow-card">
              
              <div className="mb-5 sm:mb-6">
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-burgundy-950">
                  Quick Fashion Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                  Fill in your requirements below. Clicking submit will automatically open WhatsApp with your details pre-formatted!
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-base sm:text-lg font-bold text-emerald-950">Inquiry Generated!</h4>
                  <p className="text-xs text-emerald-800">
                    WhatsApp has been opened with your inquiry details. Our team will respond promptly with catalog photos and size options.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-emerald-900 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma / Rohan Verma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-cream-100 border border-beige-300 focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                        WhatsApp / Mobile No. *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 70111 XXXXX"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-cream-100 border border-beige-300 focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                        Clothing Category *
                      </label>
                      <select
                        value={formState.categoryInterest}
                        onChange={(e) => setFormState({ ...formState, categoryInterest: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-cream-100 border border-beige-300 focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 text-xs sm:text-sm outline-none transition-all"
                      >
                        <option value="Women Kurtis & Tunics">Women Kurtis & Tunics</option>
                        <option value="Women Kurta Sets & Dupatta">Women Kurta Sets & Dupatta</option>
                        <option value="Women Co-ord Sets">Women Co-ord Sets</option>
                        <option value="Girls Festive & Dresses">Girls Festive & Dresses</option>
                        <option value="Men Linen & Cotton Shirts">Men Linen & Cotton Shirts</option>
                        <option value="Men Ethnic Kurta Pajama">Men Ethnic Kurta Pajama</option>
                        <option value="Men Lowers & Trousers">Men Lowers & Trousers</option>
                        <option value="Boys Ethnic & Party Sets">Boys Ethnic & Party Sets</option>
                        <option value="Custom Family Matching Outfits">Custom Family Matching Outfits</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                      Specific Requirements or Preferred Sizing (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Looking for Size L in Wine Anarkali for upcoming function, or looking for matching father-son festive kurta..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-cream-100 border border-beige-300 focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 text-xs sm:text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 px-6 rounded-xl bg-burgundy-600 hover:bg-burgundy-700 text-white font-bold text-xs sm:text-sm shadow-luxury hover:shadow-luxury-hover transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>Send Inquiry to WhatsApp</span>
                  </button>

                  <p className="text-[10px] sm:text-[11px] text-center text-charcoal-muted">
                    🔒 Direct connection with official Vanshika Garments store representative.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
