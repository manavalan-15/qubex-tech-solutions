import { useMemo, useState } from 'react';
import { Eye, Play, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  PortfolioCategory,
  PortfolioProject,
} from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

interface PortfolioSectionProps {
  onOpenProject: (project: PortfolioProject) => void;
}

export function PortfolioSection({ onOpenProject }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="relative border-b border-white/10 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-400">
              Our Creative Portfolio
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Selected Digital Products, Reels &amp; Brand Campaigns
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-300">
            Explore sample showcases across software engineering, video
            post-production, photo retouching, design, and marketing.
          </p>
        </div>

        {/* Interactive Category Filter Controls */}
        <div
          role="tablist"
          aria-label="Filter portfolio projects by category"
          className="mt-8 flex flex-wrap items-center gap-2 rounded-xl border border-white/10 bg-[#090E1B]/80 p-1.5"
        >
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/20'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {category === 'All' ? 'All Work' : category}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group glass-surface flex flex-col overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 ${
                project.featuredWide && activeCategory === 'All'
                  ? 'md:col-span-2 lg:col-span-2'
                  : 'col-span-1'
              }`}
            >
              {/* Media Preview Frame */}
              <button
                type="button"
                onClick={() => onOpenProject(project)}
                aria-label={`Preview ${project.title}`}
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#080D1A] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
              >
                <ResilientImage
                  src={project.imageUrl}
                  alt={`${project.title} — ${project.category}`}
                  fallbackTitle={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070D]/90 via-[#05070D]/20 to-transparent"
                />

                {/* Preview Action Overlay */}
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-medium text-blue-300">
                    {project.outcomeMetric}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#05070D]/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-colors group-hover:border-blue-400/50 group-hover:bg-blue-600/30 whitespace-nowrap shrink-0">
                    {project.previewType === 'video-reel' ? (
                      <>
                        <Play className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Play Reel</span>
                      </>
                    ) : project.previewType === 'before-after' ? (
                      <>
                        <SlidersHorizontal
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        <span>Compare Edit</span>
                      </>
                    ) : (
                      <>
                        <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Preview</span>
                      </>
                    )}
                  </span>
                </div>
              </button>

              {/* Card Copy & Unboxed Metadata */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="font-medium text-blue-300">
                      {project.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-xl font-semibold text-white">
                    <button
                      type="button"
                      onClick={() => onOpenProject(project)}
                      className="text-left transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:underline"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-3.5 text-xs text-slate-400">
                  {project.deliverables.join(' · ')}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
