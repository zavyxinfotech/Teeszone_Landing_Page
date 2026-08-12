import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLANK_CATALOGUE_PRODUCTS, BlankProduct } from '../../../data/blankCatalogue';
import { BlankProductCard } from './BlankProductCard';
import { ChevronDown, CheckCircle2, Layers } from 'lucide-react';

const BATCH_SIZE = 8; // Sliced progressive loading

export const ProductCatalogueSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);


  // Filter products by active category tab
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return BLANK_CATALOGUE_PRODUCTS;
    return BLANK_CATALOGUE_PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Sliced progressive display
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const hasMore = visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + BATCH_SIZE);
      setIsLoadingMore(false);
    }, 400);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(BATCH_SIZE); // Reset pagination on filter change
  };



  // Category Filter Chips
  const filterCategories = [
    { id: 'all', label: 'All Products', count: BLANK_CATALOGUE_PRODUCTS.length },
    { id: 'roundneck', label: 'Roundneck', count: BLANK_CATALOGUE_PRODUCTS.filter(p => p.category === 'roundneck').length },
    { id: 'polo', label: 'Polo', count: BLANK_CATALOGUE_PRODUCTS.filter(p => p.category === 'polo').length },
    { id: 'oversized', label: 'Oversized', count: BLANK_CATALOGUE_PRODUCTS.filter(p => p.category === 'oversized').length },
    { id: 'hoodies', label: 'Hoodies', count: BLANK_CATALOGUE_PRODUCTS.filter(p => p.category === 'hoodies').length },
    { id: 'kids-women', label: "Kids & Women's", count: BLANK_CATALOGUE_PRODUCTS.filter(p => p.category === 'kids-women').length },
  ];

  return (
    <section id="blank-catalogue" className="py-12 lg:py-20 bg-[#F7F4EF]/60 text-[#0A2540] relative overflow-hidden select-none" aria-label="Blank Apparel Catalogue">
      


      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        


        {/* 2. Category Filter Chips (Pill Buttons, Light Border, Active State Filled) */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-poppins font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0A2540] text-white shadow-md scale-102 ring-2 ring-[#635BFF]/30'
                      : 'bg-white text-[#425466] hover:bg-white/80 border border-slate-200 shadow-2xs'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Showing Count Indicator */}
          <div className="text-xs font-inter font-semibold text-slate-500 hidden sm:block">
            Showing <span className="font-bold text-[#0A2540]">{displayedProducts.length}</span> of <span className="font-bold text-[#0A2540]">{filteredProducts.length}</span> products
          </div>
        </div>

        {/* 3. Responsive Product Catalogue Grid (4 cols desktop, 3 tablet, 2 mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => (
              <BlankProductCard
                key={product.id}
                product={product}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* 4. "LOAD MORE" Behavior & Button */}
        <div className="mt-12 text-center flex flex-col items-center justify-center">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="px-8 py-3.5 rounded-full border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white font-poppins font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
            >
              {isLoadingMore ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>Fetching Products...</span>
                </>
              ) : (
                <>
                  <span>Load More Products</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          ) : (
            <div className="py-4 px-6 rounded-full bg-white border border-slate-200 text-xs font-poppins font-bold text-slate-500 shadow-2xs flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#635BFF]" />
              <span>You've seen all {filteredProducts.length} products in this category</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
