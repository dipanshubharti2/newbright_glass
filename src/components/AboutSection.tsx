import React from 'react';
import { Flame, CheckCircle2, Factory } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300">
      {/* Decorative subtle ambient glow: Warm furnace amber & crystal azure */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: 'rgba(217, 119, 6, 0.18)' }}
      />
      <div
        className="absolute bottom-10 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-15"
        style={{ backgroundColor: 'rgba(2, 132, 199, 0.12)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 uppercase tracking-widest mb-3 shadow-xs">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>Firozabad Heritage · Est. 1974</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Five Decades of Fire, Sand & Master Craftsmanship
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Firozabad is celebrated worldwide as the Glass City of India. At New Bright Glass Works,
            we carry forward this illustrious legacy with precision engineering and high-volume production.
          </p>
        </div>

        {/* 2-Column Split: Story & Factory Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Authentic Story & Value Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                From Historic Bangle Furnaces to Commercial Tableware Pioneer
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Founded over 50 years ago in the heart of Firozabad’s industrial belt,{' '}
                <strong className="text-[var(--text-primary)] font-semibold">New Bright Glass Works (India) Pvt. Ltd.</strong>{' '}
                began with traditional hand-blown glass craft. Today, led by CEO Aayush Gupta, the company
                unites third-generation artisanal handcrafting skills with continuous regenerative melting
                furnaces.
              </p>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Every tumbler, bowl, and candle votive undergoes rigorous thermal annealing and dual optical
                inspections. We manufacture with raw silica free from harmful chemical dyes, ensuring
                uncompromising optical brilliance, crystal clarity, and food-grade safety for commercial
                banquets, restaurants, and premium retail counters across the globe.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Lead-Free Soda Lime & Borosilicate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>In-House Mould Development Workshop</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Automated 40-Metre Annealing Lehr</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Direct Export Logistics to 12+ Countries</span>
                </div>
              </div>
            </div>

            {/* CEO Guarantee Card */}
            <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center font-serif font-bold text-lg shadow-md">
                  AG
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">Aayush Gupta</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Chief Executive Officer · New Bright Glass Works</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 tracking-wider inline-block mb-1">
                  GSTIN Verified
                </span>
                <span className="text-xs font-mono text-[var(--text-primary)] font-semibold block">{COMPANY_INFO.gstin}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Artisan Furnace Visual */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-2xl glass-shimmer">
              <img
                src="/src/assets/images/artisan_glass_furnace_1792663601781.jpg"
                alt="Skilled master artisan shaping molten amber glass at New Bright Glass Works furnace in Firozabad"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute inset-0 opacity-75"
                style={{
                  background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 70%)',
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200 shadow-md">
                <p className="text-xs text-amber-800 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-amber-600" />
                  <span>The Firozabad Glassmaking Floor</span>
                </p>
                <p className="text-xs text-[var(--text-primary)]">
                  Generations of blowing mastery paired with precision annealing ensuring flawless surface
                  luster and thermal endurance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group hover:border-amber-300 transition-all"
            >
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-transparent bg-clip-text mb-2 tabular-nums"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #0F172A 0%, #B45309 60%, #D97706 100%)',
                }}
              >
                {stat.value}
              </div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">{stat.label}</h4>
              <p className="text-xs text-[var(--text-secondary)]">{stat.helper}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
