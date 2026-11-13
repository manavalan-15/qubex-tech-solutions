import { ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/company';
import { ResilientImage } from './ResilientImage';

const HERO_HIGHLIGHTS = [
  {
    value: '07',
    label: 'Integrated Disciplines',
    detail: 'Software, Apps, POS, Video, Design & Marketing',
  },
  {
    value: '100%',
    label: 'Custom Architecture',
    detail: 'Tailored to your business workflows & brand voice',
  },
  {
    value: '24/7',
    label: 'Dedicated Support',
    detail: 'Continuous updates, optimization & maintenance',
  },
  {
    value: 'End-to-End',
    label: 'Unified Delivery',
    detail: 'One studio partner from concept to market launch',
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 pt-10 pb-14 lg:pt-16 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Hero Grid */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Carrier */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-sm font-medium tracking-wide text-blue-400">
              {COMPANY_INFO.name}
              <span className="mx-2 text-slate-600" aria-hidden="true">
                ·
              </span>
              <span className="text-slate-300">{COMPANY_INFO.tagline}</span>
            </p>

            <h1 className="mt-4 text-balance font-display text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white">
              Your Vision. Our Technology.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              From powerful websites and smart software to creative editing and
              digital marketing, we bring your ideas to life.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-150 hover:scale-[1.02] hover:from-blue-500 hover:to-purple-500 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-md transition-colors duration-150 hover:border-blue-400/40 hover:bg-white/10 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <MessageSquare className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>Let&apos;s Work Together</span>
              </a>
            </div>
          </motion.div>

          {/* Right Studio Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="glass-surface-elevated relative h-full min-h-[300px] overflow-hidden rounded-2xl p-2 sm:min-h-[380px] lg:min-h-[440px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <ResilientImage
                  src="/src/assets/images/hero_qubex_studio_1794559151413.jpg"
                  alt="QUBEX TECH SOLUTIONS futuristic digital studio and software engineering environment"
                  fallbackTitle="QUBEX Digital Studio"
                  className="h-full w-full object-cover lg:h-full"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070D]/85 via-[#05070D]/20 to-transparent"
                />
                <div className="absolute right-4 bottom-4 left-4 flex flex-wrap items-end justify-between gap-4 sm:right-6 sm:bottom-6 sm:left-6">
                  <div>
                    <p className="text-xs font-medium text-blue-300">
                      Creative Technology &amp; Digital Studio
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-white">
                      Engineering · Design · Media · Growth
                    </p>
                  </div>
                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#05070D]/75 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:border-blue-400/50 hover:bg-blue-600/20 whitespace-nowrap shrink-0"
                  >
                    <span>View Portfolio</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Proof & Capabilities Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {HERO_HIGHLIGHTS.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="font-mono text-2xl font-semibold tracking-tight text-white tabular-nums">
                {item.value}
              </div>
              <div className="font-display text-sm font-semibold text-blue-300">
                {item.label}
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
