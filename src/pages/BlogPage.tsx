import React, { useState } from 'react';
import { Search, Tag, Calendar, User, Clock, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogContent } from '../constants/blogContent';

interface BlogPageProps {
  language: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  image: string;
  featured?: boolean;
}

const BlogPage: React.FC<BlogPageProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const text = language === 'ar' ? blogContent.ar : blogContent.en;
  
  const filteredPosts = text.blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = text.blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {text.pageTitle}
            </h1>
            <p className="text-gray-600 mb-8">
              {text.pageSubtitle}
            </p>
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder={text.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Featured Post - Compact Design */}
        {featuredPost && (
          <article className="mb-12 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-square md:aspect-[4/3]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.src = '/images/placeholder.jpg')}
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm shadow-sm">
                  {text.featuredPost}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                      <Tag className="w-4 h-4 mr-2" />
                      {text.categories[featuredPost.category as keyof typeof text.categories]}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {featuredPost.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-600">{featuredPost.author}</span>
                  </div>
                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    {text.readMore}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Category Filters */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm sticky top-2 z-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(text.categories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-xs shadow-sm">
                  {text.categories[post.category as keyof typeof text.categories]}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1.5 text-gray-400" />
                  <span>{post.date}</span>
                  <span className="mx-1">·</span>
                  <Clock className="w-4 h-4 mr-1.5 text-gray-400" />
                  <span>{post.readTime} {text.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-3 text-sm mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-12 text-center">
          <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {text.subscribe.title}
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
            {text.subscribe.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={text.subscribe.placeholder}
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              {text.subscribe.button}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;