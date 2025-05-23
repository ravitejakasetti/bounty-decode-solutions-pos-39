
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, BarChart3 } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Dynamic Sales Amplification",
      description: "Watch your revenue soar with intelligent pricing, personalized offers, and targeted promotions that turn every interaction into an opportunity.",
      gradient: "from-blue-500 to-cyan-500",
      icon: <TrendingUp className="w-12 h-12" />,
      image: "/lovable-uploads/0125b849-d03f-4131-9aa1-3c5a7a757853.png", // Dynamic pricing image
      stats: [
        { value: "+28%", label: "Average Revenue Increase" },
        { value: "3.2x", label: "Return on Investment" }
      ]
    },
    {
      title: "Seamless Operational Efficiency", 
      description: "From inventory to orders, and vendors to delivery, Bounty streamlines your processes, freeing you to focus on what you do best – delighting your customers.",
      gradient: "from-green-500 to-emerald-500",
      icon: <Clock className="w-12 h-12" />,
      image: "/lovable-uploads/ee9787db-1b25-4d20-8407-69289622a837.png", // Updated to operational efficiency image
      stats: [
        { value: "-42%", label: "Reduced Operational Time" },
        { value: "+65%", label: "Staff Productivity" }
      ]
    },
    {
      title: "Unmatched Customer Loyalty",
      description: "Recognize, reward, and re-engage your patrons like never before. Build lasting relationships that keep them coming back for more.",
      gradient: "from-purple-500 to-pink-500",
      icon: <Users className="w-12 h-12" />,
      image: "/lovable-uploads/ca73a960-993d-4792-b91b-6c3dcbe88c1d.png", // Customer loyalty image
      stats: [
        { value: "+45%", label: "Customer Retention Rate" },
        { value: "2.7x", label: "Repeat Visit Frequency" }
      ]
    },
    {
      title: "Data-Driven Profitability",
      description: "Make informed decisions with real-time insights. Optimize your menu, reduce costs, and maximize your margins effortlessly.",
      gradient: "from-orange-500 to-red-500",
      icon: <BarChart3 className="w-12 h-12" />,
      image: "/lovable-uploads/5d44962b-77d7-4d72-b503-e5460342485a.png", // Updated to data-driven profitability image
      stats: [
        { value: "+35%", label: "Higher Profit Margins" },
        { value: "-23%", label: "Food Waste Reduction" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-bounty-navy/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TrendingUp className="w-7 h-7 text-bounty-orange mr-2" />
            <span className="text-bounty-navy font-medium">Proven Results</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            More Sales, Less Waste, Happier Customers
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            That's the Bounty Promise
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="relative overflow-hidden h-full group hover:shadow-2xl transition-all duration-500 transform border-0 shadow-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-0">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <motion.img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                      </div>
                    </div>
                    <motion.div 
                      className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`text-gradient bg-gradient-to-br ${benefit.gradient}`}>
                        {benefit.icon}
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {benefit.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mt-auto">
                      {benefit.stats.map((stat, idx) => (
                        <motion.div 
                          key={idx} 
                          className="bg-gray-50 p-3 rounded-lg text-center"
                          whileHover={{ y: -3 }}
                        >
                          <motion.div 
                            className="text-xl font-bold"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
                            style={{ background: `linear-gradient(to right, ${benefit.gradient.split(' ')[1]}, ${benefit.gradient.split(' ')[2]})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                          >
                            {stat.value}
                          </motion.div>
                          <p className="text-xs text-gray-500">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Floating animation elements */}
        <div className="relative mt-20">
          <motion.div 
            className="absolute -top-10 left-10 w-16 h-16 bg-bounty-orange/10 rounded-full"
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-20 right-20 w-10 h-10 bg-bounty-navy/10 rounded-full"
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-10 left-1/3 w-12 h-12 bg-green-500/10 rounded-full"
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          />
          
          <div className="bg-gray-50 p-8 rounded-xl text-center relative z-10">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-bounty-navy mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Restaurant?
            </motion.h3>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join restaurants across India that have revolutionized their operations with Bounty's intelligent solutions
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
