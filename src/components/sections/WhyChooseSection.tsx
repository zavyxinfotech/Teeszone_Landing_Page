import React from 'react';
import { Badge } from '../common/Badge';
import { 
  Printer, 
  Zap, 
  Palette, 
  Box, 
  Clock
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-us" className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-transparent relative">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <Badge variant="sky" size="md">
            THE TEESZONE ADVANTAGE
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Why World-Class Brands Choose TeesZone
          </h2>
          <p className="text-sm sm:text-base text-[#425466] font-inter leading-relaxed">
            Japanese Tajima embroidery, M&R automatic screen printing, and OEKO-TEX organic yarns.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Large Featured Card */}
          <div className="md:col-span-2 stripe-card stripe-card-hover rounded-3xl p-6 sm:p-8 bg-white/90 backdrop-blur-xl shadow-lg relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-bold shadow-xs">
                <Printer className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="primary" size="sm" className="mb-2">
                  Japanese M&R Machinery
                </Badge>
                <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#0A2540]">
                  Ultra-HD Screen & Digital Print Density
                </h3>
                <p className="text-xs sm:text-sm text-[#425466] mt-2 leading-relaxed font-inter">
                  Our automatic 12-color screen presses push phthalate-free inks deep into cotton fibers, preventing cracking or peeling after 50+ industrial washes.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs font-inter">
              <div>
                <span className="text-slate-500 block font-medium">Print Resolution:</span>
                <span className="font-bold text-[#0A2540]">1,200 DPI Razor Sharp</span>
              </div>
              <div>
                <span className="text-slate-500 block font-medium">Ink Formulation:</span>
                <span className="font-bold text-emerald-600">Zero-Hand Soft Touch</span>
              </div>
            </div>
          </div>

          {/* Card 2: 48hr Rush */}
          <div className="stripe-card stripe-card-hover rounded-3xl p-6 bg-white/90 backdrop-blur-xl shadow-lg flex flex-col justify-between space-y-4">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-amber-100/80 text-amber-700 flex items-center justify-center font-bold mb-3 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-poppins font-bold text-[#0A2540]">
                48-Hour Event Rush
              </h3>
              <p className="text-xs text-[#425466] mt-1.5 leading-relaxed font-inter">
                24/7 rush production line guarantees doorstep delivery in under 48 hours for event activations.
              </p>
            </div>
            <div className="bg-amber-50/90 p-2.5 rounded-xl text-xs font-bold text-amber-800 shadow-2xs">
              ⚡ Guaranteed On-Time
            </div>
          </div>

          {/* Card 3: Pantone Matching */}
          <div className="stripe-card stripe-card-hover rounded-3xl p-6 bg-white/90 backdrop-blur-xl shadow-lg flex flex-col justify-between space-y-4">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#38BDF8]/15 text-[#0284C7] flex items-center justify-center font-bold mb-3 shadow-xs">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-poppins font-bold text-[#0A2540]">
                100% Pantone Precision
              </h3>
              <p className="text-xs text-[#425466] mt-1.5 leading-relaxed font-inter">
                Spectrophotometer audits ensure exact corporate hex codes match solid coated PMS standards.
              </p>
            </div>
            <div className="bg-[#38BDF8]/10 p-2.5 rounded-xl text-xs font-bold text-[#0284C7] shadow-2xs">
              🎨 Zero Color Bleed
            </div>
          </div>

          {/* Card 4: Low MOQ */}
          <div className="stripe-card stripe-card-hover rounded-3xl p-6 bg-white/90 backdrop-blur-xl shadow-lg flex flex-col justify-between space-y-4">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center font-bold mb-3 shadow-xs">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-poppins font-bold text-[#0A2540]">
                Low 10 Pcs Minimum
              </h3>
              <p className="text-xs text-[#425466] mt-1.5 leading-relaxed font-inter">
                Order low batch quantities for prototypes or 10,000+ units with full wholesale volume pricing.
              </p>
            </div>
            <div className="bg-emerald-50/90 p-2.5 rounded-xl text-xs font-bold text-emerald-800 shadow-2xs">
              🌱 From 10 to 10,000+ Pcs
            </div>
          </div>

          {/* Card 5: Large Swag Box */}
          <div className="md:col-span-2 stripe-card stripe-card-hover rounded-3xl p-6 sm:p-8 bg-white/90 backdrop-blur-xl shadow-lg relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-bold shadow-xs">
                <Box className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="violet" size="sm" className="mb-2">
                  HR & Remote Team Portal
                </Badge>
                <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#0A2540]">
                  Global Individual Employee Drop-Shipping
                </h3>
                <p className="text-xs sm:text-sm text-[#425466] mt-2 leading-relaxed font-inter">
                  Send custom onboarding welcome kits directly to remote employee homes worldwide in custom branded gift boxes.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-inter">
              <span className="font-semibold text-[#0A2540]">Direct Home Delivery in 140+ Countries</span>
              <span className="text-[#635BFF] font-bold">Learn Corporate Portal →</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
