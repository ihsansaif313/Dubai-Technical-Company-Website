interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}

interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: GalleryImage[];
}

interface GallerySectionContent {
  title: string;
  subtitle: string;
  description: string;
  categories: GalleryCategory[];
  viewCategory: string;
}

export const galleryContent: { [key: string]: GallerySectionContent } = {
  en: {
    title: 'Project Gallery',
    subtitle: 'Visual Showcase of Our Work',
    description: 'Explore images from our completed projects, categorized for easy viewing.',
    viewCategory: 'View Category',
    categories: [
      {
        id: 'hvac',
        title: 'HVAC Systems',
        description: 'Installations and maintenance of HVAC units.',
        coverImage: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'HVAC Installation 1', description: 'Central AC unit installation in a commercial building.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'HVAC Maintenance', description: 'Routine maintenance check on an industrial HVAC system.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Ductwork Installation', description: 'Installation of ventilation ductwork.' }
        ]
      },
      {
        id: 'carpentry',
        title: 'Carpentry Works',
        description: 'Custom furniture, fixtures, and woodwork.',
        coverImage: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Custom Bookshelf', description: 'Built-in bookshelf for a residential study.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Wooden Decking', description: 'Outdoor wooden decking installation.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Office Furniture', description: 'Custom office desks and cabinets.' }
        ]
      },
      {
        id: 'scaffolding',
        title: 'Scaffolding Services',
        description: 'Safe access solutions for construction.',
        coverImage: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'High-rise Scaffolding', description: 'Scaffolding structure on a high-rise building.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Industrial Scaffolding', description: 'Scaffolding for industrial maintenance access.' }
        ]
      },
      {
        id: 'painting',
        title: 'Painting Services',
        description: 'Interior and exterior painting projects.',
        coverImage: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Villa Exterior Painting', description: 'Exterior painting of a luxury villa.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Office Interior Painting', description: 'Interior painting for a modern office space.' }
        ]
      }
    ]
  },
  ar: {
    title: 'معرض المشاريع',
    subtitle: 'عرض مرئي لأعمالنا',
    description: 'استكشف صورًا من مشاريعنا المنجزة، مصنفة لسهولة المشاهدة.',
    viewCategory: 'عرض الفئة',
    categories: [
      {
        id: 'hvac',
        title: 'أنظمة التكييف',
        description: 'تركيب وصيانة وحدات التكييف.',
        coverImage: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'تركيب تكييف 1', description: 'تركيب وحدة تكييف مركزي في مبنى تجاري.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'صيانة تكييف', description: 'فحص صيانة روتيني لنظام تكييف صناعي.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'تركيب مجاري الهواء', description: 'تركيب مجاري هواء التهوية.' }
        ]
      },
      {
        id: 'carpentry',
        title: 'أعمال النجارة',
        description: 'أثاث وتركيبات وأعمال خشبية مخصصة.',
        coverImage: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'رف كتب مخصص', description: 'رف كتب مدمج لمكتبة منزلية.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'أرضيات خشبية', description: 'تركيب أرضيات خشبية خارجية.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'أثاث مكتبي', description: 'مكاتب وخزائن مكتبية مخصصة.' }
        ]
      },
      {
        id: 'scaffolding',
        title: 'خدمات السقالات',
        description: 'حلول وصول آمنة للبناء.',
        coverImage: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'سقالات شاهقة', description: 'هيكل سقالات على مبنى شاهق.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'سقالات صناعية', description: 'سقالات للوصول للصيانة الصناعية.' }
        ]
      },
      {
        id: 'painting',
        title: 'خدمات الدهان',
        description: 'مشاريع دهان داخلي وخارجي.',
        coverImage: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'دهان خارجي لفيلا', description: 'دهان خارجي لفيلا فاخرة.' },
          { src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'دهان داخلي لمكتب', description: 'دهان داخلي لمساحة مكتبية حديثة.' }
        ]
      }
    ]
  }
};
