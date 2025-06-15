
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import DemoModal from './DemoModal';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const planIcons = [Star, Zap, Crown, Rocket];

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
      popular: false,
      color: "from-blue-500 to-blue-600",
      isCustom: false
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
      popular: true,
      color: "from-bounty-orange to-orange-600",
      isCustom: false
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
      popular: false,
      color: "from-purple-500 to-purple-600",
      isCustom: false
    },
    {
      name: "Customise",
      price: "",
      period: "",
      description: "For large restaurant operations with custom needs",
      features: [
        "Enterprise-grade features",
        "Custom integrations",
        "Advanced reporting suite",
        "Dedicated account manager",
        "Custom training",
        "API access",
        "Unlimited locations"
      ],
      popular: false,
      color: "from-emerald-500 to-emerald-600",
      isCustom: true
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-10 left-10 w-72 h-72 bg-bounty-orange/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-bounty-navy/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6"
              animate={{ 
                backgroundImage: [
                  'linear-gradient(45deg, #03265c, #ff7009)',
                  'linear-gradient(45deg, #ff7009, #03265c)',
                  'linear-gradient(45deg, #03265c, #ff7009)'
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ 
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Choose the plan that fits your restaurant's needs. All plans include core features with no hidden fees.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => {
              const IconComponent = planIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                  onHoverStart={() => setHoveredPlan(index)}
                  onHoverEnd={() => setHoveredPlan(null)}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: 1000
                  }}
                >
                  <Card className={`h-full transition-all duration-500 ${
                    plan.popular 
                      ? 'border-bounty-orange border-2 shadow-2xl shadow-bounty-orange/20' 
                      : 'border-gray-200 hover:shadow-xl hover:shadow-gray-200/50'
                  } ${hoveredPlan === index ? 'bg-gradient-to-br from-white to-gray-50' : 'bg-white'}`}>
                    {plan.popular && (
                      <motion.div 
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                        animate={{ 
                          y: [-2, 2, -2],
                          rotate: [-1, 1, -1]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <span className="bg-gradient-to-r from-bounty-orange to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                          Most Popular
                        </span>
                      </motion.div>
                    )}
                    
                    <CardHeader className="text-center pb-4 relative">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                        animate={{ 
                          rotate: hoveredPlan === index ? 360 : 0,
                          scale: hoveredPlan === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="text-white" size={24} />
                      </motion.div>
                      
                      <CardTitle className="text-xl font-bold text-bounty-navy mb-2">
                        {plan.name}
                      </CardTitle>
                      
                      {plan.isCustom ? (
                        <div className="mb-4">
                          <Link to="/contact">
                            <Button className="bg-bounty-orange hover:bg-bounty-orange/90 text-white px-6 py-2 rounded-lg font-semibold">
                              Book a Demo
                            </Button>
                          </Link>
                        </div>
                      ) : (
                        <motion.div 
                          className="mb-4"
                          animate={hoveredPlan === index ? { scale: 1.1 } : { scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.span 
                            className="text-3xl font-bold text-bounty-navy"
                            animate={hoveredPlan === index ? {
                              textShadow: [
                                '0 0 5px rgba(3, 38, 92, 0.3)',
                                '0 0 10px rgba(3, 38, 92, 0.5)',
                                '0 0 5px rgba(3, 38, 92, 0.3)'
                              ]
                            } : {}}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            {plan.price}
                          </motion.span>
                          <span className="text-gray-600">{plan.period}</span>
                        </motion.div>
                      )}
                      
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Check className="text-bounty-orange flex-shrink-0 mt-0.5" size={16} />
                            </motion.div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      {!plan.isCustom && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            onClick={() => setIsDemoModalOpen(true)}
                            className={`w-full mt-6 transition-all duration-300 ${
                              plan.popular 
                                ? 'bg-bounty-orange hover:bg-bounty-orange/90 shadow-lg hover:shadow-xl' 
                                : 'bg-bounty-navy hover:bg-bounty-navy/90 hover:shadow-lg'
                            }`}
                            style={hoveredPlan === index ? {
                              boxShadow: plan.popular 
                                ? '0 10px 30px rgba(255, 112, 9, 0.4)' 
                                : '0 10px 30px rgba(3, 38, 92, 0.4)'
                            } : {}}
                          >
                            Get Started
                          </Button>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-gray-600 mb-4"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Need a custom solution? Contact us for enterprise pricing.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setIsDemoModalOpen(true)}
                variant="outline"
                className="border-bounty-navy text-bounty-navy hover:bg-bounty-navy hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                Contact Sales
              </Button>
            </motion.div>
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
