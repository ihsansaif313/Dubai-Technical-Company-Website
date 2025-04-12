import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryContent } from '../constants/galleryContent';
import { ArrowLeft } from 'lucide-react';

interface GalleryCategoryPageProps {
  language: string;
}

const GalleryCategoryPage: React.FC<GalleryCategoryPageProps> = ({ language }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const gallery = galleryContent[language] || galleryContent['en'];

  // Find the category based on the ID from the URL
  const category = gallery.categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Category Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The gallery category you are looking for does not exist.</p>
        <Link
          to="/gallery"
          className="inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          {language === 'en' ? 'Back to Gallery' : 'العودة إلى المعرض'} {/* Dynamic text */}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen"> {/* Added background */}
      <div className="container mx-auto px-4 py-20 md:py-24"> {/* Increased padding */}
        <Link
          to="/gallery"
          // Styled back link like a subtle button
          className="inline-flex items-center bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 mb-10 group transition-colors duration-200"
        >
          <ArrowLeft className={`h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 ${language === 'en' ? 'mr-2' : 'ml-2'}`} /> {/* Adjusted margin for RTL */}
          {language === 'en' ? 'Back to Gallery Overview' : 'العودة إلى نظرة عامة على المعرض'}
        </Link>

        {/* Enhanced Title and Description Styling */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-5">{category.title}</h1>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">{category.description}</p>

        {/* Adjusted grid gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {category.images.map((image, index) => (
            // Enhanced Card Styling
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-56 sm:h-64 bg-gray-100 overflow-hidden"> {/* Added overflow-hidden */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" // Slightly larger scale on hover
                  onError={(e) => (e.currentTarget.src = '/images/placeholder.jpg')}
                />
                {/* Subtle overlay on hover */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Enhanced Text Area */}
              <div className="p-5 flex-grow">
                <p className="text-gray-700 text-sm">{image.description}</p>
              </div> {/* Corrected closing tag location */}
            </div>
          ))}
          {category.images.length === 0 && (
             <p className="text-center text-gray-500 col-span-full">
               {language === 'en' ? 'No images available in this category yet.' : 'لا توجد صور متاحة في هذه الفئة بعد.'} {/* Dynamic text */}
             </p>
          )}
        </div> {/* Correct closing tag for the grid div */}
      </div> {/* Correct closing tag for the container div */}
    </div> // Correct closing tag for the main div
  );
};

export default GalleryCategoryPage;
