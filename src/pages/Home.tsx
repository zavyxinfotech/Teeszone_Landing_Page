import React, { useState } from 'react';
import ReactLenis from 'lenis/react';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustedClientsSection } from '../components/sections/TrustedClientsSection';
import { ProductCategoriesSection } from '../components/sections/ProductCategoriesSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { PrintingProcessSection } from '../components/sections/PrintingProcessSection';
import { FeaturedProductsSection } from '../components/sections/FeaturedProductsSection';
import { MeetOurTeamSection } from '../components/sections/MeetOurTeamSection';
import { StatisticsSection } from '../components/sections/StatisticsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { ContactPreviewSection } from '../components/sections/ContactPreviewSection';
import { Footer } from '../components/layout/Footer';
import { SectionTransition } from '../components/common/SectionTransition';

// Modals
import { QuickViewModal } from '../components/common/QuickViewModal';
import { CustomizerModal } from '../components/common/CustomizerModal';
import { SampleKitModal } from '../components/common/SampleKitModal';
import { InstantQuoteModal } from '../components/common/InstantQuoteModal';

import { Product } from '../types';
import { PRODUCTS } from '../data/products';

export const Home: React.FC = () => {
  // Modal states
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [customizerProduct, setCustomizerProduct] = useState<Product | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenCustomizer = (target?: Product | string | any) => {
    if (typeof target === 'string') {
      const match = PRODUCTS.find((p) => p.category === target || p.id === target);
      setCustomizerProduct(match || PRODUCTS[0]);
    } else if (target && typeof target === 'object' && 'id' in target && 'category' in target) {
      setCustomizerProduct(target as Product);
    } else {
      setCustomizerProduct(PRODUCTS[0]);
    }
    setIsCustomizerOpen(true);
  };

  const handleOpenSampleKit = () => {
    setIsSampleModalOpen(true);
  };

  return (
    <ReactLenis root>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A2540] font-sans antialiased selection:bg-[#635BFF]/20 selection:text-[#635BFF] relative overflow-x-hidden">
        {/* Global Decorative Frosted Glass Mesh Gradients */}
        <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#635BFF] opacity-[0.06] blur-[100px] rounded-full pointer-events-none z-0" />
        <div className="fixed bottom-[-150px] left-[-150px] w-[600px] h-[600px] bg-[#38BDF8] opacity-[0.07] blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="fixed top-[45%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#635BFF] opacity-[0.035] blur-[150px] rounded-full pointer-events-none z-0" />

        {/* 1. Header Navbar */}
        <Header
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
          onOpenCustomizerModal={() => handleOpenCustomizer(PRODUCTS[0])}
        />

        {/* Main Single Page Sections */}
        <main className="flex-1 relative z-10">
          {/* 2. Hero Section */}
          <SectionTransition index={0}>
            <HeroSection
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              onOpenSampleModal={() => setIsSampleModalOpen(true)}
              onOpenCustomizerModal={() => handleOpenCustomizer(PRODUCTS[0])}
            />
          </SectionTransition>

          {/* 3. Trusted Clients Marquee */}
          <SectionTransition index={1}>
            <TrustedClientsSection />
          </SectionTransition>

          {/* 4. Product Categories */}
          <SectionTransition index={2}>
            <ProductCategoriesSection onOpenCustomizer={handleOpenCustomizer} />
          </SectionTransition>

          {/* 5. Why Choose TeesZone */}
          <SectionTransition index={3}>
            <WhyChooseSection />
          </SectionTransition>

          {/* 6. Printing Process (5-Step Timeline) */}
          <SectionTransition index={4}>
            <PrintingProcessSection />
          </SectionTransition>

          {/* 7. Featured Products Showcase */}
          <SectionTransition index={5}>
            <FeaturedProductsSection
              onQuickView={(p) => setQuickViewProduct(p)}
              onOpenCustomizer={(p) => handleOpenCustomizer(p)}
              onOrderSample={() => handleOpenSampleKit()}
            />
          </SectionTransition>

          {/* 8. Meet Our Team */}
          <SectionTransition index={6}>
            <MeetOurTeamSection />
          </SectionTransition>

          {/* 9. Statistics */}
          <SectionTransition index={7}>
            <StatisticsSection />
          </SectionTransition>

          {/* 10. Testimonials */}
          <SectionTransition index={8}>
            <TestimonialsSection />
          </SectionTransition>

          {/* 11. FAQ */}
          <SectionTransition index={9}>
            <FAQSection />
          </SectionTransition>

          {/* 12. Final CTA */}
          <SectionTransition index={10}>
            <FinalCTASection
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              onOpenSampleModal={() => setIsSampleModalOpen(true)}
              onOpenCustomizerModal={() => handleOpenCustomizer(PRODUCTS[0])}
            />
          </SectionTransition>

          {/* 13. Contact Preview & Corporate Office Map */}
          <SectionTransition index={11}>
            <ContactPreviewSection />
          </SectionTransition>
        </main>

        {/* 14. Footer */}
        <SectionTransition index={12}>
          <Footer />
        </SectionTransition>

        {/* Interactive Modals */}
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onOpenCustomizer={(p) => handleOpenCustomizer(p)}
          onOrderSample={() => handleOpenSampleKit()}
        />

        {isCustomizerOpen && (
          <CustomizerModal
            product={customizerProduct}
            onClose={() => setIsCustomizerOpen(false)}
            onRequestQuote={(details) => {
              console.log('Customizer quote submitted:', details);
            }}
          />
        )}

        <SampleKitModal
          isOpen={isSampleModalOpen}
          onClose={() => setIsSampleModalOpen(false)}
        />

        <InstantQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </div>
    </ReactLenis>
  );
};
