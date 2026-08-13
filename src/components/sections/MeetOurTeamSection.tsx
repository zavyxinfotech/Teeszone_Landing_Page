import React, { useState } from 'react';
import { motion } from 'motion/react';

import directorImg from '../../assets/images/team/Director.jpeg';
import managerImg from '../../assets/images/team/Manager.jpeg';
import hrImg from '../../assets/images/team/HR.jpeg';
import ecommerceImg from '../../assets/images/team/E-commerce_Executive.jpeg';
import juniorDevImg from '../../assets/images/team/Junior_developer_developer.jpeg';
import businessDevImg from '../../assets/images/team/Business_development_managerjpeg.jpeg';
import teamBgImg from '../../assets/images/meet_our_team_background.png';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Sakthivel Muthusamy',
    role: 'Founder, Managing Director',
    bio: 'With a vision to revolutionize the custom apparel industry, Sakthivel founded TeesZone Clothing, blending innovation with a deep understanding of customer needs.',
    image: managerImg
  },
  {
    name: 'Saranya Sakthivel',
    role: 'Director, Head of Operations',
    bio: "Saranya Sakthivel is the driving force behind the seamless execution of the company's vision. With a keen eye for detail and a strong operational mindset, she ensures that every step runs efficiently.",
    image:  directorImg
  },
  {
    name: 'Archana R',
    role: 'HR & Talent Acquisition Executive',
    bio: 'Archana leads Human Resources and Talent Acquisition. She plays a key role in building a skilled, performance-driven team that supports TeesZone operations across all apparel divisions.',
    image: hrImg
  },
  {
    name: 'Vijayadarshini NM',
    role: 'E-Commerce & Digital Growth Executive',
    bio: 'Vijayadarshini manages TeesZone e-commerce operations and digital growth initiatives, focusing on website management, content coordination, and customer experience.',
    image: ecommerceImg
  },
  {
    name: 'Ramya R',
    role: 'Business Development Manager',
    bio: 'Drives business growth by identifying new opportunities, building client relationships, developing partnerships, and achieving business targets.',
    image: businessDevImg
  },
  {
    name: 'NithyaSri S',
    role: 'Corporate Relations & MIS Executive',
    bio: 'Manages corporate communications, client coordination, reports, MIS data, and internal documentation to support smooth business operations.',
    image: ''
  },
  {
    name: 'Vasuki Thangaraj',
    role: 'Junior Full Stack Developer',
    bio: 'Develops and maintains web applications using frontend and backend technologies, while supporting database integration, testing, debugging, and application performance.',
    image: juniorDevImg
  }
];

export const MeetOurTeamSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section id="team" className="py-20 lg:py-24 bg-[#0A2540] relative overflow-hidden select-none w-full" aria-label="Meet Our Team">
      
      {/* Global Split Background */}
      <div 
        className="absolute top-0 left-0 right-0 h-[40%] lg:h-[55%] z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${teamBgImg})` }}
      >
        <div className="absolute inset-0 bg-[#0A2540]/75"></div>
      </div>

      {/* Section Header */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-bold text-white tracking-tight">
            Our Team
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-inter leading-relaxed max-w-xl mx-auto">
            Passionate leaders and industry experts powering precision apparel manufacturing, quality control, and client experience.
          </p>
        </div>
      </div>

      {/* Desktop View: Team Members Horizontal Marquee (exactly 4 cards per screen) */}
      <div className="hidden lg:block relative w-full overflow-hidden mt-16 py-4 z-10">
        <div className="animate-marquee flex">
          {/* Double the array for seamless looping */}
          {[...TEAM_MEMBERS, ...TEAM_MEMBERS].map((member, idx) => (
            <div key={idx} className="relative w-[calc(25vw-2rem)] shrink-0 mx-4 h-[400px]">
              <div className="bg-transparent text-center flex flex-col items-center h-full relative group">
                
                {/* Avatar */}
                <div className="relative z-10 w-32 h-32 mb-6 mx-auto shrink-0 mt-4">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full border-8 border-white/10 shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full border-8 border-white/10 shadow-sm bg-slate-800 flex items-center justify-center grayscale transition-all duration-500">
                      <span className="text-slate-400 text-xs font-poppins font-medium">No Image</span>
                    </div>
                  )}
                </div>

                {/* Text Info */}
                <div className="space-y-2 relative z-10">
                  <div>
                    <h3 className="text-lg font-poppins font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-[#38BDF8] mt-1 font-bold">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-xs text-slate-200 font-inter leading-relaxed line-clamp-4 mt-3 px-4">
                    {member.bio}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet View: Interactive 3D Booklet */}
      <div className="block lg:hidden relative w-full px-4 sm:px-10 mt-12 z-10 h-[500px]">
        <div className="w-full max-w-sm mx-auto h-full relative" style={{ perspective: '1500px' }}>
          
          {TEAM_MEMBERS.map((member, idx) => {
            const isPast = idx < currentPage;
            const isCurrent = idx === currentPage;
            
            return (
              <div 
                key={idx}
                className={`absolute inset-0 bg-white rounded-r-3xl rounded-l-md shadow-2xl origin-left transition-transform duration-700 ease-in-out cursor-pointer border border-slate-200 border-l-[12px] border-l-slate-300 flex flex-col`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isPast ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                  zIndex: isPast ? 0 : (TEAM_MEMBERS.length - idx),
                }}
                onClick={() => {
                  if (isCurrent && idx < TEAM_MEMBERS.length - 1) {
                    setCurrentPage(idx + 1); // Turn forward
                  } else if (isPast && idx === currentPage - 1) {
                    setCurrentPage(idx); // Turn backward
                  } else if (idx === TEAM_MEMBERS.length - 1) {
                    setCurrentPage(0); // Loop to start
                  }
                }}
              >
                {/* Front of the page */}
                <div className="absolute inset-0 p-0 flex flex-col h-full overflow-hidden bg-white rounded-r-3xl rounded-l-md" style={{ backfaceVisibility: 'hidden' }}>
                  
                  {/* Decorative Background Shape for Page */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-40 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${teamBgImg})` }}
                  >
                    <div className="absolute inset-0 bg-[#0A2540]/60"></div>
                  </div>
                  
                  {/* Avatar */}
                  <div className="relative z-10 w-28 h-28 mb-4 mx-auto mt-24 shrink-0">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover rounded-full border-8 border-white shadow-sm"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full border-8 border-white shadow-sm bg-slate-100 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-poppins font-medium">No Image</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Text Info */}
                  <div className="space-y-3 relative z-10 flex-grow px-6 text-center">
                    <div>
                      <h3 className="text-lg font-poppins font-bold text-slate-800">
                        {member.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-xs text-slate-600 font-inter leading-relaxed mt-2">
                      {member.bio}
                    </p>
                  </div>
                  
                  {/* Page turning hint */}
                  <div className="mt-auto pt-4 pb-6 px-6 flex justify-between items-center text-[#635BFF]">
                    <span className="text-[10px] font-bold opacity-50">Page {idx + 1} of {TEAM_MEMBERS.length}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-1 bg-[#635BFF]/10 px-3 py-1.5 rounded-full">
                      {idx === TEAM_MEMBERS.length - 1 ? 'Start Over ↺' : 'Turn Page →'}
                    </span>
                  </div>
                </div>
                
                {/* Back of the page */}
                <div 
                  className="absolute inset-0 bg-slate-50 rounded-l-3xl rounded-r-md border-r-[12px] border-r-slate-300 shadow-inner flex items-center justify-center" 
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                   <span className="text-slate-300 text-sm font-bold opacity-50 select-none">TeesZone Team</span>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>

    </section>
  );
};
