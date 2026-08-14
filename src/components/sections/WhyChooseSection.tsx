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
        <div className="text-center max-w-3xl mx-auto mb-24 lg:mb-32 space-y-3">
          <span className="text-xs font-poppins font-black uppercase tracking-widest text-[#F7E7CE] block">
            THE TEESZONE ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight leading-tight">
            Why Choose TeesZone?
          </h2>
        </div>

        {/* 4 short visual points spanning full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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

      </div>
    </section>
  );
};

