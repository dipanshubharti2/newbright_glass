import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';
import { BrandLogo } from './BrandLogo.tsx';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Clients', href: '#clients' },
    { label: 'Catalogue', href: '#catalogue' },
    { label: 'Corporate', href: '#corporate' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello New Bright Glass Works, I would like to inquire about glassware catalog and wholesale pricing.'
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-panel)] backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 sm:gap-8">
          {/* Zone 1: Official Brand Logo & Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            aria-label="New Bright Glass Works Home"
          >
            <BrandLogo size="sm" className="shrink-0 text-[var(--text-primary)]" />
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                New Bright Glass Works
              </span>
              <span className="text-[10px] sm:text-[11px] text-[var(--text-secondary)] tracking-wider uppercase font-medium whitespace-nowrap hidden sm:block">
                Firozabad · Est. 1972
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[var(--text-secondary)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: WhatsApp and Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="hidden sm:flex p-2.5 rounded-lg text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-xs"
              title="WhatsApp Sales Desk"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <button
              onClick={onQuoteClick}
              className="hidden sm:flex px-4 sm:px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] shadow-md transition-all items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[var(--text-primary)] hover:bg-slate-100 border border-slate-300 transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-white/98 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[var(--text-primary)] hover:bg-amber-50 hover:text-amber-800 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-slate-300 text-[var(--text-primary)] text-sm font-medium hover:bg-slate-100"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Factory: {COMPANY_INFO.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-medium hover:bg-emerald-100"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Business Desk</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full py-3 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
