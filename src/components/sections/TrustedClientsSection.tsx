import React from 'react';
import { BRAND } from '../../data/brand';

export const TrustedClientsSection: React.FC = () => {
  return (
    <section className="py-14 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden select-none" aria-label="Trusted Clients">
      <div className="w-full px-6 sm:px-10 lg:px-16 mb-8 text-center">
        <p className="text-xs font-poppins font-bold uppercase tracking-widest text-[#425466] drop-shadow-xs">
          Trusted by World-Class Brands & Creator Teams Globally
        </p>
      </div>

      {/* Infinite Logo Slider Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Gradient Fades for Smooth Transition */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-10 items-center animate-marquee whitespace-nowrap">
          {[...BRAND.clientLogos, ...BRAND.clientLogos, ...BRAND.clientLogos].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 bg-white backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#635BFF]/50 transition-all duration-200 transform hover:-translate-y-0.5 group cursor-default"
            >
              <span className="text-xs sm:text-sm font-extrabold tracking-wider font-poppins text-[#0A2540] group-hover:text-[#635BFF] transition-colors">
                {client.logoText}
              </span>
              <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
