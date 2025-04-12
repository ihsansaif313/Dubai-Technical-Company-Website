import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Mail, Tag, Share2 } from 'lucide-react';
import { blogContent } from '../constants/blogContent';

interface BlogPostPageProps {
  language: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ language }) => {
  const { id } = useParams();
  const text = language === 'ar' ? blogContent.ar : blogContent.en;
  const blogPost = text.blogPosts.find(post => post.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = async (platform: string) => {
    if (!blogPost) return;
    const shareUrl = window.location.href;
    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({
          title: blogPost.title,
          text: blogPost.excerpt,
          url: shareUrl
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
      return;
    }
    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(blogPost.title)}&body=${encodeURIComponent(shareUrl)}`
    };
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank');
    }
  };

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {text.notFound.title}
          </h1>
          <p className="text-gray-600 mb-6">{text.notFound.message}</p>
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {text.notFound.button}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {text.backToBlog}
          </Link>
        </div>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="rounded-lg overflow-hidden mb-8">
            <img src={blogPost.image} alt={blogPost.title} className="w-full h-[400px] object-cover" />
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Tag className="w-4 h-4 mr-2" />
            <span>{text.categories[blogPost.category as keyof typeof text.categories]}</span>
            <span className="mx-2">•</span>
            <Calendar className="w-4 h-4 mr-2" />
            <span>{blogPost.date}</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-2" />
            <span>{blogPost.readTime} {text.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{blogPost.title}</h1>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mr-4">
              {blogPost.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-gray-800">{blogPost.author}</p>
              <div className="flex items-center text-sm text-gray-500">
                <User className="w-4 h-4 mr-1" />
                <span>Technical Expert</span>
              </div>
            </div>
          </div>
        </div>
        <div 
          className="max-w-4xl mx-auto prose lg:prose-lg mb-12" 
          dangerouslySetInnerHTML={{ __html: blogPost.content || '' }}
        />
        <div className="max-w-4xl mx-auto border-t border-b border-gray-200 py-8 mb-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{text.share}</h3>
          <div className="flex space-x-4">
            <button onClick={() => handleShare('facebook')} className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
            <button onClick={() => handleShare('twitter')} className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button onClick={() => handleShare('linkedin')} className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button onClick={() => handleShare('email')} className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
              <Mail className="w-5 h-5" />
            </button>
            {navigator.share && (
              <button onClick={() => handleShare('native')} className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
