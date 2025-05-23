
import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-10 bg-bounty-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-200">
            Comprehensive restaurant management solutions for all your business needs
          </p>
        </div>
      </div>
      <ServicesSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
