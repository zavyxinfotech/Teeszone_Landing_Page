import React from "react";
import { BRAND } from "../../data/brand";
import { Logo } from "../common/Logo";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#600018] text-white pt-16 pb-10 relative overflow-hidden font-inter border-t border-[#A51F3D]/30"
      aria-label="Footer"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto space-y-12">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-[#A51F3D]/20">
          {/* Company Brand */}
          <div className="lg:col-span-6 space-y-4">
            {/* Logo + Brand Name */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Logo size="md" variant="dark" />
              </div>
            </div>

            <p className="text-sm text-[#E8D6C0] leading-relaxed">
              {BRAND.description}
            </p>
            <div className="text-xs font-mono text-[#F7E7CE] mt-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg w-fit">
              GSTIN: {BRAND.gstin}
            </div>

            {/* Contact Actions */}
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${BRAND.contact.phonePrimary}`}
                className="w-fit bg-[#80011F] hover:bg-[#600018] text-white font-poppins font-bold text-sm px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Email */}
              <a
                href={`mailto:${BRAND.contact.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#F7E7CE] flex items-center justify-center text-white transition-all shadow-xs group"
              >
                <Mail className="w-4 h-4" />
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
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={BRAND.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] flex items-center justify-center text-white transition-all shadow-xs group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3 font-poppins">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F7E7CE]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E8D6C0] font-semibold">
              <li>
                <a href="#" className="hover:text-[#F7E7CE] transition-all flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-[#80011F] group-hover:bg-[#F7E7CE] transition-colors" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F7E7CE] transition-all flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-[#80011F] group-hover:bg-[#F7E7CE] transition-colors" />
                  <span>About us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F7E7CE] transition-all flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-[#80011F] group-hover:bg-[#F7E7CE] transition-colors" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F7E7CE] transition-all flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-[#80011F] group-hover:bg-[#F7E7CE] transition-colors" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore Links */}
          <div className="lg:col-span-3 space-y-3 font-poppins">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F7E7CE]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E8D6C0] font-semibold">
              <li>
                <a href="#services" className="hover:text-[#F7E7CE] transition-all flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-[#80011F] group-hover:bg-[#F7E7CE] transition-colors" />
                  <span>Categories</span>
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F7E7CE] transition-all flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-[#80011F] group-hover:bg-[#F7E7CE] transition-colors" />
                  <span>Why Choose Us</span>
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#F7E7CE] transition-all flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-[#80011F] group-hover:bg-[#F7E7CE] transition-colors" />
                  <span>Our Team</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F7E7CE] transition-all flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-[#80011F] group-hover:bg-[#F7E7CE] transition-colors" />
                  <span>FAQs</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D6C0] font-inter">
          <div className="flex flex-wrap items-center gap-3">
            <div>
              © {new Date().getFullYear()} {BRAND.legalName} . Developed with ❤️
              by{" "}
              <a
                href="https://zavyx.odoo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#da8a24] font-bold hover:underline"
              >
                ZAVYX InfoTech
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#E8D6C0]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
