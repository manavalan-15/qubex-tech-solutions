import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070D]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark + Official Logo */}
        <a
          href="#top"
          className="inline-flex items-center gap-3 font-display text-base font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md sm:text-lg"
        >
          <img
            src="/assets/aistudio/logo_a7957b67.jpeg"
            alt="QUBEX TECH SOLUTIONS logo"
            referrerPolicy="no-referrer"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-blue-400/35 shrink-0"
          />
          <span>{COMPANY_INFO.name}</span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-600/20 transition-transform duration-150 hover:scale-[1.02] hover:from-blue-500 hover:to-purple-500 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Start a Project
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#070B16]/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
