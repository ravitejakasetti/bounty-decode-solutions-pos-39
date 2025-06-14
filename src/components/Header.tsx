
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
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 shadow-md bg-bounty-navy' : 'py-6 bg-bounty-navy/90'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <motion.img 
                src="/lovable-uploads/01aeee9b-9e2f-4125-bfc6-46fa06af632d.png" 
                alt="BOUNTI Software" 
                whileHover={{
                  scale: 1.05
                }} 
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }} 
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-white hover:text-yellow-300 transition-colors font-medium ${isActive(link.path) ? 'text-yellow-300' : ''}`}>
                  {link.text}
                </Link>)}
              <Button onClick={() => setIsDemoModalOpen(true)} className="bg-bounty-orange hover:bg-bounty-orange/90 text-white border-none">
                Book Demo
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{
            scale: 0.9
          }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && <motion.div className={`bg-bounty-navy ${isMenuOpen ? 'block' : 'hidden'}`} initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: isMenuOpen ? 'auto' : 0,
        opacity: isMenuOpen ? 1 : 0
      }} transition={{
        duration: 0.3
      }}>
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`block text-white hover:text-yellow-300 transition-colors ${isActive(link.path) ? 'text-yellow-300' : ''}`} onClick={() => setIsMenuOpen(false)}>
                  {link.text}
                </Link>)}
              <Button onClick={() => {
            setIsMenuOpen(false);
            setIsDemoModalOpen(true);
          }} className="w-full bg-bounty-orange hover:bg-bounty-orange/90 text-white border-none">
                Book Demo
              </Button>
            </div>
          </motion.div>}
      </header>
      
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>;
};

export default Header;
