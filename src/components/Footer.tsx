import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2a2a3a] bg-[#0a0a0f] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Lockup */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#"
            className="text-lg font-extrabold tracking-wider text-white font-syne uppercase inline-flex items-center gap-0.5 mb-1"
          >
            <span>ALISTIDE</span>
            <span className="text-[#7c5cfc]">.</span>
          </a>
          <p className="text-xs text-[#8a8aa8] font-mono-code">
            Full-Stack Engineer · Based in {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#8a8aa8] hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#8a8aa8] hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#8a8aa8] hover:text-white transition-colors"
            title="Twitter / X"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 text-[#8a8aa8] hover:text-[#00e5b0] transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#707090] font-mono-code">
            © {new Date().getFullYear()} Alistide Imanziyimana.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-lg bg-[#161622] border border-[#2a2a3a] text-[#a0a0c0] hover:text-white hover:border-[#7c5cfc] transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
