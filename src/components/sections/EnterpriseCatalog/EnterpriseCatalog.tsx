import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ENTERPRISE_CATALOG_DATA } from '../../../data/enterpriseCatalog';
import { Badge } from '../../common/Badge';
import { ChevronRight } from 'lucide-react';

interface EnterpriseCatalogProps {
  onOpenCustomizer?: (categoryId?: string) => void;
  onOpenQuoteModal?: () => void;
}

export const EnterpriseCatalog: React.FC<EnterpriseCatalogProps> = () => {
  const [activeId, setActiveId] = useState<string>(ENTERPRISE_CATALOG_DATA[0].id);

  const selectedItem = ENTERPRISE_CATALOG_DATA.find((item) => item.id === activeId) || ENTERPRISE_CATALOG_DATA[0];

  return (
    <section id="categories" className="py-8 lg:py-12 lg:h-screen lg:max-h-screen lg:flex lg:flex-col lg:justify-center bg-[#F4F7FB] relative overflow-hidden" aria-label="Enterprise Catalog">
      
      {/* Background Animated Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -25, 25, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#635BFF]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 30, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#38BDF8]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8 space-y-2">
          <Badge variant="primary" size="sm">
            ENTERPRISE APPAREL CATALOG
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Curated Custom Lines Built For Enterprise Orders
          </h2>
          <p className="text-xs sm:text-sm text-[#425466] font-inter leading-relaxed max-w-2xl mx-auto">
            Engineered with zero-lint bio-washed cotton, 100% Pantone solid coated precision, and 48-hour express dispatch ready specs.
          </p>
        </div>

        {/* Skiper #53 ExpandOnHover Interactive Vertical Stack & Blended Model Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Interactive Vertical Expand Accordion Stack */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-center z-10">
            <span className="text-[11px] font-poppins font-bold text-[#635BFF] uppercase tracking-wider block mb-1 px-1">
              Select Apparel Line to Preview:
            </span>
            <div className="flex flex-col gap-2 w-full">
              {ENTERPRISE_CATALOG_DATA.map((item, index) => {
                const isActive = item.id === activeId;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    onClick={() => setActiveId(item.id)}
                    onMouseEnter={() => setActiveId(item.id)}
                    className={`group relative cursor-pointer overflow-hidden rounded-xl transition-all duration-300 p-3.5 ${
                      isActive
                        ? 'bg-[#0A2540] text-white shadow-md scale-[1.01]'
                        : 'bg-white/90 backdrop-blur-md text-[#0A2540] hover:bg-[#635BFF]/10 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`text-xs sm:text-sm font-poppins font-bold ${isActive ? 'text-white' : 'text-[#0A2540]'}`}>
                          {item.name}
                        </h3>
                        <span className={`text-[10px] font-inter ${isActive ? 'text-slate-300' : 'text-[#6B7C93]'}`}>
                          {item.recommendedGsm} • {item.badge}
                        </span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isActive ? 'text-[#38BDF8] translate-x-1' : 'text-slate-400 group-hover:text-[#635BFF]'
                      }`} />
                    </div>

                    {/* Active Expanded Indicator Bar */}
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

          {/* Right Column: Dark Colored Typography Backdrop & Blended Model Image */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[380px] lg:min-h-[445px]">
            
            {/* Dynamic Animated Ambient Glow */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.98, 1.03, 0.98],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#635BFF]/20 via-[#38BDF8]/20 to-[#0A2540]/20 rounded-3xl blur-2xl pointer-events-none"
            />

            {/* Top Half Giant Dark Colored Category Backdrop Typography */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.backdropTitle}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.85, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-2 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden"
              >
                <span className="font-poppins font-black text-7xl sm:text-8xl xl:text-9xl tracking-tighter text-[#0A2540] uppercase leading-none block whitespace-nowrap drop-shadow-sm">
                  {selectedItem.backdropTitle}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Seamlessly Blended Model Image (Outer Background Color Removed) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group flex items-center justify-center max-h-[390px] sm:max-h-[420px] lg:max-h-[445px] w-auto bg-transparent z-10"
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[390px] sm:max-h-[420px] lg:max-h-[445px] w-auto object-contain transition-transform duration-500 group-hover:scale-102 rounded-2xl mix-blend-multiply filter contrast-105 brightness-102"
                />
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
