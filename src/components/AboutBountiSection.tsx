
import React from 'react';
import { motion } from 'framer-motion';

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
            About BOUNTI: Engineering Your Restaurant's Success Story
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-bounty-navy mb-6">
              BOUNTI: Restaurant Billing Software that Drives Performance, Optimization, and Sales
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At BOUNTI, we're transforming how restaurants operate with a modern, performance-driven POS (Point of Sale) system designed to empower businesses of all sizes. More than just a billing tool, BOUNTI is built to streamline operations, optimize workflows, and maximize sales — all from a single, intuitive platform.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you're managing a bustling café or a fine-dining restaurant, BOUNTI gives you the clarity and control you need to run smarter and grow faster. Our software is designed to adapt to your needs — reducing wait times, preventing billing errors, and delivering real-time sales insights that help you make informed decisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With BOUNTI, it's not just about transactions — it's about transformation. We're here to help you unlock your restaurant's full potential and serve success every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-bounty-navy mb-6">
              The Decode Solutions Foundation
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              BOUNTI is a proud offering from Decode Solutions, a company with a rich heritage of developing cutting-edge technological solutions for diverse industries and multinational corporations. This deep well of experience in software engineering, data analytics, and user-centric design is the bedrock upon which BOUNTI is built.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While Decode Solutions explores a wide spectrum of technological advancements for various sectors, BOUNTI represents our specialized commitment to revolutionizing the restaurant industry.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-bounty-navy to-blue-900 text-white p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-bounty-orange text-lg font-bold mb-2">Innovation that Serves</div>
                <p className="text-sm text-gray-200">We constantly explore new ways to make restaurant management smarter and more effective.</p>
              </div>
              <div className="text-center">
                <div className="text-bounty-orange text-lg font-bold mb-2">Customer-Centric Growth</div>
                <p className="text-sm text-gray-200">Your success is our benchmark. We build tools that deliver tangible results for your business.</p>
              </div>
              <div className="text-center">
                <div className="text-bounty-orange text-lg font-bold mb-2">Efficiency Redefined</div>
                <p className="text-sm text-gray-200">We streamline complexities, so you can focus on your passion for food and hospitality.</p>
              </div>
              <div className="text-center">
                <div className="text-bounty-orange text-lg font-bold mb-2">Profitable Partnerships</div>
                <p className="text-sm text-gray-200">We aim to be more than a software provider; we're your strategic ally in achieving greater profitability.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBountiSection;
