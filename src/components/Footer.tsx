import { Instagram, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES, ServiceItem } from '../data/services';

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
}

const QUICK_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Creative Portfolio', href: '#portfolio' },
  { label: 'Why Choose QUBEX', href: '#why-qubex' },
  { label: 'Work Process', href: '#process' },
  { label: 'Contact Us', href: '#contact' },
];

export function Footer({ onSelectService }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#04060B]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a
              href="#top"
              className="inline-flex items-center gap-3.5 group"
            >
              <img
                src="/assets/aistudio/logo_a7957b67.jpeg"
                alt="QUBEX TECH SOLUTIONS logo"
                referrerPolicy="no-referrer"
                className="h-12 w-12 rounded-full object-cover ring-1 ring-blue-400/35 shrink-0"
              />
              <div>
                <span className="block font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-blue-300">
                  {COMPANY_INFO.name}
                </span>
                <span className="block text-xs font-medium text-blue-400">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {COMPANY_INFO.aboutSummary}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* All 7 Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="text-left transition-colors hover:text-blue-400"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">
              Contact Details
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-blue-400"
                >
                  <Phone className="h-4 w-4 text-blue-400" aria-hidden="true" />
                  <span className="font-mono tabular-nums">
                    {COMPANY_INFO.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-emerald-400"
                >
                  <MessageCircle
                    className="h-4 w-4 text-emerald-400"
                    aria-hidden="true"
                  />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-purple-400"
                >
                  <Instagram
                    className="h-4 w-4 text-purple-400"
                    aria-hidden="true"
                  />
                  <span>{COMPANY_INFO.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>Copyright &copy; 2026 {COMPANY_INFO.name}. All rights reserved.</p>
          <p>{COMPANY_INFO.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
