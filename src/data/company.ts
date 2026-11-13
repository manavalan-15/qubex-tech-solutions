export const COMPANY_INFO = {
  name: 'QUBEX TECH SOLUTIONS',
  shortName: 'QUBEX',
  tagline: 'Innovating Your Digital Future.',
  phoneDisplay: '+91 9384754527',
  phoneHref: 'tel:+919384754527',
  whatsappNumber: '919384754527',
  whatsappUrl: 'https://wa.me/919384754527',
  instagramHandle: '@qubex.tech.solutions',
  instagramUrl: 'https://www.instagram.com/qubex.tech.solutions/',
  aboutSummary:
    'QUBEX TECH SOLUTIONS is a creative technology and digital solutions startup helping businesses build their online presence through innovative software development, creative designs, video editing, photo editing, and digital marketing.',
  missionStatement:
    'Our mission is to transform business ideas into powerful digital experiences.',
};

export interface AboutPillar {
  number: string;
  title: string;
  summary: string;
}

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    number: '01.',
    title: 'Our Story',
    summary:
      'Born at the intersection of software engineering and visual media craft, QUBEX TECH SOLUTIONS brings full-stack technology and creative studio execution together under one dedicated roof for ambitious startups and growing enterprises.',
  },
  {
    number: '02.',
    title: 'Our Mission',
    summary:
      'To transform business ideas into powerful digital experiences—combining resilient web platforms, smart automation software, high-retention video reels, and data-led digital marketing that produce measurable growth.',
  },
  {
    number: '03.',
    title: 'Our Vision',
    summary:
      'To become the trusted international creative technology partner for modern businesses seeking unified engineering, branding, and performance marketing without fragmented vendor overhead.',
  },
  {
    number: '04.',
    title: 'Our Goals',
    summary:
      'Deliver zero-compromise production quality, maintain transparent milestone delivery, build scalable systems tailored to each client workflow, and nurture long-term growth partnerships.',
  },
];

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: 'lightbulb' | 'cpu' | 'award' | 'wallet' | 'clock' | 'heartHandshake';
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'creative-ideas',
    title: 'Creative & Innovative Ideas',
    description:
      'Original visual direction and thoughtful digital product concepts crafted to set your brand apart in crowded markets.',
    icon: 'lightbulb',
  },
  {
    id: 'modern-tech',
    title: 'Modern Technology',
    description:
      'Built on fast, future-ready frameworks, cloud-native architectures, and modern creative post-production pipelines.',
    icon: 'cpu',
  },
  {
    id: 'pro-quality',
    title: 'Professional Quality',
    description:
      'Pixel-accurate interfaces, clean maintainable source code, and studio-grade video and design deliverables.',
    icon: 'award',
  },
  {
    id: 'affordable',
    title: 'Affordable Solutions',
    description:
      'Flexible, transparent project scopes engineered to deliver maximum return on investment for startups and SMEs.',
    icon: 'wallet',
  },
  {
    id: 'on-time',
    title: 'On-Time Delivery',
    description:
      'Structured sprint milestones and clear communication keep every launch predictable and right on schedule.',
    icon: 'clock',
  },
  {
    id: 'satisfaction',
    title: 'Customer Satisfaction',
    description:
      'Dedicated collaboration from first briefing through post-launch maintenance so every detail aligns with your goals.',
    icon: 'heartHandshake',
  },
];

export interface ProcessStep {
  step: number;
  label: string;
  title: string;
  description: string;
}

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    label: 'Step 1',
    title: 'Understand Your Requirements',
    description:
      'Deep-dive discovery call to map your business goals, target audience, workflows, and technical scope.',
  },
  {
    step: 2,
    label: 'Step 2',
    title: 'Planning & Creative Design',
    description:
      'System architecture, wireframes, brand visual direction, and storyboard blueprints approved before production.',
  },
  {
    step: 3,
    label: 'Step 3',
    title: 'Development & Production',
    description:
      'Clean full-stack engineering, software configuration, motion editing, graphic design, or campaign assembly.',
  },
  {
    step: 4,
    label: 'Step 4',
    title: 'Testing & Quality Check',
    description:
      'Cross-device responsiveness audits, performance tuning, billing accuracy checks, and creative frame reviews.',
  },
  {
    step: 5,
    label: 'Step 5',
    title: 'Final Delivery',
    description:
      'Smooth production deployment, domain and store launch, asset handover, and team onboarding walkthroughs.',
  },
  {
    step: 6,
    label: 'Step 6',
    title: 'Support & Maintenance',
    description:
      'Ongoing updates, security monitoring, campaign optimization, and rapid support as your business scales.',
  },
];
