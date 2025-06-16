
import React from 'react';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import CategoryFilter from '@/components/blog/CategoryFilter';
import BlogGrid from '@/components/blog/BlogGrid';
import { blogPosts, categories } from '@/data/blogPosts';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-45">
        <BlogHero />
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <BlogGrid posts={filteredPosts} />
          </div>
        </section>
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Blogs;
