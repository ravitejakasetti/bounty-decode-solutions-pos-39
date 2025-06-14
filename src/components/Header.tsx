
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
    text: 'Services',
    path: '/services'
  }, {
    text: 'Pricing',
    path: '/pricing'
  }];

  const isActive = (path: string) => location.pathname === path;

  return <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'} overflow-hidden`}>
        <div className="relative w-full">
          {/* Animated Background with Gradient */}
          <div className="absolute inset-0 flex">
            <motion.div 
              className="h-full bg-gradient-to-r from-white via-white to-white/95"
              initial={{ width: '50%' }}
              animate={{ 
                width: isScrolled ? '35%' : '50%',
              }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.div 
              className="h-full bg-gradient-to-r from-[#03265c] via-[#0a3d7a] to-[#03265c]"
              initial={{ width: '50%' }}
              animate={{ 
                width: isScrolled ? '65%' : '50%',
              }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
          
          {/* Dynamic Diagonal Separator with Glow Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute h-full w-24 transform -skew-x-12 shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, #03265c 0%, #0a3d7a 50%, #03265c 100%)',
                left: isScrolled ? '30%' : '45%',
                transition: 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: 'drop-shadow(0 0 20px rgba(3, 38, 92, 0.3))'
              }}
            />
            {/* Glowing edge effect */}
            <motion.div 
              className="absolute h-full w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent"
              style={{ 
                left: isScrolled ? '35%' : '50%',
                transition: 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: 'blur(1px)'
              }}
            />
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                  scale: 0 
                }}
                animate={{ 
                  x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                  y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-between items-center">
              <Link to="/">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
                  }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
                  className="relative"
                >
                  <img 
                    src="/lovable-uploads/39a22824-d992-4235-a6e4-f4e01d73707a.png" 
                    alt="BOUNTI Software" 
                    className="h-14 md:h-18 lg:h-20 w-auto object-contain drop-shadow-xl"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-bounty-orange/20 to-transparent rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredItem(link.path)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="relative"
                  >
                    <Link 
                      to={link.path} 
                      className={`relative text-white hover:text-bounty-orange transition-all duration-300 font-semibold text-lg group ${
                        isActive(link.path) ? 'text-bounty-orange' : ''
                      }`}
                    >
                      <motion.span
                        className="relative z-10"
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {link.text}
                      </motion.span>
                      
                      {/* Animated underline */}
                      <motion.span 
                        className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-bounty-orange to-yellow-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: isActive(link.path) ? '100%' : hoveredItem === link.path ? '100%' : 0 
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                      
                      {/* Glow effect on hover */}
                      <AnimatePresence>
                        {hoveredItem === link.path && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-bounty-orange/10 to-yellow-400/10 rounded-lg -m-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)} 
                    className="relative bg-gradient-to-r from-bounty-orange to-yellow-500 hover:from-bounty-orange/90 hover:to-yellow-500/90 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 py-3 rounded-full overflow-hidden"
                  >
                    <motion.span
                      className="relative z-10"
                      initial={{ x: 0 }}
                      whileHover={{ x: 2 }}
                    >
                      Book Demo
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
              </nav>

              {/* Enhanced Mobile Menu Button */}
              <motion.button 
                className="md:hidden text-white z-20 relative p-2" 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? 
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : 
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    }
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.div 
              className="relative z-10 bg-gradient-to-br from-[#03265c] via-[#0a3d7a] to-[#03265c]"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="container mx-auto px-4 py-8 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link 
                      to={link.path} 
                      className={`block text-white hover:text-bounty-orange transition-all duration-300 font-semibold text-lg py-2 px-4 rounded-lg hover:bg-white/10 ${
                        isActive(link.path) ? 'text-bounty-orange bg-white/5' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {link.text}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDemoModalOpen(true);
                    }} 
                    className="w-full bg-gradient-to-r from-bounty-orange to-yellow-500 hover:from-bounty-orange/90 hover:to-yellow-500/90 text-white border-none shadow-lg font-semibold py-4 rounded-full relative overflow-hidden"
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ scale: 1.05 }}
                    >
                      Book Demo
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
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
