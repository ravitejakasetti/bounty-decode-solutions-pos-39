
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
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className={`relative rounded-2xl transition-all duration-500 overflow-hidden ${
            isScrolled 
              ? 'bg-transparent backdrop-blur-xl shadow-2xl border border-white/20' 
              : 'shadow-2xl border border-white/30'
          }`}>
            {/* Dynamic gradient background */}
            <div className={`absolute inset-0 transition-all duration-500 ${
              isScrolled
                ? 'bg-gradient-to-r from-white/10 via-white/5 to-[#03265c]/30'
                : 'bg-gradient-to-r from-white/95 via-white/70 via-white/50 to-[#03265c]/90'
            }`} />
            
            {/* Animated overlay for extra depth */}
            <div className={`absolute inset-0 transition-all duration-700 ${
              isScrolled
                ? 'bg-gradient-to-r from-transparent via-transparent to-[#03265c]/20'
                : 'bg-gradient-to-r from-transparent via-transparent to-[#03265c]/40'
            }`} />
            
            <div className="relative flex justify-between items-center px-6 py-4 backdrop-blur-sm">
              <Link to="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img 
                    src="/lovable-uploads/309dfa71-bb72-4c85-9e37-44630e6897e0.png" 
                    alt="BOUNTI Software" 
                    className="h-12 md:h-14 w-auto object-contain drop-shadow-2xl filter brightness-110"
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
                      className={`relative font-semibold text-base transition-all duration-300 drop-shadow-sm ${
                        isScrolled 
                          ? `text-white hover:text-[#ff7009] ${isActive(link.path) ? 'text-[#ff7009]' : ''}`
                          : `text-white hover:text-[#ff7009] ${isActive(link.path) ? 'text-[#ff7009]' : ''}`
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
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)} 
                    className="bg-gradient-to-r from-bounty-orange to-yellow-500 hover:from-bounty-orange/90 hover:to-yellow-500/90 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold px-6 py-2 rounded-full backdrop-blur-sm"
                  >
                    Book Demo
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
