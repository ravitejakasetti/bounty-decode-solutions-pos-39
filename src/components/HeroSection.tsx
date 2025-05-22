
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import DemoModal from './DemoModal';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [logoScale, setLogoScale] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section id="home" className="min-h-screen pt-20 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Centered Logo Animation */}
          <div className="flex justify-center mb-12">
            <motion.div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="/lovable-uploads/55367eb8-b6a6-4733-b171-addeb903f8aa.png" 
                alt="Bounty Software" 
                className="h-32 w-auto"
                whileHover={{ rotate: 5 }}
              />
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-sm text-white/90 bg-bounty-navy/80 px-3 py-1 rounded-full"
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
            </motion.div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Unlock Exponential Growth. 
                <span className="block text-yellow-300">Maximize Sales.</span>
                <span className="block">Revolutionize Your Restaurant</span>
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
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80" 
                alt="Indian Restaurant Staff Using POS" 
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-2 rounded-xl shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1606893995103-40abc0f3f82a?auto=format&fit=crop&w=300&q=80" 
                  alt="POS Software Interface" 
                  className="w-32 h-32 rounded-lg object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
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
