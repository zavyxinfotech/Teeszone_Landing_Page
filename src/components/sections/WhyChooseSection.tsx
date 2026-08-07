import React from 'react';
import { Badge } from '../common/Badge';
import { 
  Printer, 
  Zap, 
  ShieldCheck, 
  Palette, 
  Box, 
  Clock
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-transparent border-y border-slate-200/80 relative">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="sky" size="md">
            THE TEESZONE ADVANTAGE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Why World-Class Brands Choose TeesZone
          </h2>
          <p className="text-base sm:text-lg text-[#425466] font-inter leading-relaxed">
            We combined Japanese Tajima embroidery machinery, M&R automatic screen printing, and OEKO-TEX certified organic yarns to deliver institutional quality.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Card 1: Large Featured Card - Ultra HD Printing */}
          <div className="md:col-span-2 stripe-card stripe-card-hover rounded-3xl p-8 sm:p-10 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-bold shadow-xs">
                <Printer className="w-7 h-7" />
              </div>
              <div>
                <Badge variant="primary" size="sm" className="mb-3">
                  Japanese M&R Machinery
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#0A2540]">
                  Ultra-HD Screen & Digital Print Density
                </h3>
                <p className="text-sm sm:text-base text-[#425466] mt-3 leading-relaxed font-inter">
                  Our automatic 12-color screen presses push phthalate-free inks deep into combed cotton fibers, preventing cracking, peeling, or fading even after 50+ industrial washes.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4 text-xs font-inter">
              <div>
                <span className="text-slate-500 block font-medium">Print Resolution:</span>
                <span className="font-bold text-[#0A2540] text-sm">1,200 DPI Razor Sharp</span>
              </div>
              <div>
                <span className="text-slate-500 block font-medium">Ink Formulation:</span>
                <span className="font-bold text-emerald-600 text-sm">Zero-Hand Soft Touch</span>
              </div>
            </div>
          </div>

          {/* Card 2: 48hr Express Event Rush */}
          <div className="stripe-card stripe-card-hover rounded-3xl p-7 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md space-y-5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-700 flex items-center justify-center font-bold mb-4 shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[#0A2540]">
                48-Hour Event Rush
              </h3>
              <p className="text-xs sm:text-sm text-[#425466] mt-2 leading-relaxed font-inter">
                Got a last-minute conference or hackathon? Our 24/7 rush production line guarantees doorstep delivery in under 48 hours.
              </p>
            </div>
            <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 text-xs font-bold text-amber-800">
              ⚡ Guaranteed On-Time Pledge
            </div>
          </div>

          {/* Card 3: 100% Pantone Precision */}
          <div className="stripe-card stripe-card-hover rounded-3xl p-7 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md space-y-5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/15 text-[#0284C7] flex items-center justify-center font-bold mb-4 shadow-xs">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[#0A2540]">
                100% Pantone Matching
              </h3>
              <p className="text-xs sm:text-sm text-[#425466] mt-2 leading-relaxed font-inter">
                Spectrophotometer color audits ensure your exact corporate hex codes match solid coated PMS standards precisely.
              </p>
            </div>
            <div className="bg-[#38BDF8]/10 p-3 rounded-2xl border border-[#38BDF8]/25 text-xs font-bold text-[#0284C7]">
              🎨 Zero Color Bleed Guarantee
            </div>
          </div>

          {/* Card 4: Zero MOQ Freedom */}
          <div className="stripe-card stripe-card-hover rounded-3xl p-7 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md space-y-5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center font-bold mb-4 shadow-xs">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[#0A2540]">
                Low 10 Pcs Minimum
              </h3>
              <p className="text-xs sm:text-sm text-[#425466] mt-2 leading-relaxed font-inter">
                Order low batch quantities for executive prototypes or 10,000+ units for global launches with full wholesale volume pricing.
              </p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 text-xs font-bold text-emerald-800">
              🌱 From 10 to 10,000+ Units
            </div>
          </div>

          {/* Card 5: Large Swag Box & Onboarding Portal */}
          <div className="md:col-span-2 stripe-card stripe-card-hover rounded-3xl p-8 sm:p-10 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-bold shadow-xs">
                <Box className="w-7 h-7" />
              </div>
              <div>
                <Badge variant="violet" size="sm" className="mb-3">
                  HR & Remote Team Portal
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#0A2540]">
                  Global Individual Employee Drop-Shipping
                </h3>
                <p className="text-sm sm:text-base text-[#425466] mt-3 leading-relaxed font-inter">
                  Send custom onboarding welcome kits directly to remote employee homes worldwide in custom branded gift boxes with personalized welcome letters.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm font-inter">
              <span className="font-semibold text-[#0A2540]">Direct Home Delivery in 140+ Countries</span>
              <span className="text-[#635BFF] font-bold">Learn Corporate Portal →</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
