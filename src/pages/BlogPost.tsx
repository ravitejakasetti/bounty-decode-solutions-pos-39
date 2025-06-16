
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-bounty-navy mb-4">Post not found</h1>
          <Link to="/blogs" className="text-bounty-orange hover:underline">
            Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        className="pt-45 pb-16 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Link 
              to="/blogs" 
              className="inline-flex items-center space-x-2 text-bounty-orange hover:text-white transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Blogs</span>
            </Link>
            
            <div className="mb-6">
              <span className="inline-block bg-bounty-orange/20 text-bounty-orange px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover"
              />
              
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
