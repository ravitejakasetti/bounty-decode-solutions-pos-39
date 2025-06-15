
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutBountiSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
            How BOUNTI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover our comprehensive restaurant management ecosystem designed to streamline operations and maximize profits
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-bounty-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold text-bounty-navy mb-4">Setup & Integration</h3>
            <p className="text-gray-600">
              Quick setup with seamless integration to your existing systems. Our team ensures smooth transition with minimal downtime.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-bounty-navy to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold text-bounty-navy mb-4">Smart Operations</h3>
            <p className="text-gray-600">
              AI-powered billing, inventory management, and real-time analytics work together to optimize your restaurant operations.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-bold text-bounty-navy mb-4">Growth & Success</h3>
            <p className="text-gray-600">
              Watch your business grow with data-driven insights, improved efficiency, and enhanced customer satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Average Results Section */}
        <motion.div
          className="bg-gradient-to-r from-bounty-navy to-blue-900 rounded-2xl p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-bounty-orange/20 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Average Results with BOUNTI
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { number: "35%", label: "Increase in Revenue", icon: "📈" },
                { number: "50%", label: "Reduction in Wait Time", icon: "⏱️" },
                { number: "25%", label: "Cost Savings", icon: "💰" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-bounty-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-bounty-orange text-white hover:bg-bounty-orange/90 text-xl px-12 py-6 font-bold transition-all duration-300 hover:scale-105"
                >
                  Explore Full Solutions
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBountiSection;
