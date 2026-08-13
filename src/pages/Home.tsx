import React, { useState } from 'react';
import ReactLenis from 'lenis/react';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustedClientsSection } from '../components/sections/TrustedClientsSection';
import { AboutTeesZoneSection } from '../components/sections/AboutTeesZoneSection';
import { ProductCategoriesSection } from '../components/sections/ProductCategoriesSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { ApparelManufacturingSection } from '../components/sections/ApparelManufacturingSection';
import { MeetOurTeamSection } from '../components/sections/MeetOurTeamSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactPreviewSection } from '../components/sections/ContactPreviewSection';
import { Footer } from '../components/layout/Footer';
import { FloatingWhatsApp } from '../components/common/FloatingWhatsApp';

// Modals
import { InstantQuoteModal } from '../components/common/InstantQuoteModal';

export const Home: React.FC = () => {
  // Modal & Cart states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
        />

        {/* Main Single Page Sections */}
        <main className="flex-1 relative z-10">
          {/* 2. Hero Section */}
          <HeroSection
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />

          {/* 3. Trusted Clients Marquee */}
          <TrustedClientsSection />

          {/* 4. About TeesZone */}
          <AboutTeesZoneSection 
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
          />

          {/* 5. Products Lookbook */}
          <ProductCategoriesSection 
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
          />

          {/* 6. Why Choose TeesZone */}
          <WhyChooseSection />

          {/* 7. Apparel Manufacturing */}
          <ApparelManufacturingSection 
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
          />

          {/* 8. Meet Our Team */}
          <MeetOurTeamSection />

          {/* 9. Testimonials */}
          <TestimonialsSection />

          {/* 10. FAQ */}
          <FAQSection />

          {/* 11. Contact Preview & Corporate Office Map */}
          <ContactPreviewSection />
        </main>

        {/* 14. Footer */}
        <Footer />

        {/* Floating Clean Native WhatsApp Button */}
        <FloatingWhatsApp />

        <InstantQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </div>
    </ReactLenis>
  );
};
