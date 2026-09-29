import React, { useState } from 'react';
import { Layout, Server, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-[#7c5cfc]" />,
  Server: <Server className="w-5 h-5 text-[#00e5b0]" />,
  Database: <Database className="w-5 h-5 text-[#ff6b6b]" />,
  Terminal: <Terminal className="w-5 h-5 text-[#a855f7]" />,
};

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'database' | 'languages'>('all');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.id === activeFilter;
  });

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#00e5b0] mb-2 font-mono-code">
          <span className="w-8 h-[1px] bg-[#00e5b0]"></span>
          <span>Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight mb-4">
          What I Build With
        </h2>
        <p className="text-base sm:text-lg text-[#9090b0] font-body max-w-2xl leading-relaxed">
          From database design to pixel-perfect interfaces — I cover the full stack with confidence.
        </p>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap gap-2 mt-8 p-1.5 bg-[#111118] border border-[#2a2a3a] rounded-xl w-fit">
          {[
            { id: 'all', label: 'All Capabilities' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend' },
            { id: 'database', label: 'Database & Cloud' },
            { id: 'languages', label: 'Core Languages' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-[#7c5cfc] text-white shadow-md'
                  : 'text-[#8a8aa8] hover:text-white hover:bg-[#16161f]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="group relative rounded-2xl bg-[#111118] border border-[#2a2a3a] p-7 transition-all duration-300 hover:border-[#7c5cfc]/60 hover:-translate-y-1 shadow-lg overflow-hidden"
          >
            {/* Top gradient highlight strip on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7c5cfc] via-[#00e5b0] to-[#7c5cfc] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#161622] border border-[#2a2a3a]">
                  {iconMap[skill.iconName] || <Terminal className="w-5 h-5 text-[#7c5cfc]" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-syne">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-[#00e5b0] font-mono-code">
                    {skill.tools.length} Specializations
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-[#7c5cfc] font-mono-code tabular-nums">
                {skill.proficiency}%
              </span>
            </div>

            {/* Tech List Description */}
            <p className="text-xs sm:text-sm text-[#9090b0] font-mono-code mb-5 leading-relaxed">
              {skill.techList}
            </p>

            {/* Proficiency Bar */}
            <div className="w-full bg-[#1b1b26] rounded-full h-1.5 overflow-hidden mb-5">
              <div
                className="h-full bg-gradient-to-r from-[#7c5cfc] to-[#00e5b0] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>

            {/* Individual tool tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a3a]/60">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center gap-1 text-[11px] font-mono-code text-[#c0c0d8] bg-[#161622] border border-[#2a2a3a] px-2.5 py-1 rounded-md"
                >
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#00e5b0]" />
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
