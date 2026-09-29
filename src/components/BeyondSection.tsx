import React from 'react';
import { Globe2, Crown, Sparkles, Award } from 'lucide-react';
import { LANGUAGES_DATA, BEYOND_DATA } from '../data/portfolioData';

export const BeyondSection: React.FC = () => {
  return (
    <section id="beyond" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#2a2a3a]/60">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#00e5b0] mb-2 font-mono-code">
          <span className="w-8 h-[1px] bg-[#00e5b0]"></span>
          <span>The Full Picture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight mb-4">
          Beyond The Code
        </h2>
        <p className="text-base sm:text-lg text-[#9090b0] font-body max-w-2xl leading-relaxed">
          There's more to a great engineer than syntax and frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Languages Spoken */}
        <div className="rounded-2xl bg-[#111118] border border-[#2a2a3a] p-6 hover:border-[#7c5cfc]/60 transition-all duration-300 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-[#161622] border border-[#2a2a3a] text-[#7c5cfc]">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-syne">
                Languages I Speak
              </h3>
            </div>

            <div className="space-y-4">
              {LANGUAGES_DATA.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between pb-3 border-b border-[#2a2a3a]/50 last:border-none">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{lang.flag}</span>
                    <div>
                      <div className="text-xs font-bold text-white font-syne">{lang.name}</div>
                      <div className="text-[11px] text-[#00e5b0] font-mono-code">{lang.level}</div>
                    </div>
                  </div>

                  {/* 5-dot proficiency indicator */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <span
                        key={dot}
                        className={`w-2 h-2 rounded-full ${
                          dot <= lang.dots ? 'bg-[#7c5cfc]' : 'bg-[#2a2a3a]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#2a2a3a] text-[11px] text-[#8a8aa8] font-mono-code">
            🌍 Multilingual communicator & global collaborator
          </div>
        </div>

        {/* Card 2: Leadership & Community */}
        <div className="rounded-2xl bg-[#111118] border border-[#2a2a3a] p-6 hover:border-[#7c5cfc]/60 transition-all duration-300 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-[#161622] border border-[#2a2a3a] text-[#00e5b0]">
                <Crown className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-syne">
                {BEYOND_DATA[0].title}
              </h3>
            </div>

            <div className="space-y-4">
              {BEYOND_DATA[0].items.map((item, idx) => (
                <div key={idx} className="pb-3 border-b border-[#2a2a3a]/50 last:border-none">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white font-syne">{item.title}</span>
                    {item.badge && (
                      <span className="text-[10px] font-mono-code text-[#00e5b0] bg-[#00e5b0]/10 px-2 py-0.5 rounded border border-[#00e5b0]/20">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#9090b0] font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#2a2a3a] text-[11px] text-[#8a8aa8] font-mono-code flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-[#00e5b0]" />
            <span>Trusted representative & empathetic leader</span>
          </div>
        </div>

        {/* Card 3: Interests & Hobbies */}
        <div className="rounded-2xl bg-[#111118] border border-[#2a2a3a] p-6 hover:border-[#7c5cfc]/60 transition-all duration-300 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-[#161622] border border-[#2a2a3a] text-[#ff6b6b]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-syne">
                {BEYOND_DATA[1].title}
              </h3>
            </div>

            <div className="space-y-4">
              {BEYOND_DATA[1].items.map((item, idx) => (
                <div key={idx} className="pb-3 border-b border-[#2a2a3a]/50 last:border-none">
                  <div className="text-xs font-bold text-white font-syne mb-1">
                    {item.title}
                  </div>
                  <p className="text-xs text-[#9090b0] font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#2a2a3a] text-[11px] text-[#8a8aa8] font-mono-code">
            💡 Creative balance powering sustained mental sharpness
          </div>
        </div>
      </div>
    </section>
  );
};
