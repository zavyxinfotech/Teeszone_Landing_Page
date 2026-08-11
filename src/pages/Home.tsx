import React, { useState } from 'react';
import ReactLenis from 'lenis/react';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustedClientsSection } from '../components/sections/TrustedClientsSection';
import { ProductCatalogueSection } from '../components/sections/ProductCatalogue/ProductCatalogueSection';
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
import { FloatingWhatsApp } from '../components/common/FloatingWhatsApp';

// Modals
import { QuickViewModal } from '../components/common/QuickViewModal';
import { InstantQuoteModal } from '../components/common/InstantQuoteModal';

export const Home: React.FC = () => {
  // Modal & Cart states
  const [quickViewProduct, setQuickViewProduct] = useState<any | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <ReactLenis root>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A2540] font-sans antialiased selection:bg-[#635BFF]/20 selection:text-[#635BFF] relative overflow-x-hidden">
        {/* Global Decorative Frosted Glass Mesh Gradients */}
        <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#635BFF] opacity-[0.06] blur-[100px] rounded-full pointer-events-none z-0" />
        <div className="fixed bottom-[-150px] left-[-150px] w-[600px] h-[600px] bg-[#38BDF8] opacity-[0.07] blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="fixed top-[45%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#635BFF] opacity-[0.035] blur-[150px] rounded-full pointer-events-none z-0" />

        {/* 1. Header Navbar with Live Cart Counter */}
        <Header
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          cartCount={cartCount}
        />

        {/* Main Single Page Sections */}
        <main className="flex-1 relative z-10">
          {/* 2. Hero Section */}
          <SectionTransition index={0}>
            <HeroSection
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          </SectionTransition>

          {/* 3. Trusted Clients Marquee */}
          <SectionTransition index={1}>
            <TrustedClientsSection />
          </SectionTransition>

          {/* 4. Blank Apparel 23-Product Catalogue Section */}
          <SectionTransition index={2}>
            <ProductCatalogueSection
              onAddToCart={handleAddToCart}
            />
          </SectionTransition>

          {/* 5. Enterprise Apparel (9 Custom/Bulk Categories) */}
          <SectionTransition index={3}>
            <ProductCategoriesSection 
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
            />
          </SectionTransition>

          {/* 6. Why Choose TeesZone */}
          <SectionTransition index={4}>
            <WhyChooseSection />
          </SectionTransition>

          {/* 7. Precision Manufacturing (4-Step Timeline) */}
          <SectionTransition index={5}>
            <PrintingProcessSection />
          </SectionTransition>

          {/* 8. Ready Stock Products (3 E-commerce Products) */}
          <SectionTransition index={6}>
            <FeaturedProductsSection
              onQuickView={(p) => setQuickViewProduct(p)}
              onAddToCart={() => {
                handleAddToCart();
                setIsQuoteModalOpen(true);
              }}
            />
          </SectionTransition>

          {/* 9. Meet Our Team */}
          <SectionTransition index={7}>
            <MeetOurTeamSection />
          </SectionTransition>

          {/* 10. Statistics */}
          <SectionTransition index={8}>
            <StatisticsSection />
          </SectionTransition>

          {/* 11. Testimonials */}
          <SectionTransition index={9}>
            <TestimonialsSection />
          </SectionTransition>

          {/* 12. FAQ */}
          <SectionTransition index={10}>
            <FAQSection />
          </SectionTransition>

          {/* 13. Final CTA */}
          <SectionTransition index={11}>
            <FinalCTASection
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          </SectionTransition>

          {/* 14. Contact Preview & Corporate Office Map */}
          <SectionTransition index={12}>
            <ContactPreviewSection />
          </SectionTransition>
        </main>

        {/* 15. Footer */}
        <SectionTransition index={13}>
          <Footer />
        </SectionTransition>

        {/* Floating Clean Native WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Interactive Modals */}
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onRequestQuote={() => {
            setQuickViewProduct(null);
            setIsQuoteModalOpen(true);
          }}
        />

        <InstantQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </div>
    </ReactLenis>
  );
};
