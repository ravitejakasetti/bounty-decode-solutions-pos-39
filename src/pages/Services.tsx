
import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.div 
        className="pt-32 pb-16 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white relative overflow-hidden"
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
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute top-1/3 left-1/4 w-20 h-20 bg-white/5 rounded-full"
            animate={{ 
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-2/3 right-1/3 w-16 h-16 bg-bounty-orange/10 rounded-full"
            animate={{ 
              y: [10, -10, 10],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-bounty-orange bg-clip-text text-transparent">
              Our Services
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Comprehensive restaurant management solutions tailored for every business type and size
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
