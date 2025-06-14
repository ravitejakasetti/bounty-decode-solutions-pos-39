
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import DemoModal from './DemoModal';

const PricingSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹4,999",
      period: "/month",
      description: "Perfect for small cafes and food trucks",
      features: [
        "Basic POS system",
        "Up to 50 menu items",
        "Basic reporting",
        "Payment processing",
        "Email support",
        "Single location"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "₹6,999",
      period: "/month",
      description: "Ideal for growing restaurants",
      features: [
        "Advanced POS system",
        "Unlimited menu items",
        "Advanced analytics",
        "Inventory management",
        "QR code integration",
        "Priority support",
        "Up to 2 locations"
      ],
      popular: true
    },
    {
      name: "Professional",
      price: "₹11,999",
      period: "/month",
      description: "For established restaurant chains",
      features: [
        "Full feature POS suite",
        "Customer loyalty program",
        "Dynamic pricing",
        "Staff management",
        "Multi-location support",
        "24/7 phone support",
        "Up to 5 locations"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "₹24,999",
      period: "/month",
      description: "For large restaurant operations",
      features: [
        "Enterprise-grade features",
        "Custom integrations",
        "Advanced reporting suite",
        "Dedicated account manager",
        "Custom training",
        "API access",
        "Up to 15 locations"
      ],
      popular: false
    }
  ];

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your restaurant's needs. All plans include core features with no hidden fees.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className={`h-full ${plan.popular ? 'border-bounty-orange border-2 shadow-xl' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-bounty-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-bounty-navy mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-bounty-navy">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="text-bounty-orange flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      onClick={() => setIsDemoModalOpen(true)}
                      className={`w-full mt-6 ${
                        plan.popular 
                          ? 'bg-bounty-orange hover:bg-bounty-orange/90' 
                          : 'bg-bounty-navy hover:bg-bounty-navy/90'
                      }`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 mb-4">
              Need a custom solution? Contact us for enterprise pricing.
            </p>
            <Button
              onClick={() => setIsDemoModalOpen(true)}
              variant="outline"
              className="border-bounty-navy text-bounty-navy hover:bg-bounty-navy hover:text-white"
            >
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </section>
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default PricingSection;
