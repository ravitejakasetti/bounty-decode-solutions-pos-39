
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutBountiSection = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-bounty-orange" />,
      title: "Industry Leading",
      description: "Trusted by restaurants across India for reliable performance"
    },
    {
      icon: <Shield className="w-8 h-8 text-bounty-orange" />,
      title: "Secure & Reliable",
      description: "Bank-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-bounty-orange" />,
      title: "Growth Focused",
      description: "Features designed to help your business scale and succeed"
    },
    {
      icon: <Users className="w-8 h-8 text-bounty-orange" />,
      title: "Expert Support",
      description: "24/7 customer support from restaurant industry experts"
    }
  ];

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
            Why Choose BOUNTI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of restaurants that have transformed their operations with BOUNTI's comprehensive POS solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-bounty-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center items-center space-x-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/4070a0c5-b541-4558-a125-7b8bc650fc06.png" 
              alt="Bounti Software" 
              className="h-16 w-auto"
            />
            <div className="flex items-center space-x-2 text-lg text-gray-600">
              <span>Powered by</span>
              <img 
                src="/lovable-uploads/073bd684-06ff-415e-8d0e-89fec6e40584.png" 
                alt="Decode Solutions" 
                className="h-12 w-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBountiSection;
