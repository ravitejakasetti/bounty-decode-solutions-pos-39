
import React from 'react';
import Header from '@/components/Header';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.div 
        className="pt-45 pb-16 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white relative overflow-hidden"
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
          
          {/* Floating Price Elements */}
          <motion.div 
            className="absolute top-1/3 left-1/4 w-20 h-20 bg-white/5 rounded-full flex items-center justify-center"
            animate={{ 
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-bounty-orange font-bold">₹</span>
          </motion.div>
          <motion.div 
            className="absolute top-2/3 right-1/3 w-16 h-16 bg-bounty-orange/10 rounded-full flex items-center justify-center"
            animate={{ 
              y: [10, -10, 10],
              opacity: [0.2, 0.5, 0.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white text-xs">POS</span>
          </motion.div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white/10 rounded-sm"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ 
                    duration: 3,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-bounty-orange bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Pricing Plans
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Choose the perfect plan for your restaurant's growth
            </motion.p>
          </motion.div>
          
          {/* Animated Statistics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { number: "Approached 500+", label: "Restaurants" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-bounty-orange mb-2"
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(255, 112, 9, 0.5)',
                      '0 0 20px rgba(255, 112, 9, 0.8)',
                      '0 0 10px rgba(255, 112, 9, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Pricing;
