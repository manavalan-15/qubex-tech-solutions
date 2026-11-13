import { motion } from 'motion/react';
import { WORK_PROCESS_STEPS } from '../data/company';

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative border-b border-white/10 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-400">
              Our Work Process
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From Initial Discovery to Long-Term Growth
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-300">
            A structured six-step execution framework that keeps engineering,
            design, and marketing milestones transparent at every stage.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WORK_PROCESS_STEPS.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-surface relative flex flex-col justify-between rounded-2xl p-6 transition-colors duration-200 hover:border-purple-400/35"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs font-semibold tracking-wide text-blue-400 tabular-nums">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-slate-500 tabular-nums">
                    0{item.step} / 06
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
