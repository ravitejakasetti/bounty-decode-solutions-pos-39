
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Monitor, Wifi, Shield, Zap, Cloud, QrCode, Printer, Database, BarChart3, ArrowRight } from 'lucide-react';

const HardwareSoftwareSection = () => {
  const [activeTab, setActiveTab] = useState('software');

  const softwareFeatures = [
    {
      icon: <Monitor className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "User Friendly Interface",
      description: "Intuitive design that makes restaurant management effortless for all team members",
      features: ["Easy navigation", "Quick learning curve", "Touch-optimized controls"]
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "Robust and Reliable",
      description: "Built to handle high-volume operations with maximum uptime and stability",
      features: ["99.9% uptime guarantee", "Automatic failover", "Data redundancy"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "Real Time Analytics",
      description: "Get instant insights into your restaurant's performance and customer behavior",
      features: ["Live dashboards", "Instant reporting", "Performance tracking"]
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "Lightning Fast Performance",
      description: "Built for speed with advanced optimization for quick order processing",
      features: ["Sub-second response", "Optimized workflows", "Fast checkout process"]
    }
  ];

  const hardwareFeatures = [
    {
      icon: <Monitor className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "POS Integration",
      description: "Seamlessly integrate with existing POS systems for unified operations",
      features: ["Universal compatibility", "Easy setup", "Synchronized data"]
    },
    {
      icon: <QrCode className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "QR Scanners and Printers",
      description: "High-quality scanning and printing solutions for efficient operations",
      features: ["Fast scanning", "Thermal printing", "Durable hardware"]
    },
    {
      icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "Your Phone is Your POS",
      description: "Transform any smartphone or tablet into a powerful POS terminal",
      features: ["Mobile flexibility", "Cloud synchronization", "Remote access"]
    },
    {
      icon: <Cloud className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "Smart Peripherals",
      description: "Connected devices that integrate seamlessly with your POS",
      features: ["Smart printers", "Digital scales", "Inventory scanners"]
    }
  ];

  const bountiWorkflow = [
    { step: "Data Input", icon: <Database className="w-6 h-6 md:w-8 md:h-8" />, description: "Customer orders and restaurant data" },
    { step: "Processing", icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, description: "AI-powered analysis and optimization" },
    { step: "Analysis", icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />, description: "Smart insights and recommendations" },
    { step: "Results", icon: <Monitor className="w-6 h-6 md:w-8 md:h-8" />, description: "Improved efficiency and revenue" }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-bounty-navy mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Engine Behind Your Success
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
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
          <div className="bg-white p-2 rounded-full shadow-lg border border-gray-200 max-w-full overflow-hidden">
            <motion.button
              onClick={() => setActiveTab('software')}
              className={`px-4 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg transition-all duration-500 relative overflow-hidden ${
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
                <Monitor className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Software Solutions</span>
                <span className="sm:hidden">Software</span>
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab('hardware')}
              className={`px-4 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg transition-all duration-500 relative overflow-hidden ${
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
                <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Hardware Solutions</span>
                <span className="sm:hidden">Hardware</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {(activeTab === 'software' ? softwareFeatures : hardwareFeatures).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-bounty-orange/10 rounded-full mb-3 md:mb-4 group-hover:bg-bounty-orange/20 transition-colors duration-300"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-base md:text-lg font-bold text-bounty-navy mb-2 md:mb-3 group-hover:text-bounty-orange transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm">
                      {feature.description}
                    </p>
                    <div className="space-y-1 md:space-y-2">
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

        {/* How BOUNTI Works Section */}
        <motion.div 
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-bounty-navy mb-3 md:mb-4">
              How BOUNTI Works
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Our streamlined process transforms your restaurant operations through intelligent automation
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4 max-w-6xl mx-auto px-4">
            {bountiWorkflow.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center group w-full md:flex-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-bounty-navy to-bounty-orange text-white p-4 md:p-6 rounded-full mb-3 md:mb-4 group-hover:shadow-xl transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-bounty-navy mb-2 group-hover:text-bounty-orange transition-colors duration-300">
                  {item.step}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm max-w-32 md:max-w-40">
                  {item.description}
                </p>
                
                {index < bountiWorkflow.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute mt-6"
                    style={{ transform: 'translateX(120px)' }}
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ArrowRight className="w-6 h-6 text-bounty-orange" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-bounty-navy to-bounty-orange p-6 md:p-8 rounded-2xl text-white mx-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Complete Integration, Maximum Performance
            </h3>
            <p className="text-base md:text-lg mb-4 md:mb-6 text-white/90">
              Our software and hardware work seamlessly together to deliver unmatched restaurant management capabilities
            </p>
            <motion.button 
              className="bg-white text-bounty-navy px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base"
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
