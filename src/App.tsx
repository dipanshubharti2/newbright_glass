/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { FactoryGallery } from './components/FactoryGallery.tsx';
import { ClientShowcase } from './components/ClientShowcase.tsx';
import { CatalogueDownloadSection } from './components/CatalogueDownloadSection.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { CorporateGifting } from './components/CorporateGifting.tsx';
import { ManufacturingProcess } from './components/ManufacturingProcess.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';

export default function App() {
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>('');

  const handleQuoteClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForQuote = (productName: string) => {
    setSelectedProductForQuote(productName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans flex flex-col selection:bg-[var(--accent)] selection:text-[var(--accent-text)]">
      {/* Sticky Header with Official BRIGHT Logo, Navigation, WhatsApp, and Quote CTA */}
      <Header onQuoteClick={handleQuoteClick} />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onQuoteClick={handleQuoteClick} />

        {/* Section 2: About Us */}
        <AboutSection />

        {/* Section 3: Products Catalog with Category Filters & Specs Modal */}
        <ProductsSection onSelectForQuote={handleSelectProductForQuote} />

        {/* Section 4: Compact Factory Gallery & Video Tours */}
        <FactoryGallery />

        {/* Section 5: Client Logos Showcase */}
        <ClientShowcase />

        {/* Section 6: Downloadable Catalogues PDF Center */}
        <CatalogueDownloadSection />

        {/* Section 7: Why Choose Us (6 Capabilities) */}
        <WhyChooseUs />

        {/* Section 8: Corporate Gifting & Custom Monogramming */}
        <CorporateGifting onQuoteClick={handleQuoteClick} />

        {/* Section 9: 6-Stage Manufacturing Journey */}
        <ManufacturingProcess />

        {/* Section 10: Testimonials Carousel */}
        <Testimonials />

        {/* Section 11: FAQ Accordion */}
        <FaqSection />

        {/* Section 12: Contact, Quote Builder & Google Map Directions */}
        <ContactSection prefilledProduct={selectedProductForQuote} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar & Floating WhatsApp */}
      <FloatingActions onQuoteClick={handleQuoteClick} />
    </div>
  );
}
