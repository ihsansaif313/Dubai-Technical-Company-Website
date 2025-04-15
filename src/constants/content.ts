import { AirVent, Hammer, Paintbrush, Construction, Building, Wrench, Recycle, Zap } from 'lucide-react';

// Define interfaces for better type safety (optional but recommended)
interface NavigationContent {
  services: string;
  portfolio: string;
  blog: string;
  gallery: string;
  contact: string;
  phone: string;
  email: string;
  languageToggle: string;
  home: string;
}

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface ServicesSectionContent {
  title: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
  cta: string;
  processTitle: string;
  processDescription: string;
  processSteps: ProcessStep[];
}

interface HeroSectionContent {
  headline: string;
  subheadline: string;
  cta: string;
  license: string;
  membership: string;
  companyName: string;
  viewProjects: string;
}

interface PortfolioFilter {
  all: string;
  hvac: string;
  carpentry: string;
  scaffolding: string;
  painting: string;
}

interface PortfolioProjectText {
  title: string;
  description: string;
}

interface PortfolioSectionContent {
  title: string;
  subtitle: string;
  description: string;
  filters: PortfolioFilter;
  projects: PortfolioProjectText[]; // Only text content
  viewDetails: string;
  caseStudy: string;
}

interface TestimonialText {
  text: string;
  author: string;
  company: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface TrustBadge {
  title: string;
  value: string;
}

interface TestimonialsSectionContent {
  title: string;
  subtitle: string;
  description: string;
  testimonials: TestimonialText[];
  stats: StatItem[];
  trustBadgesTitle: string;
  trustBadges: TrustBadge[];
}


interface LanguageContent {
  navigation: NavigationContent;
  services: ServicesSectionContent;
  hero: HeroSectionContent;
  portfolio: PortfolioSectionContent;
  testimonials: TestimonialsSectionContent;
  // Add other sections here...
}

export const content: { [key: string]: LanguageContent } = {
  en: {
    navigation: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      blog: 'Blog',
      gallery: 'Gallery', // Uncommented
      contact: 'Contact',
      phone: '+971-58-8892256',
      email: 'info@qasaralkamil.ae',
      languageToggle: 'عربي'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Technical Solutions for Dubai & UAE',
      description: 'Qasar Alkamil offers a complete range of technical services with certified expertise and adherence to Dubai standards.',
      services: [
        { title: 'HVAC Installation & Maintenance', description: 'Professional installation, repair and maintenance of heating, ventilation and air conditioning systems.', icon: 'AirVent' },
        { title: 'Carpentry Works', description: 'Custom carpentry solutions including furniture, fixtures, and architectural woodwork.', icon: 'Hammer' },
        { title: 'Scaffolding Services', description: 'Safe and reliable scaffolding systems for construction and maintenance projects.', icon: 'Construction' },
        { title: 'Painting Services', description: 'Interior and exterior painting with premium materials and expert application.', icon: 'Paintbrush' },
        { title: 'Plaster Works', description: 'Quality plastering services for walls, ceilings and decorative elements.', icon: 'Wrench' },
        { title: 'Electromechanical Maintenance', description: 'Comprehensive maintenance for electrical and mechanical systems.', icon: 'Zap' },
        { title: 'Maintenance Services', description: 'Regular and emergency maintenance services for residential and commercial properties.', icon: 'Wrench' },
        { title: 'Waste Disposal', description: 'Environmentally responsible construction waste management and disposal.', icon: 'Recycle' }
      ],
      cta: 'Request Service',
      processTitle: 'Our Work Process',
      processDescription: 'A streamlined and transparent workflow from consultation to completion',
      processSteps: [
        { title: 'Free Consultation', description: 'Comprehensive assessment of your needs and requirements' },
        { title: 'Planning & Design', description: 'Creating a detailed plan and project timeline' },
        { title: 'Implementation', description: 'Executing the project with skill and efficiency' },
        { title: 'Delivery & Support', description: 'Project handover with quality assurance and ongoing support' }
      ]
    },
    hero: {
      headline: "Dubai's Trusted Technical Services Partner",
      subheadline: 'Excellence in HVAC, Carpentry, Scaffolding & More',
      cta: 'Request a Quote',
      license: 'Dubai License #1486886',
      membership: 'DCCI Membership #604915',
      companyName: 'Qasar Alkamil Technical Services L.L.C',
      viewProjects: 'View Our Projects'
    },
    portfolio: {
      title: 'Our Projects',
      subtitle: 'See Our Quality Work in Action',
      description: 'Browse our portfolio of completed projects across various technical service categories.',
      filters: {
        all: 'All Projects',
        hvac: 'HVAC',
        carpentry: 'Carpentry',
        scaffolding: 'Scaffolding',
        painting: 'Painting'
      },
      projects: [
        { title: 'Dubai Hotel HVAC Installation', description: 'Complete HVAC system installation for a 5-star hotel in Dubai Marina.' },
        { title: 'Office Building Carpentry', description: 'Custom wooden fixtures and furniture for a corporate office in Business Bay.' },
        { title: 'Residential Tower Scaffolding', description: 'Safe scaffolding setup for a 40-floor residential tower maintenance project.' },
        { title: 'Villa Interior Painting', description: 'Complete interior painting for a luxury villa in Palm Jumeirah.' },
        { title: 'Commercial HVAC Maintenance', description: 'Preventive maintenance for mall HVAC systems in Dubai Festival City.' },
        { title: 'Restaurant Custom Woodwork', description: 'Custom wooden interiors and furniture for a fine dining restaurant.' }
      ],
      viewDetails: 'View Details',
      caseStudy: 'Case Study'
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'What Our Clients Say',
      description: 'Read testimonials from our satisfied clients across Dubai and the UAE.',
      testimonials: [
        { text: 'Qasar Alkamil transformed our office flooring and HVAC systems—their expertise is unmatched! The team was professional, punctual, and delivered exceptional quality.', author: 'Mohammed Al Falasi', company: 'Al Barsha Development Group' },
        { text: "We've worked with many technical service providers in Dubai, but none compare to Qasar Alkamil. Their carpentry work for our hotel lobby was flawless and completed ahead of schedule.", author: 'Sarah Williams', company: 'Marina Luxury Hotels' },
        { text: "The scaffolding services provided by Qasar Alkamil for our high-rise maintenance project were exceptional. Safety standards were impeccable, and the team's efficiency saved us valuable time.", author: 'Ahmed Hassan', company: 'Emirates Property Management' }
      ],
      stats: [
        { value: '250+', label: 'Projects Completed' },
        { value: '50+', label: 'Corporate Clients' },
        { value: '15+', label: 'Years Experience' },
        { value: '100%', label: 'Client Satisfaction' }
      ],
      trustBadgesTitle: 'Certifications & Licenses',
      trustBadges: [
        { title: 'Dubai License', value: '#1486886' },
        { title: 'DCCI Membership', value: '#604915' },
        { title: 'Quality Certification', value: 'ISO 9001' },
        { title: 'Safety Certification', value: 'OHSAS 18001' }
      ]
    }
  },
  ar: {
    navigation: {
      home: 'الرئيسية',
      services: 'الخدمات',
      portfolio: 'المشاريع',
      blog: 'المدونة',
      gallery: 'معرض الصور', // Uncommented
      contact: 'اتصل بنا',
      phone: '+971-58-8892256',
      email: 'info@qasaralkamil.ae',
      languageToggle: 'EN'
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول فنية شاملة لدبي والإمارات',
      description: 'تقدم قصر الكامل مجموعة كاملة من الخدمات الفنية بخبرة معتمدة والتزام بمعايير دبي.',
      services: [
        { title: 'تركيب وصيانة أنظمة التكييف', description: 'تركيب واصلاح وصيانة احترافية لأنظمة التدفئة والتهوية وتكييف الهواء.', icon: 'AirVent' },
        { title: 'أعمال النجارة', description: 'حلول نجارة مخصصة تشمل الأثاث والتركيبات والأعمال الخشبية المعمارية.', icon: 'Hammer' },
        { title: 'خدمات السقالات', description: 'أنظمة سقالات آمنة وموثوقة لمشاريع البناء والصيانة.', icon: 'Construction' },
        { title: 'خدمات الدهان', description: 'دهانات داخلية وخارجية بمواد متميزة وتطبيق خبير.', icon: 'Paintbrush' },
        { title: 'أعمال الجبس', description: 'خدمات تجصيص عالية الجودة للجدران والأسقف والعناصر الزخرفية.', icon: 'Wrench' },
        { title: 'صيانة كهروميكانيكية', description: 'صيانة شاملة للأنظمة الكهربائية والميكانيكية.', icon: 'Zap' },
        { title: 'خدمات الصيانة', description: 'خدمات صيانة منتظمة وطارئة للعقارات السكنية والتجارية.', icon: 'Wrench' },
        { title: 'التخلص من النفايات', description: 'إدارة والتخلص من نفايات البناء بطريقة مسؤولة بيئياً.', icon: 'Recycle' }
      ],
      cta: 'طلب خدمة',
      processTitle: 'عملية العمل الخاصة بنا',
      processDescription: 'عملية عمل مبسطة وشفافة من الاستشارة إلى الإكمال',
      processSteps: [
        { title: 'استشارة مجانية', description: 'تقييم شامل لاحتياجاتك ومتطلباتك' },
        { title: 'تخطيط وتصميم', description: 'إنشاء خطة مفصلة وجدول زمني للمشروع' },
        { title: 'التنفيذ', description: 'تنفيذ المشروع بمهارة وكفاءة' },
        { title: 'التسليم والدعم', description: 'تسليم المشروع مع ضمان الجودة والدعم المستمر' }
      ]
    },
    hero: {
      headline: 'شريك الخدمات الفنية الموثوق به في دبي',
      subheadline: 'التميز في التكييف، النجارة، السقالات والمزيد',
      cta: 'طلب عرض سعر',
      license: 'رخصة دبي #1486886',
      membership: 'عضوية غرفة دبي #604915',
      companyName: 'شركة قصر الكامل للخدمات الفنية ش.ذ.م.م',
        viewProjects: 'عرض المشاريع'
    },
    portfolio: {
      title: 'مشاريعنا',
      subtitle: 'شاهد أعمالنا النوعية',
      description: 'استعرض مشاريعنا المكتملة عبر مختلف فئات الخدمات الفنية.',
      filters: {
        all: 'جميع المشاريع',
        hvac: 'تكييف',
        carpentry: 'نجارة',
        scaffolding: 'سقالات',
        painting: 'دهان'
      },
      projects: [
        { title: 'تركيب تكييف فندق دبي', description: 'تركيب نظام تكييف كامل لفندق 5 نجوم في دبي مارينا.' },
        { title: 'نجارة مبنى مكتبي', description: 'تركيبات خشبية مخصصة وأثاث لمكتب شركة في بيزنس باي.' },
        { title: 'سقالات برج سكني', description: 'إعداد سقالات آمنة لمشروع صيانة برج سكني مكون من 40 طابق.' },
        { title: 'دهان داخلي فيلا', description: 'دهان داخلي كامل لفي لا فاخرة في نخلة جميرا.' },
        { title: 'صيانة تكييف تجاري', description: 'صيانة وقائية لأنظمة تكييف في دبي فيستيفال سيتي.' },
        { title: 'أعمال خشبية مطعم', description: 'ديكورات داخلية خشبية مخصصة وأثاث لمطعم فاخر.' }
      ],
      viewDetails: 'عرض التفاصيل',
      caseStudy: 'دراسة حالة'
    },
    testimonials: {
      title: 'شهادات العملاء',
      subtitle: 'ما يقوله عملاؤنا',
      description: 'اقرأ شهادات من عملائنا الراضين عبر دبي والإمارات.',
      testimonials: [
        { text: 'غيرت قصر الكامل أرضيات مكتبنا وأنظمة التكييف لدينا—خبرتهم لا مثيل لها! كان الفريق محترفًا، دقيق المواعيد، وقدم جودة استثنائية.', author: 'محمد الفلاسي', company: 'مجموعة الفلاسي العقارية' },
        { text: "لقد عملنا مع العديد من مقدمي الخدمات الفنية في دبي، ولكن لا أحد يقارن بقصر الكامل. كان عملهم في ديكور lobby فندقنا خالي من الأخطاء وتم إنجازه قبل الموعد المحدد.", author: 'سارة ويليامز', company: 'فنادق مارينا الفاخرة' },
        { text: "كانت خدمات السقالات التي قدمتها قصر الكامل لمشروع صيانة المباني الشاهقة لدينا استثنائية. كانت معايير السلامة لا تشوبها شائبة، وكفاءة الفريق وفرت لنا وقتًا ثمينًا.", author: 'أحمد حسن', company: 'إدارة العقارات الإماراتية' }
      ],
      stats: [
        { value: '250+', label: 'مشاريع مكتملة' },
        { value: '50+', label: 'عملاء شركات' },
        { value: '15+', label: 'سنوات خبرة' },
        { value: '100%', label: 'رضا العملاء' }
      ],
      trustBadgesTitle: 'الشهادات والتراخيص',
      trustBadges: [
        { title: 'رخصة دبي', value: '#1486886' },
        { title: 'عضوية غرفة دبي', value: '#604915' },
        { title: 'شهادة الجودة', value: 'ISO 9001' },
        { title: 'شهادة السلامة', value: 'OHSAS 18001' }
      ]
    }
  }
};

export function getContent(language: string): LanguageContent {
  return content[language] || content['en']; // Default to English if language not found
}
