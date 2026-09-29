import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate real network submission with feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#2a2a3a]/60">
      <div className="mb-12">
        <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#00e5b0] mb-2 font-mono-code">
          <span className="w-8 h-[1px] bg-[#00e5b0]"></span>
          <span>Let's Connect</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight mb-4">
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg text-[#9090b0] font-body max-w-2xl leading-relaxed">
          Open for full-time opportunities, engineering contracts, and technical discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Links & Value Proposition */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-[#111118] border border-[#2a2a3a] p-8 shadow-md">
            <h3 className="text-2xl font-extrabold text-white font-syne mb-3">
              Open for Collaboration <span className="inline-block animate-bounce">🚀</span>
            </h3>
            <p className="text-sm text-[#b0b0cc] font-body leading-relaxed mb-6">
              Whether it's a full-time engineering role, freelance project, or just a conversation about technology — I'm always happy to connect with like-minded builders.
            </p>

            {/* Quick Email Pill with Copy Button */}
            <div className="p-4 rounded-xl bg-[#161622] border border-[#2a2a3a] flex items-center justify-between gap-3 mb-6">
              <div className="min-w-0">
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#8a8aa8] block mb-0.5">
                  Direct Inbox
                </span>
                <span className="text-xs font-mono-code text-[#00e5b0] truncate block">
                  {PERSONAL_INFO.email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[#111118] border border-[#2a2a3a] text-[#a0a0c0] hover:text-white hover:border-[#7c5cfc] transition-all flex items-center gap-1.5 shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00e5b0]" />
                    <span className="text-[11px] font-mono-code text-[#00e5b0]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono-code">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Mailto Action */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#7c5cfc] rounded-xl hover:bg-[#6b4ae0] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#7c5cfc]/20"
            >
              <Mail className="w-4 h-4" />
              <span>Launch Email Client</span>
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="rounded-2xl bg-[#111118] border border-[#2a2a3a] p-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8a8aa8] font-mono-code mb-4">
              Online Profiles & Repositories
            </h4>
            <div className="space-y-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#161622] border border-[#2a2a3a] hover:border-[#7c5cfc] hover:text-white text-[#b0b0cc] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#7c5cfc]" />
                  <span className="text-xs font-mono-code">github.com/alistidemanzi</span>
                </div>
                <span className="text-xs text-[#707090] group-hover:text-white font-mono-code">↗</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#161622] border border-[#2a2a3a] hover:border-[#7c5cfc] hover:text-white text-[#b0b0cc] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#00e5b0]" />
                  <span className="text-xs font-mono-code">linkedin.com/in/alistidemanzi</span>
                </div>
                <span className="text-xs text-[#707090] group-hover:text-white font-mono-code">↗</span>
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#161622] border border-[#2a2a3a] hover:border-[#7c5cfc] hover:text-white text-[#b0b0cc] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Twitter className="w-4 h-4 text-[#ff6b6b]" />
                  <span className="text-xs font-mono-code">@alistidemanzi</span>
                </div>
                <span className="text-xs text-[#707090] group-hover:text-white font-mono-code">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7 rounded-2xl bg-[#111118] border border-[#2a2a3a] p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#00e5b0]" />
            <h3 className="text-xl font-bold text-white font-syne">
              Send a Direct Message
            </h3>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-xl bg-[#161622] border border-[#00e5b0]/50 text-center animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-[#00e5b0]/20 text-[#00e5b0] flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-syne mb-2">Message Sent Successfully!</h4>
              <p className="text-xs text-[#a0a0c0] font-mono-code max-w-md mx-auto">
                Thank you for reaching out, Alistide will review your message and get back to you shortly at {formState.email || 'your email'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-[#a0a0c0] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Jean Damascene"
                    className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#2a2a3a] text-white text-xs font-mono-code placeholder-[#555570] focus:border-[#7c5cfc] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-[#a0a0c0] mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. partner@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#2a2a3a] text-white text-xs font-mono-code placeholder-[#555570] focus:border-[#7c5cfc] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#a0a0c0] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Full-Stack Engineer Role / Project Consultation"
                  className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#2a2a3a] text-white text-xs font-mono-code placeholder-[#555570] focus:border-[#7c5cfc] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#a0a0c0] mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share details about your team, system requirements, or project timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#2a2a3a] text-white text-xs font-mono-code placeholder-[#555570] focus:border-[#7c5cfc] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#7c5cfc] rounded-xl hover:bg-[#6b4ae0] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#7c5cfc]/20"
              >
                {isSubmitting ? (
                  <span>Sending Dispatch...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
