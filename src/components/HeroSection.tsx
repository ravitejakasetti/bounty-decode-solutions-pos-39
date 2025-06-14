import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import DemoModal from './DemoModal';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "/lovable-uploads/08aca9cb-94b0-49aa-9103-aea92484b5c5.png",
    "/lovable-uploads/1e80177e-b81f-44ee-90c5-029e71834d38.png",
    "/lovable-uploads/988dc8cb-e5f0-49d5-ad61-03845891e0f9.png" // Updated with fourth image
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <section id="home" className="min-h-screen pt-20 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated particles/elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, idx) => (
            <motion.div
              key={idx}
              className="absolute rounded-full bg-white/20 z-0"
              style={{
                width: Math.random() * 60 + 10,
                height: Math.random() * 60 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* New BOUNTI Logo positioned at top center */}
        <motion.div 
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img 
            src="/lovable-uploads/ef161091-2f44-4374-96cb-68d564b5039f.png" 
            alt="BOUNTI Logo" 
            className="h-16 md:h-20 lg:h-24 w-auto"
          />
        </motion.div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="text-bounty-orange">P</span>erformance
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <span className="text-bounty-orange">O</span>ptimize
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <span className="text-bounty-orange">S</span>ales.
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                variants={itemVariants}
              >
                Step into the new era of restaurant management. BOUNTI, a specialized solution by Decode Solutions, empowers you with intelligent automation, dynamic customer engagement, and data-driven strategies to significantly boost your revenue and streamline operations.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Button 
                  onClick={() => setIsDemoModalOpen(true)}
                  size="lg" 
                  className="bg-bounty-orange text-white hover:bg-bounty-orange/90 text-lg px-8 py-4 font-semibold group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform">Book Your Free BOUNTI Demo</span>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg mx-auto">
                {heroImages.map((image, idx) => (
                  <motion.img 
                    key={idx}
                    src={image} 
                    alt={`Restaurant billing system ${idx + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: idx === currentImage ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: idx === currentImage ? 'relative' : 'absolute', top: 0, left: 0 }}
                  />
                ))}
                
                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 gap-2 bg-gradient-to-t from-black/70 to-transparent">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full ${idx === currentImage ? 'bg-white' : 'bg-white/50'}`}
                      onClick={() => setCurrentImage(idx)}
                    />
                  ))}
                </div>
              </div>

              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-bounty-navy text-white p-3 rounded-lg">
                  <div className="font-bold text-sm mb-1">Average Results:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                      <span>+35% Sales</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
                      <span>-28% Waste</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                      <span>+42% Retention</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-1"></div>
                      <span>+65% Efficiency</span>
                    </div>
                  </div>
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

          <motion.button
            onClick={scrollToFeatures}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm mb-1">Discover More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.button>
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
