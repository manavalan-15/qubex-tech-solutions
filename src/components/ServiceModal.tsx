import { useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { ServiceItem } from '../data/services';
import { getServiceIcon } from './ServicesSection';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestService: (serviceTitle: string) => void;
}

export function ServiceModal({
  service,
  onClose,
  onRequestService,
}: ServiceModalProps) {
  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  const Icon = getServiceIcon(service.icon);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="glass-surface-elevated relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/15 text-blue-400">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <span className="font-mono text-xs text-blue-400 tabular-nums">
                {service.number} Service Capability
              </span>
              <h3
                id="service-modal-title"
                className="font-display text-2xl font-bold text-white"
              >
                {service.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-slate-200 sm:text-base">
          {service.detailedOverview}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Included Capabilities
            </h4>
            <ul className="mt-3 space-y-2.5">
              {service.subServices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Key Deliverables
            </h4>
            <ul className="mt-3 space-y-2.5">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-purple-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[42px] rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white whitespace-nowrap shrink-0"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onRequestService(service.title);
              onClose();
            }}
            className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-transform hover:scale-[1.02] whitespace-nowrap shrink-0"
          >
            <span>Request This Service</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
