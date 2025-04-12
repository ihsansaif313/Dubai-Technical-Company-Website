import React from 'react';
import { Star, Quote } from 'lucide-react';
interface TestimonialsSectionProps {
  language: string;
}
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  language
}) => {
  const content = {
    en: {
      title: 'Client Testimonials',
      subtitle: 'What Our Clients Say',
      description: 'Read testimonials from our satisfied clients across Dubai and the UAE.',
      testimonials: [{
        id: 1,
        text: 'Qasar Alkamil transformed our office flooring and HVAC systems—their expertise is unmatched! The team was professional, punctual, and delivered exceptional quality.',
        author: 'Mohammed Al Falasi',
        company: 'Al Barsha Development Group',
        rating: 5
      }, {
        id: 2,
        text: "We've worked with many technical service providers in Dubai, but none compare to Qasar Alkamil. Their carpentry work for our hotel lobby was flawless and completed ahead of schedule.",
        author: 'Sarah Williams',
        company: 'Marina Luxury Hotels',
        rating: 5
      }, {
        id: 3,
        text: "The scaffolding services provided by Qasar Alkamil for our high-rise maintenance project were exceptional. Safety standards were impeccable, and the team's efficiency saved us valuable time.",
        author: 'Ahmed Hassan',
        company: 'Emirates Property Management',
        rating: 5
      }],
      stats: [{
        value: '250+',
        label: 'Projects Completed'
      }, {
        value: '50+',
        label: 'Corporate Clients'
      }, {
        value: '15+',
        label: 'Years Experience'
      }, {
        value: '100%',
        label: 'Client Satisfaction'
      }]
    },
    ar: {
      title: 'شهادات العملاء',
      subtitle: 'ماذا يقول عملاؤنا',
      description: 'اقرأ شهادات من عملائنا الراضين في جميع أنحاء دبي والإمارات.',
      testimonials: [{
        id: 1,
        text: 'قامت قصر الكامل بتحويل أرضيات مكتبنا وأنظمة التكييف - خبرتهم لا مثيل لها! كان الفريق محترفًا ودقيقًا وقدم جودة استثنائية.',
        author: 'محمد الفلاسي',
        company: 'مجموعة البرشاء للتطوير',
        rating: 5
      }, {
        id: 2,
        text: 'لقد عملنا مع العديد من مزودي الخدمات الفنية في دبي، لكن لا أحد يقارن بقصر الكامل. كانت أعمال النجارة لردهة الفندق الخاص بنا مثالية واكتملت قبل الموعد المحدد.',
        author: 'سارة وليامز',
        company: 'فنادق المارينا الفاخرة',
        rating: 5
      }, {
        id: 3,
        text: 'كانت خدمات السقالات التي قدمتها قصر الكامل لمشروع صيانة ناطحات السحاب الخاص بنا استثنائية. كانت معايير السلامة لا تشوبها شائبة، وكفاءة الفريق وفرت لنا وقتًا ثمينًا.',
        author: 'أحمد حسن',
        company: 'إدارة العقارات الإماراتية',
        rating: 5
      }],
      stats: [{
        value: '+250',
        label: 'مشروع منجز'
      }, {
        value: '+50',
        label: 'عميل شركة'
      }, {
        value: '+15',
        label: 'سنوات خبرة'
      }, {
        value: '100%',
        label: 'رضا العملاء'
      }]
    }
  };
  const text = language === 'ar' ? content.ar : content.en;
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {text.title}
          </h2>
          <p className="text-xl text-blue-600 mb-6">{text.subtitle}</p>
          <p className="max-w-2xl mx-auto text-gray-600">{text.description}</p>
        </div>
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {text.testimonials.map(testimonial => <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-8 relative">
              <Quote className="w-12 h-12 text-blue-100 absolute top-4 right-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-6 relative z-10">
                {testimonial.text}
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>)}
        </div>
        {/* Stats */}
        <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {text.stats.map((stat, index) => <div key={index} className={`p-8 text-center ${index < text.stats.length - 1 ? 'border-r border-blue-600' : ''}`}>
                <p className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-blue-100">{stat.label}</p>
              </div>)}
          </div>
        </div>
        {/* Trust badges */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              {language === 'ar' ? 'شهادات وتراخيص' : 'Certifications & Licenses'}
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-blue-600 font-bold text-xl mb-2">
                {language === 'ar' ? 'رخصة دبي' : 'Dubai License'}
              </div>
              <div className="text-2xl font-bold text-gray-800">#1486886</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-blue-600 font-bold text-xl mb-2">
                {language === 'ar' ? 'عضوية غرفة دبي' : 'DCCI Membership'}
              </div>
              <div className="text-2xl font-bold text-gray-800">#604915</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-blue-600 font-bold text-xl mb-2">
                {language === 'ar' ? 'شهادة الجودة' : 'Quality Certification'}
              </div>
              <div className="text-2xl font-bold text-gray-800">ISO 9001</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-blue-600 font-bold text-xl mb-2">
                {language === 'ar' ? 'شهادة السلامة' : 'Safety Certification'}
              </div>
              <div className="text-2xl font-bold text-gray-800">
                OHSAS 18001
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;