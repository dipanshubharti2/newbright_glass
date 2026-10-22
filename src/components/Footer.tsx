import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/companyData.ts';
import { BrandLogo } from './BrandLogo.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-secondary)] border-t border-[var(--border-subtle)] pt-16 pb-24 lg:pb-12 text-sm relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Identity (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-3">
              <BrandLogo size="md" className="text-[var(--text-primary)]" />
              <div>
                <span className="font-serif text-lg font-bold text-[var(--text-primary)] tracking-tight block">
                  New Bright Glass Works
                </span>
                <span className="text-xs text-[var(--text-secondary)] opacity-75">(India) Private Limited</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Premier glassware manufacturer from Firozabad, the Glass City of India. Crafting
              crystal-clear drinking glasses, bowls, votives, and custom corporate gift sets since 1972.
            </p>

            <div className="pt-2">
              <div className="inline-block px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-mono">
                <span className="text-amber-700 font-semibold">GSTIN: </span>
                <span className="text-emerald-900 font-bold">{COMPANY_INFO.gstin}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[var(--text-primary)] tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-amber-700 transition-colors">
                  About Our 50-Year Heritage
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-700 transition-colors">
                  Product Catalog & Wholesale
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-700 transition-colors">
                  Manufacturing Advantages
                </a>
              </li>
              <li>
                <a href="#corporate" className="hover:text-amber-700 transition-colors">
                  Corporate Gifting & Custom Moulds
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-700 transition-colors">
                  6-Stage Glassmaking Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-700 transition-colors">
                  Contact Factory & Sales Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Core Categories (Col 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[var(--text-primary)] tracking-wide">
              Product Lines
            </h4>
            <ul className="space-y-2 text-xs">
              {PRODUCT_CATEGORIES.slice(1, 6).map((cat) => (
                <li key={cat}>
                  <a href="#products" className="hover:text-amber-700 transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
              <li>
                <a href="#corporate" className="hover:text-amber-700 transition-colors">
                  Corporate Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[var(--text-primary)] tracking-wide">
              Manufacturing HQ
            </h4>
            <address className="not-italic text-xs sm:text-sm space-y-2 text-[var(--text-secondary)]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Sector 2, Suhag Nagar, Near Suhag Nagar Post Office, Firozabad, UP – 283203, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[var(--text-primary)] font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[var(--text-primary)]">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CEO: {COMPANY_INFO.contactPerson}</span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-secondary)] opacity-70">
          <p>© 2026 New Bright Glass Works (India) Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Glass City of India · Firozabad</span>
            <button
              onClick={scrollToTop}
              className="p-2 px-3 rounded-lg bg-white hover:bg-slate-100 text-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-300 shadow-sm"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
