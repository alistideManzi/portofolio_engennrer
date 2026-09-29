import React from 'react';
import { ShieldCheck, Zap, GitCommit, HeartHandshake, MapPin, Mail, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#7c5cfc]" />,
      title: 'Architectural Rigor',
      description: 'Designing modular service layers, explicit database schemas, and structured error handlers that scale predictably.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#00e5b0]" />,
      title: 'Performance & Speed',
      description: 'Focusing on low-latency REST endpoints, optimized bundle sizes, and zero unnecessary re-renders in React.',
    },
    {
      icon: <GitCommit className="w-5 h-5 text-[#ff6b6b]" />,
      title: 'Consistent Delivery',
      description: 'Daily code commits, automated testing mindset, and steady iteration from concept to live deployment.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#a855f7]" />,
      title: 'Collaborative Spirit',
      description: 'Clear documentation, empathetic code reviews, and proactive communication across multidisciplinary teams.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#2a2a3a]/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#00e5b0] mb-2 font-mono-code">
            <span className="w-8 h-[1px] bg-[#00e5b0]"></span>
            <span>Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight mb-6">
            About Me
          </h2>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-[#00e5b0]/30 text-xs font-mono-code text-[#00e5b0] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00e5b0] animate-pulse"></span>
            <span>Open to Full-Time Roles & High-Impact Contracts</span>
          </div>

          <div className="space-y-4 text-base text-[#b0b0cc] font-body leading-relaxed mb-8">
            <p>
              I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a Full-Stack Engineer based in{' '}
              <span className="text-[#00e5b0]">Huye, Rwanda</span>. I am dedicated to engineering dependable software systems that bridge strong backend fundamentals with clean, responsive user interfaces.
            </p>
            <p>
              My day-to-day work centers around the modern JavaScript & TypeScript ecosystem — building production-ready Node.js APIs with Express, designing secure MongoDB & SQL database models, and constructing polished client experiences using React, Vue, and Tailwind CSS.
            </p>
            <p>
              I hold an uncompromising belief in academic excellence, structured problem solving, and deliberate practice. Whether architecting a multi-tenant School MIS, building real-time tracking web applications, or optimizing RESTful routes, I approach engineering with pride and ownership.
            </p>
          </div>

          {/* Quick info badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#2a2a3a]">
            <div className="p-3 rounded-xl bg-[#111118] border border-[#2a2a3a]">
              <div className="text-[11px] font-mono-code text-[#707090] uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#7c5cfc]" />
                <span>Location</span>
              </div>
              <span className="text-xs font-bold text-white font-syne">Huye, Rwanda</span>
            </div>

            <div className="p-3 rounded-xl bg-[#111118] border border-[#2a2a3a]">
              <div className="text-[11px] font-mono-code text-[#707090] uppercase tracking-wider mb-1 flex items-center gap-1">
                <Award className="w-3 h-3 text-[#00e5b0]" />
                <span>Primary Score</span>
              </div>
              <span className="text-xs font-bold text-white font-syne">30/30 (Perfect)</span>
            </div>

            <div className="p-3 rounded-xl bg-[#111118] border border-[#2a2a3a]">
              <div className="text-[11px] font-mono-code text-[#707090] uppercase tracking-wider mb-1 flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#ff6b6b]" />
                <span>Direct Mail</span>
              </div>
              <span className="text-xs font-bold text-white font-syne truncate block">
                alistidemanzi@...
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Photo & Engineering Principles */}
        <div className="lg:col-span-5 space-y-6">
          {/* Editorial Portrait Frame */}
          <div className="relative rounded-2xl bg-[#111118] border border-[#2a2a3a] p-3 shadow-xl overflow-hidden group">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#16161f]">
              <img
                src={PERSONAL_INFO.editorialPortrait || PERSONAL_INFO.avatar}
                alt="Alistide Imanziyimana"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono-code text-white bg-[#0a0a0f]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#2a2a3a]">
                <span>Alistide Imanziyimana</span>
                <span className="text-[#00e5b0]">Huye, Rwanda</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#111118] border border-[#2a2a3a]">
            <h3 className="text-lg font-bold text-white font-syne mb-4 flex items-center gap-2">
              <span>Core Engineering Values</span>
            </h3>
            <div className="space-y-4">
              {pillars.map((p, idx) => (
                <div key={idx} className="flex gap-3.5 items-start">
                  <div className="p-2 rounded-lg bg-[#161622] border border-[#2a2a3a] shrink-0 mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono-code mb-1">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[#9090b0] font-body leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
