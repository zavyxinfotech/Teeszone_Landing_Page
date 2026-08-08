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
    <section id="categories" className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-[#F4F7FB]/50 relative" aria-label="Enterprise Catalog">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        
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

        {/* Skiper #53 ExpandOnHover Interactive Vertical Stack & Background Merged Image Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Vertical Expand Accordion Stack (Skiper #53 Foundation) */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-poppins font-bold text-[#635BFF] uppercase tracking-wider block mb-1 px-1">
              Select Apparel Line to Preview:
            </span>
            <div className="flex flex-col gap-2 w-full">
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

          {/* Right Column: High-Fashion Editorial Image Showcase (Merged with Background - No White Card Box) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-4"
              >
                {/* Clean Image Showcase Merged With Background */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] max-h-[440px] shadow-2xl group flex items-center justify-center bg-transparent">
                  
                  {/* Category Poster Image with Top-Half Typography Baked Behind Model */}
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 rounded-3xl"
                  />

                  {/* High-Fashion Editorial Overlay Badges & Spec Glass Bar */}
                  <div className="absolute inset-0 pointer-events-none p-4 sm:p-5 flex flex-col justify-between">
                    {/* Top Editorial Line */}
                    <div className="flex items-center justify-between text-[10px] sm:text-xs font-poppins font-bold text-slate-900 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit shadow-sm">
                      <span>TeesZone • 2026 Collection</span>
                    </div>

                    {/* Bottom Floating Info Glass Bar */}
                    <div className="bg-[#0A2540]/90 backdrop-blur-md p-3.5 rounded-2xl text-white flex items-center justify-between shadow-xl pointer-events-auto">
                      <div>
                        <span className="text-[11px] text-slate-300 block font-medium">Recommended Weight:</span>
                        <span className="text-xs sm:text-sm font-bold text-[#38BDF8]">{selectedItem.recommendedGsm}</span>
                      </div>
                      <span className="text-xs font-bold text-white bg-[#635BFF] px-3.5 py-1.5 rounded-xl shadow-md">
                        Starting at {formatCurrency(selectedItem.price)} / pc
                      </span>
                    </div>
                  </div>

                </div>

                {/* Category Details & Specs Below Image */}
                <div className="space-y-1.5 px-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#635BFF] uppercase tracking-widest font-poppins">
                      Category: {selectedItem.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {selectedItem.code}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#0A2540]">
                    {selectedItem.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed font-inter">
                    {selectedItem.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
