import React from 'react';
import { motion } from 'motion/react';
import { Factory, Layers, Printer, Truck } from 'lucide-react';
import whyTeeszoneBg from '../../assets/backgrounds/why_teeszone_bg.png';

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
      className="py-20 lg:py-28 bg-slate-50 text-[#0A2540] relative overflow-hidden select-none"
      aria-label="Why Choose TeesZone"
    >
      {/* Decorative ambient background lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#80011F]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/5 blur-[150px] rounded-full" />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-poppins font-black uppercase tracking-widest text-[#80011F] block">
            THE TEESZONE ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight leading-tight">
            Why Choose TeesZone?
          </h2>
        </div>

        {/* Grid Layout: Points on the left, Image on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 4 short visual points */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {points.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                  className="flex flex-col items-start text-left p-6 rounded-2xl bg-white border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 group shadow-xs"
                >
                  <div className="p-3 bg-[#80011F]/10 text-[#80011F] rounded-xl group-hover:bg-[#80011F] group-hover:text-white transition-all duration-300 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-[#0A2540] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-inter leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: One large authentic image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <img 
                src={whyTeeszoneBg} 
                alt="Apparel manufacturing team inspecting premium shirts" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
              />
              {/* Subtle visual gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
