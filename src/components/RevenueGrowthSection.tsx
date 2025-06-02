
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, BarChart3 } from 'lucide-react';

const RevenueGrowthSection = () => {
  const growthStats = [
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "Revenue Growth",
      value: "35%",
      description: "Average increase in monthly revenue"
    },
    {
      icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "Cost Reduction",
      value: "28%",
      description: "Operational cost savings"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "Customer Retention",
      value: "45%",
      description: "Improvement in repeat customers"
    },
    {
      icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-bounty-orange" />,
      title: "Efficiency Boost",
      value: "60%",
      description: "Faster order processing"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-bounty-navy to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Revenue Growth Funnel
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform your restaurant into a profit-generating powerhouse with Bounti's proven growth strategies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {growthStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="flex justify-center mb-3 md:mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-bounty-orange mb-2">{stat.value}</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-2">{stat.title}</h4>
                  <p className="text-gray-200 text-xs md:text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">The Bounti Growth Formula</h3>
            <div className="flex flex-col md:flex-row items-center justify-between text-sm md:text-lg space-y-2 md:space-y-0">
              <span className="bg-bounty-orange text-white px-3 py-2 md:px-4 md:py-2 rounded-lg">Smart Analytics</span>
              <span className="text-bounty-orange text-xl md:text-2xl">+</span>
              <span className="bg-bounty-orange text-white px-3 py-2 md:px-4 md:py-2 rounded-lg">Customer Insights</span>
              <span className="text-bounty-orange text-xl md:text-2xl">+</span>
              <span className="bg-bounty-orange text-white px-3 py-2 md:px-4 md:py-2 rounded-lg">Operational Efficiency</span>
              <span className="text-bounty-orange text-xl md:text-2xl">=</span>
              <span className="bg-yellow-400 text-bounty-navy px-3 py-2 md:px-4 md:py-2 rounded-lg font-bold">Exponential Growth</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RevenueGrowthSection;
