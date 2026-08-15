import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Receipt, CheckCircle, CreditCard, Truck } from 'lucide-react';

interface ApparelManufacturingSectionProps {
  onOpenQuoteModal?: () => void;
}

export const ApparelManufacturingSection: React.FC<ApparelManufacturingSectionProps> = () => {
  const steps = [
    {
      number: '01',
      title: 'SHARE REQUIREMENTS',
      sub: 'Quantity, Style, Logo',
      icon: ClipboardList
    },
    {
      number: '02',
      title: 'RECEIVE FREE QUOTE',
      sub: 'Pricing in 24 Hrs',
      icon: Receipt
    },
    {
      number: '03',
      title: 'APPROVE SAMPLE',
      sub: 'See Before You Commit',
      icon: CheckCircle
    },
    {
      number: '04',
      title: 'CONFIRM & PAY',
      sub: 'Advance Locks Your Slot',
      icon: CreditCard
    },
    {
      number: '05',
      title: 'DELIVERED TO YOUR DOOR',
      sub: 'Pan-India Delivery',
      icon: Truck
    }
  ];

  return (
    <section 
      id="manufacturing" 
      className="py-16 sm:py-24 bg-cream-light text-[#241A1D] relative overflow-hidden select-none"
      aria-label="Apparel Ordering Process Timeline"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#80011F_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-poppins font-black uppercase tracking-widest text-[#80011F] block">
            HOW WE WORK
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#241A1D] tracking-tight">
            Our 5-Step Ordering Process
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B60] font-inter font-semibold max-w-xl mx-auto pt-2">
            A simple, premium path from custom design requirements to door-step delivery.
          </p>
        </div>

        {/* Process Timeline: Horizontal on Desktop/Tablet, Vertical on Mobile */}
        <div className="relative pt-4 lg:pt-12">
          
          {/* Connector Line (Desktop/Tablet) */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#80011F]/10 via-[#80011F]/30 to-[#80011F]/10 hidden lg:block" />

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 justify-between relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-5 lg:gap-0 group w-full lg:w-1/5"
                >
                  {/* Step Bubble with Icon */}
                  <div className="relative shrink-0 lg:mb-6">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white border-2 border-[#80011F]/20 flex items-center justify-center shadow-md group-hover:border-[#80011F] group-hover:shadow-lg transition-all duration-300 relative z-10">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#80011F]" />
                    </div>
                    {/* Badge Number */}
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#80011F] text-white flex items-center justify-center font-poppins font-black text-[10px] shadow-sm z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Heading & Details */}
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-poppins font-extrabold text-[#241A1D] tracking-tight uppercase">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B5B60] font-inter font-medium leading-relaxed">
                      {step.sub}
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
