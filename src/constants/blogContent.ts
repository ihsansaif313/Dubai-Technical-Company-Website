import { features } from "process";

export const blogContent = {
  en: {
    pageTitle: 'Our Blog',
    pageSubtitle: 'Insights, Tips & Industry News',
    searchPlaceholder: 'Search articles...',
    categories: {
      all: 'All Posts',
      hvac: 'HVAC',
      carpentry: 'Carpentry',
      safety: 'Safety',
      maintenance: 'Maintenance',
      industry: 'Industry News'
    },
    readMore: 'Read More',
    readTime: 'min read',
    featuredPost: 'Featured Post',
    latestPosts: 'Latest Articles',
    popularCategories: 'Popular Categories',
    subscribe: {
      title: 'Subscribe to Our Newsletter',
      subtitle: 'Get the latest updates and news delivered to your inbox.',
      placeholder: 'Your email address',
      button: 'Subscribe'
    },
    blogPosts: [{
      id: 1,
      title: 'Top 10 HVAC Maintenance Tips for Dubai Summer',
      excerpt: "Learn the essential maintenance practices to keep your HVAC system running efficiently during Dubai's extreme summer temperatures.",
      content: `<p>As temperatures soar in Dubai during summer, maintaining your HVAC system becomes crucial. In this article, we'll explore essential tips to keep your air conditioning running efficiently.</p>
      <h2>1. Regular Filter Cleaning</h2>
      <p>Cleaning or replacing air filters regularly is essential for maintaining air quality and system efficiency.</p>
      <h2>2. Check Outdoor Condensing Units</h2>
      <p>Ensure outdoor units are clean and free from debris and dust.</p>`,
      author: 'Ahmed Hassan',
      date: 'June 15, 2023',
      readTime: 8,
      category: 'hvac',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: false
    }, {
      id: 2,
      title: 'Safety Standards for Scaffolding in High-Rise Buildings',
      excerpt: "A comprehensive guide to safety regulations and best practices for scaffolding installations in Dubai's tall buildings.",
      content: '',
      author: 'Mohammed Al Falasi',
      date: 'May 28, 2023',
      readTime: 12,
      category: 'safety',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      featured: true
    }, {
      id: 3,
      title: 'Sustainable Carpentry: Eco-Friendly Materials for Modern Interiors',
      excerpt: 'Discover how sustainable wood and carpentry practices are reshaping interior design in the UAE.',
      content: '',
      author: 'Sarah Williams',
      date: 'April 10, 2023',
      readTime: 6,
      category: 'carpentry',
      image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }, {
      id: 4,
      title: 'New Building Regulations in Dubai: What Contractors Need to Know',
      excerpt: 'An analysis of the latest building code updates and how they affect technical service providers in Dubai.',
      content: '',
      author: 'Fatima Al Mansoori',
      date: 'March 22, 2023',
      readTime: 10,
      category: 'industry',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }, {
      id: 5,
      title: 'Preventive Maintenance Schedules for Commercial Properties',
      excerpt: 'How to develop and implement effective maintenance schedules for commercial buildings in the UAE.',
      content: '',
      author: 'John Roberts',
      date: 'February 14, 2023',
      readTime: 7,
      category: 'maintenance',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }, {
      id: 6,
      title: 'Energy-Efficient HVAC Solutions for Desert Climates',
      excerpt: "Innovative HVAC technologies designed specifically for the challenges of Dubai's desert environment.",
      content: '',
      author: 'Ahmed Hassan',
      date: 'January 30, 2023',
      readTime: 9,
      category: 'hvac',
      image: 'https://images.unsplash.com/photo-1471613082635-a03ae046aaec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }],
    notFound: {
      title: 'Blog Post Not Found',
      message: "The blog post you're looking for doesn't exist or has been removed.",
      button: 'Return to Blog'
    },
    backToBlog: 'Back to Blog',
    share: 'Share this article'
  },
  ar: {
    pageTitle: 'مدونتنا',
    pageSubtitle: 'رؤى تقنية، نصائح مهنية، وأخبار قطاع التشييد',
    searchPlaceholder: 'ابحث في المقالات...',
    categories: {
      all: 'جميع المقالات',
      hvac: 'أنظمة التكييف',
      carpentry: 'أعمال النجارة',
      safety: 'إجراءات السلامة',
      maintenance: 'الصيانة الدورية',
      industry: 'أخبار القطاع'
    },
    readMore: 'قراءة المزيد',
    readTime: 'دقيقة قراءة',
    featuredPost: 'المقال المميز',
    latestPosts: 'أحدث المنشورات',
    popularCategories: 'الأقسام الشائعة',
    subscribe: {
      title: 'اشترك في النشرة الإخبارية',
      subtitle: 'احصل على آخر التحديثات الفنية والأخبار المهمة مباشرة إلى بريدك.',
      placeholder: 'البريد الإلكتروني',
      button: 'اشتراك الآن'
    },
    blogPosts: [{
      id: 1,
      title: 'أهم 10 نصائح لصيانة أنظمة التكييف خلال صيف دبي',
      excerpt: "دليل شامل للصيانة الوقائية لأنظمة التبريد خلال درجات الحرارة القصوى في الإمارات.",
      content: `<p>مع ارتفاع درجات الحرارة في دبي خلال الصيف، تصبح صيانة أنظمة التكييف ضرورة قصوى. في هذه المقالة سنستعشر أفضل الممارسات الفنية للحفاظ على كفاءة أنظمة التبريد.</p>
      <h2>1. تنظيف الفلاتر بانتظام</h2>
      <p>يضمن التنظيف الدوري للفلاتر الحفاظ على جودة الهواء وكفاءة النظام.</p>
      <h2>2. فحص الوحدات الخارجية</h2>
      <p>التأكد من نظافة الوحدات الخارجية وإزالة أي عوالق أو أتربة.</p>`,
      author: 'أحمد حسن',
      date: '15 يونيو 2023',
      readTime: 8,
      category: 'hvac',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true
    }, {
      id: 2,
      title: 'معايير السلامة العالمية لتركيب السقالات في ناطحات السحاب',
      excerpt: "مراجعة شاملة للبروتوكولات الدولية لسلامة العمال في مشاريع التشييد المرتفعة بدبي.",
      content: '',
      author: 'محمد الفلاسي',
      date: '28 مايو 2023',
      readTime: 12,
      category: 'safety',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    }, {
      id: 3,
      title: 'النجارة المستدامة: مواد صديقة للبيئة في التصاميم الحديثة',
      excerpt: 'استكشاف أحدث تقنيات النجارة الخضراء وتطبيقاتها في المشاريع الإماراتية.',
      content: '',
      author: 'سارة وليامز',
      date: '10 أبريل 2023',
      readTime: 6,
      category: 'carpentry',
      image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }, {
      id: 4,
      title: 'تحديثات أنظمة البناء في دبي: دليل المقاولين',
      excerpt: 'تحليل مفصل لأحدث التعديلات في الكود الإنشائي وتأثيرها على مزودي الخدمات الفنية.',
      content: '',
      author: 'فاطمة المنصوري',
      date: '22 مارس 2023',
      readTime: 10,
      category: 'industry',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }, {
      id: 5,
      title: 'برامج الصيانة الوقائية للمباني التجارية',
      excerpt: 'استراتيجيات تطوير خطط صيانة فعالة للمرافق التجارية وفق المعايير الإماراتية.',
      content: '',
      author: 'جون روبرتس',
      date: '14 فبراير 2023',
      readTime: 7,
      category: 'maintenance',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }, {
      id: 6,
      title: 'حلول التكييف الموفرة للطاقة في المناخ الصحراوي',
      excerpt: 'ابتكارات تقنية في أنظمة التبريد المتكيفة مع التحديات المناخية في المنطقة.',
      content: '',
      author: 'أحمد حسن',
      date: '30 يناير 2023',
      readTime: 9,
      category: 'hvac',
      image: 'https://images.unsplash.com/photo-1471613082635-a03ae046aaec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }],
    notFound: {
      title: 'المقال غير موجود',
      message: "المقال الذي تبحث عنه غير متوفر أو تم إزالته.",
      button: 'العودة للمدونة'
    },
    backToBlog: 'العودة للمدونة',
    share: 'مشاركة المقال'
  }};