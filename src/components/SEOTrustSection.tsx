import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, MapPin, Phone, Mail } from 'lucide-react';

const SEOTrustSection = () => {
  const certifications = [
    { icon: <Shield className="w-8 h-8" />, title: "ISO 27001 Certified", description: "Data security compliance" },
    { icon: <Award className="w-8 h-8" />, title: "GST Compliant", description: "100% GST ready billing" },
    { icon: <Users className="w-8 h-8" />, title: "5000+ Restaurants", description: "Trusted across India" }
  ];

  const locations = [
    "Delhi POS Software", "Mumbai Restaurant POS", "Bangalore Billing System",
    "Chennai POS Solution", "Hyderabad Restaurant Software", "Pune POS System",
    "Kolkata Billing Software", "Ahmedabad Restaurant POS", "Surat POS Billing",
    "Jaipur Restaurant System", "Lucknow POS Software", "Kanpur Billing Solution"
  ];

  const industries = [
    "Restaurant POS System", "Cafe Billing Software", "Cloud Kitchen POS",
    "Food Truck Software", "Bar POS System", "Quick Service Restaurant",
    "Fine Dining Software", "Bakery POS System", "Pizza Shop Software",
    "Fast Food POS", "Hotel Restaurant POS", "Catering Software"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Trust indicators */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {certifications.map((cert, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4 text-bounty-orange">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold text-bounty-navy mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </motion.div>

        {/* SEO-focused location coverage */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-bounty-navy text-center mb-8">
            POS Billing Software Available Across India
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-4 h-4 text-bounty-orange mx-auto mb-2" />
                <span className="text-sm text-gray-700 font-medium">{location}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industry-specific solutions */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-bounty-navy text-center mb-8">
            Complete Restaurant Management Solutions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-3 bg-bounty-orange/5 rounded-lg border border-bounty-orange/20 hover:border-bounty-orange/40 transition-colors">
                <span className="text-sm text-bounty-navy font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact information for local SEO */}
        <motion.div 
          className="bg-bounty-navy text-white rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Contact Bounti POS Support</h2>
            <p className="text-blue-100 text-lg">
              Get expert support for your restaurant POS system across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-bounty-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Support</h3>
              <p className="text-blue-100">+91 98765 43210</p>
              <p className="text-sm text-blue-200">24/7 Customer Support</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-bounty-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-blue-100">support@bountipos.com</p>
              <p className="text-sm text-blue-200">Response within 2 hours</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-bounty-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Office Location</h3>
              <p className="text-blue-100">Bangalore, Karnataka</p>
              <p className="text-sm text-blue-200">Serving all India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOTrustSection;