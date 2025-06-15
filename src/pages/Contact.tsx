
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    phone: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle phone number validation and restriction
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: numericValue }));
      
      if (numericValue.length > 0) {
        setValidationErrors(prev => ({
          ...prev,
          phone: validatePhone(numericValue) ? 'Valid' : 'Invalid'
        }));
      } else {
        setValidationErrors(prev => ({ ...prev, phone: '' }));
      }
    } else if (name === 'email') {
      setFormData(prev => ({ ...prev, [name]: value }));
      
      if (value.length > 0) {
        setValidationErrors(prev => ({
          ...prev,
          email: validateEmail(value) ? 'Valid' : 'Invalid'
        }));
      } else {
        setValidationErrors(prev => ({ ...prev, email: '' }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        className="pt-24 pb-16 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white relative overflow-hidden"
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
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-bounty-orange bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Ready to transform your restaurant? Get in touch with our team
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-bounty-navy mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg mb-8">
                  We're here to help you revolutionize your restaurant operations. 
                  Reach out to us and let's discuss how BOUNTI can transform your business.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-bounty-orange/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-bounty-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bounty-navy">Phone</h3>
                    <p className="text-gray-600">9704697947, 6309897947</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-bounty-orange/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-bounty-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bounty-navy">Email</h3>
                    <p className="text-gray-600">Info@bountiapps.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-bounty-orange/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-bounty-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bounty-navy">Address</h3>
                    <p className="text-gray-600">123 Business District, Tech City, India</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-bounty-orange/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-bounty-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bounty-navy">Business Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-bounty-navy mb-6">Book Your Free Demo</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bounty-orange focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bounty-orange focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bounty-orange focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    {validationErrors.email && (
                      <span className={`absolute right-3 top-3 text-sm ${
                        validationErrors.email === 'Valid' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {validationErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bounty-orange focus:border-transparent transition-all duration-300"
                      placeholder="9876543210"
                      maxLength={10}
                    />
                    {validationErrors.phone && (
                      <span className={`absolute right-3 top-3 text-sm ${
                        validationErrors.phone === 'Valid' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {validationErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bounty-orange focus:border-transparent transition-all duration-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bounty-orange focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your restaurant and how we can help..."
                  ></textarea>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    className="w-full bg-bounty-orange hover:bg-bounty-orange/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
