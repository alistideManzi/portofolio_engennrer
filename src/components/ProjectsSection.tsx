import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, X, Check, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  const featuredProject = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#00e5b0] mb-2 font-mono-code">
          <span className="w-8 h-[1px] bg-[#00e5b0]"></span>
          <span>Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight mb-4">
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg text-[#9090b0] font-body max-w-2xl leading-relaxed">
          Real-world systems built with production-ready architecture, authentication, and full CRUD operations.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mt-8 p-1.5 bg-[#111118] border border-[#2a2a3a] rounded-xl w-fit">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'fullstack', label: 'Full-Stack' },
            { id: 'backend', label: 'Backend APIs' },
            { id: 'frontend', label: 'Frontend & Web' },
            { id: 'tools', label: 'Dev Tools & Starters' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === tab.id
                  ? 'bg-[#7c5cfc] text-white shadow-md'
                  : 'text-[#8a8aa8] hover:text-white hover:bg-[#16161f]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Hero Bento Card (if 'all' or 'fullstack' active) */}
      {(selectedCategory === 'all' || selectedCategory === 'fullstack') && (
        <div className="mb-12 rounded-3xl bg-[#111118] border border-[#2a2a3a] overflow-hidden hover:border-[#7c5cfc]/60 transition-all duration-300 shadow-2xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Info Column */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00e5b0] font-mono-code bg-[#00e5b0]/10 px-2.5 py-1 rounded-md border border-[#00e5b0]/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Flagship Architecture</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-syne mb-2 group-hover:text-[#7c5cfc] transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-xs text-[#8a8aa8] font-mono-code mb-4 uppercase tracking-wider">
                  {featuredProject.subtitle}
                </p>

                <p className="text-sm text-[#b0b0cc] font-body leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {featuredProject.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#9090b0] font-mono-code">
                      <Check className="w-3.5 h-3.5 text-[#00e5b0] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono-code text-[#a0a0c0] bg-[#161622] px-2.5 py-1 rounded border border-[#2a2a3a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#2a2a3a]/60">
                <button
                  onClick={() => setActiveModalProject(featuredProject)}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white bg-[#7c5cfc] rounded-xl hover:bg-[#6b4ae0] transition-colors flex items-center gap-2"
                >
                  <span>Architecture Overview</span>
                  <Layers className="w-3.5 h-3.5" />
                </button>
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#161622] border border-[#2a2a3a] text-[#a0a0c0] hover:text-white hover:border-[#7c5cfc] transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#161622] border border-[#2a2a3a] text-[#a0a0c0] hover:text-[#00e5b0] hover:border-[#00e5b0] transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6 bg-[#0a0a0f] border-t lg:border-t-0 lg:border-l border-[#2a2a3a] relative min-h-[300px] flex items-center justify-center p-6 overflow-hidden">
              {featuredProject.image ? (
                <div className="relative w-full h-full min-h-[280px] rounded-2xl overflow-hidden border border-[#2a2a3a] shadow-inner">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-40" />
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#161622] rounded-2xl border border-[#2a2a3a]">
                  <Layers className="w-12 h-12 text-[#7c5cfc] mb-3" />
                  <span className="text-sm font-syne font-bold text-white">Full-Stack School MIS</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects
          .filter((p) => selectedCategory !== 'all' || !p.featured)
          .map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#111118] border border-[#2a2a3a] p-6 hover:border-[#7c5cfc]/60 hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden"
            >
              {/* Optional Project Thumbnail Header */}
              {project.image && (
                <div className="w-full h-40 mb-5 rounded-xl overflow-hidden border border-[#2a2a3a] bg-[#16161f] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent opacity-60" />
                </div>
              )}

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#00e5b0]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#8a8aa8] hover:text-white transition-colors"
                        title="View GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#8a8aa8] hover:text-[#00e5b0] transition-colors"
                        title="Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-syne mb-1 group-hover:text-[#7c5cfc] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#8a8aa8] font-mono-code mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-[#b0b0cc] font-body leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-[#2a2a3a]/40">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono-code text-[#a0a0c0] bg-[#161622] px-2 py-0.5 rounded border border-[#2a2a3a]/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-mono-code text-[#707090] px-1 py-0.5">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Trigger Button */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-[#c0c0d8] bg-[#161622] border border-[#2a2a3a] rounded-lg hover:border-[#7c5cfc] hover:text-white transition-colors"
                >
                  <span>Quick View & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#111118] border border-[#2a2a3a] rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#161622] border border-[#2a2a3a] text-[#8a8aa8] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="mb-6">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#00e5b0]">
                {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-extrabold text-white font-syne mt-1">
                {activeModalProject.title}
              </h3>
              <p className="text-xs text-[#8a8aa8] font-mono-code mt-0.5">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Modal Image if available */}
            {activeModalProject.image && (
              <div className="w-full h-52 rounded-xl overflow-hidden border border-[#2a2a3a] mb-6">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Long Description */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#a0a0c0] font-mono-code mb-2">
                System Overview
              </h4>
              <p className="text-sm text-[#c0c0d8] font-body leading-relaxed">
                {activeModalProject.longDescription || activeModalProject.description}
              </p>
            </div>

            {/* Highlights */}
            {activeModalProject.highlights && activeModalProject.highlights.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#a0a0c0] font-mono-code mb-2">
                  Technical Architecture & Features
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#b0b0cc] font-mono-code">
                      <Check className="w-4 h-4 text-[#00e5b0] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics */}
            {activeModalProject.metrics && (
              <div className="mb-6 p-3 rounded-lg bg-[#161622] border border-[#2a2a3a] text-xs font-mono-code text-[#00e5b0]">
                ⚡ {activeModalProject.metrics}
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#a0a0c0] font-mono-code mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono-code text-[#e8e8f0] bg-[#161622] border border-[#2a2a3a] px-3 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#2a2a3a]">
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#7c5cfc] rounded-xl hover:bg-[#6b4ae0] transition-colors flex items-center gap-2"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#e8e8f0] bg-[#161622] border border-[#2a2a3a] rounded-xl hover:text-white hover:border-[#7c5cfc] transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
