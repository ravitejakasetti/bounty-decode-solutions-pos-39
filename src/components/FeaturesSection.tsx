
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Users, Settings, Database, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const featureCategories = [
    {
      icon: <QrCode className="w-8 h-8 text-bounty-orange" />,
      title: "Sell Smarter, Not Harder",
      features: [
        "Dynamic Menu Management: Instantly change MRPs, disable unavailable items, and highlight specials",
        "Intelligent Discounting & Offers: QR-activated welcome discounts and bill value-based dynamic offers", 
        "Personalized Combo Creation: Craft irresistible combos based on customer budget and choice",
        "Welcome Drinks/Offers: Automate a delightful first impression for new and returning guests"
      ],
      flowSteps: [
        { icon: "📱", text: "Customer Scans QR" },
        { icon: "🔍", text: "Personalization Engine Identifies Customer" },
        { icon: "🎁", text: "Custom Offers Generated" },
        { icon: "💰", text: "Increased Sales & Loyalty" },
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-bounty-orange" />,
      title: "Turn Every Customer into a Loyal Advocate",
      features: [
        "QR Code Revolution: Welcome discounts, easy menu access, on-container offers",
        "Know Your Customer: Recognize regulars, track visit history, and personalize experiences",
        "Targeted Communication via WhatsApp Bot: Send enticing messages about new dishes and offers",
        "Priority Service & Privileges: Offer faster service or special perks to loyal patrons"
      ],
      flowSteps: [
        { icon: "👋", text: "Customer Recognition" },
        { icon: "📊", text: "Analysis of Past Visits" },
        { icon: "👑", text: "Personalized VIP Experience" },
        { icon: "🔄", text: "Repeat Business & Word of Mouth" },
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-bounty-orange" />,
      title: "Streamline, Save, and Scale", 
      features: [
        "Smart Inventory Management: Track stock levels in real-time, minimize spoilage",
        "Vendor Management: Simplify supplier interactions and maintain optimal stock levels",
        "Dynamic Pricing Engine: Adjust prices based on peak/low hours or demand",
        "Restaurant Self-Sufficient Delivery System: Manage your own deliveries efficiently"
      ],
      flowSteps: [
        { icon: "📦", text: "Real-time Inventory Tracking" },
        { icon: "⚠️", text: "Low Stock Alerts" },
        { icon: "🛒", text: "Automated Ordering" },
        { icon: "✅", text: "Optimized Stock Levels" },
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-bounty-orange" />,
      title: "Step into the Future, Leave Limitations Behind",
      features: [
        "Beyond Fixed Data: Bounty operates on dynamic, real-time information",
        "Trackable & Actionable Insights: Understand customer behavior and operational trends",
        "Control Your Supply Chain: Gain better oversight of inventory and vendor relationships",
        "Comprehensive Analytics: Make data-driven decisions for maximum profitability"
      ],
      flowSteps: [
        { icon: "📊", text: "Data Collection" },
        { icon: "🧠", text: "AI Analysis" },
        { icon: "💡", text: "Actionable Insights" },
        { icon: "📈", text: "Business Growth" },
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore the Power of Bounty
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Intelligent Features for Unstoppable Growth. Bounty isn't just software; it's your restaurant's central nervous system, intelligently connecting every aspect of your operation.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {featureCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                activeFeature === index 
                  ? 'bg-bounty-navy text-white' 
                  : 'bg-white text-bounty-navy hover:bg-gray-100'
              }`}
              onClick={() => setActiveFeature(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span className="font-medium">{category.title.split(':')[0]}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeFeature}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                {featureCategories[activeFeature].icon}
                <h3 className="text-2xl font-bold text-bounty-navy">
                  {featureCategories[activeFeature].title}
                </h3>
              </div>

              <ul className="space-y-3 mb-8">
                {featureCategories[activeFeature].features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Check className="text-bounty-orange mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Animated Flow Chart */}
              <div className="py-8">
                <h4 className="text-xl font-semibold text-bounty-navy mb-6 text-center">How It Works</h4>
                <div className="flex flex-wrap justify-center items-center">
                  {featureCategories[activeFeature].flowSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <motion.div
                        className="flex flex-col items-center p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                      >
                        <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-4xl mb-2">
                          {step.icon}
                        </div>
                        <span className="text-center text-sm font-medium text-gray-700">{step.text}</span>
                      </motion.div>
                      
                      {idx < featureCategories[activeFeature].flowSteps.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.2 + 0.1 }}
                          className="mx-2 hidden md:block"
                        >
                          <ArrowRight className="text-bounty-orange" />
                        </motion.div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
