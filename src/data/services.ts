export type ServiceIconKey =
  | 'globe'
  | 'smartphone'
  | 'layers'
  | 'receipt'
  | 'film'
  | 'palette'
  | 'trendingUp';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedOverview: string;
  icon: ServiceIconKey;
  subServices: string[];
  deliverables: string[];
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    number: '01.',
    title: 'Website Development',
    shortDescription:
      'High-converting corporate websites, custom e-commerce storefronts, and high-speed landing pages engineered for search visibility and responsive clarity.',
    detailedOverview:
      'We architect fast, responsive, SEO-ready web experiences tailored to convert visitors into customers—from bespoke company flagships to full-featured online stores.',
    icon: 'globe',
    featured: true,
    subServices: [
      'Business Websites',
      'Portfolio Websites',
      'E-commerce Websites',
      'Landing Page Development',
      'Custom Website Design',
    ],
    deliverables: [
      'Responsive desktop, tablet, and mobile layouts',
      'Technical SEO and OpenGraph social metadata',
      'Fast page load optimization and SSL-ready setup',
      'Contact forms, WhatsApp routing, and analytics hooks',
    ],
  },
  {
    id: 'web-mobile-app',
    number: '02.',
    title: 'Web & Mobile App Development',
    shortDescription:
      'Native-feel Android and iOS mobile apps paired with interactive cloud web applications built for daily customer engagement.',
    detailedOverview:
      'Whether launching a consumer mobile product or an enterprise web portal, we craft intuitive cross-platform applications backed by reliable APIs.',
    icon: 'smartphone',
    subServices: [
      'Android App Development',
      'iOS App Development',
      'Web Application Development',
      'Custom Mobile Applications',
    ],
    deliverables: [
      'Clean UI/UX flows optimized for touch and desktop',
      'Secure authentication and real-time data sync',
      'Play Store and App Store release preparation',
      'Modular codebase ready for future expansion',
    ],
  },
  {
    id: 'custom-software',
    number: '03.',
    title: 'Custom Software Solutions',
    shortDescription:
      'Tailored business management software, workflow automation pipelines, and custom CRM systems built around your exact operations.',
    detailedOverview:
      'Eliminate spreadsheet bottlenecks with purpose-built software that automates repetitive operations, centralizes customer pipelines, and gives leadership clear reporting.',
    icon: 'layers',
    subServices: [
      'Business Management Software',
      'Custom Software Development',
      'Automation Solutions',
      'CRM Solutions',
    ],
    deliverables: [
      'Role-based access dashboards and audit trails',
      'Automated lead tracking and task workflows',
      'Custom reporting exports (CSV / PDF)',
      'Dedicated onboarding and documentation',
    ],
  },
  {
    id: 'billing-pos',
    number: '04.',
    title: 'Smart Billing & POS Systems',
    shortDescription:
      'Fast point-of-sale billing software, real-time inventory control, GST-ready invoicing, and multi-counter store management.',
    detailedOverview:
      'Built for retail stores, cafes, pharmacies, and wholesalers—our Smart Billing & POS solutions keep checkout lines fast and stock counts accurate in real time.',
    icon: 'receipt',
    subServices: [
      'Billing Software',
      'POS Systems',
      'Inventory Management',
      'Business Management Solutions',
    ],
    deliverables: [
      'Barcode billing, thermal receipt & invoice printing',
      'Low-stock alerts, supplier logs, and SKU tracking',
      'Daily sales, tax, and profit margin summaries',
      'Multi-terminal support with staff permissions',
    ],
  },
  {
    id: 'video-editing',
    number: '05.',
    title: 'Video Editing',
    shortDescription:
      'High-retention Instagram Reels, YouTube edits, promotional commercials, and crisp motion graphics that capture attention immediately.',
    detailedOverview:
      'Our post-production studio transforms raw footage into sharp, story-driven video assets graded and paced for maximum audience retention across social and ad channels.',
    icon: 'film',
    subServices: [
      'Professional Video Editing',
      'Instagram Reels Editing',
      'YouTube Video Editing',
      'Promotional Videos',
      'Business Advertisement Videos',
      'Motion Graphics',
      'Social Media Video Content',
    ],
    deliverables: [
      'Dynamic pacing, sound design, and color grading',
      'Custom animated captions and motion callouts',
      'Multi-format exports (9:16 vertical, 16:9 widescreen)',
      'Hook-optimized edits for Reels, Shorts, and Ads',
    ],
  },
  {
    id: 'photo-graphic-design',
    number: '06.',
    title: 'Photo Editing & Graphic Design',
    shortDescription:
      'Commercial image retouching, background removal, cohesive logo identities, social media posters, and print-ready branding.',
    detailedOverview:
      'From crisp e-commerce product retouching to complete brand identity systems, we craft visual assets that build immediate trust across digital and physical touchpoints.',
    icon: 'palette',
    subServices: [
      'Professional Photo Editing',
      'Background Removal',
      'Image Retouching',
      'Social Media Posters',
      'Business Banners',
      'Logo Design',
      'Branding Materials',
      'Creative Promotional Designs',
    ],
    deliverables: [
      'Vector logo suites and brand color/type guidelines',
      'Studio product cutouts and high-res retouching',
      'Campaign poster templates and print banners',
      'Source files delivered alongside web-ready exports',
    ],
  },
  {
    id: 'digital-marketing',
    number: '07.',
    title: 'Digital Marketing',
    shortDescription:
      'Targeted Instagram and Facebook campaigns, Google Ads management, technical SEO, and full-funnel social media growth strategies.',
    detailedOverview:
      'We pair compelling creative assets with disciplined performance targeting—helping your business capture qualified leads, rank higher on search, and scale brand visibility.',
    icon: 'trendingUp',
    featured: true,
    subServices: [
      'Social Media Marketing',
      'Instagram Marketing',
      'Facebook Marketing',
      'Google Ads Campaigns',
      'SEO Optimization',
      'Brand Promotion',
      'Social Media Management',
      'Digital Advertising Strategies',
    ],
    deliverables: [
      'Audience research and paid ad funnel setup',
      'Monthly content calendar and reel/poster rollout',
      'On-page SEO and Google Search Console alignment',
      'Clear monthly reach, click, and lead reports',
    ],
  },
];
