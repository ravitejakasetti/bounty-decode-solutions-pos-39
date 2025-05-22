
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import DemoModal from './DemoModal';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logos */}
            <Link to="/" className="flex items-center space-x-4">
              <motion.img 
                src="/lovable-uploads/55367eb8-b6a6-4733-b171-addeb903f8aa.png" 
                alt="Bounty Software" 
                className="h-16 w-auto"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <span>Powered by</span>
                <motion.img 
                  src="/lovable-uploads/2cb91fc4-f3da-490c-aafb-fd931d028671.png" 
                  alt="Decode Solutions" 
                  className="h-8 w-auto"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-bounty-orange transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-bounty-orange transition-colors">Services</Link>
              <a href="#about" className="text-gray-700 hover:text-bounty-orange transition-colors">About</a>
              <a href="#features" className="text-gray-700 hover:text-bounty-orange transition-colors">Features</a>
              <a href="#hardware" className="text-gray-700 hover:text-bounty-orange transition-colors">Hardware & Software</a>
              <a href="#integrations" className="text-gray-700 hover:text-bounty-orange transition-colors">Integrations</a>
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-bounty-orange hover:bg-bounty-orange/90 text-white"
              >
                Book Free Demo
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
            >
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-bounty-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/services" className="text-gray-700 hover:text-bounty-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <a href="#about" className="text-gray-700 hover:text-bounty-orange transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#features" className="text-gray-700 hover:text-bounty-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a href="#hardware" className="text-gray-700 hover:text-bounty-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Hardware & Software</a>
                <a href="#integrations" className="text-gray-700 hover:text-bounty-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Integrations</a>
                <div className="flex items-center space-x-2 text-sm text-gray-600 md:hidden">
                  <span>Powered by</span>
                  <img 
                    src="/lovable-uploads/2cb91fc4-f3da-490c-aafb-fd931d028671.png" 
                    alt="Decode Solutions" 
                    className="h-6 w-auto"
                  />
                </div>
                <Button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                  className="bg-bounty-orange hover:bg-bounty-orange/90 text-white w-full"
                >
                  Book Free Demo
                </Button>
              </div>
            </motion.nav>
          )}
        </div>
      </header>
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default Header;
