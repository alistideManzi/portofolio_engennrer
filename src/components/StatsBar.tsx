import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  return (
    <div className="relative border-y border-[#2a2a3a] bg-[#111118]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {PERSONAL_INFO.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#7c5cfc] font-syne tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#8a8aa8] font-mono-code mt-1.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
