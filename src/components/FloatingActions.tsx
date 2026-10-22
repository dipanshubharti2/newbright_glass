import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

interface FloatingActionsProps {
  onQuoteClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onQuoteClick }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello New Bright Glass Works, I would like to inquire about glassware catalog and wholesale pricing.'
  )}`;

  return (
    <>
      {/* Floating Bottom-Right WhatsApp Button */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all hover:scale-105 border border-white/20"
          aria-label="Direct WhatsApp Inquiry with Sales Desk"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
            Chat with Factory
          </span>
        </a>
      </div>

      {/* Sticky Mobile Bottom Bar (<15% viewport height) */}
      <aside
        aria-label="Mobile quick actions"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-panel)] backdrop-blur-md border-t border-[var(--border-subtle)] px-3 py-2 h-14 flex items-center justify-between gap-2 shadow-2xl transition-colors duration-300"
      >
        {/* Call Now */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 h-10 min-h-[44px] rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          aria-label={`Call New Bright Glass Works factory at ${COMPANY_INFO.phone}`}
        >
          <Phone className="w-4 h-4 text-slate-800" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Us */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-10 min-h-[44px] rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Get a Quote (Dark button preserved) */}
        <button
          onClick={onQuoteClick}
          className="flex-1 h-10 min-h-[44px] rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          aria-label="Get a factory quote"
        >
          <FileText className="w-4 h-4 text-white" />
          <span>Get Quote</span>
        </button>
      </aside>
    </>
  );
};
