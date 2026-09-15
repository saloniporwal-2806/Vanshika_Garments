import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqs } from '../data/faqs';
import { getWhatsAppLink } from '../data/storeInfo';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gold-dark" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy-950">
            Got Questions? We’ve Got Answers
          </h2>
          <p className="mt-2 text-charcoal-muted text-sm sm:text-base">
            Everything you need to know about sizing, WhatsApp orders, store visits, and exchanges.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-burgundy-600 shadow-luxury' : 'border-beige-300 hover:border-beige-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-burgundy-800' : 'text-charcoal'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? 'bg-burgundy-100 text-burgundy-700 rotate-180' : 'bg-cream-200 text-charcoal'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-beige-200 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Support Box */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-beige-300 shadow-sm text-center sm:flex sm:items-center sm:justify-between gap-4">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h4 className="font-serif text-base font-bold text-charcoal">
              Have another question or need personalized sizing advice?
            </h4>
            <p className="text-xs text-charcoal-muted mt-0.5">
              Our in-store team is available on WhatsApp every day from 10:30 AM to 9:00 PM.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Hello Vanshika Garments, I have a quick question about your clothing collection.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-burgundy-600 hover:bg-burgundy-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
