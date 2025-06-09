
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Users, Settings, Database, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const featureCategories = [
    {
      icon: <QrCode className="w-8 h-8 text-bounty-orange" />,
      title: "QR Integration",
      description: "Seamlessly connect with customers through QR code technology that enhances ordering, payment, and loyalty experiences.",
      features: [
        "Dynamic QR codes for tableside ordering and payment",
        "Menu access without app downloads", 
        "Personalized welcome discounts on first scan",
        "Digital loyalty program integration",
        "Menu item ratings and feedback collection"
      ],
      image: "/lovable-uploads/c48aa58e-af6c-4973-af27-6bb89086539b.png",
      stats: [
        { label: "Increased Order Value", value: "+24%" },
        { label: "Reduced Wait Times", value: "-35%" }
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-bounty-orange" />,
      title: "Customer Loyalty",
      description: "Build lasting relationships through intelligent customer recognition, personalized experiences, and rewards that keep patrons coming back.",
      features: [
        "Automated recognition of returning customers",
        "Purchase history tracking for personalized recommendations",
        "Points-based loyalty program with multiple redemption options",
        "Customer birthday and anniversary rewards",
        "Digital membership cards with exclusive benefits"
      ],
      image: "/lovable-uploads/ca73a960-993d-4792-b91b-6c3dcbe88c1d.png",
      stats: [
        { label: "Customer Retention", value: "+45%" },
        { label: "Repeat Visit Frequency", value: "+85%" }
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-bounty-orange" />,
      title: "Inventory Management", 
      description: "Take control of your inventory with real-time tracking, automated ordering, and waste reduction tools.",
      features: [
        "Real-time stock monitoring across multiple locations",
        "Automated reordering based on custom thresholds",
        "Vendor management and price comparison",
        "Ingredient-level tracking for recipe costing",
        "Expiry date alerts to minimize waste"
      ],
      image: "/lovable-uploads/068be18d-62c5-4939-b64b-01506aad4535.png",
      stats: [
        { label: "Reduced Food Waste", value: "-32%" },
        { label: "Inventory Cost Savings", value: "+18%" }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-bounty-orange" />,
      title: "Dynamic Pricing",
      description: "Maximize revenue with intelligent pricing strategies that adjust based on demand, time of day, and customer segments.",
      features: [
        "Time-based pricing for peak/off-peak hours",
        "Automatic happy hour discounts",
        "Event-based special pricing",
        "Customer segment-specific offers",
        "Competitor price monitoring and adjustment"
      ],
      image: "/lovable-uploads/6b884a1c-5776-4b24-9ed2-f7d35cdad36b.png",
      stats: [
        { label: "Revenue Increase", value: "+28%" },
        { label: "Off-peak Hour Sales", value: "+52%" }
      ]
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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore the Power of BOUNTI
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Intelligent Features for Unstoppable Growth. BOUNTI isn't just software; it's your restaurant's central nervous system, intelligently connecting every aspect of your operation.
          </motion.p>
        </div>

        {/* Enhanced Dynamic Feature Buttons */}
        <div className="flex overflow-x-auto justify-center flex-wrap gap-4 mb-12">
          {featureCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`flex items-center space-x-3 px-8 py-5 rounded-2xl border-3 transition-all duration-500 relative overflow-hidden group ${
                activeFeature === index 
                  ? 'bg-gradient-to-r from-bounty-navy via-bounty-orange to-bounty-navy text-white shadow-2xl border-bounty-orange transform scale-110 z-10' 
                  : 'bg-white text-bounty-navy hover:bg-gradient-to-r hover:from-bounty-orange hover:to-orange-600 hover:text-white border-bounty-orange/30 hover:border-bounty-orange hover:shadow-xl hover:scale-105'
              }`}
              onClick={() => setActiveFeature(index)}
              onMouseEnter={() => setActiveFeature(index)}
              whileHover={{ 
                scale: activeFeature === index ? 1.1 : 1.08,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(255, 112, 9, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Animated background */}
              {activeFeature === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-bounty-navy via-bounty-orange to-bounty-navy"
                  layoutId="activeFeatureBackground"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-bounty-orange to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              
              <motion.div
                className="relative z-10"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                {category.icon}
              </motion.div>
              <span className="font-bold whitespace-nowrap text-lg md:text-xl relative z-10">
                {category.title}
              </span>
              
              {/* Highlight indicator */}
              {activeFeature === index && (
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              )}
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
          <Card className="mb-12 border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:shadow-3xl transition-shadow duration-500">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <motion.div
                      className="p-3 bg-bounty-orange/10 rounded-2xl"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      {featureCategories[activeFeature].icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold text-bounty-navy">
                      {featureCategories[activeFeature].title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {featureCategories[activeFeature].description}
                  </p>

                  <motion.ul 
                    className="space-y-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {featureCategories[activeFeature].features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start space-x-4 group"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        <div className="bg-bounty-orange/20 p-2 rounded-full mt-1 group-hover:bg-bounty-orange/30 transition-colors">
                          <Check className="text-bounty-orange flex-shrink-0 w-4 h-4" />
                        </div>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center justify-center space-y-8"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.img 
                    src={featureCategories[activeFeature].image}
                    alt={featureCategories[activeFeature].title}
                    className="rounded-2xl shadow-2xl max-w-full max-h-80 object-cover border-4 border-bounty-orange/20"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="grid grid-cols-2 gap-6 w-full">
                    {featureCategories[activeFeature].stats.map((stat, idx) => (
                      <motion.div 
                        key={idx} 
                        className="bg-gradient-to-br from-bounty-orange/10 to-orange-100 p-6 rounded-2xl text-center border-2 border-bounty-orange/30 hover:border-bounty-orange transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-3xl font-bold text-bounty-orange mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
