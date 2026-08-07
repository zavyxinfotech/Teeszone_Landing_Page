import React, { useState } from 'react';
import { CATEGORIES } from '../../data/categories';
import { CategoryInfo, ApparelCategory } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface ProductCategoriesSectionProps {
  onOpenCustomizer: (category?: ApparelCategory) => void;
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({
  onOpenCustomizer
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryInfo>(CATEGORIES[0]);

  return (
    <section id="categories" className="py-20 lg:py-28 bg-transparent relative">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Badge variant="primary" size="md">
            ENTERPRISE CATALOG
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Curated Apparel Lines Built For Bulk Customization
          </h2>
          <p className="text-base sm:text-lg text-[#425466] font-inter leading-relaxed">
            Every category is engineered with specific fabric weaves, bio-washed surfaces, and zero lint for maximum ink and thread adhesion.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start lg:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-3 rounded-2xl text-xs font-poppins font-bold whitespace-nowrap transition-all cursor-pointer border ${
                selectedCategory.id === cat.id
                  ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-lg scale-102'
                  : 'bg-white/80 backdrop-blur-md text-[#425466] border-slate-200 hover:border-[#635BFF] hover:text-[#0A2540] shadow-2xs'
              }`}
            >
              <span>{cat.name}</span>
              {cat.badge && (
                <span className="ml-2 text-[10px] bg-[#635BFF] text-white px-2 py-0.5 rounded-full font-semibold">
                  {cat.itemCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Highlighted Selected Category Spotlight Card */}
        <div className="stripe-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/80 backdrop-blur-xl">
          
          {/* Left Column: Product Category Image Showcase */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group border border-slate-200/60">
            <img
              src={selectedCategory.image}
              alt={selectedCategory.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {selectedCategory.badge && (
              <div className="absolute top-4 left-4">
                <Badge variant="sky" size="md">
                  {selectedCategory.badge}
                </Badge>
              </div>
            )}
            <div className="absolute bottom-4 left-4 right-4 bg-[#0A2540]/90 backdrop-blur-md p-4 rounded-2xl text-white flex items-center justify-between shadow-xl">
              <div>
                <span className="text-xs text-slate-300 block font-medium">Recommended Spec:</span>
                <span className="text-sm font-bold">{selectedCategory.recommendedGsm}</span>
              </div>
              <span className="text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/15 px-3 py-1.5 rounded-xl border border-[#38BDF8]/30">
                {selectedCategory.itemCount} Styles Available
              </span>
            </div>
          </div>

          {/* Right Column: Category Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#635BFF] uppercase tracking-widest block mb-1 font-poppins">
                {selectedCategory.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#0A2540]">
                {selectedCategory.name}
              </h3>
              <p className="text-sm sm:text-base text-[#425466] leading-relaxed mt-3 font-inter">
                {selectedCategory.description}
              </p>
            </div>

            {/* Popular Customization Techniques */}
            <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-poppins">
                Optimal Printing & Customization Methods
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCategory.popularTechniques.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-xs font-semibold text-[#0A2540] bg-slate-100/90 px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF]" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Category Stats Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs font-inter">
              <div className="p-3.5 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-2xs">
                <span className="text-slate-500 block font-medium">Dispatch Speed:</span>
                <span className="font-bold text-[#0A2540] text-sm">48-Hour Rush Ready</span>
              </div>
              <div className="p-3.5 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-2xs">
                <span className="text-slate-500 block font-medium">Minimum Order:</span>
                <span className="font-bold text-[#635BFF] text-sm">10 Pcs Low MOQ</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenCustomizer(selectedCategory.id)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Order {selectedCategory.name}
              </Button>
              <a
                href="#products"
                className="text-xs sm:text-sm font-poppins font-bold text-[#0A2540] hover:text-[#635BFF] flex items-center gap-1 transition-colors px-3 py-2"
              >
                <span>View Products</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
