import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import manufacturingSolutions from '@/assets/manufacturing-solutions.jpg';
import supplyChain from '@/assets/supply-chain.jpg';
import pharmaLifeSciences from '@/assets/pharma-life-sciences.jpg';
import retailConsumerGoods from '@/assets/retail-consumer-goods.jpg';
import distributionNetworks from '@/assets/distribution-networks.jpg';

const IndustrySolutions = () => {
  const industries = [
    {
      icon: "🏭",
      title: "Manufacturing",
      image: manufacturingSolutions,
      challenges: "Downtime, quality defects, legacy systems.",
      solutions: [
        "Predictive maintenance powered by AI",
        "Production scheduling optimization", 
        "Real-time shop-floor analytics"
      ],
      results: [
        "✅ 25% less downtime",
        "✅ Higher throughput",
        "✅ Reduced waste"
      ]
    },
    {
      icon: "🚚",
      title: "Supply Chain & Logistics", 
      image: supplyChain,
      challenges: "Fragmented data, high logistics costs, lack of visibility.",
      solutions: [
        "End-to-end supply chain visibility",
        "AI-based demand forecasting",
        "Transport & route optimization"
      ],
      results: [
        "✅ Lower inventory holding cost",
        "✅ 20% improvement in on-time delivery", 
        "✅ Resilient operations against disruptions"
      ]
    },
    {
      icon: "💊",
      title: "Pharma & Life Sciences",
      image: pharmaLifeSciences,
      challenges: "Regulatory compliance, cold chain monitoring, product recalls.",
      solutions: [
        "Serialization & traceability systems",
        "Cold chain monitoring with real-time alerts",
        "Expiry and batch-aware inventory planning"
      ],
      results: [
        "✅ Zero compliance gaps",
        "✅ Less spoilage & wastage",
        "✅ Faster time-to-market"
      ]
    },
    {
      icon: "🛒",
      title: "Retail & Consumer Goods",
      image: retailConsumerGoods,
      challenges: "Stockouts, demand fluctuations, omnichannel complexity.",
      solutions: [
        "Unified omnichannel platforms (POS + E-commerce)",
        "AI-driven assortment & promotion optimization",
        "Customer analytics & personalization"
      ],
      results: [
        "✅ 30% fewer stockouts",
        "✅ Better margins through smart pricing",
        "✅ Improved customer experience"
      ]
    },
    {
      icon: "📦",
      title: "Distribution Networks",
      image: distributionNetworks,
      challenges: "Complex routes, unbalanced inventory, scaling problems.",
      solutions: [
        "Smart network design & simulation",
        "Dynamic inventory allocation",
        "Order routing & consolidation"
      ],
      results: [
        "✅ Reduced logistics costs by up to 15%",
        "✅ Balanced supply across nodes",
        "✅ Higher service levels"
      ]
    }
  ];

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
          <motion.div 
            className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
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
            <div className="mb-6">
              <span className="text-bounty-orange text-lg font-semibold">✨ You have a problem, We have a solution.</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-bounty-orange bg-clip-text text-transparent">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Tailored technology solutions for Manufacturing, Pharma, Retail, Supply Chain, and Distribution
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Every industry has unique challenges. We deliver specialized solutions that solve your specific problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{industry.icon}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-bounty-navy">{industry.title}</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-red-600 mb-3">Challenges:</h3>
                      <p className="text-gray-700">{industry.challenges}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-blue-600 mb-3">Solutions We Deliver:</h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-green-600 mb-3">Results:</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {industry.results.map((result, idx) => (
                          <div key={idx} className="text-green-700 font-medium">
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-bounty-orange/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="relative w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Button className="bg-bounty-orange hover:bg-bounty-orange/90 text-white px-8 py-3 rounded-full text-lg font-semibold">
              👉 See Industry Solutions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bounty-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Every industry has unique challenges. We deliver specialized solutions that solve your specific problems.
            </p>
            <Button className="bg-bounty-orange hover:bg-bounty-orange/90 text-white px-12 py-4 rounded-full text-xl font-bold">
              👉 Explore Your Industry Solution
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustrySolutions;