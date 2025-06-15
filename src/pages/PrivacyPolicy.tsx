
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Eye, FileText, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  const privacyPoints = [
    {
      icon: <Shield className="w-6 h-6 text-bounty-orange" />,
      title: "Personal Data Protection",
      description: "Bounti does not gather personal information about the diners or employees using the system. All business data remains under the restaurant's control."
    },
    {
      icon: <Database className="w-6 h-6 text-bounty-orange" />,
      title: "No Payment Data Storage",
      description: "We do not collect or store any personal identification or payment information. All transactions are handled by secure third-party gateways."
    },
    {
      icon: <Eye className="w-6 h-6 text-bounty-orange" />,
      title: "Anonymous Usage Data",
      description: "We may collect basic usage metrics and system logs in aggregated form to maintain and improve our service. This data is anonymous."
    },
    {
      icon: <Lock className="w-6 h-6 text-bounty-orange" />,
      title: "Industry-Standard Security",
      description: "We implement industry-standard security measures with encrypted data in transit and secure servers with regular audits."
    },
    {
      icon: <FileText className="w-6 h-6 text-bounty-orange" />,
      title: "Legal Compliance",
      description: "Bounti complies with India's Information Technology Act, 2000 and adheres to applicable data protection principles."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-bounty-orange" />,
      title: "Minimal Data Collection",
      description: "We follow the principle of minimizing data collection and ensure any processing is lawful and transparent."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <motion.div 
        className="pt-24 pb-16 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-bounty-orange bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Your privacy and data security are our top priorities
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl font-semibold text-bounty-navy">
                Bounti is committed to protecting your privacy. We do not collect or store any personal identification or payment information from your customers or staff. Specifically, Bounti never collects names, addresses, email IDs, credit card numbers or other sensitive personal data.
              </p>
              <p>
                All payment transactions are handled by secure third-party gateways, and Bounti does not process or retain credit card details – a best practice that industry experts recognize as more secure for POS systems.
              </p>
            </div>
          </motion.div>

          {/* Privacy Points Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {privacyPoints.map((point, index) => (
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
                      {point.icon}
                      <h4 className="font-bold text-bounty-navy ml-3">{point.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Sections */}
          <motion.div 
            className="max-w-4xl mx-auto space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-bounty-navy mb-4">Personal Data</h3>
              <p className="text-gray-700 leading-relaxed">
                Bounti does not gather personal information about the diners or employees using the system. All business data (orders, sales, etc.) entered in Bounti remains under the restaurant's control. We do not sell or share any personal data with third parties.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-bounty-navy mb-4">Usage Data</h3>
              <p className="text-gray-700 leading-relaxed">
                We may collect basic usage metrics and system logs (such as performance statistics or error reports) in aggregated form to maintain and improve our service. This data is anonymous and does not identify individuals.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-bounty-navy mb-4">Cookies and Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Our website and application may use cookies or similar technologies for functionality (for example, keeping you logged in) and anonymous analytics. These cookies do not store personal data, and users may disable non-essential cookies through their browser settings. We do not use cookies to track personal identifiers.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-bounty-navy mb-4">Data Security</h3>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect all data within our systems. The information that is collected (such as transactional data you enter) is stored securely and encrypted in transit. Regular audits and secure servers ensure compliance with best practices.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-bounty-navy mb-4">Compliance</h3>
              <p className="text-gray-700 leading-relaxed">
                Bounti complies with India's Information Technology Act, 2000 and adheres to applicable data protection principles. We also align our practices with global standards (such as the EU's GDPR) where relevant. Since we do not act as a data controller for personal information, our approach is to minimize data collection and ensure any processing is lawful and transparent.
              </p>
            </div>

            <div className="bg-gradient-to-br from-bounty-orange to-orange-600 text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-lg leading-relaxed">
                In summary, using Bounti will not expose you or your customers to any unnecessary privacy risks. We do not hold any customer personal or payment data, following the principle that a POS provider "does not collect personal data for use in our cloud-based products". Our privacy practices are designed to meet legal requirements and the needs of B2B clients, giving you confidence that restaurant and customer data is safe and handled responsibly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
