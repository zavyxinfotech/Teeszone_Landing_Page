import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { BRAND } from '../../data/brand';
import { ArrowRight, Check, ShieldCheck, MapPin, Phone, Mail, FileText } from 'lucide-react';

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
              <h3 className="text-sm font-poppins font-bold text-white tracking-wide uppercase">
                {BRAND.legalName}
              </h3>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/20 border border-[#635BFF]/30 text-xs font-mono text-[#38BDF8]">
                <FileText className="w-3.5 h-3.5" />
                <span>GSTIN: {BRAND.gstin}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {BRAND.description}
            </p>

            {/* Direct Contact Handles */}
            <div className="space-y-1.5 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                <a href={`tel:${BRAND.contact.phonePrimary}`} className="hover:text-white transition-colors font-bold">
                  {BRAND.contact.phonePrimary}
                </a>
                <span className="text-slate-500">|</span>
                <a href={`tel:${BRAND.contact.phoneSecondary}`} className="hover:text-white transition-colors font-bold">
                  {BRAND.contact.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                <a href={`mailto:${BRAND.contact.email}`} className="hover:text-white transition-colors font-bold">
                  {BRAND.contact.email}
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2 font-poppins">
              {[
                { name: 'LinkedIn', href: BRAND.socials.linkedin },
                { name: 'Instagram', href: BRAND.socials.instagram },
                { name: 'Twitter', href: BRAND.socials.twitter },
                { name: 'YouTube', href: BRAND.socials.youtube }
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#635BFF] text-[11px] font-semibold text-slate-200 hover:text-white transition-all shadow-2xs"
                >
                  {s.name}
                </a>
              ))}
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
