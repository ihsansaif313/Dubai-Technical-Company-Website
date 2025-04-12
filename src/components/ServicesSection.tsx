import React from 'react';
import { AirVent, Hammer, Paintbrush, Construction, Building, Wrench, Recycle, Zap } from 'lucide-react';
import { getContent } from '../constants/content'; // Import the content getter
interface ServicesSectionProps {
  language: string;
}

// Define icons array outside the component as it's static
const serviceIcons = [
  <AirVent className="w-8 h-8" />, <Hammer className="w-8 h-8" />, <Construction className="w-8 h-8" />,
  <Paintbrush className="w-8 h-8" />, <Building className="w-8 h-8" />, <Zap className="w-8 h-8" />,
  <Wrench className="w-8 h-8" />, <Recycle className="w-8 h-8" />
];

const ServicesSection: React.FC<ServicesSectionProps> = ({
  language
}) => {
  const langContent = getContent(language); // Get content for the current language
  const text = langContent.services; // Use services specific content

  return <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {text.title}
          </h2>
          <p className="text-xl text-blue-600 mb-6">{text.subtitle}</p>
          <p className="max-w-2xl mx-auto text-gray-600">{text.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {text.services.map((service, index) => <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center text-blue-600 mb-4">
                {serviceIcons[index]} {/* Get icon by index */}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <a href="#contact" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                {text.cta} {/* Use CTA from centralized content */}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>)}
        </div>
        {/* Process section */}
        {/* Process section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {text.processTitle}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {text.processDescription}
            </p>
          </div>
          {/* Corrected structure: Only one wrapping div for the map */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            {text.processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/4 px-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {step.title}
                  </h4>
                  <p className="text-center text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < text.processSteps.length - 1 && (
                  <div className="hidden md:block w-full md:w-auto">
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div> {/* This was the missing closing tag */}
        </div>
      </div>
    </section>;
};
export default ServicesSection;
