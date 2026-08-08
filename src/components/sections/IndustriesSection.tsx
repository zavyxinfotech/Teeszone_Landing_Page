import React from 'react';
import { INDUSTRIES } from '../../data/industries';
import { Badge } from '../common/Badge';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenQuoteModal: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-transparent relative">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="sky" size="md">
            SECTOR SPECIALIZATION
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Tailored Apparel Solutions for Every Industry
          </h2>
          <p className="text-base sm:text-lg text-[#425466] font-inter leading-relaxed">
            Whether you need stain-repellent hospital scrubs, fire-retardant kitchen aprons, or high-vis safety vests, TeesZone builds industry-compliant apparel.
          </p>
        </div>

        {/* Industry Cards Grid (Borderless Premium Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="stripe-card stripe-card-hover rounded-3xl bg-white/90 backdrop-blur-xl p-6 shadow-lg flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Visual Header Image */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 bg-[#0A2540]/90 backdrop-blur-md text-[10px] font-bold text-white px-2.5 py-1 rounded-lg shadow-md">
                    {ind.clientCount}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-poppins font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs font-bold text-[#635BFF] mt-0.5 font-poppins">
                    {ind.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#425466] mt-2 leading-relaxed font-inter">
                    {ind.description}
                  </p>
                </div>

                {/* Popular Products List */}
                <div className="pt-3 border-t border-slate-100 space-y-2 font-inter">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block font-poppins">
                    Top Recommended Outfits:
                  </span>
                  {ind.popularApparel.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#0A2540] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Quote Button */}
              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-3 bg-slate-100 hover:bg-[#635BFF] hover:text-white text-[#0A2540] text-xs font-poppins font-bold rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs hover:shadow-md"
                >
                  <span>Request Sector Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
