import React, { useState } from 'react';
import { getContent } from '../constants/content'; // Import the content getter
interface PortfolioSectionProps {
  language: string;
}

// Static project data (remains in component)
const projectsData = [
  { id: 1, category: 'hvac', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { id: 2, category: 'carpentry', image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { id: 3, category: 'scaffolding', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80' },
  { id: 4, category: 'painting', image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { id: 5, category: 'hvac', image: 'https://images.unsplash.com/photo-1471613082635-a03ae046aaec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { id: 6, category: 'carpentry', image: 'https://images.unsplash.com/photo-1604709177595-ee9c2580e9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' }
];

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  language
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const langContent = getContent(language); // Get content for the current language
  const text = langContent.portfolio; // Use portfolio specific content

  // Combine static data with language-specific text
  const combinedProjects = projectsData.map((project, index) => ({
    ...project,
    title: text.projects[index]?.title || '', // Get title from content.ts
    description: text.projects[index]?.description || '' // Get description from content.ts
  }));

  // Filter projects based on active filter
  const filteredProjects = combinedProjects.filter(project =>
    activeFilter === 'all' || project.category === activeFilter
  );

  return <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {text.title}
          </h2>
          <p className="text-xl text-blue-600 mb-6">{text.subtitle}</p>
          <p className="max-w-2xl mx-auto text-gray-600">{text.description}</p>
        </div>
        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(text.filters).map(([key, value]) => <button key={key} className={`px-6 py-2 rounded-full transition-colors ${activeFilter === key ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveFilter(key)}>
              {value}
            </button>)}
        </div>
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 w-full">
                    <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">
                      {text.filters[project.category as keyof typeof text.filters]} {/* Use filter text */}
                    </span>
                    <h3 className="text-white text-xl font-semibold">
                      {project.title} {/* Use combined title */}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title} {/* Use combined title */}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p> {/* Use combined description */}
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    {text.viewDetails} {/* Use viewDetails text */}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                  <span className="text-sm text-gray-500">
                    {text.caseStudy} {/* Use caseStudy text */}
                  </span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default PortfolioSection;
