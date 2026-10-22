import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  Navigation,
  Building,
  UserCheck
} from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/companyData.ts';

interface ContactSectionProps {
  prefilledProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productInterest: 'Drinking Glasses and Tumblers',
    customNotes: '',
    estimatedQuantity: '500 - 2,000 Pcs',
    requireLogo: false,
    requireGiftBox: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        productInterest: prefilledProduct,
        customNotes: `Interested in: ${prefilledProduct}. Please share wholesale rate card and sample availability.`,
      }));
    }
  }, [prefilledProduct]);

  const generateWhatsAppMessage = () => {
    return `*New Factory Quotation Request - New Bright Glass Works*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Product Category:* ${formData.productInterest}\n` +
      `*Estimated Volume:* ${formData.estimatedQuantity}\n` +
      `*Logo Printing:* ${formData.requireLogo ? 'YES (Decal/Laser)' : 'No'}\n` +
      `*Custom Gift Box:* ${formData.requireGiftBox ? 'YES' : 'Standard Carton'}\n` +
      `*Message:* ${formData.customNotes || 'Looking for pricing and catalog.'}\n\n` +
      `_Submitted via newbrightglass.com official portal_`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    window.open(url, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Factory Wholesale Inquiry - ${formData.productInterest}`);
    const body = encodeURIComponent(generateWhatsAppMessage());
    setSubmitted(true);
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--bg-secondary)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 uppercase tracking-widest mb-3 shadow-xs">
            <Mail className="w-4 h-4 text-amber-600" />
            <span>Connect with Manufacturing HQ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Request a Bulk Quote or Factory Visit
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Direct communication with our commercial production desk in Firozabad. Receive official
            spec sheets, sample consignments, and volume price slabs within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-[var(--border-card)] shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-2">
              Factory Wholesale & Export Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
              Fill in your order requirements below. You can send directly to our WhatsApp desk or via official email.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm flex items-start gap-3 shadow-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-950">Inquiry Payload Generated!</p>
                  <p className="text-emerald-800 mt-0.5">
                    Our team in Firozabad has been notified. You can also copy your quote request specs below for your records.
                  </p>
                </div>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                    Your Full Name / Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/40 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/40 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                    Corporate / Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="purchase@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/40 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                    Glassware Category *
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-amber-500"
                  >
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                  Estimated Order Volume
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['240 - 500 Pcs', '500 - 2,000 Pcs', '2,000 - 10,000 Pcs', '10,000+ Container'].map(
                    (qty) => (
                      <button
                        type="button"
                        key={qty}
                        onClick={() => setFormData({ ...formData, estimatedQuantity: qty })}
                        className={`py-2 px-2 text-[11px] rounded-lg border text-center font-medium transition-colors cursor-pointer ${
                          formData.estimatedQuantity === qty
                            ? 'bg-[#0F172A] text-white border-[#0F172A] font-semibold'
                            : 'bg-white text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-slate-300'
                        }`}
                      >
                        {qty}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Customization checkboxes */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs text-[var(--text-secondary)]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.requireLogo}
                    onChange={(e) => setFormData({ ...formData, requireLogo: e.target.checked })}
                    className="rounded border-[var(--border-subtle)] text-amber-600 focus:ring-amber-500"
                  />
                  <span>Need Custom Logo / Brand Screen Printing</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.requireGiftBox}
                    onChange={(e) => setFormData({ ...formData, requireGiftBox: e.target.checked })}
                    className="rounded border-[var(--border-subtle)] text-amber-600 focus:ring-amber-500"
                  />
                  <span>Need Premium Rigid Gift Box Packaging</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                  Detailed Requirements / Delivery City
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify design requirements, target delivery dates, or sample request address..."
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/40 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Dual Submission CTAs */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit via Email</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-amber-600" />
                  <span>{copied ? 'Copied Specs to Clipboard!' : 'Copy Inquiry Text to Clipboard'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Factory Details, Google Map & Directions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Info Cards */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl space-y-5 border border-[var(--border-card)]">
              <h3 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-2">
                Company & Factory Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-3">
                  <span className="p-1.5 rounded-lg bg-amber-50 border border-amber-200">
                    <Building className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  </span>
                  <div>
                    <strong className="text-[var(--text-primary)] block font-medium">Factory Address:</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-1.5 rounded-lg bg-sky-50 border border-sky-200">
                    <UserCheck className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                  </span>
                  <div>
                    <strong className="text-[var(--text-primary)] block font-medium">Managing Director:</strong>
                    <span>{COMPANY_INFO.contactPerson} ({COMPANY_INFO.contactTitle})</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                    <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                  </span>
                  <div>
                    <strong className="text-[var(--text-primary)] block font-medium">Click to Call Factory Desk:</strong>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-slate-900 font-mono hover:underline font-semibold"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-purple-50 border border-purple-200">
                    <Mail className="w-4 h-4 text-purple-700 shrink-0" />
                  </span>
                  <div>
                    <strong className="text-[var(--text-primary)] block font-medium">Official Commercial Email:</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-900 hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[var(--border-subtle)]">
                  <div className="text-xs font-mono text-[var(--text-secondary)]">
                    <span className="text-amber-700 font-semibold">GSTIN: </span>
                    <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">{COMPANY_INFO.gstin}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Card with Direct Location & Direction Button */}
            <div className="glass-card rounded-3xl overflow-hidden border border-[var(--border-card)] shadow-xl">
              <div className="p-4 bg-[var(--bg-panel)] border-b border-[var(--border-subtle)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="truncate">New Bright Glass Works (India) Pvt. Ltd.</span>
                </div>
                <span className="text-[10px] font-mono uppercase text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0 font-semibold">
                  Firozabad, UP
                </span>
              </div>

              {/* Interactive Google Map Embed */}
              <div className="h-64 sm:h-72 w-full relative bg-[var(--bg-primary)]">
                <iframe
                  title="Google Map showing location of New Bright Glass Works (India) Private limited"
                  src={COMPANY_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Action Buttons for Directions & Maps App */}
              <div className="p-4 bg-[var(--bg-card)] border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                {/* Primary Google Maps Direction Button (Dark Button with White Text preserved) */}
                <a
                  href={COMPANY_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  aria-label="Get driving directions to New Bright Glass Works on Google Maps"
                >
                  <Navigation className="w-4 h-4 fill-current text-white" />
                  <span>Get Driving Directions</span>
                </a>

                {/* View Location on Google Maps */}
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  aria-label="Open New Bright Glass Works location in Google Maps app"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                </a>
              </div>
            </div>

            {/* Business Hours Table */}
            <div className="glass-card p-6 rounded-3xl border border-[var(--border-card)]">
              <div className="flex items-center gap-2 text-sm font-serif font-bold text-[var(--text-primary)] mb-4">
                <Clock className="w-4 h-4 text-[var(--accent)]" />
                <span>Operating & Dispatch Hours (IST)</span>
              </div>
              <div className="space-y-2 text-xs">
                {COMPANY_INFO.businessHours.map((bh) => (
                  <div key={bh.days} className="flex items-center justify-between py-1.5 border-b border-[var(--border-subtle)]">
                    <span className="text-[var(--text-secondary)]">{bh.days}</span>
                    <span className="font-mono text-[var(--text-primary)] font-medium">{bh.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
