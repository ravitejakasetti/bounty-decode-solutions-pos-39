
import React from 'react';
import Header from '@/components/Header';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-10 bg-bounty-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-lg text-gray-200">
            Choose the perfect plan for your restaurant's growth
          </p>
        </div>
      </div>
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Pricing;
