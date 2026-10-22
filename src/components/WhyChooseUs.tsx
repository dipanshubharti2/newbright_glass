import React from 'react';
import {
  Factory,
  Palette,
  BadgePercent,
  ShieldCheck,
  PackageCheck,
  Globe,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData.ts';

const iconMap = {
  Factory,
  Palette,
  BadgePercent,
  ShieldCheck,
  PackageCheck,
  Globe
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-300">
      {/* Decorative gradients */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: 'rgba(217, 119, 6, 0.15)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>The Manufacturer Advantage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Why Wholesale Buyers & Brands Trust Us
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Eliminating intermediaries gives you direct factory accountability, guaranteed batch consistency,
            and substantial profit margin advantages across domestic and global markets.
          </p>
        </div>

        {/* 6 Feature Icon Cards with Distinct Tasteful Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Factory;

            // Individual refined color theme per pillar
            const colorThemes = [
              { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
              { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
              { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
              { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200' },
              { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
              { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
            ];
            const theme = colorThemes[index % colorThemes.length];

            return (
              <div
                key={item.id}
                className="glass-card p-7 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden border border-[var(--border-card)] hover:border-amber-300 transition-all hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl ${theme.bg} ${theme.text} border ${theme.border} flex items-center justify-center group-hover:scale-110 transition-all shadow-sm`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-sm text-[var(--text-secondary)] opacity-40 font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[var(--text-primary)] group-hover:text-amber-700 transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs text-amber-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Factory standard verified</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
