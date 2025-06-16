
import React from 'react';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, TrendingUp, BarChart3, Users, Shield, Globe } from 'lucide-react';

const About = () => {
  const keyFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6 text-bounty-orange" />,
      title: "Integrated Billing & Orders",
      description: "Fast, dependable billing for dine-in, takeout, delivery and online orders, all synced in real time."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-bounty-orange" />,
      title: "Inventory & Recipe Management",
      description: "Automatic stock tracking and recipe costing to reduce waste and optimize margins."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-bounty-orange" />,
      title: "Analytics & Reporting",
      description: "Built‑in dashboards showing sales trends, peak hours, and best‑selling items – insights that empower restaurant owners to make data-driven decisions."
    },
    {
      icon: <Users className="w-6 h-6 text-bounty-orange" />,
      title: "Marketing & Loyalty",
      description: "Tools for customer loyalty programs, digital menus, and targeted promotions to boost repeat business."
    },
    {
      icon: <Globe className="w-6 h-6 text-bounty-orange" />,
      title: "Multi-Outlet Support",
      description: "Easily manage one or many outlets from a single account; expansion is seamless as you add locations or devices."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <motion.div 
        className="pt-32 pb-16 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 -left-20 w-96 h-96 bg-bounty-orange/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-bounty-orange bg-clip-text text-transparent">
              About Us
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Empowering India's restaurants with technology that streamlines operations and drives growth
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main About Us Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-8 text-center">
              BOUNTI: Restaurant Billing Software that Drives Performance, Optimization, and Sales
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                At BOUNTI, we're transforming how restaurants operate with a modern, performance-driven POS (Point of Sale) system designed to empower businesses of all sizes. More than just a billing tool, BOUNTI is built to streamline operations, optimize workflows, and maximize sales — all from a single, intuitive platform.
              </p>
              <p>
                Whether you're managing a bustling café or a fine-dining restaurant, BOUNTI gives you the clarity and control you need to run smarter and grow faster. Our software is designed to adapt to your needs — reducing wait times, preventing billing errors, and delivering real-time sales insights that help you make informed decisions.
              </p>
              <p>
                With BOUNTI, it's not just about transactions — it's about transformation. We're here to help you unlock your restaurant's full potential and serve success every day.
              </p>
            </div>
          </motion.div>

          {/* The Decode Solutions Foundation */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-bounty-navy mb-6 text-center">
              The Decode Solutions Foundation
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                BOUNTI is a proud offering from Decode Solutions, a company with a rich heritage of developing cutting-edge technological solutions for diverse industries and multinational corporations. This deep well of experience in software engineering, data analytics, and user-centric design is the bedrock upon which BOUNTI is built.
              </p>
              <p>
                While Decode Solutions explores a wide spectrum of technological advancements for various sectors, BOUNTI represents our specialized commitment to revolutionizing the restaurant industry.
              </p>
            </div>
          </motion.div>

          {/* Key Features Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-bounty-navy mb-8 text-center">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {feature.icon}
                        <h4 className="font-bold text-bounty-navy ml-3">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div 
            className="bg-gradient-to-br from-bounty-orange to-orange-600 text-white p-12 rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Together, these capabilities make Bounti a powerful ally for restaurants seeking to increase efficiency and grow sales. Our vision is to help every Indian restaurant stay ahead in a rapidly evolving market – just as industry leaders note that an all-in-one restaurant platform lets operators "stay one step ahead of a rapidly evolving hospitality market".
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
