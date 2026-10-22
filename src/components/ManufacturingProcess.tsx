import React, { useState } from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { MANUFACTURING_STEPS } from '../data/companyData.ts';

export const ManufacturingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 lg:py-28 bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: 'rgba(217, 119, 6, 0.15)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 uppercase tracking-widest mb-3 shadow-xs">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>Precision Metallurgy & Glass Science</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            The 6-Stage Manufacturing Journey
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            From raw high-purity silica sand to drop-tested export cartons. Our automated and artisan
            processes work in harmony to produce flawless commercial tableware.
          </p>
        </div>

        {/* Horizontal Timeline (Desktop) / Vertical Stacked (Mobile) */}
        <div className="relative mb-12">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-amber-300 via-amber-400 to-sky-300 -translate-y-8 z-0 opacity-60" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 relative z-10">
            {MANUFACTURING_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              const stepColors = [
                { badge: 'bg-amber-100 text-amber-800 border-amber-300', active: 'border-amber-400 bg-amber-50/40' },
                { badge: 'bg-orange-100 text-orange-800 border-orange-300', active: 'border-orange-400 bg-orange-50/40' },
                { badge: 'bg-rose-100 text-rose-800 border-rose-300', active: 'border-rose-400 bg-rose-50/40' },
                { badge: 'bg-sky-100 text-sky-800 border-sky-300', active: 'border-sky-400 bg-sky-50/40' },
                { badge: 'bg-emerald-100 text-emerald-800 border-emerald-300', active: 'border-emerald-400 bg-emerald-50/40' },
                { badge: 'bg-indigo-100 text-indigo-800 border-indigo-300', active: 'border-indigo-400 bg-indigo-50/40' },
              ];
              const color = stepColors[idx % stepColors.length];

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all text-left flex flex-col justify-between ${
                    isSelected
                      ? `glass-panel ${color.active} shadow-xl -translate-y-1`
                      : 'glass-card border-[var(--border-card)] hover:border-amber-300'
                  }`}
                >
                  <div>
                    {/* Step Number Circle with distinct color */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold border transition-colors ${
                          isSelected
                            ? `${color.badge} shadow-md`
                            : 'bg-slate-100 text-slate-800 border-slate-200'
                        }`}
                      >
                        {step.step}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] opacity-60">
                        Stage {idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] mb-1.5">
                      {step.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mb-2">{step.headline}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3 lg:line-clamp-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px]">
                    <span className="text-[var(--text-secondary)] opacity-70">{isSelected ? 'Active Details' : 'Click to inspect'}</span>
                    <span className="text-amber-700 font-mono font-semibold">0{idx + 1}/06</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Spotlight Detail Banner */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-amber-200/80 bg-gradient-to-r from-amber-50/30 via-white to-sky-50/30 shadow-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-800 bg-amber-100/70 px-3 py-1 rounded-md tracking-wider uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>
                  Stage {MANUFACTURING_STEPS[activeStep].step} Deep Dive ·{' '}
                  {MANUFACTURING_STEPS[activeStep].name}
                </span>
              </div>
              <h4 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                {MANUFACTURING_STEPS[activeStep].headline}
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {MANUFACTURING_STEPS[activeStep].description}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() =>
                  setActiveStep((prev) => (prev > 0 ? prev - 1 : MANUFACTURING_STEPS.length - 1))
                }
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-300 transition-colors cursor-pointer shadow-sm"
              >
                Previous Stage
              </button>
              <button
                onClick={() =>
                  setActiveStep((prev) => (prev < MANUFACTURING_STEPS.length - 1 ? prev + 1 : 0))
                }
                className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold transition-colors cursor-pointer shadow-md"
              >
                Next Stage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
