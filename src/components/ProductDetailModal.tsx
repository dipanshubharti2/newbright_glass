import React, { useEffect } from 'react';
import {
  X,
  MessageCircle,
  FileText,
  ShieldCheck,
  Scale,
  Maximize2,
  Package,
  Layers,
  Thermometer,
  Sparkles,
  Check
} from 'lucide-react';
import { ProductItem, COMPANY_INFO } from '../data/companyData.ts';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToInquiry: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToInquiry,
}) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMessage = `*Bulk Product Inquiry - New Bright Glass Works*\n\n` +
    `*Product Model:* ${product.name}\n` +
    `*Category:* ${product.category}\n` +
    `*MOQ:* ${product.moq}\n` +
    `*Packaging:* ${product.packaging}\n` +
    `*Weight/Specs:* ${product.weight || 'Standard'} | ${product.dimensions || ''}\n\n` +
    `Please share formal factory proforma quote and sample availability.`;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleAddAndClose = () => {
    onAddToInquiry(product.name);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full glass-panel border border-[var(--border-strong)] rounded-3xl overflow-hidden shadow-2xl bg-[var(--bg-primary)] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-amber-50/70 border-b border-amber-200/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-900 font-bold">
              Technical Specification Sheet
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/80 hover:bg-white text-slate-700 transition-colors cursor-pointer border border-amber-200"
            aria-label="Close product modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Large Product Image Slot */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm group aspect-square flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 60%)',
                  }}
                />
                {product.capacity && (
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-sky-50/95 backdrop-blur-md border border-sky-200 text-xs font-mono text-sky-900 font-bold">
                    Capacity: {product.capacity}
                  </div>
                )}
              </div>

              {/* Manufacturing Assurance Badges */}
              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5 text-xs text-emerald-950">
                <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Firozabad Direct Continuous Melt</span>
                </div>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  Dual polariscope inspected. 100% Lead-Free food-safe soda-lime glass annealed in 40m lehrs.
                </p>
              </div>
            </div>

            {/* Right: Technical Specifications */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[11px] font-mono uppercase text-amber-700 font-semibold tracking-wider block mb-1">
                  {product.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Technical Data Table */}
              <div className="rounded-2xl border border-[var(--border-subtle)] overflow-hidden bg-[var(--bg-card)]">
                <div className="p-3 bg-slate-50 border-b border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] flex items-center justify-between">
                  <span>Physical & Packaging Parameters</span>
                  <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold">
                    Factory Certified
                  </span>
                </div>

                <div className="divide-y divide-[var(--border-subtle)] text-xs">
                  {product.dimensions && (
                    <div className="p-2.5 px-3.5 flex items-center justify-between">
                      <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
                        <span>Dimensions</span>
                      </span>
                      <span className="font-mono text-[var(--text-primary)] font-medium text-right">
                        {product.dimensions}
                      </span>
                    </div>
                  )}

                  {product.weight && (
                    <div className="p-2.5 px-3.5 flex items-center justify-between">
                      <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5 text-amber-600" />
                        <span>Unit Weight</span>
                      </span>
                      <span className="font-mono text-amber-700 font-bold text-right">
                        {product.weight}
                      </span>
                    </div>
                  )}

                  {product.wallThickness && (
                    <div className="p-2.5 px-3.5 flex items-center justify-between">
                      <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-purple-600" />
                        <span>Wall & Base Depth</span>
                      </span>
                      <span className="font-mono text-[var(--text-primary)] text-right">
                        {product.wallThickness}
                      </span>
                    </div>
                  )}

                  {product.material && (
                    <div className="p-2.5 px-3.5 flex items-center justify-between">
                      <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Glass Composition</span>
                      </span>
                      <span className="font-medium text-[var(--text-primary)] text-right">
                        {product.material}
                      </span>
                    </div>
                  )}

                  {product.thermalShock && (
                    <div className="p-2.5 px-3.5 flex items-center justify-between">
                      <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                        <Thermometer className="w-3.5 h-3.5 text-rose-600" />
                        <span>Thermal Rating</span>
                      </span>
                      <span className="font-medium text-[var(--text-primary)] text-right">
                        {product.thermalShock}
                      </span>
                    </div>
                  )}

                  <div className="p-2.5 px-3.5 flex items-center justify-between">
                    <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Minimum Order (MOQ)</span>
                    </span>
                    <span className="font-bold text-slate-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-right">
                      {product.moq}
                    </span>
                  </div>

                  <div className="p-2.5 px-3.5 flex items-center justify-between">
                    <span className="text-[var(--text-secondary)]">Master Packaging</span>
                    <span className="text-[var(--text-primary)] text-right truncate max-w-[200px]">
                      {product.packaging}
                    </span>
                  </div>
                </div>
              </div>

              {/* Customization Options Pill Strip */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 flex items-center gap-1">
                  <Check className="w-3 h-3 text-amber-600" /> Logo Decal Firing
                </span>
                <span className="px-2.5 py-1 rounded-md bg-purple-50 border border-purple-200 text-purple-900 flex items-center gap-1">
                  <Check className="w-3 h-3 text-purple-600" /> 24k Gold Rimming
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Custom Rigid Box
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Bar with Primary WhatsApp and Secondary Dark Add to Inquiry */}
        <div className="p-4 sm:p-5 bg-[var(--bg-panel)] border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-[var(--text-secondary)] hidden sm:block">
            Need custom laser monogramming or samples? Add to inquiry to request factory dispatch.
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* Primary Action: Direct WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>

            {/* Secondary Action: Add to Inquiry / Quote Form - Dark Button Preserved */}
            <button
              onClick={handleAddAndClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Add to Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
