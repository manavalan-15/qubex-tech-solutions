import {
  ArrowUpRight,
  Film,
  Globe,
  Layers,
  Palette,
  Receipt,
  Smartphone,
  TrendingUp,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, ServiceIconKey, ServiceItem } from '../data/services';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export function getServiceIcon(key: ServiceIconKey) {
  switch (key) {
    case 'globe':
      return Globe;
    case 'smartphone':
      return Smartphone;
    case 'layers':
      return Layers;
    case 'receipt':
      return Receipt;
    case 'film':
      return Film;
    case 'palette':
      return Palette;
    case 'trendingUp':
      return TrendingUp;
  }
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="relative border-b border-white/10 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-400">Our Services</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Full-Spectrum Technology &amp; Creative Studio Capabilities
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-300">
            Select any discipline below to inspect deliverables, technical
            scope, and request a tailored project estimate.
          </p>
        </div>

        {/* Asymmetric 3-Column Bento Grid: 2 + 3 + 2 = 7 Services with zero orphan slots */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            const isWide = service.featured === true;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group glass-surface flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 sm:p-7 ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-400 transition-colors group-hover:border-blue-400/40 group-hover:text-blue-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs font-medium text-slate-400 tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {service.shortDescription}
                  </p>

                  {/* Clean unboxed sub-service summary with subtle typographic separators */}
                  <p className="mt-4 text-xs leading-relaxed text-slate-400">
                    {service.subServices.slice(0, isWide ? 5 : 4).join(' · ')}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-blue-400 transition-colors duration-150 hover:text-blue-300 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    <span>Explore More</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
