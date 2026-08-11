import React from 'react';
import { STATS } from '../../data/stats';

export const StatisticsSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-[#0A2540] text-white relative overflow-hidden" aria-label="Key Performance Statistics">
      {/* Background Subtle Gradient Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-24 left-1/3 w-96 h-96 bg-[#635BFF] rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 w-96 h-96 bg-[#38BDF8] rounded-full blur-3xl" />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl hover:bg-white/10 transition-all text-center space-y-2 group shadow-xl"
            >
              <span className="text-4xl sm:text-5xl font-poppins font-black tracking-tight text-white group-hover:text-[#38BDF8] transition-colors block drop-shadow-md">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-poppins font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                {stat.label}
              </span>
              <p className="text-xs font-inter text-slate-300 leading-relaxed max-w-xs mx-auto">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
