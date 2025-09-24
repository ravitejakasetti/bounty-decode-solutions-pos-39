import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const RestaurantPOS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default RestaurantPOS;