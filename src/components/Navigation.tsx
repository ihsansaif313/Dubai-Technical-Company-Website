import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react'; // Removed ChevronDown as it wasn't used
import { useNavigate, useLocation } from 'react-router-dom'; // Removed Link as it wasn't used directly
import { getContent } from '../constants/content'; // Import the content getter
interface NavigationProps {
  language: string;
  setLanguage: (lang: string) => void;
  activePage: string;
  setActivePage: (page: string) => void;
}
const Navigation: React.FC<NavigationProps> = ({
  language,
  setLanguage,
  activePage,
  setActivePage
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const langContent = getContent(language); // Get content for the current language
  const text = langContent.navigation; // Use navigation specific content

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const handleNavClick = (page: string, path = '/') => {
    setActivePage(page);
    setIsMenuOpen(false);

    if (path.startsWith('/#')) {
      const id = path.substring(2); // Remove '/#'
      if (location.pathname === '/') {
        // Already on the home page, just scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Element with id '${id}' not found for scrolling.`);
        }
      } else {
        // Not on the home page, navigate to home page with hash
        // React Router should handle scrolling after navigation
        navigate(path); 
      }
    } else {
      // Handle navigation to other pages or root
      navigate(path);
      window.scrollTo(0, 0); // Scroll to top for non-hash links
    }
  };
  return <>
      <div className="bg-gray-800 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>{langContent.navigation.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>{langContent.navigation.email}</span>
            </div>
          </div>
          <div>
            <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="text-sm font-medium hover:text-blue-300 transition-colors">
              {langContent.navigation.languageToggle}
            </button>
          </div>
        </div>
      </div>
      <header className={`w-full ${isScrolled || activePage !== 'home' ? 'fixed top-0 shadow-md bg-white bg-opacity-95' : ''} z-50 transition-all duration-300`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-700 cursor-pointer" onClick={() => handleNavClick('home', '/')}>
                <span className="text-gray-800">Qasar Alkamil</span> Technical
                Services
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavClick('home', '/')} className={`${activePage === 'home' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 font-medium transition-colors`}>
                {langContent.navigation.home}
              </button>
              <button onClick={() => handleNavClick('services', '/#services')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {langContent.navigation.services}
              </button>
              <button onClick={() => handleNavClick('gallery', '/gallery')} className={`${activePage === 'gallery' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 font-medium transition-colors`}>
                {langContent.navigation.gallery}
              </button>
              <button onClick={() => handleNavClick('blog', '/blog')} className={`${activePage === 'blog' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 font-medium transition-colors`}>
                {langContent.navigation.blog}
              </button>
              <button onClick={() => handleNavClick('contact', '/#contact')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                {langContent.navigation.contact}
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {isMenuOpen && <div className="md:hidden mt-4 py-2 bg-white rounded-md shadow-lg">
              <div className="flex flex-col space-y-3 px-4 py-2">
                <button className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100 text-left" onClick={() => handleNavClick('home', '/')}>
                  {langContent.navigation.home}
                </button>
                <button className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100 text-left" onClick={() => handleNavClick('services', '/#services')}>
                  {langContent.navigation.services}
                </button>
                <button className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100 text-left" onClick={() => handleNavClick('gallery', '/gallery')}>
                  {langContent.navigation.gallery}
                </button>
                <button className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100 text-left" onClick={() => handleNavClick('blog', '/blog')}>
                  {langContent.navigation.blog}
                </button>
                <button className="text-gray-700 hover:text-blue-600 py-2 text-left" onClick={() => handleNavClick('contact', '/#contact')}>
                  {langContent.navigation.contact}
                </button>
                <div className="flex items-center justify-between py-2 border-t border-gray-100">
                  <button onClick={() => {
                setLanguage(language === 'en' ? 'ar' : 'en');
                setIsMenuOpen(false);
              }} className="text-sm font-medium text-blue-600">
                    {langContent.navigation.languageToggle}
                  </button>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    <span className="text-sm">{langContent.navigation.phone}</span>
                  </div>
                </div>
              </div>
            </div>}
        </nav>
      </header>
    </>;
};
export default Navigation;
