
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BillingShowcaseSection from '@/components/BillingShowcaseSection';
import HardwareSoftwareSection from '@/components/HardwareSoftwareSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import AnalyticsSection from '@/components/AnalyticsSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import RevenueGrowthSection from '@/components/RevenueGrowthSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BillingShowcaseSection />
      <HardwareSoftwareSection />
      <FeaturesSection />
      <BenefitsSection />
      <AnalyticsSection />
      <IntegrationsSection />
      <RevenueGrowthSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
