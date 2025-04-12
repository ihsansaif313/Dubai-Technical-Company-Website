import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getContent } from '../constants/content';

interface GalleryPageProps {
  language: string;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ language }) => {
  const { gallery } = getContent(language);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Create category list with 'all' option
  const categories = [
    { id: 'all', title: language === 'en' ? 'All' : 'الكل' },
    ...gallery.categories
  ];

  // Filter projects based on selected category
  const filteredCategories = selectedCategory === 'all' 
    ? gallery.categories 
    : gallery.categories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-4">
              {gallery.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
              {gallery.subtitle}
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              {gallery.description}
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-16 flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                to={`/gallery/${category.id}`}
                className="group relative block overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-gray-200">
                  <img
                    src={category.coverImage}
                    alt={`${category.title} cover`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => (e.currentTarget.src = '/images/placeholder.jpg')}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2 drop-shadow-md">
                    {category.title}
                  </h2>
                  <p className="text-gray-200 line-clamp-2 mb-4">
                    {category.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-indigo-600/90">
                    {language === 'en' ? 'View Projects' : 'عرض المشاريع'}
                    <svg 
                      className={`ml-2 w-4 h-4 ${language === 'en' ? 'rotate-0' : 'rotate-180'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-24">
              <p className="text-gray-500 text-xl">
                {language === 'en' 
                  ? 'No projects available in this category'
                  : 'لا توجد مشاريع متاحة في هذه الفئة'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;