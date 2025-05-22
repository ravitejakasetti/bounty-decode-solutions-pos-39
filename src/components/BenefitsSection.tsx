
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
      image: "https://images.unsplash.com/photo-1618598842855-01618b5f8771?auto=format&fit=crop&w=800&q=80" // Dynamic sales chart image
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
      image: "https://images.unsplash.com/photo-1537739999004-c9216e1c0ee5?auto=format&fit=crop&w=800&q=80" // Indian customers at restaurant
    },
    {
      title: "Data-Driven Profitability",
      description: "Make informed decisions with real-time insights. Optimize your menu, reduce costs, and maximize your margins effortlessly.",
      gradient: "from-orange-500 to-red-500",
      icon: <BarChart3 className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80" // POS with analytics screen
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
      </div>
    </section>
  );
};

export default BenefitsSection;
