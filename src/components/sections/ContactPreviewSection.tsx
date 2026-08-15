import React from 'react';
import { BRAND } from '../../data/brand';
import { Badge } from '../common/Badge';
import { Mail, Phone, MapPin, FileText, Map as MapIcon } from 'lucide-react';

export const ContactPreviewSection: React.FC = () => {

  return (
    <section id="contact" className="py-10 sm:py-16 lg:py-24 bg-cream-light relative" aria-label="Corporate Office & Prepress Consultation">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        
        {/* Equal width, stretched equal height columns grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Contact Details & Official Locations (Formatted inside matched card) */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <Badge variant="primary" size="md" className="mb-2">
                  CORPORATE OFFICE & CONTACT
                </Badge>
                <h2 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#241A1D] tracking-tight">
                  Speak With a Dedicated Apparel Specialist
                </h2>
                <p className="text-xs sm:text-sm text-[#6B5B60] mt-2 leading-relaxed font-inter">
                  Custom embroidery specs, bulk uniform orders, or corporate swag boxes? Our team is available to assist you.
                </p>
              </div>

              <div className="space-y-4 font-inter">
                {/* GSTIN & Legal Name */}
                <div className="p-3.5 bg-cream-light/35 rounded-2xl flex items-center gap-3.5 border border-[#80011F]/5 shadow-2xs">
                  <div className="p-2.5 bg-[#80011F]/10 text-[#80011F] rounded-xl shrink-0">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">Legal Entity & GSTIN</span>
                    <span className="text-xs font-bold text-[#241A1D] block font-poppins">{BRAND.legalName}</span>
                    <span className="text-[11px] font-mono text-[#0284C7] font-semibold">GSTIN: {BRAND.gstin}</span>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="p-3.5 bg-cream-light/35 rounded-2xl flex items-center gap-3.5 border border-[#80011F]/5 shadow-2xs">
                  <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">Direct Phone Lines</span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a href={`tel:${BRAND.contact.phonePrimary}`} className="text-xs sm:text-sm font-bold text-[#241A1D] hover:text-[#80011F] transition-colors">
                        {BRAND.contact.phonePrimary}
                      </a>
                      <span className="text-slate-400">|</span>
                      <a href={`tel:${BRAND.contact.phoneSecondary}`} className="text-xs sm:text-sm font-bold text-[#241A1D] hover:text-[#80011F] transition-colors">
                        {BRAND.contact.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official Email */}
                <div className="p-3.5 bg-cream-light/35 rounded-2xl flex items-center gap-3.5 border border-[#80011F]/5 shadow-2xs">
                  <div className="p-2.5 bg-[#80011F]/10 text-[#80011F] rounded-xl shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">Official Sales & Inquiry Email</span>
                    <a href={`mailto:${BRAND.contact.email}`} className="text-xs sm:text-sm font-bold text-[#241A1D] hover:text-[#80011F] transition-colors block">
                      {BRAND.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Direct Contact hours footer info */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-slate-400 text-[11px] font-inter">
              ⏰ Office hours: Monday – Saturday, 9:00 AM – 7:00 PM IST
            </div>
          </div>

          {/* Right Column: Google Maps & Exact Head Office Address */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between border border-white/20 shadow-xl">
            <div>
              <h3 className="text-xl font-poppins font-extrabold text-[#241A1D] mb-1.5 flex items-center gap-2">
                <MapIcon className="w-5.5 h-5.5 text-[#80011F]" />
                <span>Visit Our Corporate Office</span>
              </h3>
              <p className="text-xs text-slate-600 mb-4 font-inter">
                Find us at Texvalley, South India's premium wholesale textile market hub.
              </p>
            </div>

            {/* Map iframe with visual matching height */}
            <div className="w-full h-[280px] rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner shrink-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1804791000674!2d77.62575457585097!3d11.272186788910404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d44a2e8c251%3A0x7d287114b0b14620!2sTexvalley!5e0!3m2!1sen!2sin!4v1723735500000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="TeesZone Texvalley Head Office Location Map"
              ></iframe>
            </div>

            {/* Address Display Block */}
            <div className="p-4 rounded-2xl bg-cream-light/60 border border-[#80011F]/10 flex items-start gap-3.5 mt-2">
              <MapPin className="w-5 h-5 text-[#80011F] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">TeesZone Head Office</span>
                <span className="text-xs sm:text-sm font-bold text-[#241A1D] block font-poppins mt-0.5">
                  #2155, Fortune City, Global Market - Texvalley,
                </span>
                <span className="text-xs text-[#6B5B60] block font-medium leading-relaxed font-inter">
                  NH 544 Bengaluru - Cochin National Highways, Chithode, Erode - 638 102, Tamil Nadu, India.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
