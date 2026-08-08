import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ENTERPRISE_CATALOG_DATA } from '../../../data/enterpriseCatalog';
import { Badge } from '../../common/Badge';
import { ChevronRight } from 'lucide-react';
import { formatCurrency } from '../../../utils/formatters';

interface EnterpriseCatalogProps {
  onOpenCustomizer?: (categoryId?: string) => void;
  onOpenQuoteModal?: () => void;
}

export const EnterpriseCatalog: React.FC<EnterpriseCatalogProps> = () => {
  const [activeId, setActiveId] = useState<string>(ENTERPRISE_CATALOG_DATA[0].id);

  const selectedItem = ENTERPRISE_CATALOG_DATA.find((item) => item.id === activeId) || ENTERPRISE_CATALOG_DATA[0];

  return (
    <section id="categories" className="py-8 lg:py-12 lg:h-screen lg:max-h-screen lg:flex lg:flex-col lg:justify-center bg-[#F4F7FB]/50 relative overflow-hidden" aria-label="Enterprise Catalog">
      
      {/* Background Animated Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
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

        {/* Skiper #53 ExpandOnHover Interactive Vertical Stack & Compact Full Image Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Interactive Vertical Expand Accordion Stack */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-center">
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
                    className={`group relative cursor-pointer overflow-hidden rounded-xl transition-all duration-300 p-3 ${
                      isActive
                        ? 'bg-[#0A2540] text-white shadow-md scale-[1.01]'
                        : 'bg-white/90 backdrop-blur-md text-[#0A2540] hover:bg-[#635BFF]/10 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-outfit text-xs font-bold ${
                          isActive ? 'bg-[#635BFF] text-white' : 'bg-slate-100 text-[#0A2540]'
                        }`}>
                          0{index + 1}
                        </div>
                        <div>
                          <h3 className={`text-xs sm:text-sm font-poppins font-bold ${isActive ? 'text-white' : 'text-[#0A2540]'}`}>
                            {item.name}
                          </h3>
                          <span className={`text-[10px] font-inter ${isActive ? 'text-slate-300' : 'text-[#6B7C93]'}`}>
                            {item.recommendedGsm} • From {formatCurrency(item.price)}/pc
                          </span>
                        </div>
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

          {/* Right Column: Full Image View Decreased Size (Fitted within Desktop Screen) */}
          <div className="lg:col-span-7 flex items-center justify-center relative">
            
            {/* Dynamic Animated Image Ambient Glow Box */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-2 bg-gradient-to-r from-[#635BFF]/30 via-[#38BDF8]/30 to-[#0A2540]/30 rounded-3xl blur-xl pointer-events-none"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden shadow-xl group flex items-center justify-center max-h-[360px] sm:max-h-[380px] lg:max-h-[400px] w-auto bg-[#DCD9D4]"
              >
                {/* Full Image Displayed Without Cropping */}
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[360px] sm:max-h-[380px] lg:max-h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-102 rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
