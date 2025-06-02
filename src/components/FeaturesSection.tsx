
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Users, Settings, Database, ArrowRight, Check } from 'lucide-react';
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

        <div className="flex overflow-x-auto justify-center flex-wrap gap-4 mb-12">
          {featureCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`flex items-center space-x-2 px-6 py-4 rounded-full border-2 transition-all duration-300 ${
                activeFeature === index 
                  ? 'bg-gradient-to-r from-bounty-navy to-bounty-orange text-white shadow-xl border-bounty-orange transform scale-105' 
                  : 'bg-white text-bounty-navy hover:bg-bounty-orange hover:text-white border-bounty-orange/30 hover:border-bounty-orange hover:shadow-lg hover:scale-102'
              }`}
              onClick={() => setActiveFeature(index)}
              onMouseEnter={() => setActiveFeature(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category.icon}
              <span className="font-medium whitespace-nowrap text-lg">{category.title}</span>
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
          <Card className="mb-12 border-0 shadow-xl overflow-hidden bg-gradient-to-br from-white to-gray-50">
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

                  <p className="text-gray-600 mb-6">
                    {featureCategories[activeFeature].description}
                  </p>

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
                  className="flex flex-col items-center justify-center space-y-6"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img 
                    src={featureCategories[activeFeature].image}
                    alt={featureCategories[activeFeature].title}
                    className="rounded-xl shadow-lg max-w-full max-h-72 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {featureCategories[activeFeature].stats.map((stat, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center border border-bounty-orange/20">
                        <div className="text-2xl font-bold text-bounty-orange">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
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
                  Implementation Process
                </motion.h4>

                <div className="flex justify-center items-center flex-wrap">
                  {['Consultation', 'Configuration', 'Training', 'Launch', 'Support'].map((step, idx) => (
                    <React.Fragment key={idx}>
                      <motion.div
                        className="flex flex-col items-center p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.5 }}
                      >
                        <motion.div 
                          className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold mb-2 text-bounty-navy border-2 border-bounty-orange/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {idx + 1}
                        </motion.div>
                        <span className="text-center text-sm font-medium text-gray-700">{step}</span>
                      </motion.div>
                      
                      {idx < 4 && (
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
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
