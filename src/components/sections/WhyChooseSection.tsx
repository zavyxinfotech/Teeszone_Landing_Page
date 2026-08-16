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
      description: "Cotton, EcoBlend & Nano Poly options.",
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
      className="pt-12 pb-16 lg:pt-28 lg:pb-40 bg-cover bg-center bg-no-repeat text-white relative overflow-hidden select-none"
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
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-1">
          {/* Row 1: Cursive "Why" */}
          <span 
            className="text-xl sm:text-2xl lg:text-3xl text-[#F7E7CE] block tracking-wide select-none drop-shadow-sm"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Why
          </span>
          {/* Row 2: Heavy "CHOOSE" */}
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-poppins font-black text-white tracking-tight leading-none uppercase select-none drop-shadow-md">
            CHOOSE
          </h2>
          {/* Row 3: Flanked "US?" */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2">
            {/* Left Flanking Dashes */}
            <div className="flex items-end gap-0.5 select-none h-5">
              <div className="w-2.5 h-[1.5px] bg-[#F7E7CE] rounded-full opacity-40" />
              <div className="w-6 h-[1.5px] bg-[#F7E7CE] rounded-full opacity-70" />
              <div className="w-1.5 h-[1.5px] bg-[#F7E7CE] rounded-full" />
            </div>
            {/* Center Text */}
            <span className="text-lg sm:text-2xl lg:text-3xl font-poppins font-extrabold text-[#F7E7CE] tracking-wider uppercase select-none">
              TEESZONE
            </span>
            {/* Right Flanking Dashes */}
            <div className="flex items-end gap-0.5 select-none h-5">
              <div className="w-1.5 h-[1.5px] bg-[#F7E7CE] rounded-full" />
              <div className="w-6 h-[1.5px] bg-[#F7E7CE] rounded-full opacity-70" />
              <div className="w-2.5 h-[1.5px] bg-[#F7E7CE] rounded-full opacity-40" />
            </div>
          </div>
        </div>

        {/* Outer grid wrapper */}
        <div className="relative z-10">
          
          {/* Desktop Cards Grid with Cinematic 3D perspective and continuous floating animations */}
          <div className="hidden lg:grid grid-cols-4 gap-8 relative z-10 [perspective:1200px] [transform-style:preserve-3d]">
            {points.map((point, idx) => {
              const Icon = point.icon;
              const isEven = idx % 2 === 1;
              return (
                <motion.div 
                  key={idx}
                  className="flex flex-col items-center text-center group relative cursor-pointer"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 5 + (idx % 2) * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.4
                  }}
                >
                  {/* Circular container */}
                  <div className="relative [transform-style:preserve-3d]">
                    
                    {/* Circle Card */}
                    <div 
                      className={`w-36 h-36 rounded-full bg-white flex items-center justify-center border-[4px] shadow-lg transition-transform duration-300 group-hover:scale-105 ${
                        isEven ? 'border-[#F7E7CE]' : 'border-[#80011F]'
                      }`}
                    >
                      <div className={`p-4 rounded-full ${isEven ? 'bg-[#F7E7CE]/20 text-[#80011F]' : 'bg-[#80011F]/10 text-[#80011F]'} group-hover:bg-[#80011F] group-hover:text-white transition-all duration-300`}>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        >
                          <Icon className="w-10 h-10" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Step Number Badge */}
                    <div 
                      className={`absolute -top-2 left-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-poppins font-black shadow-md ${
                        isEven ? 'bg-[#0A2540] text-[#F7E7CE] border border-white/10' : 'bg-[#80011F] text-white'
                      }`}
                    >
                      0{idx + 1}
                    </div>

                    {/* Wave intersection connection node (visible on desktop) */}
                    <div 
                      className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm z-20 ${
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

          {/* Mobile Cinematic Carousel (Continuous Horizontal Auto-scroll, NO card borders, matches desktop styling) */}
          <div className="lg:hidden relative w-full overflow-hidden py-4 z-10 select-none">
            {/* Edge fading gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0A2540] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A2540] to-transparent z-20 pointer-events-none" />

            <motion.div
              className="flex gap-12 w-max"
              animate={{ x: [0, -960] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 20
              }}
            >
              {[...points, ...points].map((point, idx) => {
                const Icon = point.icon;
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={idx}
                    className="w-48 shrink-0 flex flex-col items-center text-center relative z-10 transition-transform duration-300"
                  >
                    {/* Circle Card */}
                    <div className="relative">
                      <div 
                        className={`w-20 h-20 rounded-full bg-white flex items-center justify-center border-2 shadow-md ${
                          isEven ? 'border-[#F7E7CE]' : 'border-[#80011F]'
                        }`}
                      >
                        <div className={`p-2.5 rounded-full ${isEven ? 'bg-[#F7E7CE]/20 text-[#80011F]' : 'bg-[#80011F]/10 text-[#80011F]'}`}>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                          >
                            <Icon className="w-6 h-6" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Step Number Badge */}
                      <div 
                        className={`absolute -top-1 -left-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-poppins font-black shadow-md ${
                          isEven ? 'bg-[#0A2540] text-[#F7E7CE] border border-white/10' : 'bg-[#80011F] text-white'
                        }`}
                      >
                        0{(idx % 4) + 1}
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="mt-4 space-y-1">
                      <h4 className="text-xs font-poppins font-bold text-[#F7E7CE] uppercase tracking-wide">
                        {point.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-200 font-inter font-medium leading-relaxed max-w-[150px] mx-auto whitespace-normal">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
