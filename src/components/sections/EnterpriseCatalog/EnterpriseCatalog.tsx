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
    <section id="categories" className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-[#F4F7FB]/50 relative overflow-hidden" aria-label="Enterprise Catalog">
      
      {/* Background Animated Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#635BFF]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <Badge variant="primary" size="md">
            ENTERPRISE APPAREL CATALOG
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Curated Custom Lines Built For Enterprise Orders
          </h2>
          <p className="text-sm sm:text-base text-[#425466] font-inter leading-relaxed">
            Engineered with zero-lint bio-washed cotton, 100% Pantone solid coated precision, and 48-hour express dispatch ready specs.
          </p>
        </div>

        {/* Skiper #53 ExpandOnHover Interactive Vertical Stack & Equal Height Image Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch">
          
          {/* Left Column: Interactive Vertical Expand Accordion Stack */}
          <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-center">
            <span className="text-xs font-poppins font-bold text-[#635BFF] uppercase tracking-wider block mb-1 px-1">
              Select Apparel Line to Preview:
            </span>
            <div className="flex flex-col gap-2.5 w-full">
              {ENTERPRISE_CATALOG_DATA.map((item, index) => {
                const isActive = item.id === activeId;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    onClick={() => setActiveId(item.id)}
                    onMouseEnter={() => setActiveId(item.id)}
                    className={`group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 p-3.5 ${
                      isActive
                        ? 'bg-[#0A2540] text-white shadow-xl scale-[1.01]'
                        : 'bg-white/90 backdrop-blur-md text-[#0A2540] hover:bg-[#635BFF]/10 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-outfit text-xs font-bold ${
                          isActive ? 'bg-[#635BFF] text-white' : 'bg-slate-100 text-[#0A2540]'
                        }`}>
                          0{index + 1}
                        </div>
                        <div>
                          <h3 className={`text-sm font-poppins font-bold ${isActive ? 'text-white' : 'text-[#0A2540]'}`}>
                            {item.name}
                          </h3>
                          <span className={`text-[11px] font-inter ${isActive ? 'text-slate-300' : 'text-[#6B7C93]'}`}>
                            {item.recommendedGsm} • From {formatCurrency(item.price)}/pc
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
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

          {/* Right Column: Pure Full Image Display Equal in Height to Left Column with Animated Ambient Glow */}
          <div className="lg:col-span-7 h-full min-h-[380px] lg:min-h-full relative flex items-center">
            
            {/* Dynamic Animated Image Ambient Glow Box */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-2 bg-gradient-to-r from-[#635BFF]/30 via-[#38BDF8]/30 to-[#0A2540]/30 rounded-3xl blur-xl pointer-events-none"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden shadow-2xl group flex items-center justify-center bg-[#0A2540]/5"
              >
                {/* Pure Full Image Cover */}
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 rounded-3xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
