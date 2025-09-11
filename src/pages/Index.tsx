
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
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden" role="main">
      <Header />
      <HeroSection />
      <section id="billing-showcase" aria-label="Billing System Showcase">
        <BillingShowcaseSection />
      </section>
      <section id="hardware-software" aria-label="Hardware and Software Solutions">
        <HardwareSoftwareSection />
      </section>
      <FeaturesSection />
      <section id="benefits" aria-label="Business Benefits">
        <BenefitsSection />
      </section>
      <section id="analytics" aria-label="Analytics and Reporting">
        <AnalyticsSection />
      </section>
      <section id="revenue-growth" aria-label="Revenue Growth Solutions">
        <RevenueGrowthSection />
      </section>
      <section id="integrations" aria-label="System Integrations">
        <IntegrationsSection />
      </section>
      <section id="about-bounti" aria-label="About Bounti Platform">
        <AboutBountiSection />
      </section>
      <section id="about-company" aria-label="About Our Company">
        <AboutSection />
      </section>
      <section id="faq" aria-label="Frequently Asked Questions">
        <FAQSection />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
