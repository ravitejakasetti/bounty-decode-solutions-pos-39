import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Crown, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DemoModal from './DemoModal';

const PricingSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: "₹4,999",
      period: "/month",
      description: "Perfect for small cafes and quick-service restaurants",
      icon: Star,
      color: "from-blue-500 to-blue-600",
      features: [
        "Basic POS System",
        "Inventory Management",
        "Sales Reports",
        "Customer Database",
        "Email Support",
        "1 Terminal"
      ],
      limitations: [
        "Advanced Analytics",
        "Multi-location Support",
        "Custom Integrations"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "₹6,999",
      period: "/month",
      description: "Ideal for growing restaurants with multiple locations",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      features: [
        "Advanced POS System",
        "Multi-location Support",
        "Advanced Analytics",
        "Kitchen Display System",
        "Online Ordering Integration",
        "Staff Management",
        "24/7 Phone Support",
        "Up to 5 Terminals"
      ],
      limitations: [
        "Custom Branding",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "₹11,999",
      period: "/month",
      description: "Complete solution for large restaurant chains",
      icon: Crown,
      color: "from-purple-500 to-indigo-600",
      features: [
        "Enterprise POS System",
        "Unlimited Locations",
        "Custom Branding",
        "API Access",
        "Advanced Reporting & Analytics",
        "Dedicated Account Manager",
        "Priority Support",
        "Custom Integrations",
        "Unlimited Terminals"
      ],
      limitations: [],
      popular: false
    },
    {
      name: "Customise and Flex",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for unique business requirements",
      icon: Settings,
      color: "from-gray-700 to-gray-900",
      features: [
        "Fully Customized Solution",
        "Bespoke Feature Development",
        "Custom Integrations",
        "Dedicated Development Team",
        "White-label Solutions",
        "Enterprise-grade Security",
        "Custom SLA",
        "On-premise Deployment Options"
      ],
      limitations: [],
      popular: false,
      isCustom: true
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Choose Your Perfect Plan
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From startups to enterprise chains, we have the right solution to power your restaurant's success
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                    plan.popular ? 'ring-4 ring-bounty-orange ring-opacity-50' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-bounty-orange to-orange-600 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                  
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} text-white mb-4`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-bounty-navy mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-bounty-navy">{plan.price}</span>
                        <span className="text-gray-500 ml-2">{plan.period}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                        >
                          <div className="flex-shrink-0">
                            <Check className="w-5 h-5 text-green-500" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                      
                      {plan.limitations.map((limitation, limitIndex) => (
                        <motion.div 
                          key={limitIndex}
                          className="flex items-center space-x-3 opacity-50"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 0.5, x: 0 }}
                          transition={{ delay: (index * 0.1) + ((plan.features.length + limitIndex) * 0.05) }}
                        >
                          <div className="flex-shrink-0">
                            <X className="w-5 h-5 text-gray-400" />
                          </div>
                          <span className="text-gray-400 text-sm">{limitation}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        onClick={() => setIsDemoModalOpen(true)}
                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                          plan.popular 
                            ? 'bg-bounty-orange hover:bg-bounty-orange/90 text-white shadow-lg hover:shadow-xl' 
                            : plan.isCustom
                            ? 'bg-gray-800 hover:bg-gray-700 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-bounty-navy border-2 border-bounty-navy/20 hover:border-bounty-navy/40'
                        }`}
                      >
                        {plan.isCustom ? 'Contact Sales' : 'Get Started'}
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-gray-600 mb-6">
              All plans include free setup, training, and 30-day money-back guarantee
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Regular Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Data Migration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
};

export default PricingSection;
