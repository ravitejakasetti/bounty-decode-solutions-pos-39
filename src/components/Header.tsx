
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import DemoModal from './DemoModal';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transparency based on scroll position
  const getBackgroundOpacity = () => {
    const maxScroll = 500; // Adjust this value to control when it becomes fully transparent
    const opacity = Math.max(0.1, 1 - (scrollY / maxScroll));
    return opacity;
  };

  const navLinks = [{
    text: 'Home',
    path: '/'
  }, {
    text: 'Services',
    path: '/services'
  }, {
    text: 'Pricing',
    path: '/pricing'
  }];

  const isActive = (path: string) => location.pathname === path;

  const backgroundOpacity = getBackgroundOpacity();

  return <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div 
            className="relative rounded-2xl transition-all duration-500 border border-white/20"
            style={{
              background: `linear-gradient(to right, 
                rgba(0, 0, 0, ${backgroundOpacity * 0.9}) 0%, 
                rgba(3, 38, 92, ${backgroundOpacity * 0.95}) 50%, 
                rgba(3, 38, 92, ${backgroundOpacity}) 100%)`,
              backdropFilter: 'blur(20px)',
              boxShadow: `0 8px 32px rgba(0, 0, 0, ${backgroundOpacity * 0.3})`
            }}
          >
            <div className="flex justify-between items-center px-6 py-4">
              <Link to="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img 
                    src="/lovable-uploads/39a22824-d992-4235-a6e4-f4e01d73707a.png" 
                    alt="BOUNTI Software" 
                    className="h-12 md:h-14 w-auto object-contain"
                    style={{ filter: `brightness(${Math.max(0.7, backgroundOpacity)})` }}
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
                      className={`relative font-semibold text-base transition-all duration-300 hover:text-bounty-orange ${
                        isActive(link.path) ? 'text-bounty-orange' : ''
                      }`}
                      style={{ 
                        color: isActive(link.path) ? '#ff7009' : `rgba(255, 255, 255, ${Math.max(0.8, backgroundOpacity)})` 
                      }}
                    >
                      <motion.span
                        whileHover={{ y: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {link.text}
                      </motion.span>
                      
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-0.5 bg-bounty-orange rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: isActive(link.path) ? '100%' : hoveredItem === link.path ? '100%' : 0 
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)} 
                    className="bg-gradient-to-r from-bounty-orange to-yellow-500 hover:from-bounty-orange/90 hover:to-yellow-500/90 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6 py-2 rounded-full"
                    style={{ opacity: Math.max(0.9, backgroundOpacity) }}
                  >
                    Book Demo
                  </Button>
                </motion.div>
              </nav>

              {/* Mobile Menu Button */}
              <motion.button 
                className="md:hidden z-20 relative p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                whileTap={{ scale: 0.9 }}
                style={{ color: `rgba(255, 255, 255, ${Math.max(0.8, backgroundOpacity)})` }}
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
              className="mt-2 mx-4 rounded-2xl shadow-xl border border-white/20"
              style={{
                background: `linear-gradient(to right, 
                  rgba(0, 0, 0, 0.95) 0%, 
                  rgba(3, 38, 92, 0.95) 100%)`,
                backdropFilter: 'blur(20px)'
              }}
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
                      className={`block text-white hover:text-bounty-orange transition-colors duration-300 font-semibold text-lg py-2 px-4 rounded-lg hover:bg-white/10 ${
                        isActive(link.path) ? 'text-bounty-orange bg-white/10' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
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
                    className="w-full bg-gradient-to-r from-bounty-orange to-yellow-500 hover:from-bounty-orange/90 hover:to-yellow-500/90 text-white border-none shadow-md font-semibold py-3 rounded-full"
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
