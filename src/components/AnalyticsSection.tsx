
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltipContent, ChartTooltip } from '@/components/ui/chart';
import { motion } from 'framer-motion';
import { BarChart3, LineChart, PieChart as PieChartIcon, TrendingUp, Fuel } from 'lucide-react';

const AnalyticsSection = () => {
  // Sample data for charts
  const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 7000 },
    { name: 'May', sales: 9000 },
    { name: 'Jun', sales: 8000 },
  ];

  const funnelData = [
    { name: 'Menu Views', value: 5000, color: '#0088FE' },
    { name: 'Item Selection', value: 4000, color: '#00C49F' },
    { name: 'Cart Addition', value: 3000, color: '#FFBB28' },
    { name: 'Checkout', value: 2000, color: '#FF8042' },
    { name: 'Completed Order', value: 1500, color: '#8884d8' },
  ];

  const pieData = [
    { name: 'Food', value: 65, color: '#FF7E67' },
    { name: 'Beverages', value: 25, color: '#00B0FF' },
    { name: 'Desserts', value: 10, color: '#67D5B5' },
  ];

  // Animated counter
  const counters = [
    { value: 32, label: 'Average Sales Increase' },
    { value: 45, label: 'Reduced Order Time' },
    { value: 78, label: 'Customer Retention' },
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

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-5 h-5 text-bounty-orange mr-2" />
                  <h3 className="text-xl font-semibold text-bounty-navy">Monthly Sales Performance</h3>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="sales" fill="#FF7E67" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <PieChartIcon className="w-5 h-5 text-bounty-orange mr-2" />
                  <h3 className="text-xl font-semibold text-bounty-navy">Sales Distribution</h3>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Funnel Visualization */}
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
                <TrendingUp className="w-5 h-5 text-bounty-orange mr-2" />
                <h3 className="text-xl font-semibold text-bounty-navy">Customer Conversion Funnel</h3>
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
                      {item.name}: {item.value}
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
                      <span>70% of menu viewers add items to cart</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bounty-orange font-bold">•</span>
                      <span>37.5% conversion from first view to purchase</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-bounty-navy mb-2">Optimization Opportunities</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-bounty-orange font-bold">•</span>
                      <span>Simplify checkout process (+10% conversion)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bounty-orange font-bold">•</span>
                      <span>Add item suggestions at cart stage (+15% AOV)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-bounty-navy mb-2">Actions</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-bounty-orange font-bold">•</span>
                      <span>A/B test menu presentation formats</span>
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

        <div className="text-center">
          <motion.p 
            className="text-bounty-navy/70 italic max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            "Since implementing Bounty's analytics, we've increased our sales by 35% and reduced operational costs by 22% through targeted menu optimizations and staff scheduling."
          </motion.p>
          <motion.p 
            className="font-medium text-bounty-navy mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            — Rajesh Kumar, Owner, Spice Garden Restaurant
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
