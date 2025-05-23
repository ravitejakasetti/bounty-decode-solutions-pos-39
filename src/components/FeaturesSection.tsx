
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Users, Settings, Database, ArrowRight, Check, Computer, Fuel } from 'lucide-react';
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
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80" // Restaurant POS image
    },
    {
      icon: <Users className="w-8 h-8 text-bounty-orange" />,
      headerIcon: <Fuel className="w-16 h-16 text-bounty-orange" />,
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
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80" // Customer retention funnel
    },
    {
      icon: <Settings className="w-8 h-8 text-bounty-orange" />,
      headerIcon: <motion.img 
        src="/lovable-uploads/49caf0a8-0b17-4acd-bb27-85f324adb27b.png"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="features" className="py-20 bg-gray-50 overflow-hidden">
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
              <Fuel className="absolute -bottom-2 -right-2 w-10 h-10 text-bounty-orange bg-white rounded-full p-1 shadow-lg" />
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

        <div className="flex overflow-x-auto justify-center flex-wrap gap-4 mb-12">
          {featureCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                activeFeature === index 
                  ? 'bg-bounty-navy text-white shadow-lg' 
                  : 'bg-white text-bounty-navy hover:bg-gray-100'
              } transition-all duration-300`}
              onClick={() => setActiveFeature(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category.icon}
              <span className="font-medium whitespace-nowrap">{category.title.split(':')[0]}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeFeature}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-12 border-0 shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    {featureCategories[activeFeature].icon}
                    <h3 className="text-2xl font-bold text-bounty-navy">
                      {featureCategories[activeFeature].title}
                    </h3>
                  </div>

                  <motion.ul 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {featureCategories[activeFeature].features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start space-x-3"
                        variants={itemVariants}
                      >
                        <div className="bg-bounty-orange/10 p-1 rounded-full mt-1">
                          <Check className="text-bounty-orange flex-shrink-0" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-center"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img 
                    src={featureCategories[activeFeature].image}
                    alt={featureCategories[activeFeature].title}
                    className="rounded-xl shadow-lg max-w-full max-h-72 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>
              
              {/* Header Icon Feature */}
              <div className="flex justify-center mb-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {featureCategories[activeFeature].headerIcon}
                </motion.div>
              </div>
              
              {/* Animated Flow Chart */}
              <div className="py-8 bg-gray-50 rounded-xl">
                <motion.h4 
                  className="text-xl font-semibold text-bounty-navy mb-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  How It Works
                </motion.h4>

                <div className="flex flex-wrap justify-center items-center">
                  {featureCategories[activeFeature].flowSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <motion.div
                        className="flex flex-col items-center p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.5 }}
                      >
                        <motion.div 
                          className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-4xl mb-2"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ 
                            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                            scale: { duration: 0.2 }
                          }}
                        >
                          {step.icon}
                        </motion.div>
                        <span className="text-center text-sm font-medium text-gray-700">{step.text}</span>
                      </motion.div>
                      
                      {idx < featureCategories[activeFeature].flowSteps.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.2 + 0.1, duration: 0.3 }}
                          className="mx-2 hidden md:flex items-center"
                        >
                          <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          >
                            <ArrowRight className="text-bounty-orange" />
                          </motion.div>
                        </motion.div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              {/* KPIs Section */}
              <motion.div 
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-bounty-navy/5 p-4 rounded-lg text-center">
                  <motion.div 
                    className="text-3xl font-bold text-bounty-orange mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    +42%
                  </motion.div>
                  <p className="text-sm text-gray-600">Average Sales Increase</p>
                </div>
                <div className="bg-bounty-navy/5 p-4 rounded-lg text-center">
                  <motion.div 
                    className="text-3xl font-bold text-bounty-orange mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    -28%
                  </motion.div>
                  <p className="text-sm text-gray-600">Reduced Waste</p>
                </div>
                <div className="bg-bounty-navy/5 p-4 rounded-lg text-center">
                  <motion.div 
                    className="text-3xl font-bold text-bounty-orange mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    3.2x
                  </motion.div>
                  <p className="text-sm text-gray-600">Customer Retention</p>
                </div>
                <div className="bg-bounty-navy/5 p-4 rounded-lg text-center">
                  <motion.div 
                    className="text-3xl font-bold text-bounty-orange mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    +54%
                  </motion.div>
                  <p className="text-sm text-gray-600">Operational Efficiency</p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
