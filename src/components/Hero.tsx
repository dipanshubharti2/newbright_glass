import React from 'react';
import { ArrowRight, MessageCircle, Shield, Award, Sparkles, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello New Bright Glass Works, I would like to get a quote for bulk glassware orders.'
  )}`;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image with Optical Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_firozabad_glassware_1792663600560.jpg"
          alt="Handcrafted luxury crystal glassware collection from Firozabad"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered Dynamic Theme Scrim for Contrast & Legibility */}
        <div
          className="absolute inset-0 transition-colors duration-500"
          style={{
            background: `linear-gradient(90deg, var(--scrim-primary) 0%, var(--scrim-primary) 55%, var(--scrim-secondary) 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Subtle Tagline Kicker with Warm Amber Glow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 backdrop-blur-md border border-amber-300/80 text-amber-900 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Crafted in Firozabad · Trusted for 50+ Years</span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] tracking-tight leading-[1.15] text-balance mb-6">
            Premium Glassware,{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #0F172A 0%, #B45309 50%, #D97706 100%)',
              }}
            >
              Made in Firozabad
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl font-normal">
            Direct manufacturer of crystal-clear tumblers, fine dining tableware, candle votives,
            and bespoke corporate gifting collections. We combine 50 years of generational glass
            artistry with modern high-capacity furnaces to deliver unmatched clarity and bulk reliability.
          </p>

          {/* Action Buttons: Dark Primary Button preserved */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onQuoteClick}
              className="px-7 py-3.5 rounded-xl font-semibold text-base text-white bg-[#0F172A] hover:bg-[#1E293B] shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get a Factory Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl font-semibold text-base text-emerald-800 bg-emerald-50/90 hover:bg-emerald-100/90 backdrop-blur-md border border-emerald-300 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>WhatsApp Direct Inquiry</span>
            </a>
          </div>

          {/* Key Quick Badges with gentle, tasteful color icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
              <span className="p-1.5 rounded-lg bg-amber-50 border border-amber-200">
                <Award className="w-4 h-4 text-amber-700 shrink-0" />
              </span>
              <span className="font-medium text-[var(--text-primary)]">50+ Years Heritage</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
              <span className="p-1.5 rounded-lg bg-sky-50 border border-sky-200">
                <Shield className="w-4 h-4 text-sky-700 shrink-0" />
              </span>
              <span className="font-medium text-[var(--text-primary)]">Direct Bulk Pricing</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
              <span className="p-1.5 rounded-lg bg-purple-50 border border-purple-200">
                <Sparkles className="w-4 h-4 text-purple-700 shrink-0" />
              </span>
              <span className="font-medium text-[var(--text-primary)]">Custom Logo Decals</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
              <span className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
              </span>
              <span className="font-medium text-[var(--text-primary)]">Pan-India Supply</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative z-10 w-full bg-[var(--bg-panel)] border-y border-[var(--border-subtle)] backdrop-blur-lg py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-around gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-[var(--text-secondary)] tracking-wide">
            {COMPANY_INFO.trustStrip.map((item, idx) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-[var(--text-primary)] font-semibold">{item}</span>
                {idx < COMPANY_INFO.trustStrip.length - 1 && (
                  <span className="hidden sm:inline text-[var(--accent)]/60" aria-hidden="true">
                    |
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
