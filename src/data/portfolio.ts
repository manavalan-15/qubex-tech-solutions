export type PortfolioCategory =
  | 'All'
  | 'Website Development'
  | 'Mobile Apps'
  | 'Video Editing'
  | 'Photo Editing'
  | 'Graphic Design'
  | 'Digital Marketing';

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All',
  'Website Development',
  'Mobile Apps',
  'Video Editing',
  'Photo Editing',
  'Graphic Design',
  'Digital Marketing',
];

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  client: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  outcomeMetric: string;
  imageUrl: string;
  previewType: 'image' | 'video-reel' | 'before-after' | 'campaign';
  deliverables: string[];
  videoSpec?: {
    duration: string;
    aspect: string;
    fps: string;
    accentColor: string;
    scenes: string[];
  };
  campaignMetrics?: {
    label: string;
    value: string;
  }[];
  featuredWide?: boolean;
}

/**
 * SAMPLE / DEMO PORTFOLIO PROJECTS
 * ---------------------------------------------------------------------------
 * Easily replace these demo entries with your real client projects:
 * 1. Drop your project screenshots/thumbnails into `/src/assets/images/`
 * 2. Update `imageUrl`, `title`, `client`, `shortDescription`, and `deliverables`
 * 3. Keep `category` matching one of the 6 portfolio categories.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'velox-commerce-web',
    title: 'Aether Commerce & Analytics Flagship',
    category: 'Website Development',
    client: 'Aether Retail Group',
    year: '2026',
    shortDescription:
      'Custom B2B & D2C e-commerce web platform featuring live inventory filtering, instant checkout, and an executive sales dashboard.',
    fullDescription:
      'Designed and engineered a high-speed storefront and operations portal from the ground up. Focused on sub-second navigation, responsive product showcases, and automated order notifications.',
    outcomeMetric: '+148% Online Conversion Rate in 90 Days',
    imageUrl: '/src/assets/images/portfolio_web_platform_1794559151314.jpg',
    previewType: 'image',
    deliverables: [
      'Custom React Storefront',
      'Executive Analytics Dashboard',
      'Technical SEO Architecture',
    ],
    featuredWide: true,
  },
  {
    id: 'velox-pos-mobile',
    title: 'Velox Smart POS & Companion App',
    category: 'Mobile Apps',
    client: 'Velox Hospitality & Retail',
    year: '2026',
    shortDescription:
      'Cross-platform tablet POS terminal and iOS/Android manager app with real-time order sync, receipt printing, and stock alerts.',
    fullDescription:
      'Built an end-to-end Smart Billing & Mobile Companion suite allowing floor staff to process rapid checkouts while owners monitor live branch revenue from anywhere.',
    outcomeMetric: '42% Faster Counter Checkout Time',
    imageUrl: '/src/assets/images/portfolio_mobile_pos_1794559152127.jpg',
    previewType: 'image',
    deliverables: [
      'iOS & Android Manager App',
      'Tablet POS Interface',
      'Inventory Sync Engine',
    ],
  },
  {
    id: 'kinetic-launch-reel',
    title: 'Pulse Hardware Commercial & Reels Pack',
    category: 'Video Editing',
    client: 'Pulse Audio Labs',
    year: '2026',
    shortDescription:
      'High-retention 60-second product launch film paired with kinetic 9:16 Instagram Reels, sound design, and color grading.',
    fullDescription:
      'Edited and graded a multi-platform launch campaign featuring beat-synced macro transitions, clean 3D title callouts, and custom sound effects designed for immediate social scroll-stopping impact.',
    outcomeMetric: '410K+ Organic Reel Views in 3 Weeks',
    imageUrl: '/src/assets/images/portfolio_video_studio_1794559152728.jpg',
    previewType: 'video-reel',
    deliverables: [
      '4K Product Launch Commercial',
      '6x Vertical Instagram Reels',
      'Motion Graphics & Color Grade',
    ],
    videoSpec: {
      duration: '00:45',
      aspect: '16:9 & 9:16',
      fps: '60 FPS',
      accentColor: '#3B82F6',
      scenes: [
        '00:00 — Kinetic Hook & Macro Reveal',
        '00:12 — Feature Typography Callouts',
        '00:26 — Color-Graded Studio Montage',
        '00:38 — End-Card Call to Action',
      ],
    },
  },
  {
    id: 'studio-product-retouch',
    title: 'Obsidian Tech Studio Photo Retouching',
    category: 'Photo Editing',
    client: 'Krono Devices',
    year: '2026',
    shortDescription:
      'Precision background removal, specular lighting cleanup, and commercial color calibration for an entire hardware catalog.',
    fullDescription:
      'Transformed raw studio captures into crisp, uniform commercial product photography with clean shadows, dust/scratch removal, and balanced metallic reflections for web and print ads.',
    outcomeMetric: '120+ Catalog Assets Delivered in 5 Days',
    imageUrl: '/src/assets/images/portfolio_web_platform_1794559151314.jpg',
    previewType: 'before-after',
    deliverables: [
      'Background Isolation',
      'Specular & Surface Retouching',
      'E-Commerce & Ad Exports',
    ],
  },
  {
    id: 'nexus-brand-identity',
    title: 'Nexus Strategies Visual Identity & Print',
    category: 'Graphic Design',
    client: 'Nexus Advisory',
    year: '2026',
    shortDescription:
      'Complete brand identity system including geometric logo mark, matte packaging, stationery suite, and social campaign posters.',
    fullDescription:
      'Developed an authoritative, futuristic visual language built around precision geometric linework, high-contrast dark surfaces, and electric blue-to-violet gradient accents.',
    outcomeMetric: 'Unified Brand System Across 14 Touchpoints',
    imageUrl: '/src/assets/images/portfolio_brand_design_1794559152930.jpg',
    previewType: 'image',
    deliverables: [
      'Logo & Geometric Grid',
      'Packaging & Stationery',
      'Social Media Poster Templates',
    ],
  },
  {
    id: 'apex-growth-campaign',
    title: 'Omnichannel Meta & Google Ads Funnel',
    category: 'Digital Marketing',
    client: 'Apex Urban Fitness',
    year: '2026',
    shortDescription:
      'Full-funnel Instagram, Facebook, and Google Search ad campaign combined with landing page optimization and monthly SEO.',
    fullDescription:
      'Structured audience segmentation, retargeting video creatives, and high-intent Google Search keyword campaigns to turn local ad spend into predictable qualified inquiries.',
    outcomeMetric: '3.8x Return on Ad Spend · 620+ Leads',
    imageUrl: '/src/assets/images/hero_qubex_studio_1794559151413.jpg',
    previewType: 'campaign',
    deliverables: [
      'Instagram & Facebook Ad Creatives',
      'Google Ads Search Campaigns',
      'On-Page SEO & Tracking',
    ],
    campaignMetrics: [
      { label: 'ROAS Achieved', value: '3.8x' },
      { label: 'Qualified Leads', value: '620+' },
      { label: 'Cost Per Lead Drop', value: '-34%' },
      { label: 'Campaign Duration', value: '12 Wks' },
    ],
  },
];
