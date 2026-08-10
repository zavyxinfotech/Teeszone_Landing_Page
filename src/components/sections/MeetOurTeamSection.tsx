import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '../common/Badge';

import directorImg from '../../assets/images/team/Director.jpeg';
import managerImg from '../../assets/images/team/Manager.jpeg';
import hrImg from '../../assets/images/team/HR.jpeg';
import ecommerceImg from '../../assets/images/team/E-commerce_Executive.jpeg';

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
    bio: "Saranya Sakthivel is the driving force behind the seamless execution of the company's vision. With a keen eye for detail and a strong operational mindset, she ensures that every step, from production to delivery, runs smoothly and efficiently.",
    image:  directorImg
  },
  {
    name: 'Archana R',
    role: 'HR & Talent Acquisition Executive',
    bio: 'Archana leads Human Resources and Talent Acquisition functions at TeesZone Clothing Private Limited. She is responsible for workforce planning, structured recruitment processes, and onboarding strategies aligned with the company’s expansion goals. She plays a key role in building a skilled, performance-driven team that supports TeesZone operations across corporate uniforms, sportswear, and customized apparel divisions.',
    image: hrImg
  },
  {
    name: 'Vijayadarshini NM',
    role: 'E-Commerce & Digital Growth Executive',
    bio: 'Vijayadarshini manages TeesZone e-commerce operations and digital growth initiatives. She focuses on website management, online lead handling, content coordination, and improving customer experience across digital platforms—supporting TeesZone online expansion and brand visibility.',
    image: ecommerceImg
  }
];

export const MeetOurTeamSection: React.FC = () => {
  return (
    <section id="team" className="py-16 sm:py-20 bg-[#F8FAFC] relative overflow-hidden" aria-label="Meet Our Team">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <Badge variant="primary" size="sm">
            MEET OUR TEAM
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#7A1C24] tracking-tight">
            Dedicated artists driving our success
          </h2>
          <p className="text-sm text-[#425466] font-inter leading-relaxed max-w-xl">
            Passionate leaders and industry experts powering precision apparel manufacturing, quality control, and client experience.
          </p>
        </div>

        {/* Editorial Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-start gap-6 pt-6 border-t border-slate-200/80 group"
            >
              {/* Circular Portrait Image */}
              <div className="relative shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-md group-hover:scale-102 transition-transform duration-300 ring-4 ring-white"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-2 font-inter">
                <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#7A1C24]">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
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
