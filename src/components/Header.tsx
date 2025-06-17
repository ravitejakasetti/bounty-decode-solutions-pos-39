
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import DemoModal from './DemoModal';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [{
    text: 'Home',
    path: '/'
  }, {
    text: 'About',
    path: '/about'
  }, {
    text: 'Services',
    path: '/services'
  }, {
    text: 'Pricing',
    path: '/pricing'
  }, {
    text: 'Blogs',
    path: '/blogs'
  }, {
    text: 'Contact',
    path: '/contact'
  }];

  const isActive = (path: string) => location.pathname === path;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className={`relative rounded-2xl transition-all duration-500 overflow-hidden ${
            isScrolled 
              ? 'bg-transparent backdrop-blur-xl shadow-2xl border border-white/20' 
              : 'shadow-2xl border border-white/30'
          }`}>
            {/* Left side - lighter background for logo */}
            <div className={`absolute inset-0 transition-all duration-500 ${
              isScrolled
                ? 'bg-gradient-to-r from-white/15 via-white/10 to-[#03265c]/90'
                : 'bg-gradient-to-r from-white/95 via-white/70 to-[#03265c]/95'
            }`} />
            
            {/* Additional overlay for enhanced right-side darkness */}
            <div className={`absolute inset-0 transition-all duration-700 ${
              isScrolled
                ? 'bg-gradient-to-r from-transparent from-50% to-[#03265c]/95'
                : 'bg-gradient-to-r from-transparent from-50% to-[#03265c]/100'
            }`} />
            
            <div className="relative flex justify-between items-center px-6 py-4 backdrop-blur-sm">
              <Link to="/" onClick={scrollToTop}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img 
                    src="/lovable-uploads/309dfa71-bb72-4c85-9e37-44630e6897e0.png" 
                    alt="BOUNTI Software" 
                    className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl filter brightness-110"
                  />
                </motion.div>
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredItem(link.path)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    <Link 
                      to={link.path} 
                      onClick={scrollToTop}
                      className={`relative font-semibold text-base transition-all duration-300 drop-shadow-sm text-white hover:text-[#ff7009] ${
                        isActive(link.path) ? 'text-[#ff7009]' : ''
                      }`}
                    >
                      <motion.span
                        whileHover={{ y: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {link.text}
                      </motion.span>
                      
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#ff7009] shadow-sm"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: isActive(link.path) ? '100%' : hoveredItem === link.path ? '100%' : 0 
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Enhanced Book Demo Button with Dynamic Match & Move Transitions */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0, x: 100, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    x: 0,
                    opacity: 1,
                    transition: { 
                      type: "spring", 
                      stiffness: 150, 
                      damping: 12,
                      delay: 0.5,
                      duration: 1.2
                    }
                  }}
                  whileHover={{ 
                    scale: [1, 1.1, 1.05],
                    y: [0, -8, -4],
                    rotateX: [0, 15, 8],
                    rotateY: [0, -10, -5],
                    transition: { 
                      duration: 0.6,
                      ease: "easeInOut"
                    }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    rotateX: 5,
                    transition: { duration: 0.1 }
                  }}
                >
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)} 
                    className="relative overflow-hidden bg-gradient-to-r from-[#ff7009] via-[#ff8533] to-[#ff7009] hover:from-[#ff8533] hover:via-[#ff7009] hover:to-[#ff8533] text-white border-none shadow-2xl font-bold px-8 py-3 rounded-full transition-all duration-500 transform hover:shadow-orange-500/60 backdrop-blur-sm"
                    style={{
                      backgroundSize: '300% 100%',
                      animation: 'gradient-shift 4s ease infinite',
                      boxShadow: '0 0 30px rgba(255, 112, 9, 0.6), 0 0 60px rgba(255, 112, 9, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    {/* Dynamic Match & Move Background Wave */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                      initial={{ x: '-120%', scaleX: 0.8 }}
                      animate={{ 
                        x: ['120%', '-120%'],
                        scaleX: [0.8, 1.2, 0.8],
                        skewX: [0, 20, -20, 0]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 0.5
                      }}
                    />
                    
                    {/* Text with Dynamic Match & Move Animation */}
                    <motion.span
                      className="relative z-10"
                      initial={{ opacity: 0, y: 20, x: -10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        x: 0,
                        transition: { delay: 0.8, duration: 0.6 }
                      }}
                      whileHover={{
                        y: [0, -6, 0],
                        x: [0, 3, -3, 0],
                        scale: [1, 1.05, 1],
                        transition: { 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      Book Demo
                    </motion.span>
                    
                    {/* Multiple Dynamic Ripple Effects */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white/50"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ 
                        scale: [0.9, 1.4, 0.9],
                        opacity: [0, 0.7, 0],
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                    
                    <motion.div
                      className="absolute inset-0 rounded-full border border-orange-300/40"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ 
                        scale: [1.1, 1.8, 1.1],
                        opacity: [0, 0.5, 0],
                        rotate: [360, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    />

                    {/* Enhanced Floating Energy Particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-white/70 rounded-full"
                        style={{
                          left: `${15 + i * 10}%`,
                          top: `${10 + (i % 3) * 30}%`
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          y: [0, -25, 0],
                          x: [0, Math.sin(i) * 15, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 2.5 + i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2 + 1
                        }}
                      />
                    ))}

                    {/* Pulse Border Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
                      }}
                      initial={{ rotate: 0, scale: 1 }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </Button>
                </motion.div>
              </nav>

              {/* Mobile Menu Button */}
              <motion.button 
                className="md:hidden z-20 relative p-2 text-white drop-shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.div 
              className="mt-2 mx-4 bg-gradient-to-r from-[#03265c]/95 to-[#03265c]/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={link.path} 
                      className={`block text-white hover:text-[#ff7009] transition-colors duration-300 font-semibold text-lg py-2 px-4 rounded-lg hover:bg-white/10 ${
                        isActive(link.path) ? 'text-[#ff7009] bg-white/10' : ''
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        scrollToTop();
                      }}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2"
                >
                  <Button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDemoModalOpen(true);
                    }} 
                    className="w-full bg-gradient-to-r from-[#ff7009] to-[#ff8533] hover:from-[#ff8533] hover:to-[#ff7009] text-white border-none shadow-md font-semibold py-3 rounded-full transition-all duration-300"
                  >
                    Book Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>;
};

export default Header;
