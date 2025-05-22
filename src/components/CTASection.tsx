
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import DemoModal from './DemoModal';

const CTASection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 gradient-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to See Your Restaurant Flourish?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover how Bounty can transform your challenges into triumphs and your goals into realities.
          </p>
          <Button 
            onClick={() => setIsDemoModalOpen(true)}
            size="lg" 
            className="bg-white text-bounty-navy hover:bg-gray-100 text-xl px-12 py-6 font-bold"
          >
            Book a Demo & Elevate Your Business
          </Button>
        </div>
      </section>
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default CTASection;
