
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import DemoModal from './DemoModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logos */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/55367eb8-b6a6-4733-b171-addeb903f8aa.png" 
                  alt="Bounty Software" 
                  className="h-16 w-auto"
                />
                <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                  <span>Powered by</span>
                  <img 
                    src="/lovable-uploads/2cb91fc4-f3da-490c-aafb-fd931d028671.png" 
                    alt="Decode Solutions" 
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-bounty-orange transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-bounty-orange transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-bounty-orange transition-colors">Services</a>
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
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-bounty-orange transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-bounty-orange transition-colors">About</a>
                <a href="#services" className="text-gray-700 hover:text-bounty-orange transition-colors">Services</a>
                <a href="#features" className="text-gray-700 hover:text-bounty-orange transition-colors">Features</a>
                <a href="#hardware" className="text-gray-700 hover:text-bounty-orange transition-colors">Hardware & Software</a>
                <a href="#integrations" className="text-gray-700 hover:text-bounty-orange transition-colors">Integrations</a>
                <div className="flex items-center space-x-2 text-sm text-gray-600 md:hidden">
                  <span>Powered by</span>
                  <img 
                    src="/lovable-uploads/2cb91fc4-f3da-490c-aafb-fd931d028671.png" 
                    alt="Decode Solutions" 
                    className="h-6 w-auto"
                  />
                </div>
                <Button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-bounty-orange hover:bg-bounty-orange/90 text-white w-full"
                >
                  Book Free Demo
                </Button>
              </div>
            </nav>
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
