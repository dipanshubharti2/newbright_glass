import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Building2, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData.ts';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? TESTIMONIALS.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === TESTIMONIALS.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[var(--bg-secondary)] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 uppercase tracking-widest mb-3 shadow-xs">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Trusted by Hotels, Brands & Global Traders
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            See how our factory partners experience our glassware quality, packaging precision,
            and reliable production schedules.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl relative border border-amber-200/80 bg-gradient-to-br from-amber-50/20 via-white to-sky-50/20 shadow-2xl">
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-6 shadow-sm">
              <Quote className="w-6 h-6" />
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-lg sm:text-2xl text-[var(--text-primary)] font-normal leading-relaxed mb-8">
              "{activeReview.quote}"
            </blockquote>

            {/* Author Lockup */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[var(--border-subtle)]">
              <div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">{activeReview.author}</h4>
                <p className="text-xs sm:text-sm text-amber-700 font-semibold">{activeReview.role}</p>
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mt-1">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{activeReview.company}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeReview.location}</span>
                  </span>
                </div>
              </div>

              {/* Order badge */}
              <div className="self-start sm:self-center">
                <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                  {activeReview.orderType}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[var(--accent)]' : 'w-2 bg-[var(--border-subtle)] hover:bg-[var(--border-strong)]'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 transition-all hover:border-slate-800 cursor-pointer shadow-sm"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 transition-all hover:border-slate-800 cursor-pointer shadow-sm"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
