import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Code2, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, ACADEMICS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#111118] border border-[#2a2a3a] rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header Controls */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2a2a3a]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#00e5b0]" />
            <h3 className="text-lg font-bold text-white font-syne">Curriculum Vitae</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161622] border border-[#2a2a3a] text-xs font-mono-code text-[#e8e8f0] hover:text-white hover:border-[#7c5cfc] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#7c5cfc]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#161622] border border-[#2a2a3a] text-[#8a8aa8] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="space-y-6 text-[#c0c0d8] font-body text-xs leading-relaxed">
          {/* Top Lockup */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2a2a3a]/60">
            <div>
              <h1 className="text-2xl font-extrabold text-white font-syne">{PERSONAL_INFO.name}</h1>
              <p className="text-xs text-[#00e5b0] font-mono-code mt-0.5">{PERSONAL_INFO.role}</p>
            </div>
            <div className="space-y-1 font-mono-code text-[11px] text-[#8a8aa8]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#7c5cfc]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-[#7c5cfc]" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#7c5cfc] font-mono-code mb-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs text-[#b0b0cc] font-body leading-relaxed bg-[#161622] p-4 rounded-xl border border-[#2a2a3a]">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#7c5cfc] font-mono-code mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00e5b0]" />
              <span>Core Technical Competencies</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILLS_DATA.map((s) => (
                <div key={s.id} className="p-3 rounded-lg bg-[#161622] border border-[#2a2a3a]">
                  <div className="text-xs font-bold text-white font-syne mb-1">{s.name}</div>
                  <div className="text-[11px] font-mono-code text-[#8a8aa8]">{s.techList}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Background */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#7c5cfc] font-mono-code mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#00e5b0]" />
              <span>Academic Distinction & Education</span>
            </h2>
            <div className="space-y-3">
              {ACADEMICS_DATA.map((item) => (
                <div key={item.id} className="p-3 rounded-lg bg-[#161622] border border-[#2a2a3a]">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white font-syne">{item.title}</span>
                    <span className="text-[#00e5b0] font-mono-code text-[11px]">{item.badge}</span>
                  </div>
                  <div className="text-[11px] font-mono-code text-[#8a8aa8] mb-1">
                    {item.institution} · {item.location}
                  </div>
                  <p className="text-[11px] text-[#b0b0cc]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-[#2a2a3a] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#161622] border border-[#2a2a3a] rounded-lg hover:border-[#7c5cfc] transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
