import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Navigation } from 'lucide-react';
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
    <section id="contact" className="py-16 bg-cream-100 border-t border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-gold-dark" />
            <span>Store Visit & Assistance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy-950">
            Visit Our Store or Connect Today
          </h2>
          <p className="mt-2 text-charcoal-muted text-sm sm:text-base">
            We are here to assist you with festive outfits, family coordination, custom fits, and instant WhatsApp inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Phone, Timings & Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Store Information Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-beige-300 shadow-card space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-burgundy-100 text-burgundy-700 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal">
                    Store Location & Address
                  </h3>
                  <address className="not-italic text-sm text-charcoal-muted leading-relaxed mt-1">
                    <strong>{storeInfo.name}</strong><br />
                    {storeInfo.address.line1}<br />
                    {storeInfo.address.line2}<br />
                    Landmark: {storeInfo.address.landmark}<br />
                    {storeInfo.address.city}, {storeInfo.address.state} - {storeInfo.address.pincode}, {storeInfo.address.country}
                  </address>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-beige-200">
                
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-cream-200 text-burgundy-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal">Phone & Support</h4>
                    <a
                      href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs text-charcoal-muted hover:text-burgundy-700 transition-colors block mt-0.5"
                    >
                      {storeInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-cream-200 text-burgundy-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal">Email Support</h4>
                    <a
                      href={`mailto:${storeInfo.email}`}
                      className="text-xs text-charcoal-muted hover:text-burgundy-700 transition-colors block mt-0.5"
                    >
                      {storeInfo.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="p-2.5 rounded-lg bg-cream-200 text-burgundy-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal">Store Opening Hours</h4>
                    <p className="text-xs text-charcoal-muted mt-0.5">
                      {storeInfo.timings.weekdays}<br />
                      {storeInfo.timings.sunday}
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink("Hello Vanshika Garments, I would like directions or store details to visit in person.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
                  className="py-3 px-5 rounded-xl border border-beige-400 bg-cream-100 hover:bg-cream-200 text-charcoal font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-burgundy-700" />
                  <span>Call Store</span>
                </a>
              </div>

            </div>

            {/* Visual Store Map Placeholder Card */}
            <div className="bg-white rounded-2xl p-4 border border-beige-300 shadow-sm relative overflow-hidden">
              <div className="h-44 rounded-xl bg-burgundy-900/10 border border-beige-300 relative flex items-center justify-center text-center p-4">
                <div className="space-y-1.5 z-10">
                  <Navigation className="w-8 h-8 text-burgundy-700 mx-auto animate-bounce" />
                  <h4 className="font-serif text-sm font-bold text-charcoal">
                    Royal Fashion Arcade, Main Market Road
                  </h4>
                  <p className="text-xs text-charcoal-muted">
                    Opposite Grand Heritage Plaza • Central Parking Available
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] text-burgundy-700 underline font-bold mt-1"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-beige-300 shadow-card">
              
              <div className="mb-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-950">
                  Quick Fashion Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                  Fill in your requirements below. Clicking submit will automatically open WhatsApp with your details pre-formatted for express handling!
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Inquiry Generated!</h4>
                  <p className="text-xs text-emerald-800">
                    WhatsApp has been opened with your inquiry. Our stylist will respond promptly with catalog photos and size options.
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
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-beige-300 focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                        WhatsApp / Mobile No. *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 XXXXX"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-beige-300 focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                        Clothing Category *
                      </label>
                      <select
                        value={formState.categoryInterest}
                        onChange={(e) => setFormState({ ...formState, categoryInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-beige-300 focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 text-sm outline-none transition-all"
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
                      rows={4}
                      placeholder="e.g. Looking for Size L in Wine Anarkali for upcoming reception, or looking for matching father-son festive kurta..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-beige-300 focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-burgundy-600 hover:bg-burgundy-700 text-white font-bold text-sm shadow-luxury hover:shadow-luxury-hover transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to WhatsApp & Store</span>
                  </button>

                  <p className="text-[11px] text-center text-charcoal-muted">
                    🔒 We respect your privacy. No spam. You will connect directly with our official store representative.
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
