import React from 'react';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { ACADEMICS_DATA } from '../data/portfolioData';

export const AcademicsSection: React.FC = () => {
  return (
    <section id="academics" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#2a2a3a]/60">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#00e5b0] mb-2 font-mono-code">
          <span className="w-8 h-[1px] bg-[#00e5b0]"></span>
          <span>Education</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight mb-4">
          Academic Journey
        </h2>
        <p className="text-base sm:text-lg text-[#9090b0] font-body max-w-2xl leading-relaxed">
          A track record of excellence from the very beginning — consistency has always been my style.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-8 border-l border-[#2a2a3a] space-y-8 sm:space-y-10 ml-2 sm:ml-4">
        {ACADEMICS_DATA.map((milestone) => (
          <div key={milestone.id} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#111118] border-2 border-[#7c5cfc] group-hover:border-[#00e5b0] group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(124,92,252,0.4)]" />

            <div className="rounded-2xl bg-[#111118] border border-[#2a2a3a] p-6 sm:p-7 hover:border-[#7c5cfc]/60 transition-all duration-300 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono-code bg-[#161622] text-[#00e5b0] border border-[#00e5b0]/20">
                  <Award className="w-3.5 h-3.5" />
                  <span>{milestone.badge}</span>
                </span>
                <span className="text-xs text-[#8a8aa8] font-mono-code flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#7c5cfc]" />
                  <span>{milestone.location}</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-syne mb-1 group-hover:text-[#7c5cfc] transition-colors">
                {milestone.title}
              </h3>

              <div className="text-xs text-[#a0a0c0] font-mono-code mb-4">
                {milestone.institution} · {milestone.location}
              </div>

              <p className="text-sm text-[#b0b0cc] font-body leading-relaxed mb-5">
                {milestone.description}
              </p>

              {/* Progress / Score Bar */}
              <div className="space-y-1.5 pt-2 border-t border-[#2a2a3a]/50">
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-[#8a8aa8]">Performance Evaluation</span>
                  <span className="text-[#00e5b0] font-bold">{milestone.scoreLabel}</span>
                </div>
                <div className="w-full bg-[#1b1b26] rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#7c5cfc] via-[#00e5b0] to-[#00e5b0] rounded-full transition-all duration-1000"
                    style={{ width: `${milestone.scorePercentage}%` }}
                  />
                </div>
              </div>

              {/* Additional Highlights */}
              {milestone.highlights && (
                <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-[#2a2a3a]/40">
                  {milestone.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-[#9090b0] font-mono-code">
                      <CheckCircle2 className="w-3 h-3 text-[#7c5cfc]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
