import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { BRAND } from '../../data/brand';
import { ArrowRight, Check, ShieldCheck, MapPin, Phone, Mail, FileText, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#0A2540] text-white pt-16 pb-10 relative overflow-hidden font-inter border-t border-slate-800" aria-label="Footer">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto space-y-12">
        
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80">
          
          {/* Company Brand & GSTIN Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="md" showTagline />
            
            <div className="space-y-2 pt-1">
             
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/20 border border-[#635BFF]/30 text-xs font-mono text-[#38BDF8]">
                <FileText className="w-3.5 h-3.5" />
                <span>GSTIN: {BRAND.gstin}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {BRAND.description}
            </p>

            {/* Enquiry Now Phone & Contact Handles */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-200">
              <span className="font-poppins font-bold text-[#38BDF8] uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#635BFF]" />
                Enquiry Now Phone Lines
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a href={`tel:${BRAND.contact.phonePrimary}`} className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors font-bold text-white bg-white/10 px-3 py-1.5 rounded-xl">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{BRAND.contact.phonePrimary}</span>
                </a>
                <a href={`tel:${BRAND.contact.phoneSecondary}`} className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors font-bold text-white bg-white/10 px-3 py-1.5 rounded-xl">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{BRAND.contact.phoneSecondary}</span>
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                <a href={`mailto:${BRAND.contact.email}`} className="hover:text-white transition-colors font-bold text-slate-200">
                  {BRAND.contact.email}
                </a>
              </div>
            </div>
            
            {/* Social Icons with Official SVGs for Facebook, Instagram, LinkedIn, YouTube */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href={BRAND.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] flex items-center justify-center text-white transition-all shadow-xs group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E4405F] flex items-center justify-center text-white transition-all shadow-xs group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center text-white transition-all shadow-xs group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={BRAND.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF0000] flex items-center justify-center text-white transition-all shadow-xs group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-poppins font-bold uppercase tracking-wider text-[#38BDF8]">
              Apparel Lines
            </h3>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#categories" className="hover:text-white transition-colors">Executive Polos</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">240 GSM Oversized Tees</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Bio-Washed Crewnecks</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Fleece Hoodies & Sweats</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Corporate Uniforms</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Sublimated Sports Jerseys</a></li>
            </ul>
          </div>

          {/* Column 3: Customization Techniques */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-poppins font-bold uppercase tracking-wider text-[#38BDF8]">
              Customization Methods
            </h3>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#process" className="hover:text-white transition-colors">High-Density Embroidery</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Ultra-HD Screen Printing</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">3D Puff Print Effects</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Direct-to-Garment (DTG)</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Full-Bleed Sublimation</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Pantone Solid Coated Specs</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-poppins font-bold uppercase tracking-wider text-[#38BDF8]">
              Corporate Swag Insights
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Subscribe to receive quarterly fabric trend reports, new garment additions, and enterprise volume discounts.
            </p>

            {newsletterSuccess ? (
              <div className="p-3 bg-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2 pt-1 font-inter">
                <input
                  required
                  type="email"
                  placeholder="Enter work email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#635BFF]/30 transition-all"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2.5 bg-[#635BFF] hover:bg-[#574BFF] text-white rounded-xl transition-colors cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Official Physical Locations Grid */}
        <div className="space-y-4 pb-8 border-b border-slate-800/80">
          <h3 className="text-xs font-poppins font-bold uppercase tracking-wider text-[#38BDF8] flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#635BFF]" />
            <span>Our Offices & Manufacturing Facilities</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-inter">
            {/* Head Office */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-bold font-poppins text-white block text-xs">{BRAND.contact.headOffice.title}</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">{BRAND.contact.headOffice.address}</p>
            </div>

            {/* Factory */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-bold font-poppins text-white block text-xs">{BRAND.contact.factory.title}</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">{BRAND.contact.factory.address}</p>
            </div>

            {/* Chennai */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-bold font-poppins text-white block text-xs">{BRAND.contact.chennai.title}</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">{BRAND.contact.chennai.address}</p>
            </div>

            {/* Bengaluru */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-bold font-poppins text-white block text-xs">{BRAND.contact.bengaluru.title}</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">{BRAND.contact.bengaluru.address}</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-inter">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>OEKO-TEX Certified Eco Cotton</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">GST Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
