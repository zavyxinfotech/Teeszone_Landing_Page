import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CUSTOM_BULK_PRODUCTS } from '../../../data/products';
import { Badge } from '../../common/Badge';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EnterpriseCatalogProps {
  onOpenQuoteModal?: () => void;
}

export const EnterpriseCatalog: React.FC<EnterpriseCatalogProps> = ({
  onOpenQuoteModal
}) => {
  const [activeId, setActiveId] = useState<string>(CUSTOM_BULK_PRODUCTS[0].id);

  const selectedItem = CUSTOM_BULK_PRODUCTS.find((item) => item.id === activeId) || CUSTOM_BULK_PRODUCTS[0];

  return (
    <section id="categories" className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden select-none" aria-label="Enterprise Apparel Catalog">
      
      {/* Background Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -25, 25, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#635BFF]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 30, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#38BDF8]/15 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14 space-y-3">
          <Badge variant="sky" size="md">
            ENTERPRISE APPAREL
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Custom & Bulk Apparel
          </h2>
          <p className="text-sm sm:text-base text-[#425466] font-inter font-semibold leading-relaxed max-w-2xl mx-auto">
            High-density customized apparel solutions engineered for corporate, institutional, industrial, and event requirements.
          </p>
        </div>

        {/* Skiper #53 ExpandOnHover Interactive Vertical Stack & Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 9 Categories Accordion List */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-center z-10">
            <span className="text-xs font-poppins font-bold text-[#635BFF] uppercase tracking-wider block mb-2 px-1">
              Select Apparel Line to Preview:
            </span>
            <div className="flex flex-col gap-2 w-full max-h-[520px] overflow-y-auto pr-1 custom-scrollbar">
              {CUSTOM_BULK_PRODUCTS.map((item, index) => {
                const isActive = item.id === activeId;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                    onClick={() => setActiveId(item.id)}
                    onMouseEnter={() => setActiveId(item.id)}
                    className={`group relative cursor-pointer overflow-hidden rounded-xl transition-all duration-300 p-3.5 sm:p-4 ${
                      isActive
                        ? 'bg-[#0A2540] text-white shadow-lg scale-[1.01]'
                        : 'bg-white text-[#0A2540] hover:bg-[#635BFF]/10 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`text-sm sm:text-base font-poppins font-bold ${isActive ? 'text-white' : 'text-[#0A2540]'}`}>
                          {item.name}
                        </h3>
                        <p className={`text-xs font-inter mt-0.5 line-clamp-1 ${isActive ? 'text-slate-300' : 'text-[#425466]'}`}>
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-200 ml-2 ${
                        isActive ? 'text-[#38BDF8] translate-x-1' : 'text-slate-400 group-hover:text-[#635BFF]'
                      }`} />
                    </div>

                    {/* Active Indicator Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#635BFF] rounded-r-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Giant Backdrop Typography & Category Spotlight Card */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[420px] sm:min-h-[480px]">
            
            {/* Backdrop Typography */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.backdropTitle}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.15, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden"
              >
                <span className="font-poppins font-black text-6xl sm:text-8xl xl:text-9xl tracking-tighter text-[#0A2540] uppercase leading-none block whitespace-nowrap">
                  {selectedItem.backdropTitle}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Main Category Spotlight Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative z-10 border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                
                {/* Image */}
                <div className="md:col-span-6 flex items-center justify-center overflow-hidden rounded-2xl bg-slate-100 max-h-[300px]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-2xl max-h-[300px] filter contrast-105"
                  />
                </div>

                {/* Details */}
                <div className="md:col-span-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-poppins font-bold uppercase tracking-wider text-[#635BFF] block mb-1">
                      Custom & Bulk Apparel
                    </span>
                    <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#0A2540]">
                      {selectedItem.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#425466] font-inter leading-relaxed">
                    {selectedItem.description}
                  </p>

                  {/* Available Customization Options */}
                  <div className="space-y-2 pt-1 font-inter">
                    <span className="text-[10px] font-poppins font-bold text-[#0A2540] uppercase tracking-wider block">
                      Customization Options:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.customizationOptions.map((opt, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-100 text-[#0A2540] px-2.5 py-1 rounded-lg">
                          <CheckCircle2 className="w-3 h-3 text-[#635BFF]" />
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenQuoteModal}
                      className="w-full py-3 px-5 bg-[#635BFF] hover:bg-[#574BFF] text-white font-poppins font-bold text-xs sm:text-sm rounded-xl transition-all duration-300 shadow-lg shadow-[#635BFF]/30 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                    >
                      <span>{selectedItem.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
