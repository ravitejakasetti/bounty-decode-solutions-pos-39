
import React from 'react';
import { motion } from 'framer-motion';

const IntegrationsSection = () => {
  const integrations = [
    {
      category: "Delivery Partners",
      companies: [
        { name: "Dunzo", logo: "/lovable-uploads/397907f3-0b4f-4026-a7a5-cba66b33706f.png" },
        { name: "Porter", logo: "/lovable-uploads/47a52608-6905-4fb8-906d-6d574a9ce848.png" }
      ]
    },
    {
      category: "Payment Solutions",
      companies: [
        { name: "Razorpay", logo: "https://razorpay.com/assets/razorpay-logo.svg" }
      ]
    }
  ];

  return (
    <section id="integrations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Bounty Integrations
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connected for Peak Performance and Profitability
          </motion.p>
        </div>

        <div className="grid gap-12">
          {integrations.map((category, idx) => (
            <div key={idx} className="text-center">
              <motion.h3 
                className="text-2xl font-bold text-bounty-navy mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {category.category}
              </motion.h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {category.companies.map((company, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-64 h-32 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-w-full max-h-full" 
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
