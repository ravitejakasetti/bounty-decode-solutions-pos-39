import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import digitalTransformation from '@/assets/digital-transformation.jpg';
import aiServices from '@/assets/ai-services.jpg';
import operationsOptimization from '@/assets/operations-optimization.jpg';

const CoreServices = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 -left-20 w-96 h-96 bg-bounty-orange/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="text-bounty-orange text-lg font-semibold">✨ You have a problem, We have a solution.</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-bounty-orange bg-clip-text text-transparent">
              🚀 Our Core Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Your Trusted Tech Partner for Digital Transformation, AI, and Operational Excellence
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Bounti empowers Manufacturing, Pharma, Retail, Supply Chain, and Distribution businesses with intelligent technology solutions that solve today's challenges and prepare you for tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Digital Transformation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={digitalTransformation} 
                    alt="Digital Transformation" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-bounty-navy flex items-center gap-2">
                    🌐 Digital Transformation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Modernize legacy systems and integrate data across your business</li>
                    <li>• Build a unified, cloud-ready ecosystem for better decisions</li>
                    <li>• Break silos and create real-time visibility across operations</li>
                  </ul>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <strong className="text-green-800">Benefits:</strong>
                    <p className="text-green-700">Faster processes, improved collaboration, future-ready systems</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Services */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={aiServices} 
                    alt="AI Services" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-bounty-navy flex items-center gap-2">
                    🤖 AI Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Predict demand, forecast supply, and optimize inventory with AI</li>
                    <li>• Use machine learning for predictive maintenance & quality assurance</li>
                    <li>• Personalize customer experiences in retail & distribution</li>
                  </ul>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <strong className="text-blue-800">Benefits:</strong>
                    <p className="text-blue-700">Smarter decisions, reduced downtime, higher customer satisfaction</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Operations Optimization */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={operationsOptimization} 
                    alt="Operations Optimization" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-bounty-navy flex items-center gap-2">
                    ⚡ Operations Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Streamline workflows and eliminate bottlenecks</li>
                    <li>• Route optimization & logistics cost reduction</li>
                    <li>• Automate routine processes to free up your workforce</li>
                  </ul>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <strong className="text-orange-800">Benefits:</strong>
                    <p className="text-orange-700">Lower cost, faster delivery, and up to 30% efficiency gains</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center">
            <Button className="bg-bounty-orange hover:bg-bounty-orange/90 text-white px-8 py-3 rounded-full text-lg font-semibold">
              👉 Explore Our Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Bounti */}
      <section className="py-20 bg-bounty-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Bounti?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              We don't just offer technology. We partner with you.
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every solution is tailored to your problem — and we stay until it's solved.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "✅ Technology Partner, not just a vendor",
              "✅ Industry-specific expertise across 5 key sectors", 
              "✅ End-to-end delivery: Strategy → Build → Optimize → Support",
              "✅ Measurable ROI through efficiency, compliance, and customer satisfaction"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-bounty-orange mb-8">
              Our Promise: "You have a problem, We have a solution."
            </p>
            <Button className="bg-bounty-orange hover:bg-bounty-orange/90 text-white px-8 py-3 rounded-full text-lg font-semibold">
              👉 Work With Your Tech Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Proof of Impact */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">Proof of Impact</h2>
          </motion.div>

          <div className="space-y-16">
            {/* Manufacturing Case Study */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🏭</span>
                <h3 className="text-2xl font-bold text-bounty-navy">Manufacturing</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-red-600 mb-3">Challenge:</h4>
                  <p className="text-gray-700">A leading manufacturing client faced frequent unplanned equipment downtime, leading to delayed production schedules, high maintenance costs, and reduced output.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-600 mb-3">Our Solution as a Tech Partner:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Implemented IoT-based sensors on critical machines</li>
                    <li>• Built AI-driven predictive maintenance model</li>
                    <li>• Integrated alerts and dashboards into existing ERP</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-green-600 mb-3">Impact Delivered:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• 25% reduction in downtime across key production lines</li>
                    <li>• Lower maintenance costs by avoiding emergency repairs</li>
                    <li>• Consistent production schedules and higher throughput</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Retail Case Study */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🛒</span>
                <h3 className="text-2xl font-bold text-bounty-navy">Retailer</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-red-600 mb-3">Challenge:</h4>
                  <p className="text-gray-700">A retail chain struggled with frequent stockouts and overstocking, especially during promotions and seasonal demand spikes. This led to lost sales, high carrying costs, and frustrated customers.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-600 mb-3">Our Solution as a Tech Partner:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Implemented AI-powered demand forecasting</li>
                    <li>• Automated smart replenishment systems</li>
                    <li>• Enabled real-time inventory visibility</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-green-600 mb-3">Impact Delivered:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• 30% improvement in shelf availability</li>
                    <li>• Significant reduction in lost sales during high-demand periods</li>
                    <li>• Improved customer satisfaction and loyalty</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Distribution Case Study */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">📦</span>
                <h3 className="text-2xl font-bold text-bounty-navy">Distributor</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-red-600 mb-3">Challenge:</h4>
                  <p className="text-gray-700">A large distributor managing 50+ warehouses and depots faced rising logistics costs, poor truck utilization, and imbalanced inventory across regions.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-600 mb-3">Our Solution as a Tech Partner:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Modeled entire distribution network with AI optimization</li>
                    <li>• Introduced dynamic inventory allocation</li>
                    <li>• Implemented route optimization algorithms</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-green-600 mb-3">Impact Delivered:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• 15% reduction in logistics costs across the network</li>
                    <li>• Higher truck utilization and fewer empty return trips</li>
                    <li>• Balanced inventory and faster deliveries</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 bg-bounty-orange/10 rounded-2xl p-8"
          >
            <p className="text-xl text-gray-700 mb-6">
              💡 These are just three examples. As your tech partner, we tailor every solution to your business challenges. Whether you're in manufacturing, pharma, retail, supply chain, or distribution — you have a problem, we have a solution.
            </p>
            <Button className="bg-bounty-orange hover:bg-bounty-orange/90 text-white px-8 py-3 rounded-full text-lg font-semibold">
              👉 See How We Can Transform Your Business
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-bounty-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Solve Your Biggest Challenges — Together.
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              At Bounti, we're more than a solutions provider. We're your tech partner for growth.
            </p>
            <Button className="bg-bounty-orange hover:bg-bounty-orange/90 text-white px-12 py-4 rounded-full text-xl font-bold">
              👉 Start Your Transformation Today
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoreServices;