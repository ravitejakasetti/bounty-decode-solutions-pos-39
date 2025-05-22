
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import FeaturesSection from '@/components/FeaturesSection';
import HardwareSoftwareSection from '@/components/HardwareSoftwareSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <FeaturesSection />
      <HardwareSoftwareSection />
      <IntegrationsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
