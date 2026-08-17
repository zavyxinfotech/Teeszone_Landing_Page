import React from 'react';
import { BRAND } from '../../data/brand';
import { Badge } from '../common/Badge';
import { Mail, Phone, MapPin, FileText, Map as MapIcon } from 'lucide-react';

export const ContactPreviewSection: React.FC = () => {

  return (
    <section
      id="contact"
      className="py-10 sm:py-16 lg:py-24 bg-cream-light relative"
      aria-label="Corporate Office & Contact"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">

        {/* Two-column layout: Contact details left, Map right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Left Column: Contact Details — NO card/border/background ── */}
          <div className="flex flex-col gap-7">

            {/* Section header */}
            <div className="space-y-2">
              <Badge variant="primary" size="md" className="mb-2">
                CORPORATE OFFICE &amp; CONTACT
              </Badge>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#241A1D] tracking-tight leading-tight">
                Speak With a Dedicated Apparel Specialist
              </h2>
              <p className="text-xs sm:text-sm text-[#6B5B60] mt-2 leading-relaxed font-inter">
                Custom embroidery specs, bulk uniform orders, or corporate swag boxes? Our team is available to assist you.
              </p>
            </div>

            {/* Contact rows — borderless, no card background */}
            <div className="space-y-5 font-inter">

              {/* GSTIN & Legal Name */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#80011F]/10 text-[#80011F] rounded-xl shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">
                    Legal Entity &amp; GSTIN
                  </span>
                  <span className="text-xs font-bold text-[#241A1D] block font-poppins mt-0.5">
                    {BRAND.legalName}
                  </span>
                  <span className="text-[11px] font-mono text-[#0284C7] font-semibold">
                    GSTIN: {BRAND.gstin}
                  </span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">
                    Direct Phone Lines
                  </span>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5">
                    <a
                      href={`tel:${BRAND.contact.phonePrimary}`}
                      className="text-sm font-bold text-[#241A1D] hover:text-[#80011F] transition-colors"
                    >
                      {BRAND.contact.phonePrimary}
                    </a>
                    <span className="text-slate-400">|</span>
                    <a
                      href={`tel:${BRAND.contact.phoneSecondary}`}
                      className="text-sm font-bold text-[#241A1D] hover:text-[#80011F] transition-colors"
                    >
                      {BRAND.contact.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#80011F]/10 text-[#80011F] rounded-xl shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">
                    Official Sales &amp; Inquiry Email
                  </span>
                  <a
                    href={`mailto:${BRAND.contact.email}`}
                    className="text-sm font-bold text-[#241A1D] hover:text-[#80011F] transition-colors block mt-0.5"
                  >
                    {BRAND.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Office hours */}
            <p className="text-[11px] text-slate-400 font-inter border-t border-slate-200 pt-4">
              ⏰ Office hours: Monday – Saturday, 9:00 AM – 7:00 PM IST
            </p>
          </div>

          {/* ── Right Column: Map & Address — NO card/border/background ── */}
          <div className="flex flex-col gap-5">

            {/* Section title — plain text, no card */}
            <div>
              <h3 className="text-lg sm:text-xl font-poppins font-extrabold text-[#241A1D] flex items-center gap-2">
                <MapIcon className="w-5 h-5 text-[#80011F] shrink-0" />
                Visit Our Corporate Office
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-inter">
                Find us at Texvalley — South India's premium wholesale textile market hub.
              </p>
            </div>

            {/*
              Google Maps iframe — exact TeesZone head office location:
              Building No. 220/15, Shop No. 2155, Unit S206, Global Market, Texvalley,
              NH-544, Chithode, Erode - 638102, Tamil Nadu, India.
              Coordinates: 11.2722°N, 77.6284°E
            */}
            <div className="w-full h-[260px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden relative">
              <iframe
                src="https://maps.google.com/maps?q=%232155+Fortune+City+Global+Market+Texvalley+NH+544+Chithode+Erode+638102+Tamil+Nadu+India&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="TeesZone Corporate Office — #2155 Fortune City, Global Market, Texvalley, Erode"
              />
            </div>

            {/* Address block — plain, no card/box */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#80011F] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-poppins">
                  TeesZone Head Office
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#241A1D] block font-poppins mt-0.5">
                  #2155, Fortune City, Global Market – Texvalley,
                </span>
                <span className="text-xs text-[#6B5B60] block font-medium leading-relaxed font-inter">
                  NH 544 Bengaluru–Cochin National Highway, Chithode, Erode – 638 102, Tamil Nadu, India.
                </span>
                <a
                  href="https://maps.app.goo.gl/texvalley-teeszone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#80011F] font-semibold font-poppins mt-2 hover:underline"
                >
                  <MapPin className="w-3 h-3" />
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
