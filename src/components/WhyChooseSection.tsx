import {
  Award,
  Clock,
  Cpu,
  HeartHandshake,
  Lightbulb,
  Wallet,
} from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_ITEMS, WhyChooseItem } from '../data/company';

function renderWhyIcon(icon: WhyChooseItem['icon']) {
  switch (icon) {
    case 'lightbulb':
      return Lightbulb;
    case 'cpu':
      return Cpu;
    case 'award':
      return Award;
    case 'wallet':
      return Wallet;
    case 'clock':
      return Clock;
    case 'heartHandshake':
      return HeartHandshake;
  }
}

export function WhyChooseSection() {
  return (
    <section
      id="why-qubex"
      className="relative border-b border-white/10 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-400">
            Why Choose QUBEX?
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for Reliability, Creative Depth &amp; Real Business Value
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = renderWhyIcon(item.icon);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-surface rounded-2xl p-6 transition-colors duration-200 hover:border-blue-400/35"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
