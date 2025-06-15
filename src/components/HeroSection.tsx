
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import DemoModal from './DemoModal';

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-bounty-orange/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-bounty-orange rounded-full"
            animate={{ 
              y: [-20, 20, -20],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-blue-400 rounded-full"
            animate={{ 
              y: [20, -20, 20],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-bounty-orange/20 border border-bounty-orange/30 rounded-full text-bounty-orange text-sm font-semibold mb-6">
                  #1 Restaurant Management Solution
                </span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Transform Your Restaurant with{' '}
                <motion.span 
                  className="bg-gradient-to-r from-bounty-orange to-orange-400 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Smart Billing
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Streamline operations, boost profits, and delight customers with our AI-powered restaurant management platform trusted by 500+ restaurants across India.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    onClick={() => setIsDemoModalOpen(true)}
                    className="bg-bounty-orange text-white hover:bg-bounty-orange/90 text-lg px-8 py-4 font-bold shadow-2xl hover:shadow-bounty-orange/25 transition-all duration-300"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 font-semibold backdrop-blur-sm"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-wrap items-center gap-8 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-300">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-bounty-orange" />
                  <span className="text-gray-300">500+ Restaurants</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">35% Revenue Boost</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image/Animation */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Main Dashboard Preview */}
              <motion.div 
                className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-bounty-orange rounded-full"></div>
                      <span className="font-semibold">BOUNTI Dashboard</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    >
                      <div className="text-2xl font-bold text-bounty-orange">₹45K</div>
                      <div className="text-sm text-gray-300">Today's Sales</div>
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <div className="text-2xl font-bold text-green-400">+23%</div>
                      <div className="text-sm text-gray-300">Growth</div>
                    </motion.div>
                  </div>

                  {/* Chart Representation */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-end gap-2 h-20">
                      {[40, 60, 30, 80, 50, 90, 70].map((height, i) => (
                        <motion.div
                          key={i}
                          className="bg-gradient-to-t from-bounty-orange to-orange-400 rounded-t flex-1"
                          style={{ height: `${height}%` }}
                          animate={{ height: [`${height}%`, `${height + 10}%`, `${height}%`] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-bounty-orange text-white px-3 py-1 rounded-full text-sm font-semibold"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Live Data
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  AI Powered
                </motion.div>
              </motion.div>

              {/* Floating UI Elements */}
              <motion.div 
                className="absolute -top-8 right-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [-2, 2, -2]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="text-sm font-semibold">Order #1234</div>
                <div className="text-xs text-gray-300">Table 5 - ₹850</div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 right-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [2, -2, 2]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <div className="text-sm font-semibold text-green-400">Payment Received</div>
                <div className="text-xs text-gray-300">UPI Success</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Average Results Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-12">Average Results with BOUNTI</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "35%", label: "Increase in Revenue", icon: "📈" },
                { number: "50%", label: "Reduction in Wait Time", icon: "⏱️" },
                { number: "25%", label: "Cost Savings", icon: "💰" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-bounty-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              d="M0,60 C240,0 480,120 720,60 C960,0 1200,120 1440,60 L1440,120 L0,120 Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </section>

      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
