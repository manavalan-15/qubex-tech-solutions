import { motion } from 'motion/react';
import { ABOUT_PILLARS, COMPANY_INFO } from '../data/company';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-b border-white/10 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-medium text-blue-400">About Us</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Where Engineering Rigor Meets Studio Craft
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {COMPANY_INFO.aboutSummary}
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-blue-200">
              {COMPANY_INFO.missionStatement}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-sm text-slate-300">
              <div>
                <span className="block text-xs text-slate-400">Direct Line</span>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-mono font-medium text-white transition-colors hover:text-blue-400 tabular-nums"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="h-8 w-px bg-white/10" aria-hidden="true" />
              <div>
                <span className="block text-xs text-slate-400">Instagram</span>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition-colors hover:text-blue-400"
                >
                  {COMPANY_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Story / Mission / Vision / Goals Architectural Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {ABOUT_PILLARS.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-surface rounded-2xl p-6 transition-colors duration-200 hover:border-blue-400/35"
              >
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-sm font-medium text-blue-400 tabular-nums">
                    {pillar.number}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {pillar.summary}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
