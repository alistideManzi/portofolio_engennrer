import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Twitter, MapPin, Sparkles, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      {/* Dynamic Background Grids & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #7c5cfc 0%, #00e5b0 50%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #00e5b0 0%, transparent 70%)'
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline and Pitch */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161622] border border-[#7c5cfc]/30 shadow-inner mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5b0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e5b0]"></span>
            </span>
            <span className="text-xs font-semibold text-[#00e5b0] tracking-wide">
              {PERSONAL_INFO.availability}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-syne leading-[1.08] mb-6">
            Full-Stack Engineer.
          </h1>

          {/* Value Proposition */}
          <p className="text-lg sm:text-xl text-[#c0c0d8] font-body leading-relaxed mb-4 max-w-2xl">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Location & Ethos */}
          <div className="flex items-center gap-2 text-sm text-[#8a8aa8] mb-8 font-mono-code">
            <MapPin className="w-4 h-4 text-[#7c5cfc]" />
            <span>Based in {PERSONAL_INFO.location}</span>
            <span className="text-[#3a3a4e]">·</span>
            <span className="text-[#00e5b0]">Consistent, determined & always shipping</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#7c5cfc] rounded-xl hover:bg-[#6b4ae0] hover:shadow-[0_10px_25px_-5px_rgba(124,92,252,0.5)] transition-all flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#e8e8f0] bg-[#16161f] border border-[#2a2a3a] rounded-xl hover:border-[#00e5b0]/60 hover:text-[#00e5b0] transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>

            <button
              onClick={onOpenResumeModal}
              className="px-5 py-3.5 text-sm font-semibold text-[#a0a0c0] hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              View CV / Credentials
            </button>
          </div>

          {/* Quick Social Presence */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs uppercase tracking-wider text-[#707090] font-mono-code mr-1">
              Connect:
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#16161f] border border-[#2a2a3a] text-[#a0a0c0] hover:text-white hover:border-[#7c5cfc] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#16161f] border border-[#2a2a3a] text-[#a0a0c0] hover:text-white hover:border-[#7c5cfc] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#16161f] border border-[#2a2a3a] text-[#a0a0c0] hover:text-white hover:border-[#7c5cfc] transition-colors"
              title="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-[#16161f] border border-[#2a2a3a] text-[#a0a0c0] hover:text-[#00e5b0] hover:border-[#00e5b0] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Developer Profile Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Ambient Backlight Frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7c5cfc]/40 via-[#00e5b0]/30 to-[#7c5cfc]/20 blur-md opacity-75" />
            
            <div className="relative rounded-2xl bg-[#111118] border border-[#2a2a3a] p-6 shadow-2xl overflow-hidden">
              {/* Profile Image Frame */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-[#2a2a3a] mb-5 bg-[#16161f]">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
                
                {/* Floating Status Tag */}
                <div className="absolute bottom-3 left-3 bg-[#0a0a0f]/80 backdrop-blur-md border border-[#2a2a3a] rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00e5b0]"></span>
                  <span className="text-[11px] font-medium text-white tracking-wide">Ready for Hire</span>
                </div>
              </div>

              {/* Developer Metadata */}
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white font-syne">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-[#00e5b0] font-mono-code">
                    {PERSONAL_INFO.role}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-[#161622] border border-[#2a2a3a] text-[#7c5cfc]">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>

              {/* Quick Tech Highlights */}
              <div className="pt-3 border-t border-[#2a2a3a] mt-3">
                <div className="text-[11px] uppercase tracking-wider text-[#707090] font-mono-code mb-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#7c5cfc]" />
                  <span>Core Stack</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#b0b0cc] font-mono-code">
                  <span>React</span>
                  <span className="text-[#4a4a60]">·</span>
                  <span>Node.js</span>
                  <span className="text-[#4a4a60]">·</span>
                  <span>TypeScript</span>
                  <span className="text-[#4a4a60]">·</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
