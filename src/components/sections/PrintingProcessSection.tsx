import React, { useState } from 'react';
import { PRINTING_PROCESS } from '../../data/process';
import { Badge } from '../common/Badge';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const PrintingProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PRINTING_PROCESS[activeStepIndex];

  return (
    <section id="process" className="py-20 lg:py-28 bg-transparent relative" aria-label="Printing Process">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="primary" size="md">
            PRECISION MANUFACTURING
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Our 5-Step Enterprise Printing Process
          </h2>
          <p className="text-base sm:text-lg text-[#425466] font-inter leading-relaxed">
            From prepress vector auditing to 160°C quartz curing and individual polybagging, every order passes through rigorous quality controls.
          </p>
        </div>

        {/* Timeline Navigation Tabs (Borderless) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {PRINTING_PROCESS.map((proc, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={proc.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#0A2540] text-white shadow-xl scale-102'
                    : 'bg-white/80 backdrop-blur-md text-[#425466] hover:bg-[#635BFF]/10 hover:text-[#0A2540] shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-outfit text-xs font-bold ${isActive ? 'text-[#38BDF8]' : 'text-[#635BFF]'}`}>
                    STEP {proc.stepNumber}
                  </span>
                  {isActive && <Check className="w-4 h-4 text-emerald-400" />}
                </div>
                <h3 className={`text-xs sm:text-sm font-poppins font-bold truncate ${isActive ? 'text-white' : 'text-[#0A2540]'}`}>
                  {proc.title.split('&')[0]}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Content Spotlight Card (Borderless Premium Glass) */}
        <div className="stripe-card rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/90 backdrop-blur-xl">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-outfit text-2xl font-extrabold text-[#635BFF] bg-[#635BFF]/10 px-4 py-1.5 rounded-2xl">
                STEP {currentStep.stepNumber}
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-poppins">
                {currentStep.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#0A2540]">
              {currentStep.title}
            </h3>

            <p className="text-sm sm:text-base text-[#425466] leading-relaxed font-inter">
              {currentStep.description}
            </p>

            {/* Key Quality Deliverables Checkpoints */}
            <div className="pt-3 space-y-3 font-inter">
              <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-poppins">
                Guaranteed Prepress & QC Outputs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentStep.keyOutputs.map((output, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 bg-white/90 rounded-2xl text-xs font-semibold text-[#0A2540] shadow-xs">
                    <ShieldCheck className="w-4 h-4 text-[#635BFF] shrink-0" />
                    <span>{output}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Process Flow Card */}
          <div className="lg:col-span-5 bg-[#0A2540] text-white p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#635BFF]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-700/50 pb-4 font-poppins">
              <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest">
                QUALITY AUDIT LOCK
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-mono font-bold">
                STAGE PASSED ✓
              </span>
            </div>

            <div className="space-y-4 text-xs font-inter">
              <div className="flex justify-between items-center text-slate-300">
                <span>Pantone Matching Engine:</span>
                <span className="text-white font-bold">Solid Coated PMS 100% Match</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Wash Test Verification:</span>
                <span className="text-white font-bold">50+ Cycles @ 40°C</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Fabric Shrinkage Limit:</span>
                <span className="text-emerald-400 font-bold">&lt; 1.5% Post Bio-Wash</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/50">
              <button
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % PRINTING_PROCESS.length)}
                className="w-full text-center py-3.5 bg-[#635BFF] hover:bg-[#574BFF] text-white text-xs sm:text-sm font-poppins font-bold rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#635BFF]/30"
              >
                <span>Next Stage: Step {PRINTING_PROCESS[(activeStepIndex + 1) % PRINTING_PROCESS.length].stepNumber}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
