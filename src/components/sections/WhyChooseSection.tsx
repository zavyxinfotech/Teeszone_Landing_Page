import React from 'react';
import { motion } from 'motion/react';
import { Factory, Layers, Printer, Truck } from 'lucide-react';
import chooseusBg from '../../assets/images/chooseusBg.png';

export const WhyChooseSection: React.FC = () => {
  const points = [
    {
      title: "Direct Manufacturer",
      description: "Manufactured in Tiruppur, India's textile hub.",
      icon: Factory
    },
    {
      title: "Premium Fabrics",
      description: "Cotton, Polycotton, EcoBlend & Nano Poly options.",
      icon: Layers
    },
    {
      title: "Complete Customization",
      description: "Professional printing, embroidery & branding.",
      icon: Printer
    },
    {
      title: "Pan-India Delivery",
      description: "Reliable apparel solutions delivered across India.",
      icon: Truck
    }
  ];

  return (
    <section 
      id="why-us" 
      className="pt-20 pb-28 lg:pt-28 lg:pb-40 bg-cover bg-center bg-no-repeat text-white relative overflow-hidden select-none"
      style={{ backgroundImage: `url(${chooseusBg})` }}
      aria-label="Why Choose TeesZone"
    >
      {/* Dark overlay scrim for readability */}
      <div className="absolute inset-0 bg-[#0A2540]/80 mix-blend-multiply pointer-events-none" />

      {/* Decorative ambient background lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#80011F]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/5 blur-[150px] rounded-full" />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-1">
          {/* Row 1: Cursive "Why" */}
          <span 
            className="text-xl sm:text-2xl lg:text-3xl text-[#F7E7CE] block tracking-wide select-none drop-shadow-sm"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Why
          </span>
          {/* Row 2: Heavy "CHOOSE" */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-black text-white tracking-tight leading-none uppercase select-none drop-shadow-md">
            CHOOSE
          </h2>
          {/* Row 3: Flanked "US?" */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2">
            {/* Left Flanking Dashes */}
            <div className="flex items-end gap-0.5 select-none h-5">
              <div className="w-[2px] h-3 bg-[#F7E7CE] rounded-full rotate-[30deg] transform origin-bottom" />
              <div className="w-[2px] h-5 bg-[#F7E7CE] rounded-full rotate-[15deg] transform origin-bottom -translate-y-0.5" />
              <div className="w-[2px] h-3 bg-[#F7E7CE] rounded-full rotate-[0deg] transform origin-bottom" />
            </div>
            
            <span className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-black text-[#F7E7CE] tracking-tight leading-none uppercase select-none drop-shadow-md">
              US?
            </span>

            {/* Right Flanking Dashes */}
            <div className="flex items-end gap-0.5 select-none h-5">
              <div className="w-[2px] h-3 bg-[#F7E7CE] rounded-full rotate-[0deg] transform origin-bottom" />
              <div className="w-[2px] h-5 bg-[#F7E7CE] rounded-full rotate-[-15deg] transform origin-bottom -translate-y-0.5" />
              <div className="w-[2px] h-3 bg-[#F7E7CE] rounded-full rotate-[-30deg] transform origin-bottom" />
            </div>
          </div>

          {/* Description Text */}
          <p className="text-sm sm:text-base text-slate-200 font-inter font-semibold leading-relaxed max-w-xl mx-auto pt-6">
            Find the right quality fabric with the right custom printing and the right manufacturing partner with us.
          </p>

          {/* Divider Line with 3 dots */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <div className="h-[1px] w-12 bg-white/20" />
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#80011F]" />
              <div className="w-2 h-2 rounded-full bg-[#F7E7CE]" />
              <div className="w-2 h-2 rounded-full bg-[#80011F]" />
            </div>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
        </div>

        {/* 4 Steps Section with Wave path */}
        <div className="relative mt-24">
          
          {/* SVG connecting wave path (visible on desktop) */}
          <div className="absolute top-20 left-0 w-full h-16 hidden lg:block pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path d="M 50,60 C 87.5,60 87.5,60 125,60 C 187.5,60 187.5,30 250,30 C 312.5,30 312.5,60 375,60 C 437.5,60 437.5,30 500,30 C 562.5,30 562.5,60 625,60 C 687.5,60 687.5,30 750,30 C 812.5,30 812.5,60 875,60 C 920,60 950,50 980,10" 
                    stroke="#F7E7CE" 
                    strokeWidth="3" 
                    strokeDasharray="6,6"
                    className="opacity-40" />
            </svg>
            
            {/* Animated Launching Rocket */}
            <motion.div 
              className="absolute text-[#F7E7CE]"
              style={{ left: '97.5%', top: '0%' }}
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <div className="rotate-[35deg] transform -translate-x-1/2 -translate-y-1/2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L16 7l-5-5L4.5 16.5z" fill="#80011F" />
                  <path d="m12 5 9 9-4 4.5H9.5L12 5z" fill="#F7E7CE" />
                  <path d="M9 15 4 20" stroke="#80011F" />
                  <path d="M15 9 20 4" stroke="#F7E7CE" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Vertical dashed line for mobile/tablet */}
          <div className="absolute top-16 bottom-16 left-1/2 w-[2px] -translate-x-1/2 border-l-2 border-dashed border-white/20 lg:hidden z-0" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 relative z-10">
            {points.map((point, idx) => {
              const Icon = point.icon;
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circular container */}
                  <div className="relative">
                    
                    {/* Circle Card */}
                    <div 
                      className={`w-36 h-36 rounded-full bg-white flex items-center justify-center border-[4px] shadow-lg transition-transform duration-300 group-hover:scale-105 ${
                        isEven ? 'border-[#F7E7CE]' : 'border-[#80011F]'
                      }`}
                    >
                      <div className={`p-4 rounded-full ${isEven ? 'bg-[#F7E7CE]/20 text-[#80011F]' : 'bg-[#80011F]/10 text-[#80011F]'} group-hover:bg-[#80011F] group-hover:text-white transition-all duration-300`}>
                        <Icon className="w-10 h-10" />
                      </div>
                    </div>

                    {/* Step Number Badge */}
                    <div 
                      className={`absolute -top-2 left-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-poppins font-black shadow-md ${
                        isEven ? 'bg-[#0A2540] text-[#F7E7CE] border border-white/10' : 'bg-[#80011F] text-white'
                      }`}
                    >
                      {`0${idx + 1}`}
                    </div>

                    {/* Wave intersection connection node (visible on desktop) */}
                    <div 
                      className={`hidden lg:block absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm z-20 ${
                        isEven ? 'bg-[#F7E7CE]' : 'bg-[#80011F]'
                      }`}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="mt-8 space-y-2 max-w-[240px]">
                    <h3 className="text-base font-poppins font-black tracking-wider text-[#F7E7CE] uppercase group-hover:text-white transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 font-inter leading-relaxed font-semibold">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};


