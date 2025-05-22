
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Users, Settings, Database, ArrowRight, Check, Computer, Funnel } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const featureCategories = [
    {
      icon: <QrCode className="w-8 h-8 text-bounty-orange" />,
      headerIcon: <Computer className="w-16 h-16 text-bounty-orange animate-pulse" />,
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
      ],
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=800&q=80" // Restaurant POS image
    },
    {
      icon: <Users className="w-8 h-8 text-bounty-orange" />,
      headerIcon: <Funnel className="w-16 h-16 text-bounty-orange" />,
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
      ],
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80" // Customer retention funnel
    },
    {
      icon: <Settings className="w-8 h-8 text-bounty-orange" />,
      headerIcon: <motion.img 
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=400&q=80"
        className="w-24 h-24 rounded-full object-cover border-4 border-bounty-orange"
        animate={{ rotate: [0, 10, 0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />,
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
      ],
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=80" // Inventory management
    },
    {
      icon: <Database className="w-8 h-8 text-bounty-orange" />,
      headerIcon: <motion.div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=80"
          className="w-24 h-24 rounded-full object-cover border-4 border-bounty-orange"
        />
        <motion.div 
          className="absolute -bottom-2 -right-2 bg-bounty-navy rounded-full p-1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Database className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>,
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
      ],
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=80" // Data analytics dashboard
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=300&q=80"
                alt="Animated character at computer"
                className="w-24 h-24 rounded-full object-cover border-4 border-bounty-orange"
              />
              <Funnel className="absolute -bottom-2 -right-2 w-10 h-10 text-bounty-orange bg-white rounded-full p-1 shadow-lg" />
            </div>
          </motion.div>
          
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
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    {featureCategories[activeFeature].icon}
                    <h3 className="text-2xl font-bold text-bounty-navy">
                      {featureCategories[activeFeature].title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
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
                </div>
                
                <div className="flex items-center justify-center">
                  <img 
                    src={featureCategories[activeFeature].image}
                    alt={featureCategories[activeFeature].title}
                    className="rounded-xl shadow-lg max-w-full max-h-64 object-cover"
                  />
                </div>
              </div>
              
              {/* Header Icon Feature */}
              <div className="flex justify-center mb-6">
                {featureCategories[activeFeature].headerIcon}
              </div>
              
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
