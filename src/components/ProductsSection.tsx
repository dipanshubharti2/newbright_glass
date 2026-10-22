import React, { useState, useMemo } from 'react';
import {
  MessageCircle,
  Sparkles,
  Search,
  Check,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  ProductItem,
  COMPANY_INFO
} from '../data/companyData.ts';
import { ProductDetailModal } from './ProductDetailModal.tsx';

interface ProductsSectionProps {
  onSelectForQuote: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'All Products' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getWhatsAppProductUrl = (product: ProductItem) => {
    const text = `Hello New Bright Glass Works, I am interested in placing a bulk order / inquiry for: ${product.name} (${product.category}). Please share catalog & factory rate card.`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-[var(--bg-secondary)] relative transition-colors duration-300">
      {/* Background ambient accents - subtle crystal azure */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ backgroundColor: 'rgba(2, 132, 199, 0.12)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 uppercase tracking-widest mb-2 shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Catalog & Wholesale Collection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
              Commercial Glassware Catalog
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-xl">
              From heavy-base crystal tumblers to heat-tested candle jars and custom corporate sets.
              Click any product card to view technical drawings, dimensions, and weights.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[var(--text-secondary)] opacity-60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tumbler, bowl, votive..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Filter Tabs (Horizontal Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0F172A] text-white font-semibold shadow-md'
                    : 'bg-white text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-2xl">
            <p className="text-lg text-[var(--text-primary)] font-serif mb-2">No products found matching your search</p>
            <p className="text-sm text-[var(--text-secondary)] mb-4">Try clearing your search query or selecting a different category tab.</p>
            <button
              onClick={() => {
                setActiveCategory('All Products');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              // Tasteful color badge according to product line
              const getCategoryStyle = (cat: string) => {
                switch (cat) {
                  case 'Drinking Glasses and Tumblers':
                    return 'bg-sky-50 text-sky-800 border-sky-200';
                  case 'Glass Bowls and Serving Bowls':
                    return 'bg-amber-50 text-amber-800 border-amber-200';
                  case 'Candle Votives and Jars':
                    return 'bg-rose-50 text-rose-800 border-rose-200';
                  case 'Fine Dining Tableware':
                    return 'bg-indigo-50 text-indigo-800 border-indigo-200';
                  case 'Barware and Beer Mugs':
                    return 'bg-emerald-50 text-emerald-800 border-emerald-200';
                  case 'Corporate Gifting Sets':
                    return 'bg-purple-50 text-purple-800 border-purple-200';
                  default:
                    return 'bg-slate-50 text-slate-800 border-slate-200';
                }
              };

              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col group relative glass-shimmer border border-[var(--border-card)] hover:border-amber-300/80 hover:shadow-xl transition-all cursor-pointer"
                >
                  {/* Product Image Slot with Fallback & Click Cue */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900/10">
                    <img
                      src={product.image}
                      alt={`${product.name} - ${product.category} manufactured by New Bright Glass Works Firozabad`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    {/* Gradient shadow */}
                    <div
                      className="absolute inset-0 opacity-70 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 60%)',
                      }}
                    />

                    {/* Top unboxed metadata with tasteful color badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className={`text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md backdrop-blur-md border shadow-xs ${getCategoryStyle(product.category)}`}>
                        {product.category}
                      </span>
                      {product.capacity && (
                        <span className="text-[11px] font-mono text-sky-900 bg-sky-50/95 font-semibold px-2 py-0.5 rounded border border-sky-200 backdrop-blur-md">
                          {product.capacity}
                        </span>
                      )}
                    </div>

                    {/* Hover Inspect Cue */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 text-xs text-slate-900 font-semibold flex items-center gap-1.5 shadow-xl">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
                        <span>Click to View Specs & Weight</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-amber-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-2 mt-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Specifications List */}
                      <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] space-y-2 text-xs text-[var(--text-secondary)]">
                        {product.dimensions && (
                          <div className="flex items-center justify-between">
                            <span className="opacity-70">Dimensions:</span>
                            <span className="font-mono text-[var(--text-primary)] font-medium">{product.dimensions}</span>
                          </div>
                        )}
                        {product.weight && (
                          <div className="flex items-center justify-between">
                            <span className="opacity-70">Unit Weight:</span>
                            <span className="font-mono text-amber-700 font-bold">{product.weight}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="opacity-70">Minimum Order:</span>
                          <span className="font-semibold text-slate-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">{product.moq}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="opacity-70">Master Packing:</span>
                          <span className="truncate max-w-[160px] text-right text-[var(--text-primary)]">{product.packaging}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlight text with warm amber glow */}
                    <div className="text-[11px] text-amber-900 bg-amber-50/80 py-1.5 px-3 rounded-lg border border-amber-200/80 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate font-medium">{product.highlight}</span>
                    </div>

                    {/* Action Buttons: WhatsApp Enquire & Dark View Specs Button */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <a
                        href={getWhatsAppProductUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                        aria-label={`Enquire about ${product.name} on WhatsApp`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="px-3 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer shadow-sm"
                      >
                        <span>View Specs</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Glassware Development Note */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass-panel border border-amber-200/80 bg-gradient-to-r from-amber-50/40 via-white to-sky-50/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Need a Custom Mould or Proprietary Shape?
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
              Our engineering workshop can build custom iron moulds, test initial pilot samples, and
              scale up to millions of pieces with your brand signature embossed directly on the base.
            </p>
          </div>
          <button
            onClick={() => onSelectForQuote('Custom Proprietary Glassware Mould')}
            className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer transition-all shadow-md"
          >
            Request Custom Mould Feasibility
          </button>
        </div>
      </div>

      {/* Technical Specification & Add to Inquiry Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToInquiry={onSelectForQuote}
      />
    </section>
  );
};
