import React from 'react';
import { ChevronRight } from 'lucide-react';
import { getContent } from '../constants/content'; // Import the content getter
interface HeroSectionProps {
  language: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  language
}) => {
  const langContent = getContent(language); // Get content for the current language
  const text = langContent.hero; // Use hero specific content

  return <section className="relative w-full h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}></div>
      </div>
      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      {/* Hero content */}
      {/* Hero content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <div className="max-w-3xl">
          <div className="inline-block bg-blue-600 text-white px-4 py-1 mb-4 text-sm font-medium">
            {text.companyName}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {text.headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {text.subheadline}
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors flex items-center">
              {text.cta}
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#portfolio" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-md text-lg font-medium transition-colors">
              {text.viewProjects}
            </a>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md">
              <p className="text-white text-sm">{text.license}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md">
              <p className="text-white text-sm">{text.membership}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white/20 backdrop-blur-sm p-2 w-10 h-10 ring-1 ring-white/20 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>;
};
export default HeroSection;
