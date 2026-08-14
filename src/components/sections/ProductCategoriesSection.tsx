import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
      className="py-12 sm:py-16 lg:py-12 bg-slate-50 text-[#0A2540] relative overflow-hidden select-none lg:h-screen lg:min-h-[720px] lg:max-h-[900px] lg:flex lg:flex-col lg:justify-center"
      aria-label="Apparel Product Categories Catalog"
    >
      {/* Decorative ambient background lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#635BFF] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38BDF8] opacity-[0.02] blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 lg:h-full lg:max-h-[820px] lg:flex lg:flex-col lg:justify-between">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-4 space-y-2 shrink-0">
          <span className="text-[10px] font-poppins font-black uppercase tracking-widest text-[#635BFF] block">
            OUR APPAREL
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Apparel for Every Purpose.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-inter font-semibold leading-relaxed max-w-2xl mx-auto">
            From corporate uniforms to everyday essentials, explore apparel designed for teams, institutions, industries, sports, events, and brands.
          </p>
        </div>

        {/* Layout: Centered Poster Showcase (bg-transparent, no borders, optimized height, full width) */}
        <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[450px] xl:h-[480px] bg-transparent overflow-hidden flex flex-col justify-between items-center z-10">
          
          {/* Background oversized outline typography (fit to screen, no crop) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeTab.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="font-poppins font-black text-[12vw] sm:text-[10vw] text-center select-none leading-none tracking-tight uppercase"
                style={{
                  WebkitTextStroke: '2.5px rgba(10, 37, 64, 0.05)',
                  color: 'transparent',
                  whiteSpace: 'nowrap'
                }}
              >
                {activeTab.backdropText}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Top Info */}
          <div className="text-center z-10 pointer-events-none mt-2 sm:mt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[10px] sm:text-xs font-poppins font-black uppercase tracking-widest text-[#635BFF]">
                  Our Premium Collection of
                </span>
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#0A2540] mt-1 sm:mt-2 uppercase tracking-tight">
                  {activeTab.heading}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Centered Clickable Image Showcase */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 z-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 30, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.85 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center"
              >
                <a 
                  href="#products" 
                  className="w-full h-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
                  aria-label={`View catalog details for ${activeTab.heading}`}
                >
                  <motion.img
                    src={activeTab.image}
                    alt={activeTab.heading}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                    animate={{
                      y: [0, -8, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Specification Callout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="absolute left-4 sm:left-8 md:left-12 lg:left-20 top-[45%] -translate-y-1/2 max-w-[80px] sm:max-w-[150px] md:max-w-[200px] text-left z-20 space-y-0.5 sm:space-y-1"
            >
              <span className="text-[9px] sm:text-xs font-poppins font-bold text-[#635BFF] uppercase tracking-wider block">Featured Spec</span>
              <h4 className="text-xs sm:text-base md:text-xl font-poppins font-black text-[#0A2540] leading-tight break-words">
                {activeTab.productsList[0]}
              </h4>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-slate-400 font-inter">Premium custom build.</p>
            </motion.div>
          </AnimatePresence>

          {/* Right Specification Callout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.35 }}
              className="absolute right-4 sm:right-8 md:left-auto md:right-12 lg:right-20 top-[45%] -translate-y-1/2 max-w-[80px] sm:max-w-[150px] md:max-w-[200px] text-right z-20 space-y-0.5 sm:space-y-1"
            >
              <span className="text-[9px] sm:text-xs font-poppins font-bold text-[#38BDF8] uppercase tracking-wider block">Material standard</span>
              <h4 className="text-xs sm:text-base md:text-xl font-poppins font-black text-[#0A2540] leading-tight break-words">
                {activeTab.productsList[1] || "Custom Fit"}
              </h4>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-slate-400 font-inter">Zero compromise fabric.</p>
            </motion.div>
          </AnimatePresence>

          {/* Ready Stock 3rd Product (conditional) */}
          {activeTab.productsList[2] && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 z-20 text-center"
              >
                <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Also Available</span>
                <p className="text-xs sm:text-sm font-poppins font-black text-[#0A2540]">{activeTab.productsList[2]}</p>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Spacer to push flex elements */}
          <div className="h-4 sm:h-8" />

        </div>

        {/* Horizontal Scroll Menu with active indicator & prev/next buttons */}
        <div className="mt-6 lg:mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4 shrink-0">
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
