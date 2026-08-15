import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

import directorImg from '../../assets/images/team/Director.jpeg';
import managerImg from '../../assets/images/team/Manager.jpeg';
import hrImg from '../../assets/images/team/HR.jpeg';
import ecommerceImg from '../../assets/images/team/E-commerce_Executive.jpeg';
import juniorDevImg from '../../assets/images/team/Junior_developer_developer.jpeg';
import businessDevImg from '../../assets/images/team/Business_development_managerjpeg.jpeg';
import corporateRelationsImg from '../../assets/images/team/Corporate_Relation_&_MIS_Executive.jpeg';
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
    image: corporateRelationsImg
  },
  {
    name: 'Vasuki Thangaraj',
    role: 'Junior Full Stack Developer',
    bio: 'Develops and maintains web applications using frontend and backend technologies, while supporting database integration, testing, debugging, and application performance.',
    image: juniorDevImg
  }
];

export const MeetOurTeamSection: React.FC = () => {
  // Mobile / Tablet auto-scroll marquee hooks
  const [isTeamPaused, setIsTeamPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const teamTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTeamTouch = () => {
    setIsTeamPaused(true);
    if (teamTimeoutRef.current) clearTimeout(teamTimeoutRef.current);
    teamTimeoutRef.current = setTimeout(() => {
      setIsTeamPaused(false);
    }, 5000);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isTeamPaused) return;

    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 5) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isTeamPaused]);

  useEffect(() => {
    return () => {
      if (teamTimeoutRef.current) clearTimeout(teamTimeoutRef.current);
    };
  }, []);

  return (
    <section id="team" className="py-10 sm:py-16 lg:py-24 bg-[#600018] relative overflow-hidden select-none w-full" aria-label="Meet Our Team">
      
      {/* Global Split Background */}
      <div 
        className="absolute top-0 left-0 right-0 h-[40%] lg:h-[55%] z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${teamBgImg})` }}
      >
        <div className="absolute inset-0 bg-[#600018]/75"></div>
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
            <div key={idx} className="relative w-[calc(25vw-2rem)] shrink-0 mx-4 h-auto pb-4">
              <div className="bg-transparent text-center flex flex-col items-center h-auto relative group">
                
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
                <div className="space-y-2.5 relative z-10">
                  <div>
                    <h3 className="text-lg sm:text-xl font-poppins font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F7E7CE] mt-1.5 font-bold tracking-wider">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-sm sm:text-[15px] text-slate-200 font-inter leading-relaxed mt-4 px-4 line-clamp-4">
                    {member.bio}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet View: Smooth Auto-scrolling Team list */}
      <div className="block lg:hidden relative w-full mt-10 z-10 overflow-hidden px-4">
        <div 
          ref={scrollRef}
          onTouchStart={handleTeamTouch}
          onMouseDown={handleTeamTouch}
          className="flex gap-4 overflow-x-auto no-scrollbar py-4 px-2 snap-x snap-mandatory scroll-smooth relative z-10 [perspective:1000px] [transform-style:preserve-3d]"
        >
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              animate={{
                rotateY: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.4
              }}
              className="w-48 shrink-0 flex flex-col items-center text-center snap-center relative [transform-style:preserve-3d] py-2 px-1"
            >
              {/* Avatar */}
              <div className="relative z-10 w-20 h-20 mb-4 mx-auto shrink-0 mt-2">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-sm"
                  />
                ) : (
                  <div className="w-full h-full rounded-full border-4 border-white/20 shadow-sm bg-slate-800 flex items-center justify-center">
                    <span className="text-slate-400 text-[10px] font-poppins font-medium">No Image</span>
                  </div>
                )}
              </div>
              
              {/* Text Info */}
              <div className="space-y-1.5 relative z-10">
                <h3 className="text-sm font-poppins font-bold text-white leading-tight">
                  {member.name}
                </h3>
                <p className="text-[10px] text-[#F7E7CE] font-bold tracking-wide">
                  {member.role}
                </p>
                <p className="text-[11px] md:text-xs text-slate-200 font-inter leading-relaxed line-clamp-3 mt-2 whitespace-normal">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};
