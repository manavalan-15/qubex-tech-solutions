/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProcessSection } from './components/ProcessSection';
import { ServiceModal } from './components/ServiceModal';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ServiceItem } from './data/services';

export default function App() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [contactService, setContactService] = useState('');

  const scrollToContactWithService = (serviceTitle: string) => {
    setContactService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#05070D] text-slate-100">
      {/* Subtle Futuristic Ambient Gradient Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="ambient-mesh-primary absolute -top-48 -left-40 h-[540px] w-[540px] rounded-full bg-blue-600/18 blur-[140px]" />
        <div className="ambient-mesh-secondary absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-purple-600/16 blur-[150px]" />
        <div className="absolute right-1/4 -bottom-48 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectService={setActiveService} />
        <WhyChooseSection />
        <ProcessSection />
        <ContactSection preselectedService={contactService} />
      </main>

      <Footer onSelectService={setActiveService} />

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
        onRequestService={(title) => scrollToContactWithService(title)}
      />
    </div>
  );
}
