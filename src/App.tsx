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
import { PortfolioModal } from './components/PortfolioModal';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ServiceModal } from './components/ServiceModal';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { PortfolioProject } from './data/portfolio';
import { ServiceItem } from './data/services';

export default function App() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(
    null,
  );
  const [contactService, setContactService] = useState('');
  const [contactNote, setContactNote] = useState('');

  const scrollToContactWithService = (
    serviceTitle: string,
    projectTitle?: string,
  ) => {
    setContactService(serviceTitle);
    if (projectTitle) {
      setContactNote(projectTitle);
    }
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
        <PortfolioSection onOpenProject={setActiveProject} />
        <WhyChooseSection />
        <ProcessSection />
        <ContactSection
          preselectedService={contactService}
          preselectedNote={contactNote}
        />
      </main>

      <Footer onSelectService={setActiveService} />

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
        onRequestService={(title) => scrollToContactWithService(title)}
      />

      <PortfolioModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquireSimilar={(category, title) => {
          const serviceMap: Record<string, string> = {
            'Website Development': 'Website Development',
            'Mobile Apps': 'Web & Mobile App Development',
            'Video Editing': 'Video Editing',
            'Photo Editing': 'Photo Editing & Graphic Design',
            'Graphic Design': 'Photo Editing & Graphic Design',
            'Digital Marketing': 'Digital Marketing',
          };
          scrollToContactWithService(
            serviceMap[category] || 'Website Development',
            title,
          );
        }}
      />
    </div>
  );
}
