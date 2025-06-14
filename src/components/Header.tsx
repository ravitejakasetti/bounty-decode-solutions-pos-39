
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      <header className={`fixed w-full z-50 transition-all duration-700 ease-out ${isScrolled ? 'py-1' : 'py-3'}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            className={`relative rounded-3xl transition-all duration-700 overflow-hidden backdrop-blur-2xl ${
              isScrolled 
                ? 'bg-white/5 shadow-2xl border border-white/10' 
                : 'shadow-3xl border border-white/20'
            }`}
            style={{
              background: isScrolled 
                ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,112,9,0.15) 0%, rgba(3,38,92,0.25) 50%, rgba(255,255,255,0.05) 100%)`
                : `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,112,9,0.15) 50%, rgba(3,38,92,0.8) 100%)`
            }}
            animate={{
              scale: isScrolled ? 0.98 : 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Dynamic background layers */}
            <motion.div 
              className="absolute inset-0 opacity-30"
              animate={{
                background: `conic-gradient(from ${Date.now() / 50}deg, transparent, rgba(255,112,9,0.1), transparent)`
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="absolute inset-0"
              animate={{
                background: isScrolled
                  ? `radial-gradient(ellipse at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,112,9,0.1) 0%, transparent 70%)`
                  : 'none'
              }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative flex justify-between items-center px-6 py-4 backdrop-blur-sm">
              <Link to="/">
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 5,
                    filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255,112,9,0.5))"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
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
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    onHoverStart={() => setHoveredItem(link.path)}
                    onHoverEnd={() => setHoveredItem(null)}
                    whileHover={{ y: -2 }}
                  >
                    <Link 
                      to={link.path} 
                      className={`relative font-semibold text-base transition-all duration-500 drop-shadow-sm ${
                        isScrolled 
                          ? `text-white hover:text-[#ff7009] ${isActive(link.path) ? 'text-[#ff7009]' : ''}`
                          : `text-white hover:text-[#ff7009] ${isActive(link.path) ? 'text-[#ff7009]' : ''}`
                      }`}
                    >
                      <motion.span
                        whileHover={{ 
                          textShadow: "0 0 8px rgba(255,112,9,0.8)",
                          scale: 1.05
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {link.text}
                      </motion.span>
                      
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-[#ff7009] to-yellow-400 shadow-lg"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ 
                          width: isActive(link.path) ? '100%' : hoveredItem === link.path ? '100%' : 0,
                          opacity: isActive(link.path) ? 1 : hoveredItem === link.path ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-lg -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: hoveredItem === link.path ? 0.2 : 0,
                          scale: hoveredItem === link.path ? 1.2 : 0.8,
                        }}
                        style={{
                          background: 'radial-gradient(circle, rgba(255,112,9,0.3) 0%, transparent 70%)',
                          filter: 'blur(8px)'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: "0 20px 40px rgba(255,112,9,0.4)",
                    filter: "brightness(1.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)} 
                    className="bg-gradient-to-r from-bounty-orange via-yellow-500 to-bounty-orange hover:from-bounty-orange/90 hover:via-yellow-500/90 hover:to-bounty-orange/90 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-500 font-semibold px-6 py-2 rounded-full backdrop-blur-sm relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10 group-hover:drop-shadow-lg">Book Demo</span>
                  </Button>
                </motion.div>
              </nav>

              {/* Mobile Menu Button */}
              <motion.button 
                className="md:hidden z-20 relative p-2 text-white drop-shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                whileTap={{ scale: 0.9 }}
                whileHover={{ 
                  scale: 1.1,
                  filter: "drop-shadow(0 0 10px rgba(255,112,9,0.8))"
                }}
              >
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.div 
              className="mt-2 mx-4 bg-gradient-to-br from-[#03265c]/98 via-[#03265c]/95 to-[#03265c]/98 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div 
                className="absolute inset-0 opacity-20"
                animate={{
                  background: `conic-gradient(from ${Date.now() / 30}deg, transparent, rgba(255,112,9,0.2), transparent)`
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative p-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    <Link 
                      to={link.path} 
                      className={`block text-white hover:text-bounty-orange transition-colors duration-300 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-white/10 ${
                        isActive(link.path) ? 'text-bounty-orange bg-white/10' : ''
                      } relative overflow-hidden group`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-bounty-orange/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">{link.text}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-2"
                >
                  <Button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDemoModalOpen(true);
                    }} 
                    className="w-full bg-gradient-to-r from-bounty-orange via-yellow-500 to-bounty-orange hover:from-bounty-orange/90 hover:via-yellow-500/90 hover:to-bounty-orange/90 text-white border-none shadow-md font-semibold py-3 rounded-full relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">Book Demo</span>
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
