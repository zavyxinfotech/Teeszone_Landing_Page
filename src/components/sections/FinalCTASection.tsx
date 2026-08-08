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
    <section className="py-20 lg:py-28 bg-transparent relative overflow-hidden" aria-label="Call to Action Banner">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Stripe Banner Container (Borderless Premium Surface) */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-[#0A2540] text-white shadow-2xl overflow-hidden">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#635BFF]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#38BDF8]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-7 relative z-10">
            <Badge variant="sky" size="md">
              READY TO ELEVATE YOUR BRAND?
            </Badge>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-poppins font-extrabold tracking-tight leading-tight">
              Order Your Custom Apparel With <span className="text-[#38BDF8]">Guaranteed 48hr Dispatch.</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-inter">
              Low minimum order quantity, 100% Pantone solid coated color accuracy, and free prepress proofs. Join 12,000+ corporate teams today.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-poppins">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenQuoteModal}
                icon={<ArrowRight className="w-5 h-5" />}
                className="shadow-xl shadow-[#635BFF]/40 hover:shadow-2xl hover:shadow-[#635BFF]/60"
              >
                Get Instant Quote
              </Button>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md transition-all cursor-pointer shadow-lg"
              >
                <Compass className="w-4 h-4 text-[#38BDF8]" />
                <span>Explore Catalog</span>
              </a>
            </div>

            {/* Bottom Trust Badges */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-inter text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Free Digital Vector Proof in 2 Hours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
                <span>OEKO-TEX Certified Organic Cotton</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
