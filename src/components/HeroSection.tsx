
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import DemoModal from './DemoModal';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section id="home" className="min-h-screen pt-20 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="text-yellow-300">O</span>ptimize.
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <span className="text-yellow-300">P</span>erformance.
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <span className="text-yellow-300">S</span>ales.
                </motion.span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Step into the new era of restaurant management. Bounty, a specialized solution by Decode Solutions, empowers you with intelligent automation, dynamic customer engagement, and data-driven strategies to significantly boost your revenue and streamline operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setIsDemoModalOpen(true)}
                  size="lg" 
                  className="bg-white text-bounty-navy hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
                >
                  Book Your Free Bounty Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-bounty-navy text-lg px-8 py-4"
                >
                  Watch Demo Video
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1609234656501-c5b5ae26d27f?auto=format&fit=crop&w=800&q=80" 
                alt="Indian Waiter Using POS System" 
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-2 rounded-xl shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-bounty-navy text-white p-2 rounded-lg">
                  <p className="font-bold text-sm">We increase your sales</p>
                  <p className="text-xs">We optimize your operation</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-sm text-white/90 bg-bounty-navy/80 px-3 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span>Powered by</span>
            <img 
              src="/lovable-uploads/2cb91fc4-f3da-490c-aafb-fd931d028671.png" 
              alt="Decode Solutions" 
              className="h-6 w-auto"
            />
          </motion.div>
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
