import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
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
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-12 transition-all duration-300 overflow-x-hidden ${
      isScrolled || mobileMenuOpen
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 py-2 sm:py-3 shadow-sm' 
        : 'bg-transparent border-b-0 py-4 sm:py-[22px]'
    }`}>
      {/* Three-Zone Layout Container */}
      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-2 lg:grid-cols-3 items-center gap-2 sm:gap-4">
        
        {/* Zone 1: Logo (Left aligned) */}
        <div className="flex items-center justify-start shrink-0">
          <a href="#" className="flex items-center">
            <Logo size={isScrolled ? "md" : "lg"} />
          </a>
        </div>

        {/* Zone 2: Center Primary Nav (Desktop only) */}
        <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 font-inter">
          {primaryNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] xl:text-[16px] font-bold text-[#241A1D] hover:text-[#80011F] transition-colors no-underline whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Far Right - Hamburger Toggle (Right aligned) */}
        <div className="flex items-center justify-end shrink-0">
          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#241A1D] hover:bg-[#80011F]/10 hover:text-[#80011F] transition-colors cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.75]" /> : <Menu className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.75]" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (with Glassmorphism overlay and smooth slide-down animation) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/80 backdrop-blur-lg border border-white/20 mt-3 px-4 pt-3 pb-5 space-y-3 shadow-2xl shadow-[#80011F]/5 rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col space-y-1 font-inter">
              {primaryNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-[15px] font-semibold text-[#241A1D] py-2 px-3 rounded-xl hover:bg-[#80011F]/10 hover:text-[#80011F] transition-all duration-200"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#6B5B60]" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
