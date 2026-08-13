import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';

// Import existing category images
import catCorporateTshirt from '../../assets/images/cat_corporate_tshirt_1786521137829.jpg';
import catSportsJersey from '../../assets/images/cat_sports_jersey_1786521568260.jpg';
import catIndustrialTshirt from '../../assets/images/cat_industrial_tshirt_1786521333010.jpg';
import catSchoolTshirt from '../../assets/images/cat_school_tshirt_1786521465042.jpg';
import catHospitalityTshirt from '../../assets/images/cat_hospitality_tshirt_1786521661746.jpg';
import catEventTshirt from '../../assets/images/cat_event_tshirt_1786521633256.jpg';
import catReadyStock from '../../assets/images/cat_custom_hoodie_1786521924888.jpg';

interface ProductCategoriesSectionProps {
  onOpenQuoteModal?: () => void;
}

interface ProductTab {
  id: string;
  menuLabel: string;
  backdropText: string;
  heading: string;
  type: 'Custom Apparel' | 'Ready Stock';
  image: string;
  productsList: string[];
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({
  onOpenQuoteModal
}) => {
  const tabs: ProductTab[] = [
    {
      id: 'office',
      menuLabel: 'OFFICE',
      backdropText: 'CORPORATE',
      heading: 'Corporate & Office Uniforms',
      type: 'Custom Apparel',
      image: catCorporateTshirt,
      productsList: ['Corporate Uniforms', 'Office Uniforms']
    },
    {
      id: 'sports',
      menuLabel: 'SPORTS',
      backdropText: 'SPORTSWEAR',
      heading: 'High-Performance Jerseys',
      type: 'Custom Apparel',
      image: catSportsJersey,
      productsList: ['Sports Jerseys', 'Team Training Kits']
    },
    {
      id: 'industrial',
      menuLabel: 'INDUSTRIAL',
      backdropText: 'INDUSTRIAL',
      heading: 'Heavy-Duty Factory Wear',
      type: 'Custom Apparel',
      image: catIndustrialTshirt,
      productsList: ['Industrial Uniforms', 'Factory Safety Wear']
    },
    {
      id: 'schools',
      menuLabel: 'SCHOOLS',
      backdropText: 'ACADEMIC',
      heading: 'School & College Uniforms',
      type: 'Custom Apparel',
      image: catSchoolTshirt,
      productsList: ['School Uniforms', 'College Uniforms']
    },
    {
      id: 'hospitality',
      menuLabel: 'HOSPITALITY',
      backdropText: 'HOSPITALITY',
      heading: 'Premium Service Apparel',
      type: 'Custom Apparel',
      image: catHospitalityTshirt,
      productsList: ['Hospitality Uniforms', 'Restaurant & Hotel Wear']
    },
    {
      id: 'events',
      menuLabel: 'EVENTS',
      backdropText: 'PROMOTIONAL',
      heading: 'Event & Promo Clothing',
      type: 'Custom Apparel',
      image: catEventTshirt,
      productsList: ['Event T-Shirts', 'Promotional Apparel']
    },
    {
      id: 'ready-stock',
      menuLabel: 'READY STOCK',
      backdropText: 'READY STOCK',
      heading: 'Premium Ready Apparel',
      type: 'Ready Stock',
      image: catReadyStock,
      productsList: ['AeroSoft Polo T-Shirts', 'Crew Neck T-Shirts', 'Customized Hoodies']
    }
  ];

  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeTab = tabs[activeTabIdx];

  const handleNextTab = () => {
    setActiveTabIdx((prev) => (prev + 1) % tabs.length);
  };

  const handlePrevTab = () => {
    setActiveTabIdx((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  // Center the active tab in the scrolling menu
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.children[activeTabIdx] as HTMLElement;
      if (activeEl) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const activeWidth = activeEl.offsetWidth;
        const activeLeft = activeEl.offsetLeft;
        scrollContainerRef.current.scrollTo({
          left: activeLeft - containerWidth / 2 + activeWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTabIdx]);

  return (
    <section
      id="products"
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#0A2540] relative overflow-hidden select-none"
      aria-label="Apparel Product Categories Catalog"
    >
      {/* Decorative ambient background lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#635BFF] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38BDF8] opacity-[0.02] blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-3">
          <span className="inline-block py-1.5 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-poppins font-black uppercase tracking-wider shadow-sm">
            OUR APPAREL
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Apparel for Every Purpose.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-inter font-semibold leading-relaxed max-w-2xl mx-auto">
            From corporate uniforms to everyday essentials, explore apparel designed for teams, institutions, industries, sports, events, and brands.
          </p>
        </div>

        {/* Layout: Main grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Info Side */}
          <div className="lg:col-span-5 space-y-6 text-left order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <span className="text-xs font-poppins font-black uppercase tracking-wider text-[#635BFF]">
                    {activeTab.type}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
                    {activeTab.heading}
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-sm text-slate-500 font-inter font-semibold">
                    Products Included:
                  </p>
                  <ul className="space-y-2.5">
                    {activeTab.productsList.map((productName) => (
                      <li key={productName} className="flex items-center gap-3 font-poppins font-bold text-xs sm:text-sm text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-[#635BFF]/10 border border-[#635BFF]/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#635BFF]" />
                        </div>
                        <span>{productName}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenQuoteModal}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto justify-center shadow-xl shadow-[#635BFF]/30 hover:shadow-[#635BFF]/50 transition-all duration-300 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#635BFF] hover:bg-[#635BFF]/90 border-0 text-white"
              >
                Explore All Apparel
              </Button>
            </div>
          </div>

          {/* Right / Visual Side (Oversized text behind floating image) */}
          <div className="lg:col-span-7 h-[320px] sm:h-[420px] lg:h-[480px] relative flex items-center justify-center order-1 lg:order-2 overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/60 shadow-inner">
            
            {/* Background oversized outline typography */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeTab.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="font-poppins font-black text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-center select-none leading-none tracking-tight uppercase"
                  style={{
                    WebkitTextStroke: '1.5px rgba(10, 37, 64, 0.05)',
                    color: 'transparent',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {activeTab.backdropText}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Front floating product image */}
            <div className="relative w-44 sm:w-60 lg:w-72 aspect-square z-10 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <motion.img
                    src={activeTab.image}
                    alt={activeTab.heading}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105"
                    animate={{
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

        {/* Horizontal Scroll Menu with active indicator & prev/next buttons */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-slate-200/80 flex items-center justify-between gap-4">
          <button
            onClick={handlePrevTab}
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 transition-all cursor-pointer hidden sm:flex shrink-0 border border-slate-200/60"
            aria-label="Previous category"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none py-2.5 w-full justify-start sm:justify-center"
          >
            {tabs.map((tab, idx) => {
              const isActive = idx === activeTabIdx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`relative py-2 px-3 text-xs sm:text-sm font-poppins font-black uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive ? 'text-[#635BFF] scale-105' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab.menuLabel}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#635BFF]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNextTab}
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 transition-all cursor-pointer hidden sm:flex shrink-0 border border-slate-200/60"
            aria-label="Next category"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
