import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/companyData.ts';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-moq');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 uppercase tracking-widest mb-3 shadow-xs">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Buyer Knowledge Base</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Everything you need to know about commercial minimums, custom logo printing,
            shipping warranties, and international exports.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card rounded-2xl border border-[var(--border-card)] overflow-hidden transition-all hover:border-amber-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-amber-800 px-2.5 py-0.5 rounded bg-amber-50 border border-amber-200 hidden sm:inline-block font-semibold">
                      {faq.category}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] bg-amber-50/10">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Further Assistance */}
        <div className="mt-12 text-center text-xs text-[var(--text-secondary)]">
          <span>Have a custom technical inquiry or specific glass composition query? </span>
          <a href="#contact" className="text-amber-700 underline underline-offset-4 hover:text-[var(--text-primary)] font-semibold">
            Speak directly with our technical team →
          </a>
        </div>
      </div>
    </section>
  );
};
