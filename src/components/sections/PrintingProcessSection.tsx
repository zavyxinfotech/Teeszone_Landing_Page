import React from 'react';
import { motion } from 'motion/react';
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

export const PrintingProcessSection: React.FC = () => {
  return (
    <section 
      id="process" 
      className="py-16 lg:py-24 bg-slate-50 text-[#0A2540] relative overflow-hidden select-none" 
      aria-label="Precision Manufacturing Process"
    >
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.05),transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Badge variant="sky" size="md">
            <Sparkles className="w-3.5 h-3.5 mr-1 inline-block" />
            PRECISION MANUFACTURING
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight leading-tight">
            Our 4-Step Enterprise Process
          </h2>
          <p className="text-sm sm:text-base text-[#425466] font-inter font-medium leading-relaxed max-w-2xl mx-auto">
            From prepress vector auditing to 160°C quartz curing and express global doorstep dispatch.
          </p>
        </div>

        {/* 4 Staggered Bouncing Columns Matching Reference Image Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-4 items-stretch">
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
                
                {/* Top: Large Colorful Number slot (Peeking out effect from reference image) */}
                <div className="relative w-full flex flex-col items-center justify-center pt-2 pb-4">
                  {/* Recessed Slot Shadow Line */}
                  <div className="w-full h-1 bg-slate-100 rounded-full mb-3 shadow-inner" />
                  
                  <span className={`text-6xl sm:text-7xl lg:text-8xl font-outfit font-extrabold ${step.numColor} tracking-tighter drop-shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                    {step.number}
                  </span>
                </div>

                {/* Middle: Title & Description */}
                <div className="text-center space-y-3 my-2 flex-grow flex flex-col items-center justify-center">
                  <h3 className="text-base sm:text-lg font-poppins font-extrabold text-[#0A2540] tracking-wide uppercase leading-snug">
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
