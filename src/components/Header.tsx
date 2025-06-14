
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import DemoModal from './DemoModal';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
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
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 shadow-lg' : 'py-6'} overflow-hidden`}>
        <div className="relative w-full">
          {/* Dynamic Split Background */}
          <div className="absolute inset-0 flex">
            <motion.div 
              className="h-full bg-white"
              initial={{ width: '50%' }}
              animate={{ 
                width: isScrolled ? '40%' : '50%',
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.div 
              className="h-full"
              style={{ backgroundColor: '#03265c' }}
              initial={{ width: '50%' }}
              animate={{ 
                width: isScrolled ? '60%' : '50%',
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          
          {/* Diagonal Separator */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute h-full w-20 transform -skew-x-12"
              style={{ 
                backgroundColor: '#03265c',
                left: isScrolled ? '35%' : '45%',
                transition: 'left 0.5s ease-in-out'
              }}
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-between items-center">
              <Link to="/">
                <motion.img 
                  src="/lovable-uploads/39a22824-d992-4235-a6e4-f4e01d73707a.png" 
                  alt="BOUNTI Software" 
                  whileHover={{
                    scale: 1.05,
                    rotate: 2
                  }} 
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }} 
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-lg"
                />
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={link.path} 
                      className={`relative text-white hover:text-bounty-orange transition-all duration-300 font-semibold text-lg group ${
                        isActive(link.path) ? 'text-bounty-orange' : ''
                      }`}
                    >
                      {link.text}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bounty-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)} 
                    className="bg-bounty-orange hover:bg-bounty-orange/90 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6 py-2 rounded-full"
                  >
                    Book Demo
                  </Button>
                </motion.div>
              </nav>

              {/* Mobile Menu Button */}
              <motion.button 
                className="md:hidden text-white z-20" 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
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
        {isMobile && (
          <motion.div 
            className={`${isMenuOpen ? 'block' : 'hidden'} relative z-10`}
            style={{ backgroundColor: '#03265c' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isMenuOpen ? 'auto' : 0, 
              opacity: isMenuOpen ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className={`block text-white hover:text-bounty-orange transition-colors font-semibold text-lg ${
                      isActive(link.path) ? 'text-bounty-orange' : ''
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
              >
                <Button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDemoModalOpen(true);
                  }} 
                  className="w-full bg-bounty-orange hover:bg-bounty-orange/90 text-white border-none shadow-lg font-semibold py-3 rounded-full"
                >
                  Book Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </header>
      
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>;
};

export default Header;
