
import React from 'react';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Restaurant Technology: AI and Automation",
      excerpt: "Discover how artificial intelligence and automation are transforming the restaurant industry, from order processing to customer service.",
      author: "BOUNTI Team",
      date: "2024-06-10",
      readTime: "5 min read",
      category: "Technology",
      image: "/lovable-uploads/a45d20c3-cd8e-46c9-9767-36fe6657b29a.png"
    },
    {
      id: 2,
      title: "Maximizing Revenue with Smart POS Analytics",
      excerpt: "Learn how advanced analytics from your POS system can help identify revenue opportunities and optimize your restaurant's performance.",
      author: "Restaurant Expert",
      date: "2024-06-08",
      readTime: "7 min read",
      category: "Analytics",
      image: "/lovable-uploads/2866bc59-3c38-4240-afac-d8c0a481be2c.png"
    },
    {
      id: 3,
      title: "Cloud Kitchen Success: Best Practices for 2024",
      excerpt: "Essential strategies for running a successful cloud kitchen operation, from menu optimization to delivery management.",
      author: "Cloud Kitchen Specialist",
      date: "2024-06-05",
      readTime: "6 min read",
      category: "Operations",
      image: "/lovable-uploads/1daf4833-cb41-4343-b7d4-4d63e9af7fd9.png"
    },
    {
      id: 4,
      title: "Customer Experience in the Digital Age",
      excerpt: "How modern restaurants are enhancing customer experience through technology, mobile apps, and personalized service.",
      author: "Customer Success Team",
      date: "2024-06-03",
      readTime: "4 min read",
      category: "Customer Experience",
      image: "/lovable-uploads/7cac0aae-c7a0-467c-af8a-7cb59ffda010.png"
    },
    {
      id: 5,
      title: "Inventory Management: Reducing Waste, Increasing Profit",
      excerpt: "Advanced techniques for managing restaurant inventory efficiently, reducing waste, and maximizing profitability.",
      author: "Operations Manager",
      date: "2024-06-01",
      readTime: "8 min read",
      category: "Management",
      image: "/lovable-uploads/5de71c65-bfe8-4281-9d0a-90be8a60a189.png"
    },
    {
      id: 6,
      title: "Multi-Location Restaurant Management Made Easy",
      excerpt: "Streamline operations across multiple restaurant locations with centralized management systems and standardized processes.",
      author: "Chain Restaurant Expert",
      date: "2024-05-28",
      readTime: "9 min read",
      category: "Scaling",
      image: "/lovable-uploads/8ae05009-ee34-40be-9650-0e3a84e37152.png"
    }
  ];

  const categories = ["All", "Technology", "Analytics", "Operations", "Customer Experience", "Management", "Scaling"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <motion.div 
        className="pt-24 pb-16 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 -left-20 w-96 h-96 bg-bounty-orange/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-bounty-orange bg-clip-text text-transparent">
              Restaurant Insights
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Stay updated with the latest trends, tips, and insights for restaurant success
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div 
            className="mb-12 flex flex-wrap gap-3 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-bounty-orange hover:bg-bounty-orange/90 text-white' 
                    : 'border-bounty-orange text-bounty-orange hover:bg-bounty-orange hover:text-white'
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-bounty-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-bounty-navy group-hover:text-bounty-orange transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-bounty-orange hover:text-bounty-orange/80 hover:bg-bounty-orange/10 p-0"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Blogs;
