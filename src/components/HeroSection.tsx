
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import DemoModal from './DemoModal';

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="min-h-screen pt-20 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Unlock Exponential Growth. 
                <span className="block text-yellow-300">Maximize Sales.</span>
                <span className="block">Revolutionize Your Restaurant</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Step into the new era of restaurant management. Bounty, a specialized solution by Decode Solutions, empowers you with intelligent automation, dynamic customer engagement, and data-driven strategies to significantly boost your revenue and streamline operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setIsDemoModalOpen(true)}
                  size="lg" 
                  className="bg-white text-bounty-navy hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
                >
                  Book Your Free Bounty Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-bounty-navy text-lg px-8 py-4"
                >
                  Watch Demo Video
                </Button>
              </div>
            </div>
            
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" 
                alt="POS Software Interface" 
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
