import React, { useState } from 'react';
import { Product, PrintTechnique } from '../../types';
import { X, Upload, Check, RefreshCw, Layers, Sparkles, Send, ShieldCheck, Palette } from 'lucide-react';
import { Button } from './Button';
import { calculateBulkPrice, formatCurrency } from '../../utils/formatters';

interface CustomizerModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (details: any) => void;
}

const SAMPLE_LOGOS = [
  { name: 'Modern Tech', svg: '⚡ HYPER' },
  { name: 'Corporate Shield', svg: '🛡️ APEX' },
  { name: 'Minimal Monogram', svg: '❖ TEES' },
  { name: 'AI Studio', svg: '✦ NEXUS' }
];

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  product,
  onClose,
  onRequestQuote
}) => {
  const availableColors = product?.colors && product.colors.length > 0 ? product.colors : [
    { name: 'Midnight Navy', hex: '#0A2540', bgClass: 'bg-[#0A2540]' },
    { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white' },
    { name: 'Jet Black', hex: '#111827', bgClass: 'bg-gray-900' },
    { name: 'Electric Blue', hex: '#635BFF', bgClass: 'bg-[#635BFF]' },
    { name: 'Charcoal Grey', hex: '#374151', bgClass: 'bg-slate-700' }
  ];

  const availableTechniques = product?.printTechniques && product.printTechniques.length > 0
    ? product.printTechniques
    : ['High-Density Embroidery', 'Ultra-HD Screen Printing', '3D Puff Print', 'Direct-to-Garment (DTG)'];

  const [shirtColor, setShirtColor] = useState(availableColors[0].hex);
  const [shirtColorName, setShirtColorName] = useState(availableColors[0].name);
  const [printTechnique, setPrintTechnique] = useState<PrintTechnique>(availableTechniques[0] as PrintTechnique);
  const [printPosition, setPrintPosition] = useState<'Front Left Chest' | 'Center Chest' | 'Back Shield' | 'Sleeve Crest'>('Front Left Chest');
  const [selectedLogo, setSelectedLogo] = useState(SAMPLE_LOGOS[0].svg);
  const [customText, setCustomText] = useState('ACME CORP');
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const basePrice = product ? product.basePrice : 495;
  const priceInfo = calculateBulkPrice(basePrice, quantity);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedLogo(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(true);
      setTimeout(() => {
        onRequestQuote({
          productName: product ? product.name : 'Custom T-Shirt',
          shirtColorName,
          printTechnique,
          printPosition,
          customText,
          quantity,
          totalPrice: priceInfo.totalPrice
        });
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#0A2540]/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 md:p-8 text-[#0A2540]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#0A2540] hover:bg-slate-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
          <div className="p-2 bg-[#635BFF]/10 text-[#635BFF] rounded-xl">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-poppins font-bold text-[#0A2540]">
              TeesZone Real-Time Apparel Customizer
            </h2>
            <p className="text-xs text-[#6B7C93]">
              Configure colors, print techniques, and vector placement with instant live quote estimation.
            </p>
          </div>
        </div>

        {successMessage ? (
          <div className="py-16 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A2540]">Customization Proof Saved!</h3>
            <p className="text-sm text-[#6B7C93] max-w-md mx-auto">
              Our prepress team is generating your vector Pantone proof. A dedicated account representative will contact you within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Live 2D Mockup Canvas */}
            <div className="lg:col-span-6 space-y-4">
              <div 
                className="relative rounded-3xl p-8 aspect-square flex items-center justify-center transition-colors duration-500 shadow-inner border border-slate-200 overflow-hidden"
                style={{ backgroundColor: shirtColor }}
              >
                {/* Background Subtle Fabric Texture Overlay */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Vector T-Shirt Base Silhouette */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full drop-shadow-2xl opacity-95 transition-all duration-300"
                  fill="none"
                >
                  <path
                    d="M50 30 C 65 15, 135 15, 150 30 L 190 70 L 160 95 L 150 80 L 150 185 C 150 190, 145 195, 140 195 L 60 195 C 55 195, 50 190, 50 185 L 50 80 L 40 95 L 10 70 Z"
                    fill="currentColor"
                    className="text-white/20"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2"
                  />
                  {/* Collar Contour */}
                  <path d="M75 22 C 90 38, 110 38, 125 22" stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none" />
                </svg>

                {/* Print Placement Positioning */}
                <div
                  className={`absolute transition-all duration-300 flex flex-col items-center justify-center p-3 rounded-xl border-2 border-dashed border-[#38BDF8]/80 bg-black/20 backdrop-blur-xs text-white ${
                    printPosition === 'Front Left Chest'
                      ? 'top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 scale-75'
                      : printPosition === 'Center Chest'
                      ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100'
                      : printPosition === 'Back Shield'
                      ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 opacity-90'
                      : 'top-1/3 right-1/4 translate-x-1/4 -translate-y-1/2 scale-60'
                  }`}
                >
                  {uploadedLogo ? (
                    <img src={uploadedLogo} alt="Uploaded logo" className="max-h-12 max-w-24 object-contain" />
                  ) : (
                    <span className="font-poppins font-black text-sm tracking-wider uppercase drop-shadow-md text-[#38BDF8]">
                      {selectedLogo}
                    </span>
                  )}
                  <span className="text-[10px] font-semibold mt-1 bg-[#635BFF] px-2 py-0.5 rounded-full shadow-xs">
                    {printTechnique}
                  </span>
                </div>

                {/* Live Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-2 text-xs font-bold text-[#0A2540]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Position: {printPosition}</span>
                </div>
              </div>

              <p className="text-xs text-center text-[#6B7C93]">
                * 3D rendering preview is for design positioning. Final Pantone dye matching and digital vector proof will be emailed.
              </p>
            </div>

            {/* Right Column: Customization Controls */}
            <div className="lg:col-span-6 space-y-5">
              {/* Garment Color Swatches */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#0A2540] uppercase tracking-wide">
                    Garment Colorway
                  </label>
                  <span className="text-xs font-semibold text-[#635BFF]">{shirtColorName}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableColors.map((col) => (
                    <button
                      key={col.hex + col.name}
                      type="button"
                      onClick={() => {
                        setShirtColor(col.hex);
                        setShirtColorName(col.name);
                      }}
                      className={`h-10 px-3 rounded-xl border flex items-center gap-2 transition-all cursor-pointer ${
                        shirtColor === col.hex
                          ? 'border-[#635BFF] ring-2 ring-[#635BFF]/30 scale-102 bg-[#635BFF]/5'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full ${col.bgClass || ''} shadow-xs border border-slate-300`} style={{ backgroundColor: col.hex }} />
                      <span className="text-xs font-medium text-[#0A2540]">{col.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Print Technique Picker */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wide mb-2">
                  Select Customization Technique
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {availableTechniques.map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => setPrintTechnique(tech as PrintTechnique)}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                        printTechnique === tech
                          ? 'border-[#635BFF] bg-[#635BFF]/10 text-[#635BFF]'
                          : 'border-slate-200 text-[#425466] hover:bg-slate-50'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Placement Position */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wide mb-2">
                  Artwork Placement Position
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Front Left Chest', 'Center Chest', 'Back Shield', 'Sleeve Crest'].map((pos) => (
                    <button
                      key={pos}
                      type="button"
                      onClick={() => setPrintPosition(pos as any)}
                      className={`p-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                        printPosition === pos
                          ? 'border-[#0A2540] bg-[#0A2540] text-white'
                          : 'border-slate-200 text-[#425466] hover:bg-slate-50'
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              {/* Logo Upload or Sample Preset */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wide mb-2">
                  Upload Logo or Select Sample Vector
                </label>
                <div className="flex gap-2 mb-2">
                  <label className="flex-1 border-2 border-dashed border-slate-300 rounded-xl p-3 text-center cursor-pointer hover:border-[#635BFF] hover:bg-[#635BFF]/5 transition-all">
                    <Upload className="w-5 h-5 mx-auto text-[#635BFF] mb-1" />
                    <span className="text-xs font-semibold text-[#0A2540] block">Upload Vector Artwork</span>
                    <span className="text-[10px] text-[#6B7C93]">SVG, AI, PNG or High-Res JPG</span>
                    <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                  </label>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {SAMPLE_LOGOS.map((sample, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setUploadedLogo(null);
                        setSelectedLogo(sample.svg);
                      }}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-[#0A2540] whitespace-nowrap cursor-pointer"
                    >
                      {sample.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bulk Quantity Slider & Pricing */}
              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0A2540] uppercase">Quantity ({quantity} Pcs)</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {priceInfo.discountPercentage}% Wholesale Discount Applied
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={1000}
                  step={10}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-[#635BFF] cursor-pointer"
                />
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200">
                  <span className="text-[#6B7C93]">Unit Price: <strong>{formatCurrency(priceInfo.unitPrice)}</strong></span>
                  <span className="text-sm font-extrabold text-[#635BFF]">Estimated Total: {formatCurrency(priceInfo.totalPrice)}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full"
                icon={<Send className="w-4 h-4" />}
              >
                Request Free Prepress Proof & Instant Quote
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
