
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Laptop, Tablet, QrCode, Printer } from 'lucide-react';

const HardwareSoftwareSection = () => {
  const [activeTab, setActiveTab] = useState("software");

  const softwareFeatures = [
    {
      icon: <Laptop className="w-8 h-8 text-bounty-orange" />,
      title: "User-Friendly Interface",
      description: "Navigate with ease, manage operations intuitively, and access critical data without a steep learning curve.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <motion.div
        animate={{ rotate: [0, 15, 0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Tablet className="w-8 h-8 text-bounty-orange" />
      </motion.div>,
      title: "Robust & Reliable",
      description: "Built for performance, ensuring uptime and seamless operation even during your busiest hours.",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <QrCode className="w-8 h-8 text-bounty-orange" />
      </motion.div>,
      title: "Real-time Analytics",
      description: "Access dashboards and reports that provide actionable insights into sales, customer behavior, and operational efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const hardwareFeatures = [
    {
      icon: <Tablet className="w-8 h-8 text-bounty-orange" />,
      title: "POS Integration",
      description: "Works with a variety of modern Point of Sale systems for seamless operation.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <QrCode className="w-8 h-8 text-bounty-orange" />,
      title: "QR Scanners & Printers",
      description: "Compatible hardware to ensure your QR code strategies and order printing run flawlessly.",
      image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Printer className="w-8 h-8 text-bounty-orange" />,
      title: "Kitchen Display Systems (KDS)",
      description: "Streamline communication between front-of-house and kitchen staff for faster, more accurate order fulfillment.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="hardware" className="py-20 bg-white">
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
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bounty's Robust Hardware & Intuitive Software
          </motion.p>
        </div>

        <Tabs defaultValue="software" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger 
              value="software"
              onClick={() => setActiveTab("software")}
              className="text-lg py-3"
            >
              Software
            </TabsTrigger>
            <TabsTrigger 
              value="hardware"
              onClick={() => setActiveTab("hardware")}
              className="text-lg py-3"
            >
              Hardware
            </TabsTrigger>
          </TabsList>

          <TabsContent value="software" className="mt-8">
            <div className="grid md:grid-cols-3 gap-8">
              {softwareFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-center mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-center text-bounty-navy">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full h-48 object-cover transition-all duration-500 hover:scale-105"
                        />
                      </div>
                      <p className="text-gray-600 text-center">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Animated Software Flow */}
            <motion.div
              className="mt-12 bg-gray-50 p-8 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-center text-bounty-navy mb-8">How Bounty Software Works</h3>
              <div className="relative">
                {/* Software Flow Animation */}
                <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
                  <motion.div
                    className="bg-white p-4 rounded-xl shadow-lg text-center mb-4 md:mb-0 md:w-1/5"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-bounty-orange/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Laptop className="w-8 h-8 text-bounty-orange" />
                    </div>
                    <h4 className="font-semibold text-bounty-navy">Data Input</h4>
                  </motion.div>
                  
                  <motion.div 
                    className="hidden md:block h-1 bg-gradient-to-r from-bounty-orange to-bounty-navy flex-1 mx-2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  />
                  
                  <motion.div
                    className="bg-white p-4 rounded-xl shadow-lg text-center mb-4 md:mb-0 md:w-1/5"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="bg-bounty-orange/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bounty-orange">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-bounty-navy">Processing</h4>
                  </motion.div>
                  
                  <motion.div 
                    className="hidden md:block h-1 bg-gradient-to-r from-bounty-orange to-bounty-navy flex-1 mx-2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                  />
                  
                  <motion.div
                    className="bg-white p-4 rounded-xl shadow-lg text-center mb-4 md:mb-0 md:w-1/5"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="bg-bounty-orange/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bounty-orange">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-bounty-navy">Analysis</h4>
                  </motion.div>
                  
                  <motion.div 
                    className="hidden md:block h-1 bg-gradient-to-r from-bounty-orange to-bounty-navy flex-1 mx-2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                  />
                  
                  <motion.div
                    className="bg-white p-4 rounded-xl shadow-lg text-center md:w-1/5"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <div className="bg-bounty-orange/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bounty-orange">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-bounty-navy">Results</h4>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="hardware" className="mt-8">
            <div className="grid md:grid-cols-3 gap-8">
              {hardwareFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-center mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-center text-bounty-navy">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full h-48 object-cover transition-all duration-500 hover:scale-105"
                        />
                      </div>
                      <p className="text-gray-600 text-center">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Hardware Integration Visualization */}
            <motion.div
              className="mt-12 bg-gray-50 p-8 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-center text-bounty-navy mb-8">Integrated Hardware Ecosystem</h3>
              <div className="relative">
                <div className="w-full max-w-3xl mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80"
                    alt="Hardware Integration" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  
                  {/* Hardware Integration Points */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 bg-white p-2 rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <QrCode className="w-6 h-6 text-bounty-orange" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 left-1/3 bg-white p-2 rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Printer className="w-6 h-6 text-bounty-orange" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 bg-white p-2 rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <Tablet className="w-6 h-6 text-bounty-orange" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HardwareSoftwareSection;
