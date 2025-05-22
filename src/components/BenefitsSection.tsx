
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
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Seamless Operational Efficiency", 
      description: "From inventory to orders, and vendors to delivery, Bounty streamlines your processes, freeing you to focus on what you do best – delighting your customers.",
      gradient: "from-green-500 to-emerald-500",
      icon: <Clock className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Unmatched Customer Loyalty",
      description: "Recognize, reward, and re-engage your patrons like never before. Build lasting relationships that keep them coming back for more.",
      gradient: "from-purple-500 to-pink-500",
      icon: <Users className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Data-Driven Profitability",
      description: "Make informed decisions with real-time insights. Optimize your menu, reduce costs, and maximize your margins effortlessly.",
      gradient: "from-orange-500 to-red-500",
      icon: <BarChart3 className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden h-full group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <CardContent className="p-0">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                      <div className={`text-gradient bg-gradient-to-br ${benefit.gradient}`}>
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Happy Customers Testimonials Section */}
        <div className="mt-20">
          <motion.h3
            className="text-3xl font-bold text-bounty-navy mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Happy Customers, Real Results
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-2xl"
            >
              <div className="flex items-start mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" 
                  alt="Testimonial" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-bounty-navy">Rajesh Sharma</h4>
                  <p className="text-sm text-gray-500">Spice Garden Restaurant</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Since implementing Bounty, we've seen a 30% increase in customer retention and our average order value has grown significantly."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl"
            >
              <div className="flex items-start mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" 
                  alt="Testimonial" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-bounty-navy">Priya Patel</h4>
                  <p className="text-sm text-gray-500">Mumbai Cafe</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The QR code features have revolutionized how we engage with customers. Our loyalty program participation has tripled in just two months!"
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-2xl"
            >
              <div className="flex items-start mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" 
                  alt="Testimonial" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-bounty-navy">Amit Singh</h4>
                  <p className="text-sm text-gray-500">Delhi Street Food</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Food waste reduced by 25%, inventory management is a breeze, and our profits have never been better. Bounty paid for itself within months."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
