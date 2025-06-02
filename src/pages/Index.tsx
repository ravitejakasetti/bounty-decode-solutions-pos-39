
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BillingShowcaseSection from '@/components/BillingShowcaseSection';
import HardwareSoftwareSection from '@/components/HardwareSoftwareSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import AnalyticsSection from '@/components/AnalyticsSection';
import RevenueGrowthSection from '@/components/RevenueGrowthSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import AboutBountiSection from '@/components/AboutBountiSection';
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
      <RevenueGrowthSection />
      <IntegrationsSection />
      <AboutBountiSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
