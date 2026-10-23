import React from 'react';
import { Gift, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

interface CorporateGiftingProps {
  onQuoteClick: () => void;
}

export const CorporateGifting: React.FC<CorporateGiftingProps> = ({ onQuoteClick }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello New Bright Glass Works, I would like to inquire about Corporate Gifting Glass Sets and custom logo printing for my company.'
  )}`;

  return (
    <section id="corporate" className="py-20 lg:py-28 bg-[var(--bg-secondary)] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-panel border border-purple-200/80 bg-gradient-to-br from-purple-50/30 via-white to-amber-50/20 overflow-hidden shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="p-8 sm:p-12 lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-semibold tracking-wider uppercase shadow-xs">
                <Gift className="w-4 h-4 text-purple-600" />
                <span>Bespoke Corporate Solutions</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">
                Corporate Gifting & Custom Brand Personalization
              </h2>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                Make an indelible impression on clients, partners, and employees with customized glassware.
                We provide complete turnkey production—from high-temperature ceramic decal logo firing
                and gold/platinum rim detailing to bespoke satin-lined rigid presentation boxes.
              </p>

              {/* Capability bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Permanent dishwasher-safe ceramic decal logo transfer</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Gold, platinum, and frosted sandblast rim embellishments</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Bespoke magnetic gift boxes with velvet-lined precision foam</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Flexible batch volumes: 50 to 50,000+ luxury gift sets</span>
                </div>
              </div>

              {/* Action Buttons: Dark CTA preserved */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onQuoteClick}
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Corporate Gifting Catalogue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Gifting Specialist</span>
                </a>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative h-full min-h-[350px] lg:min-h-[500px]">
              <img
                src="/newbright_glass/images/corporate_glass_giftset_1792663602337.jpg"
                alt="Luxury corporate glassware gift set with engraved tumblers and executive gift box"
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute inset-0 opacity-80 lg:hidden pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 60%)',
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[var(--bg-panel)] backdrop-blur-md border border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--accent)] uppercase font-mono tracking-wider block mb-1">
                  Festive & Executive Sets
                </span>
                <p className="text-xs text-[var(--text-primary)]">
                  Custom monograms, presentation gift sleeves, and door-to-door delivery across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
