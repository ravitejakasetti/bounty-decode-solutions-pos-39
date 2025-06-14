
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import DemoModal from './DemoModal';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const heroImages = [
    "/lovable-uploads/08aca9cb-94b0-49aa-9103-aea92484b5c5.png", 
    "/lovable-uploads/1e80177e-b81f-44ee-90c5-029e71834d38.png", 
    "/lovable-uploads/988dc8cb-e5f0-49d5-ad61-03845891e0f9.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  return <>
      <section id="home" className="min-h-screen pt-20 gradient-primary text-white relative overflow-hidden">
        {/* Dynamic background layers */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,112,9,0.3) 0%, rgba(3,38,92,0.8) 50%, rgba(0,0,0,0.9) 100%)`
          }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: `conic-gradient(from ${Date.now() / 100}deg at 50% 50%, transparent 0deg, rgba(255,112,9,0.1) 90deg, transparent 180deg, rgba(3,38,92,0.2) 270deg, transparent 360deg)`
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Enhanced animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, idx) => {
            const size = Math.random() * 80 + 20;
            const initialX = Math.random() * 100;
            const initialY = Math.random() * 100;
            const animationDelay = Math.random() * 10;
            const animationDuration = Math.random() * 20 + 15;
            
            return (
              <motion.div 
                key={idx} 
                className="absolute rounded-full z-0"
                style={{
                  width: size,
                  height: size,
                  left: `${initialX}%`,
                  top: `${initialY}%`,
                  background: idx % 3 === 0 
                    ? 'radial-gradient(circle, rgba(255,112,9,0.3) 0%, transparent 70%)'
                    : idx % 3 === 1
                    ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(3,38,92,0.4) 0%, transparent 70%)',
                  filter: 'blur(1px)'
                }}
                animate={{
                  y: [0, -Math.random() * 200 - 100],
                  x: [0, (Math.random() - 0.5) * 100],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.2, 0.3],
                  rotate: [0, Math.random() * 360]
                }}
                transition={{
                  repeat: Infinity,
                  duration: animationDuration,
                  delay: animationDelay,
                  ease: "easeOut"
                }}
              />
            );
          })}
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" variants={itemVariants}>
                <motion.span 
                  className="block"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(255,112,9,0.8)",
                    filter: "drop-shadow(0 5px 15px rgba(255,112,9,0.4))"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-bounty-orange">P</span>erformance
                </motion.span>
                <motion.span 
                  className="block"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(255,112,9,0.8)",
                    filter: "drop-shadow(0 5px 15px rgba(255,112,9,0.4))"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-bounty-orange">O</span>ptimize
                </motion.span>
                <motion.span 
                  className="block"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(255,112,9,0.8)",
                    filter: "drop-shadow(0 5px 15px rgba(255,112,9,0.4))"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-bounty-orange">S</span>ales.
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 leading-relaxed" 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  filter: "drop-shadow(0 2px 10px rgba(255,255,255,0.2))"
                }}
              >
                Step into the new era of restaurant management. BOUNTI, a specialized solution by Decode Solutions, empowers you with intelligent automation, dynamic customer engagement, and data-driven strategies to significantly boost your revenue and streamline operations.
              </motion.p>
              
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <motion.div
                  whileHover={{ 
                    scale: 1.08,
                    filter: "brightness(1.2) drop-shadow(0 10px 30px rgba(255,112,9,0.5))"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)} 
                    size="lg" 
                    className="bg-gradient-to-r from-bounty-orange via-yellow-500 to-bounty-orange hover:from-bounty-orange/90 hover:via-yellow-500/90 hover:to-bounty-orange/90 text-white text-lg px-8 py-4 font-semibold group relative overflow-hidden shadow-2xl"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.span 
                      className="inline-block relative z-10"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Book Your Free BOUNTI Demo
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative" 
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="relative rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg mx-auto"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 2,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, rgba(255,112,9,0.8), rgba(255,255,0,0.6), rgba(255,112,9,0.8))',
                    padding: '3px'
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full bg-black rounded-2xl" />
                </motion.div>

                {heroImages.map((image, idx) => (
                  <motion.img 
                    key={idx} 
                    src={image} 
                    alt={`Restaurant billing system ${idx + 1}`} 
                    className="relative z-10 w-full h-full object-cover rounded-2xl"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                      opacity: idx === currentImage ? 1 : 0,
                      scale: idx === currentImage ? 1 : 1.1
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                      position: idx === currentImage ? 'relative' : 'absolute',
                      top: 0,
                      left: 0
                    }}
                  />
                ))}
                
                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 gap-3 bg-gradient-to-t from-black/90 to-transparent z-20">
                  {heroImages.map((_, idx) => (
                    <motion.button 
                      key={idx} 
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentImage ? 'bg-bounty-orange shadow-lg' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentImage(idx)}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg" 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
              >
                <div className="bg-bounty-navy text-white p-3 rounded-lg relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-bounty-orange/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative z-10">
                    <div className="font-bold text-sm mb-1">Average Results:</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ scale: 1.1, x: 2 }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                        <span>+35% Sales</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ scale: 1.1, x: 2 }}
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
                        <span>-28% Waste</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ scale: 1.1, x: 2 }}
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                        <span>+42% Retention</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ scale: 1.1, x: 2 }}
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-1"></div>
                        <span>+65% Efficiency</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-sm text-white/90 bg-bounty-navy/80 px-4 py-2 rounded-full backdrop-blur-lg" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(3,38,92,0.5)"
            }}
          >
            <span>Powered by</span>
            <motion.img 
              src="/lovable-uploads/2cb91fc4-f3da-490c-aafb-fd931d028671.png" 
              alt="Decode Solutions" 
              className="h-6 w-auto"
              whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
            />
          </motion.div>

          <motion.button 
            onClick={scrollToFeatures} 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition-colors group" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm mb-1 group-hover:drop-shadow-lg">Discover More</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <motion.div
                whileHover={{ 
                  filter: "drop-shadow(0 0 10px rgba(255,112,9,0.8))",
                  scale: 1.2
                }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.div>
          </motion.button>
        </div>
      </section>
      
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>;
};

export default HeroSection;
