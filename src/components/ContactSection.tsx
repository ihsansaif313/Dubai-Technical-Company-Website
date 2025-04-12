import React, { lazy } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, FileText, Building } from 'lucide-react';
interface ContactSectionProps {
  language: string;
}
const ContactSection: React.FC<ContactSectionProps> = ({
  language
}) => {
  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in Touch',
      description: 'Contact our team for inquiries, quotes, or to discuss your project needs.',
      form: {
        name: 'Your Name',
        company: 'Company Name',
        email: 'Email Address',
        phone: 'Phone Number',
        service: 'Service Required',
        message: 'Your Message',
        submit: 'Send Message'
      },
      services: {
        hvac: 'HVAC Installation & Maintenance',
        carpentry: 'Carpentry Works',
        scaffolding: 'Scaffolding Services',
        painting: 'Painting Services',
        plaster: 'Plaster Works',
        electromechanical: 'Electromechanical Maintenance',
        maintenance: 'Maintenance Services',
        waste: 'Waste Disposal'
      },
      contact: {
        address: 'NAEMA HAMAD ABDULLA BLDG, Dubai, UAE',
        phone: '+971-58-8892256',
        email: 'info@qasaralkamil.ae',
        hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM'
      },
      cta: 'Need urgent assistance?',
      ctaButton: 'Call Now'
    },
    ar: {
      title: 'اتصل بنا',
      subtitle: 'تواصل معنا',
      description: 'اتصل بفريقنا للاستفسارات أو عروض الأسعار أو لمناقشة احتياجات مشروعك.',
      form: {
        name: 'اسمك',
        company: 'اسم الشركة',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        service: 'الخدمة المطلوبة',
        message: 'رسالتك',
        submit: 'إرسال الرسالة'
      },
      services: {
        hvac: 'تركيب وصيانة أنظمة التكييف',
        carpentry: 'أعمال النجارة',
        scaffolding: 'خدمات السقالات',
        painting: 'خدمات الدهان',
        plaster: 'أعمال الجبس',
        electromechanical: 'صيانة كهروميكانيكية',
        maintenance: 'خدمات الصيانة',
        waste: 'التخلص من النفايات'
      },
      contact: {
        address: 'بناية نعيمة حمد عبدالله، دبي، الإمارات العربية المتحدة',
        phone: '+971-58-8892256',
        email: 'info@qasaralkamil.ae',
        hours: 'الأحد - الخميس: 8:00 صباحًا - 6:00 مساءً'
      },
      cta: 'بحاجة إلى مساعدة عاجلة؟',
      ctaButton: 'اتصل الآن'
    }
  };
  const text = language === 'ar' ? content.ar : content.en;
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {text.title}
          </h2>
          <p className="text-xl text-blue-600 mb-6">{text.subtitle}</p>
          <p className="max-w-2xl mx-auto text-gray-600">{text.description}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact form */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    <User className="w-4 h-4 inline-block mr-2" />
                    {text.form.name}
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="company">
                    <Building className="w-4 h-4 inline-block mr-2" />
                    {text.form.company}
                  </label>
                  <input type="text" id="company" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    <Mail className="w-4 h-4 inline-block mr-2" />
                    {text.form.email}
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    <Phone className="w-4 h-4 inline-block mr-2" />
                    {text.form.phone}
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="service">
                  <FileText className="w-4 h-4 inline-block mr-2" />
                  {text.form.service}
                </label>
                <select id="service" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">
                    {language === 'ar' ? '-- اختر خدمة --' : '-- Select a service --'}
                  </option>
                  {Object.entries(text.services).map(([key, value]) => <option key={key} value={key}>
                      {value}
                    </option>)}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  <Send className="w-4 h-4 inline-block mr-2" />
                  {text.form.message}
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors font-medium">
                {text.form.submit}
              </button>
            </form>
          </div>
          {/* Contact information */}
          <div className="lg:w-1/3">
            <div className="bg-blue-700 text-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">
                {language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">
                      {language === 'ar' ? 'العنوان' : 'Address'}
                    </p>
                    <p>{text.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">
                      {language === 'ar' ? 'الهاتف' : 'Phone'}
                    </p>
                    <p>{text.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </p>
                    <p>{text.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">
                      {language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                    </p>
                    <p>{text.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 mb-8 overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8692261287313!2d55.30496491501116!3d25.235517883879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42f1b0a09609%3A0xb920613fb1e01c84!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1652334567890!5m2!1sen!2sus" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* CTA box */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <p className="text-gray-800 font-medium mb-4">{text.cta}</p>
              <a href={`tel:${text.contact.phone}`} className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors font-medium w-full">
                <Phone className="w-5 h-5 mr-2" />
                {text.ctaButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;