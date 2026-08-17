import React, { useState, useEffect, useCallback } from 'react';
import { useLenis } from 'lenis/react';
import { Logo } from '../common/Logo';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

const NAV_LINKS = [
  { name: 'Home',       href: '#'        },
  { name: 'About Us',  href: '#about'   },
  { name: 'Services',  href: '#services' },
  { name: 'Contact Us',href: '#contact' },
];

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]         = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /**
   * Smooth scroll navigation that integrates with Lenis on both desktop and mobile
   */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);

      if (href === '#' || href === '#top') {
        if (lenis) {
          lenis.scrollTo(0, { offset: 0, duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -70, duration: 1.2 });
        } else {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    },
    [lenis]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-12 transition-all duration-300 border-0 shadow-none ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md py-2 sm:py-3'
          : 'bg-transparent py-4 sm:py-[22px]'
      }`}
    >
      {/* Three-Zone Layout */}
      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-2 lg:grid-cols-3 items-center gap-2 sm:gap-4">

        {/* Zone 1 — Logo */}
        <div className="flex items-center justify-start shrink-0">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center cursor-pointer"
            aria-label="Go to top"
          >
            <Logo size={isScrolled ? 'md' : 'lg'} />
          </a>
        </div>

        {/* Zone 2 — Desktop nav */}
        <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 font-inter">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[15px] xl:text-[16px] font-bold text-[#241A1D] hover:text-[#80011F] transition-colors no-underline whitespace-nowrap cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3 — Hamburger */}
        <div className="flex items-center justify-end shrink-0">
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-xl text-[#241A1D] hover:bg-[#80011F]/10 hover:text-[#80011F] transition-colors cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen
              ? <X    className="w-6 h-6 stroke-[1.75]" />
              : <Menu className="w-6 h-6 stroke-[1.75]" />
            }
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden mt-2 px-2 pt-2 pb-4 rounded-2xl bg-white shadow-xl border border-slate-100"
          >
            <nav className="flex flex-col gap-1 font-inter">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-[15px] font-semibold text-[#241A1D] py-3 px-4 rounded-xl hover:bg-[#80011F]/8 hover:text-[#80011F] transition-colors active:bg-[#80011F]/12 cursor-pointer"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#6B5B60] shrink-0" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
