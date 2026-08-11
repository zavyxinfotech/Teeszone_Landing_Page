import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '../common/Badge';
import { FileCheck, Scissors, Printer, Truck, Sparkles } from 'lucide-react';

interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  numColor: string;
  numLightColor: string;
}

const MANUFACTURING_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Vector Proof & 3D Mockup',
    description: 'Submit your assets to receive high-resolution 3D digital apparel proofs with exact Pantone hex matches in 2 hours.',
    icon: FileCheck,
    numColor: 'text-[#2DD4BF]', // Mint / Teal
    numLightColor: 'bg-teal-500/10 text-teal-600',
  },
  {
    number: '02',
    title: 'Premium Fabric Selection',
    description: '100% long-staple combed cotton & organic Supima yarns with verified GSM fabric weight & pre-shrunk bio-wash.',
    icon: Scissors,
    numColor: 'text-[#A78BFA]', // Lavender / Purple
    numLightColor: 'bg-purple-500/10 text-purple-600',
  },
  {
    number: '03',
    title: 'Precision Printing & Stitching',
    description: 'Automatic screen printing and 15-needle Tajima embroidery with micro-precision ink density & zero tactile feel.',
    icon: Printer,
    numColor: 'text-[#38BDF8]', // Sky Blue
    numLightColor: 'bg-sky-500/10 text-sky-600',
  },
  {
    number: '04',
    title: 'Eco Packaging & Dispatch',
    description: 'Individually polybagged garments shipped via express air freight with guaranteed 48hr express delivery options.',
    icon: Truck,
    numColor: 'text-[#A3E635]', // Lime Green
    numLightColor: 'bg-lime-500/10 text-lime-600',
  },
];

const AUTO_ROTATE_INTERVAL = 3600; // 3.6s per step on mobile

export const PrintingProcessSection: React.FC = () => {
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto pop-up transition for mobile view
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveMobileIdx((prev) => (prev + 1) % MANUFACTURING_STEPS.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeStep = MANUFACTURING_STEPS[activeMobileIdx];
  const ActiveIcon = activeStep.icon;

  return (
    <section 
      id="process" 
      className="py-12 sm:py-16 lg:py-24 bg-slate-50 text-[#0A2540] relative overflow-hidden select-none" 
      aria-label="Precision Manufacturing Process"
    >
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.05),transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      <div className="w-full px-5 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header (Mobile Compact Font Sizes) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-2 sm:space-y-3">
          <Badge variant="sky" size="md">
            <Sparkles className="w-3.5 h-3.5 mr-1 inline-block" />
            PRECISION MANUFACTURING
          </Badge>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight leading-tight">
            Our 4-Step Enterprise Process
          </h2>
          <p className="text-xs sm:text-base text-[#425466] font-inter font-medium leading-relaxed max-w-2xl mx-auto">
            From prepress vector auditing to 160°C quartz curing and express global doorstep dispatch.
          </p>
        </div>

        {/* -------------------------------------------------------------
            MOBILE / TABLET VIEW (< 1024px): Single Row Compact Auto Pop-Up
           ------------------------------------------------------------- */}
        <div 
          className="block lg:hidden max-w-md mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Step Selector Pills (01, 02, 03, 04) */}
          <div className="flex justify-center gap-2 mb-6">
            {MANUFACTURING_STEPS.map((step, idx) => {
              const isActive = idx === activeMobileIdx;
              return (
                <button
                  key={step.number}
                  onClick={() => {
                    setActiveMobileIdx(idx);
                    setIsPaused(true);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-outfit font-extrabold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A2540] text-white shadow-md scale-105 ring-2 ring-[#635BFF]'
                      : 'bg-white text-slate-500 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  STEP {step.number}
                </button>
              );
            })}
          </div>

          {/* Single Pop-Up Spotlight Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.number}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Recessed Slot Line */}
              <div className="w-full h-1 bg-slate-100 rounded-full mb-2 shadow-inner" />

              {/* Number */}
              <span className={`text-5xl sm:text-6xl font-outfit font-extrabold ${activeStep.numColor} tracking-tighter drop-shadow-xs my-1`}>
                {activeStep.number}
              </span>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-poppins font-extrabold text-[#0A2540] uppercase tracking-wide leading-snug mt-1">
                {activeStep.title}
              </h3>

              {/* Description (Compact size for mobile) */}
              <p className="text-xs text-[#425466] font-inter leading-relaxed mt-2 max-w-xs">
                {activeStep.description}
              </p>

              {/* Bottom Centered Icon Badge */}
              <div className="pt-4 mt-4 border-t border-slate-100 w-full flex justify-center">
                <div className="w-10 h-10 rounded-full bg-[#635BFF] text-white flex items-center justify-center shadow-md">
                  <ActiveIcon className="w-4 h-4 stroke-[2.2]" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* -------------------------------------------------------------
            DESKTOP VIEW (>= 1024px): 4 Side-by-Side Bouncing Columns
           ------------------------------------------------------------- */}
        <div className="hidden lg:grid grid-cols-4 gap-6 pt-4 items-stretch">
          {MANUFACTURING_STEPS.map((step, idx) => {
            const StepIcon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 18, 
                  delay: idx * 0.15 
                }}
                className="bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group relative overflow-hidden"
              >
                
                {/* Top: Large Colorful Number slot */}
                <div className="relative w-full flex flex-col items-center justify-center pt-2 pb-4">
                  {/* Recessed Slot Shadow Line */}
                  <div className="w-full h-1 bg-slate-100 rounded-full mb-3 shadow-inner" />
                  
                  <span className={`text-7xl xl:text-8xl font-outfit font-extrabold ${step.numColor} tracking-tighter drop-shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                    {step.number}
                  </span>
                </div>

                {/* Middle: Title & Description */}
                <div className="text-center space-y-3 my-2 flex-grow flex flex-col items-center justify-center">
                  <h3 className="text-base font-poppins font-extrabold text-[#0A2540] tracking-wide uppercase leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] font-inter leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>

                {/* Bottom: Minimalist Centered Icon Badge */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-[#635BFF] group-hover:text-white text-[#0A2540] flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                    <StepIcon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
