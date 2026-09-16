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
    <section id="faq" className="py-12 sm:py-16 bg-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-burgundy-950">
            Got Questions? We’ve Got Answers
          </h2>
          <p className="mt-2 text-charcoal-muted text-xs sm:text-base">
            Everything you need to know about sizing, WhatsApp orders, deliveries, and exchanges.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
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
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 focus:outline-none min-h-[52px]"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif text-sm sm:text-lg font-bold transition-colors leading-snug break-words ${
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
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-beige-200 pt-3 animate-in fade-in duration-200 break-words">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Support Box */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-white rounded-2xl border border-beige-300 shadow-sm text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif text-sm sm:text-base font-bold text-charcoal">
              Have another question or need personalized sizing advice?
            </h4>
            <p className="text-xs text-charcoal-muted">
              Connect directly with our team on WhatsApp for prompt assistance.
            </p>
          </div>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-burgundy-600 hover:bg-burgundy-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all shrink-0 active:bg-burgundy-800"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
