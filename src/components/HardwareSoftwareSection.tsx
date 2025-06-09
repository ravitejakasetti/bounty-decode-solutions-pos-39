
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Monitor, Wifi, Shield, Zap, Cloud } from 'lucide-react';

const HardwareSoftwareSection = () => {
  const [activeTab, setActiveTab] = useState('software');

  const softwareFeatures = [
    {
      icon: <Monitor className="w-8 h-8 text-bounty-orange" />,
      title: "Cloud-Based POS System",
      description: "Access your restaurant data from anywhere with our secure cloud infrastructure",
      features: ["Real-time synchronization", "Automatic backups", "Multi-location support"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-bounty-orange" />,
      title: "Mobile-First Design",
      description: "Optimized for tablets and smartphones for seamless operation",
      features: ["Touch-friendly interface", "Offline capability", "Quick order processing"]
    },
    {
      icon: <Zap className="w-8 h-8 text-bounty-orange" />,
      title: "Lightning Fast Performance",
      description: "Built for speed with advanced caching and optimization",
      features: ["Sub-second response times", "Efficient database queries", "Optimized workflows"]
    },
    {
      icon: <Shield className="w-8 h-8 text-bounty-orange" />,
      title: "Enterprise Security",
      description: "Bank-grade security to protect your sensitive business data",
      features: ["End-to-end encryption", "PCI compliance", "Role-based access"]
    }
  ];

  const hardwareFeatures = [
    {
      icon: <Monitor className="w-8 h-8 text-bounty-orange" />,
      title: "POS Terminals",
      description: "Professional-grade terminals designed for restaurant environments",
      features: ["Spill-resistant design", "High-resolution displays", "Fast processors"]
    },
    {
      icon: <Wifi className="w-8 h-8 text-bounty-orange" />,
      title: "Wireless Connectivity",
      description: "Reliable wireless solutions for seamless operations",
      features: ["Wi-Fi 6 support", "Bluetooth integration", "4G/5G backup"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-bounty-orange" />,
      title: "Mobile Devices",
      description: "Tablets and handhelds for tableside ordering and payments",
      features: ["Rugged construction", "Long battery life", "Payment integration"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-bounty-orange" />,
      title: "Smart Peripherals",
      description: "Connected devices that integrate seamlessly with your POS",
      features: ["Smart printers", "Digital scales", "Inventory scanners"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Engine Behind Your Success
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Powerful software meets reliable hardware to create the perfect restaurant management ecosystem
          </motion.p>
        </div>

        {/* Enhanced Dynamic Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full shadow-lg border border-gray-200">
            <motion.button
              onClick={() => setActiveTab('software')}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 relative overflow-hidden ${
                activeTab === 'software' 
                  ? 'bg-gradient-to-r from-bounty-navy to-bounty-orange text-white shadow-xl transform scale-105' 
                  : 'text-bounty-navy hover:bg-gray-50'
              }`}
              whileHover={{ 
                scale: activeTab === 'software' ? 1.05 : 1.1,
                boxShadow: activeTab === 'software' ? "0 10px 30px rgba(3, 38, 92, 0.3)" : "0 5px 15px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'software' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-bounty-navy to-bounty-orange rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Software Solutions
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab('hardware')}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 relative overflow-hidden ${
                activeTab === 'hardware' 
                  ? 'bg-gradient-to-r from-bounty-navy to-bounty-orange text-white shadow-xl transform scale-105' 
                  : 'text-bounty-navy hover:bg-gray-50'
              }`}
              whileHover={{ 
                scale: activeTab === 'hardware' ? 1.05 : 1.1,
                boxShadow: activeTab === 'hardware' ? "0 10px 30px rgba(3, 38, 92, 0.3)" : "0 5px 15px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {activeTab === 'hardware' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-bounty-navy to-bounty-orange rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Hardware Solutions
              </span>
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === 'software' ? softwareFeatures : hardwareFeatures).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div 
                      className="flex items-center justify-center w-16 h-16 bg-bounty-orange/10 rounded-full mb-4 group-hover:bg-bounty-orange/20 transition-colors duration-300"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-bounty-navy mb-3 group-hover:text-bounty-orange transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                        >
                          <Badge variant="secondary" className="text-xs bg-bounty-orange/10 text-bounty-navy hover:bg-bounty-orange/20">
                            {item}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-bounty-navy to-bounty-orange p-8 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Complete Integration, Maximum Performance
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Our software and hardware work seamlessly together to deliver unmatched restaurant management capabilities
            </p>
            <motion.button 
              className="bg-white text-bounty-navy px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Full Solutions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HardwareSoftwareSection;
