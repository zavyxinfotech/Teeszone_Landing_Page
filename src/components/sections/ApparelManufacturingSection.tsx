import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

// Import existing images to serve as placeholders for the custom uploaded images
import mainMfgImage from '../../assets/categories/Industrial_Factory_Uniforms.png';
import fabricImage from '../../assets/images/cat_blank_tshirt_1786522045486.jpg';
import brandingImage from '../../assets/images/cat_polo_tshirt_1786521728445.jpg';
import productionImage from '../../assets/images/cat_industrial_tshirt_1786521333010.jpg';
import inspectionImage from '../../assets/images/cat_corporate_tshirt_1786521137829.jpg';

interface ApparelManufacturingSectionProps {
  onOpenQuoteModal?: () => void;
}

interface MfgCategory {
  id: string;
  label: string;
  description: string;
  image: string;
}

export const ApparelManufacturingSection: React.FC<ApparelManufacturingSectionProps> = ({
  onOpenQuoteModal
}) => {
  const categories: MfgCategory[] = [
    {
      id: 'fabric',
      label: 'Fabric Selection',
      description: 'Sourcing high-density, bio-washed cotton, poly-cotton blends, and premium athletic knits.',
      image: fabricImage
    },
    {
      id: 'branding',
      label: 'Custom Branding',
      description: 'High-precision computer embroidery and 1200 DPI durable printing solutions.',
      image: brandingImage
    },
    {
      id: 'production',
      label: 'Precision Production',
      description: 'Automated fabric cutting and heavy-duty stitching lines for durable finished apparel.',
      image: productionImage
    },
    {
      id: 'inspection',
      label: 'Quality Inspection',
      description: 'Multi-point measurement and structural inspection checks before final steam pressing.',
      image: inspectionImage
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>('fabric');

  const currentCategoryData = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section 
      id="manufacturing" 
      className="py-16 sm:py-20 lg:py-28 bg-cream-light text-[#241A1D] relative overflow-hidden select-none"
      aria-label="Apparel Manufacturing Process"
    >
      {/* Decorative ambient bubble */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#80011F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block py-1.5 px-3 rounded-full bg-sky-100 text-sky-700 text-[10px] font-poppins font-black uppercase tracking-wider shadow-sm">
            PRECISION MANUFACTURING
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#241A1D] tracking-tight">
            From Fabric to Finished Apparel.
          </h2>
          <p className="text-sm sm:text-base text-[#425466] font-inter font-semibold leading-relaxed max-w-2xl mx-auto">
            End-to-end apparel manufacturing powered by premium fabrics, modern production, precise sizing, and professional quality inspection.
          </p>
        </div>

        {/* Layout: Asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Typography copy & interactive selector list */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#241A1D] tracking-tight">
                Our Production Stages
              </h3>
              <p className="text-sm text-[#425466] font-inter font-medium leading-relaxed">
                Click on the stages below to explore our detailed manufacturing steps and inspect the close-up visuals.
              </p>
            </div>

            {/* Interactive Selector List (Vertical Timeline Style) */}
            <div className="space-y-3.5 pt-2">
              {categories.map((cat, idx) => {
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex gap-4 border cursor-pointer ${
                      isActive 
                        ? 'bg-white border-[#80011F] shadow-lg shadow-[#80011F]/5 translate-x-1.5' 
                        : 'bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-poppins font-black text-xs shrink-0 ${
                      isActive ? 'bg-[#80011F] text-white' : 'bg-slate-100 text-[#425466]'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <h4 className={`text-sm sm:text-base font-poppins font-extrabold ${
                        isActive ? 'text-[#241A1D]' : 'text-slate-700'
                      }`}>
                        {cat.label}
                      </h4>
                      {isActive && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-xs sm:text-sm text-[#425466] font-inter leading-relaxed mt-1"
                        >
                          {cat.description}
                        </motion.p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenQuoteModal}
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-lg shadow-[#80011F]/20 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold w-full sm:w-auto justify-center"
              >
                Explore Our Manufacturing
              </Button>
            </div>
          </div>

          {/* Right Column: Visual demonstration (Large + small close-ups) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Large main manufacturing photograph container */}
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={currentCategoryData.image} 
                    alt={currentCategoryData.label} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241A1D]/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Name overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-left text-white z-10">
                    <span className="text-[10px] font-poppins font-black uppercase tracking-widest text-[#80011F]">
                      Active Preview
                    </span>
                    <h3 className="text-lg sm:text-xl font-poppins font-extrabold">
                      {currentCategoryData.label} Production Close-up
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Grid of 4 smaller close-up visual labels */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categories.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] group transition-all duration-300 border-2 cursor-pointer ${
                      isActive 
                        ? 'border-[#80011F] scale-[1.02] shadow-md shadow-[#80011F]/10' 
                        : 'border-transparent hover:border-slate-300'
                    }`}
                  >
                    <img 
                      src={cat.image} 
                      alt={cat.label} 
                      className="w-full h-full object-cover filter brightness-[0.7] group-hover:brightness-[0.85] transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-2.5 text-left bg-gradient-to-t from-black/85 via-black/35 to-transparent">
                      <span className="text-[9px] sm:text-[10px] font-poppins font-extrabold text-white leading-tight">
                        {cat.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
