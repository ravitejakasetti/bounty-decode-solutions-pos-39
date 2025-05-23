
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Fuel } from 'lucide-react';

const AnalyticsSection = () => {
  // Updated counter data with the values the user requested
  const counters = [
    { value: 45, label: 'Average Sales Increase' },
    { value: 70, label: 'Reduced Order Time' },
    { value: 95, label: 'Customer Retention' },
  ];

  // Data for the funnel visualization
  const funnelData = [
    { name: 'Customer Walk-Ins', value: 5000, color: '#0088FE', percentage: '100%' },
    { name: 'QR Menu Management', value: 4500, color: '#00C49F', percentage: '90%' },
    { name: 'Personalized Offers', value: 3600, color: '#FFBB28', percentage: '72%' },
    { name: 'Up-Sales Success', value: 2800, color: '#FF8042', percentage: '56%' },
    { name: 'Repeat Customer', value: 2000, color: '#8884d8', percentage: '40%' },
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
          <div className="inline-flex items-center justify-center p-2 bg-bounty-navy/10 rounded-full mb-6">
            <Fuel className="w-7 h-7 text-bounty-orange mr-2" />
            <span className="text-bounty-navy font-medium">Data-Driven Insights</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
            Powerful Analytics to Grow Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn your restaurant data into actionable insights with Bounty's comprehensive analytics tools
          </p>
        </motion.div>

        {/* Counters Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <motion.div
                    className="text-5xl font-bold text-bounty-orange mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {counter.value}%
                  </motion.div>
                  <p className="text-gray-700 font-medium">{counter.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Revenue Growth Funnel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-semibold text-bounty-navy">Revenue Growth Funnel</h3>
              </div>

              <div className="flex flex-col items-center gap-3 mb-10">
                {funnelData.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="w-full flex flex-col items-center"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div 
                      className="h-16 rounded-lg flex items-center justify-center text-white font-medium px-4 text-center"
                      style={{ 
                        width: `${(item.value / funnelData[0].value) * 100}%`,
                        backgroundColor: item.color 
                      }}
                    >
                      {item.name}: {item.percentage}
                    </div>
                    {index < funnelData.length - 1 && (
                      <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[15px] border-r-[20px] border-r-transparent mt-1"
                        style={{ borderTopColor: item.color }}></div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-bounty-navy mb-2">Key Insights</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-bounty-orange font-bold">•</span>
                      <span>90% of walk-ins engage with QR menu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bounty-orange font-bold">•</span>
                      <span>40% conversion to repeat customers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-bounty-navy mb-2">Optimization Opportunities</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-bounty-orange font-bold">•</span>
                      <span>Improve personalized offers (+15% conversion)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bounty-orange font-bold">•</span>
                      <span>Enhance up-selling strategies (+20% AOV)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-bounty-navy mb-2">Actions</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-bounty-orange font-bold">•</span>
                      <span>A/B test personalized offers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bounty-orange font-bold">•</span>
                      <span>Implement one-click reordering for returning customers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
