import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar, Gift, Star, CheckCircle, Users, TrendingUp } from 'lucide-react';
import DemoModal from './DemoModal';

const ConversionSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const conversionStats = [
    { icon: <Users className="w-6 h-6" />, value: "5000+", label: "Happy Restaurants" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "40%", label: "Average Revenue Increase" },
    { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Customer Rating" },
    { icon: <CheckCircle className="w-6 h-6" />, value: "99.9%", label: "Uptime Guarantee" }
  ];

  const urgencyOffers = [
    {
      title: "Limited Time Offer",
      subtitle: "Get 3 Months FREE",
      description: "Sign up today and get 3 months of premium features absolutely free",
      cta: "Claim Now",
      highlight: "Save ₹15,000"
    },
    {
      title: "Free Setup & Training",
      subtitle: "Worth ₹10,000",
      description: "Complete installation, staff training, and data migration at no cost",
      cta: "Book Demo",
      highlight: "100% Free"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-bounty-orange rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main conversion header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to <span className="text-bounty-orange">Transform</span> Your Restaurant?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join 5000+ successful restaurants across India using Bounti POS billing software. Start your 30-day free trial today - no credit card required!
          </motion.p>

          {/* Trust indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {conversionStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-bounty-orange">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Urgency offers */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {urgencyOffers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-bounty-orange/30 hover:border-bounty-orange transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-bounty-orange text-white px-4 py-2 text-sm font-bold">
                  {offer.highlight}
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                  <h4 className="text-xl text-bounty-orange mb-4">{offer.subtitle}</h4>
                  <p className="text-blue-100 mb-6">{offer.description}</p>
                  <Button 
                    className="bg-bounty-orange hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg w-full group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setIsDemoModalOpen(true)}
                  >
                    {offer.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Primary CTA section */}
        <motion.div 
          className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your <span className="text-bounty-orange">Free Trial</span> Today
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how Bounti can increase your restaurant revenue by 40% in just 30 days. Setup takes less than 15 minutes.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="bg-bounty-orange hover:bg-orange-600 text-white font-bold px-12 py-4 text-xl rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              onClick={() => setIsDemoModalOpen(true)}
            >
              <Calendar className="w-6 h-6 mr-2" />
              Book Free Demo
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-bounty-navy font-bold px-12 py-4 text-xl rounded-xl transition-all duration-300"
              onClick={() => window.open('tel:+919876543210', '_self')}
            >
              <Phone className="w-6 h-6 mr-2" />
              Call Now: +91 98765 43210
            </Button>
          </div>

          {/* Social proof */}
          <div className="text-center">
            <p className="text-blue-200 text-lg mb-4">
              <Gift className="w-5 h-5 inline mr-2" />
              30-Day Free Trial • No Credit Card Required • Cancel Anytime
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-blue-200">from 1000+ reviews</span>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp floating button enhancement */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
        >
          <Button
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
            onClick={() => window.open('https://wa.me/919876543210?text=Hi, I want to know more about Bounti POS billing software', '_blank')}
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        </motion.div>
      </div>

      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </section>
  );
};

export default ConversionSection;