import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
interface FooterProps {
  language: string;
}
const Footer: React.FC<FooterProps> = ({
  language
}) => {
  const content = {
    en: {
      about: {
        title: 'About Us',
        text: 'Qasar Alkamil Technical Services L.L.C is a leading provider of technical services in Dubai, specializing in HVAC, carpentry, scaffolding, and more with a commitment to quality and excellence.'
      },
      quickLinks: {
        title: 'Quick Links',
        links: [{
          name: 'Services',
          url: '#services'
        }, {
          name: 'Projects',
          url: '#portfolio'
        }, {
          name: 'Gallery',
          url: '#gallery'
        }, {
          name: 'Blog',
          url: '#blog'
        }, {
          name: 'Contact',
          url: '#contact'
        }]
      },
      services: {
        title: 'Our Services',
        links: [{
          name: 'HVAC Installation',
          url: '#services'
        }, {
          name: 'Carpentry Works',
          url: '#services'
        }, {
          name: 'Scaffolding',
          url: '#services'
        }, {
          name: 'Painting Services',
          url: '#services'
        }, {
          name: 'Maintenance',
          url: '#services'
        }]
      },
      contact: {
        title: 'Contact Info',
        address: 'NAEMA HAMAD ABDULLA BLDG, Dubai, UAE',
        phone: '+971-58-8892256',
        email: 'info@qasaralkamil.ae'
      },
      copyright: '© 2025 Qasar Alkamil Technical Services L.L.C. All rights reserved.',
      license: 'Dubai License #1486886 | DCCI Membership #604915'
    },
    ar: {
      about: {
        title: 'عن الشركة',
        text: 'قصر الكامل للخدمات الفنية ذ.م.م هي شركة رائدة في مجال الخدمات الفنية في دبي، متخصصة في التكييف والنجارة والسقالات والمزيد مع الالتزام بالجودة والتميز.'
      },
      quickLinks: {
        title: 'روابط سريعة',
        links: [{
          name: 'الخدمات',
          url: '#services'
        }, {
          name: 'المشاريع',
          url: '#portfolio'
        }, {
          name: 'معرض الصور',
          url: '#gallery'
        }, {
          name: 'المدونة',
          url: '#blog'
        }, {
          name: 'اتصل بنا',
          url: '#contact'
        }]
      },
      services: {
        title: 'خدماتنا',
        links: [{
          name: 'تركيب التكييف',
          url: '#services'
        }, {
          name: 'أعمال النجارة',
          url: '#services'
        }, {
          name: 'السقالات',
          url: '#services'
        }, {
          name: 'خدمات الدهان',
          url: '#services'
        }, {
          name: 'الصيانة',
          url: '#services'
        }]
      },
      contact: {
        title: 'معلومات الاتصال',
        address: 'بناية نعيمة حمد عبدالله، دبي، الإمارات العربية المتحدة',
        phone: '+971-58-8892256',
        email: 'info@qasaralkamil.ae'
      },
      copyright: '© 2025 قصر الكامل للخدمات الفنية ذ.م.م. جميع الحقوق محفوظة.',
      license: 'رخصة دبي #1486886 | عضوية غرفة دبي #604915'
    }
  };
  const text = language === 'ar' ? content.ar : content.en;
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6">{text.about.title}</h3>
            <div className="mb-6">
              <div className="text-2xl font-bold text-blue-400 mb-2">
                {language === 'ar' ? 'قصر الكامل' : 'Qasar Alkamil'}
              </div>
              <div className="text-sm text-gray-400 mb-2">
                {language === 'ar' ? 'للخدمات الفنية ذ.م.م' : 'Technical Services L.L.C'}
              </div>
            </div>
            <p className="text-gray-400 mb-6">{text.about.text}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{text.quickLinks.title}</h3>
            <ul className="space-y-3">
              {text.quickLinks.links.map((link, index) => <li key={index}>
                  <a href={link.url} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">{text.services.title}</h3>
            <ul className="space-y-3">
              {text.services.links.map((link, index) => <li key={index}>
                  <a href={link.url} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">{text.contact.title}</h3>
            <ul className="space-y-4">
              <li className="flex group">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {text.contact.address}
                </span>
              </li>
              <li className="flex group">
                <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {text.contact.phone}
                </span>
              </li>
              <li className="flex group">
                <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {text.contact.email}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
            {text.copyright}
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            {text.license}
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;