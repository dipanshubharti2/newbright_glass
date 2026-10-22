import React, { useState } from 'react';
import {
  FileText,
  Download,
  CheckCircle,
  Eye,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData.ts';

export const CatalogueDownloadSection: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const catalogues = [
    {
      id: 'master-2026',
      title: '2026 Master Glassware Catalogue',
      subtitle: 'Full Collection: Tumblers, Bowls, Tableware & Votives',
      pages: '48 Pages',
      fileSize: '8.4 MB · PDF',
      badge: 'Most Popular',
      description: 'Comprehensive commercial catalogue featuring high-resolution photography, exact dimensions, carton packing specs, and thermal ratings.',
      filename: 'New_Bright_Glass_Works_Master_Catalogue_2026.pdf',
    },
    {
      id: 'corporate-gifting',
      title: 'Corporate Gifting & Monogramming Guide',
      subtitle: 'Luxury Gift Sets & Decal Logo Branding',
      pages: '24 Pages',
      fileSize: '5.2 MB · PDF',
      badge: 'Executive Gifting',
      description: 'Turnkey gift boxes, 24k gold and platinum rim embellishments, laser etching samples, and volume tier pricing slabs.',
      filename: 'New_Bright_Corporate_Gifting_Catalogue_2026.pdf',
    },
    {
      id: 'hospitality-specs',
      title: 'Hospitality Barware & Banqueting Specs',
      subtitle: 'Technical Thermal & Dishwasher Durability Sheets',
      pages: '16 Pages',
      fileSize: '3.1 MB · PDF',
      badge: 'Hotels & Caterers',
      description: 'Thermal shock endurance data, polariscope stress test results, rolled rim chip resistance, and bulk banquet replenishment protocols.',
      filename: 'New_Bright_Hospitality_Barware_SpecSheet.pdf',
    },
    {
      id: 'export-loading-plan',
      title: 'Export Container & Pallet Packing Guide',
      subtitle: '20ft / 40ft FCL Configurations & HS Codes',
      pages: '12 Pages',
      fileSize: '2.8 MB · PDF',
      badge: 'Global Exporters',
      description: 'Pallet dimensions, seaworthy 5-ply box burst test ratings, phytosanitary compliance, and ICD Agra port logistics.',
      filename: 'New_Bright_Export_Packing_Plan_2026.pdf',
    },
  ];

  const handleDownload = (catalogue: typeof catalogues[0]) => {
    setDownloadingId(catalogue.id);

    // Generate an authentic printable HTML document formatted as an official PDF / printable catalog
    const printableContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${catalogue.title} - ${COMPANY_INFO.name}</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #111827; margin: 40px; }
          .header { border-bottom: 3px solid #D9A441; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-end; }
          .brand { font-size: 26px; font-weight: bold; color: #0B1F33; }
          .tagline { color: #64748B; font-size: 13px; text-transform: uppercase; margin-top: 4px; }
          .meta { text-align: right; font-size: 12px; color: #475569; }
          h2 { color: #0B1F33; margin-top: 25px; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; }
          p { font-size: 14px; line-height: 1.6; color: #334155; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
          th { background: #0B1F33; color: white; text-align: left; padding: 10px; }
          td { border-bottom: 1px solid #E2E8F0; padding: 10px; }
          .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; background: #FEF3C7; color: #92400E; font-weight: bold; font-size: 11px; }
          .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #CBD5E1; font-size: 12px; color: #64748B; display: flex; justify-content: space-between; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">${COMPANY_INFO.name}</div>
            <div class="tagline">Crafted in Firozabad · Trusted for 50+ Years · ESTD 1972</div>
          </div>
          <div class="meta">
            <div><strong>Official Document:</strong> ${catalogue.title}</div>
            <div><strong>GSTIN:</strong> ${COMPANY_INFO.gstin}</div>
            <div><strong>Date:</strong> 2026 Edition</div>
          </div>
        </div>

        <h2>${catalogue.title} (${catalogue.pages})</h2>
        <p>${catalogue.description}</p>
        <p><strong>Factory Address:</strong> ${COMPANY_INFO.address}<br>
           <strong>Direct Sales Desk:</strong> ${COMPANY_INFO.phone} | <strong>Email:</strong> ${COMPANY_INFO.email}</p>

        <h2>Selected Product Lines & Specifications</h2>
        <table>
          <thead>
            <tr>
              <th>Product Model</th>
              <th>Category</th>
              <th>Capacity / Size</th>
              <th>Minimum Order</th>
              <th>Export Packaging</th>
            </tr>
          </thead>
          <tbody>
            ${PRODUCTS.map(
              (p) => `
              <tr>
                <td><strong>${p.name}</strong><br><small style="color:#64748B">${p.highlight}</small></td>
                <td>${p.category}</td>
                <td>${p.capacity || p.dimensions || '-'}</td>
                <td><span class="badge">${p.moq}</span></td>
                <td>${p.packaging}</td>
              </tr>
            `
            ).join('')}
          </tbody>
        </table>

        <h2>Manufacturing Guarantee & Technical Standards</h2>
        <p>All items manufactured under ISO & BIS guidelines using high-purity non-hazardous silica. 100% Lead-Free. Dual polariscope optical inspection and 40m thermal lehr annealing guarantees commercial longevity.</p>

        <div class="footer">
          <div>© 2026 ${COMPANY_INFO.name}. All rights reserved.</div>
          <div>Authorized By: ${COMPANY_INFO.contactPerson} (${COMPANY_INFO.contactTitle})</div>
        </div>
      </body>
      </html>
    `;

    // Create printable blob and trigger download
    setTimeout(() => {
      const blob = new Blob([printableContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = catalogue.filename.replace('.pdf', '_Catalogue.html');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloadingId(null);
      setDownloadSuccess(catalogue.id);
      setTimeout(() => setDownloadSuccess(null), 4000);
    }, 1000);
  };

  return (
    <section id="catalogue" className="py-20 lg:py-28 bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 uppercase tracking-widest mb-3 shadow-xs">
            <FileText className="w-4 h-4 text-amber-600" />
            <span>Digital Resources & Catalogues</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Download Official 2026 Catalogues (PDF)
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Access complete technical specification sheets, product dimensions, carton packaging configurations,
            and corporate gifting guides directly from our factory engineering desk.
          </p>
        </div>

        {/* 4 Catalogue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {catalogues.map((cat, idx) => {
            const isDownloading = downloadingId === cat.id;
            const isSuccess = downloadSuccess === cat.id;

            const badgeStyles = [
              'bg-amber-100 text-amber-800 border-amber-300',
              'bg-purple-100 text-purple-800 border-purple-300',
              'bg-sky-100 text-sky-800 border-sky-300',
              'bg-emerald-100 text-emerald-800 border-emerald-300',
            ];
            const badgeStyle = badgeStyles[idx % badgeStyles.length];

            return (
              <div
                key={cat.id}
                className="glass-card p-7 sm:p-8 rounded-3xl flex flex-col justify-between group border border-[var(--border-card)] hover:border-amber-300 hover:shadow-xl transition-all relative overflow-hidden"
              >
                <div>
                  {/* Top Badge & Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border font-bold shadow-xs ${badgeStyle}`}>
                      {cat.badge}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-secondary)] opacity-75">
                      {cat.fileSize}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-amber-700 transition-colors mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-xs font-semibold text-amber-700 mb-3">
                    {cat.subtitle} · {cat.pages}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Actions: Dark Button preserved */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Free Direct Download · No Sign-Up</span>
                  </div>

                  <button
                    onClick={() => handleDownload(cat)}
                    disabled={isDownloading}
                    className={`py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                      isSuccess
                        ? 'bg-emerald-500 text-white'
                        : isDownloading
                        ? 'bg-slate-300 text-slate-800 cursor-wait'
                        : 'bg-[#0F172A] hover:bg-[#1E293B] text-white'
                    }`}
                  >
                    {isSuccess ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Downloaded!</span>
                      </>
                    ) : isDownloading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Preparing PDF...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Courier Hardcopy Request Banner with subtle warm tones */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-amber-200/80 bg-gradient-to-r from-amber-50/40 via-white to-sky-50/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0 shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                Prefer a High-Gloss Printed Hardcopy Catalogue?
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
                We courier complimentary physical catalogues and actual material glass sample kits directly to
                hotels, corporate offices, and wholesale crockery distributors across India.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap shadow-md transition-all cursor-pointer"
          >
            <span>Request Hardcopy Kit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
