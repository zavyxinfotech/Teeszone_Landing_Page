import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Menu, X, ArrowRight, ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from '../common/Button';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavLinks = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#products' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-6 lg:px-12 transition-all duration-300 overflow-x-hidden ${
      isScrolled || mobileMenuOpen
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 py-2 sm:py-3 shadow-sm' 
        : 'bg-transparent border-b-0 py-3 sm:py-[22px]'
    }`}>
      {/* Three-Zone Flex Container with justify-between */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
        
        {/* Zone 1: Far Left - Logo */}
        <div className="flex items-center shrink-0">
          <a href="#" className="flex items-center">
            <Logo size={isScrolled ? "md" : "lg"} />
          </a>
        </div>

        {/* Zone 2: Left-of-Center - Primary Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-inter">
          {primaryNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[#241A1D] hover:text-[#80011F] transition-colors no-underline whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Far Right - Cart Icon Badge & CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          


          {/* Enquire Now CTA Button */}
          <Button
            variant="black"
            size="none"
            onClick={onOpenQuoteModal}
            icon={<ArrowRight className="w-3 h-3 md:w-4.5 md:h-4.5 group-hover:translate-x-1 transition-transform" />}
            className="shadow-sm font-poppins font-bold whitespace-nowrap shrink-0 transition-all duration-300 flex items-center justify-center gap-1.5
              px-2.5 py-1 text-[9px] rounded-lg
              sm:px-3.5 sm:py-1.5 sm:text-[11px] sm:rounded-lg
              md:px-6 md:py-3 md:text-base md:rounded-xl md:gap-2.5"
          >
            Enquire Now
          </Button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-[#241A1D] hover:bg-cream-light transition-colors cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 mt-3 px-4 pt-4 pb-6 space-y-4 animate-fadeIn shadow-xl rounded-2xl">
          <nav className="flex flex-col space-y-2 font-inter">
            {primaryNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-[#241A1D] py-2.5 px-3 rounded-xl hover:bg-cream-light transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#6B5B60]" />
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-cream-light">
            <Button
              variant="black"
              size="none"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
              }}
              className="w-full justify-center font-poppins font-bold px-4 py-2 text-xs rounded-lg gap-1.5"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Enquire Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
