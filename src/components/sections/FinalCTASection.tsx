import React from 'react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { ArrowRight, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenQuoteModal: () => void;
  onOpenSampleModal?: () => void;
  onOpenCustomizerModal?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenQuoteModal
}) => {
  return (
    <section className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-transparent relative overflow-hidden" aria-label="Call to Action Banner">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        
        {/* Stripe Banner Container */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#80011F] text-white shadow-2xl overflow-hidden">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#A51F3D]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#F7E7CE]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            
              READY TO ELEVATE YOUR BRAND?
          

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold tracking-tight leading-tight">
              Bring Your Brand to Life With <span className="text-[#F7E7CE]">Premium Custom Apparel.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#F7E7CE] leading-relaxed font-inter">
              Low minimum order quantity, 100% Pantone solid coated color accuracy, and free prepress proofs. Join 12,000+ corporate teams today.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-poppins">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenQuoteModal}
                icon={<ArrowRight className="w-5 h-5" />}
                className="bg-[#F7E7CE] text-[#80011F] hover:bg-[#FCF5EA] hover:text-[#600018] shadow-xl shadow-black/15 hover:shadow-2xl border-0"
              >
                Get Instant Quote
              </Button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-[#F7E7CE] bg-white/10 hover:bg-white/20 border border-[#F7E7CE]/30 hover:border-[#F7E7CE] transition-all cursor-pointer shadow-lg"
              >
                <Compass className="w-4 h-4 text-[#F7E7CE]" />
                <span>Explore Catalog</span>
              </a>
            </div>

           
          </div>

        </div>

      </div>
    </section>
  );
};
