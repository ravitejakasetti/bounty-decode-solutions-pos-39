import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Bot, 
  Zap, 
  Factory, 
  Truck, 
  Pill, 
  ShoppingBag, 
  Package,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Target,
  Users
} from 'lucide-react';
import DemoModal from './DemoModal';

// Import AI generated images
import digitalTransformationImg from '@/assets/digital-transformation.jpg';
import aiServicesImg from '@/assets/ai-services.jpg';
import operationsOptimizationImg from '@/assets/operations-optimization.jpg';
import manufacturingSolutionsImg from '@/assets/manufacturing-solutions.jpg';
import supplyChainImg from '@/assets/supply-chain.jpg';

const TechPartnerSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const coreServices = [
    {
      icon: <Globe className="w-12 h-12 text-bounty-orange" />,
      title: "Digital Transformation",
      description: "Modernize legacy systems and integrate data across your business. Build a unified, cloud-ready ecosystem for better decisions. Break silos and create real-time visibility across operations.",
      benefits: ["Faster processes", "Improved collaboration", "Future-ready systems"],
      image: digitalTransformationImg
    },
    {
      icon: <Bot className="w-12 h-12 text-bounty-orange" />,
      title: "AI Services",
      description: "Predict demand, forecast supply, and optimize inventory with AI. Use machine learning for predictive maintenance & quality assurance. Personalize customer experiences in retail & distribution.",
      benefits: ["Smarter decisions", "Reduced downtime", "Higher customer satisfaction"],
      image: aiServicesImg
    },
    {
      icon: <Zap className="w-12 h-12 text-bounty-orange" />,
      title: "Operations Optimization",
      description: "Streamline workflows and eliminate bottlenecks. Route optimization & logistics cost reduction. Automate routine processes to free up your workforce.",
      benefits: ["Lower cost", "Faster delivery", "Up to 30% efficiency gains"],
      image: operationsOptimizationImg
    }
  ];

  const industries = [
    {
      icon: <Factory className="w-8 h-8 text-bounty-orange" />,
      title: "Manufacturing",
      challenges: "Downtime, quality defects, legacy systems",
      solutions: [
        "Predictive maintenance powered by AI",
        "Production scheduling optimization", 
        "Real-time shop-floor analytics"
      ],
      results: [
        "25% less downtime",
        "Higher throughput",
        "Reduced waste"
      ],
      image: manufacturingSolutionsImg
    },
    {
      icon: <Truck className="w-8 h-8 text-bounty-orange" />,
      title: "Supply Chain & Logistics",
      challenges: "Fragmented data, high logistics costs, lack of visibility",
      solutions: [
        "End-to-end supply chain visibility",
        "AI-based demand forecasting",
        "Transport & route optimization"
      ],
      results: [
        "Lower inventory holding cost",
        "20% improvement in on-time delivery",
        "Resilient operations against disruptions"
      ],
      image: supplyChainImg
    },
    {
      icon: <Pill className="w-8 h-8 text-bounty-orange" />,
      title: "Pharma & Life Sciences",
      challenges: "Regulatory compliance, cold chain monitoring, product recalls",
      solutions: [
        "Serialization & traceability systems",
        "Cold chain monitoring with real-time alerts",
        "Expiry and batch-aware inventory planning"
      ],
      results: [
        "Zero compliance gaps",
        "Less spoilage & wastage",
        "Faster time-to-market"
      ]
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-bounty-orange" />,
      title: "Retail & Consumer Goods",
      challenges: "Stockouts, demand fluctuations, omnichannel complexity",
      solutions: [
        "Unified omnichannel platforms (POS + E-commerce)",
        "AI-driven assortment & promotion optimization",
        "Customer analytics & personalization"
      ],
      results: [
        "30% fewer stockouts",
        "Better margins through smart pricing",
        "Improved customer experience"
      ]
    },
    {
      icon: <Package className="w-8 h-8 text-bounty-orange" />,
      title: "Distribution Networks",
      challenges: "Complex routes, unbalanced inventory, scaling problems",
      solutions: [
        "Smart network design & simulation",
        "Dynamic inventory allocation",
        "Order routing & consolidation"
      ],
      results: [
        "Reduced logistics costs by up to 15%",
        "Balanced supply across nodes",
        "Higher service levels"
      ]
    }
  ];

  const proofOfImpact = [
    {
      industry: "Manufacturing",
      icon: <Factory className="w-6 h-6" />,
      challenge: "A leading manufacturing client faced frequent unplanned equipment downtime, leading to delayed production schedules, high maintenance costs, and reduced output.",
      solution: "Implemented IoT-based sensors on critical machines to capture real-time performance data. Built an AI-driven predictive maintenance model that forecasted machine failures before they happened. Integrated alerts and dashboards into their existing ERP system for visibility.",
      impact: [
        "25% reduction in downtime across key production lines",
        "Lower maintenance costs by avoiding emergency repairs",
        "Consistent production schedules, leading to higher throughput and timely order fulfillment"
      ]
    },
    {
      industry: "Retailer",
      icon: <ShoppingBag className="w-6 h-6" />,
      challenge: "A retail chain struggled with frequent stockouts and overstocking, especially during promotions and seasonal demand spikes. This led to lost sales, high carrying costs, and frustrated customers.",
      solution: "Implemented AI-powered demand forecasting that combined sales history, promotions, and seasonal trends. Automated smart replenishment to balance store-level stock. Enabled real-time visibility of inventory across physical stores and e-commerce channels.",
      impact: [
        "30% improvement in shelf availability, ensuring the right products were always in stock",
        "Significant reduction in lost sales during high-demand periods",
        "Improved customer satisfaction and loyalty with a seamless shopping experience"
      ]
    },
    {
      industry: "Distributor",
      icon: <Truck className="w-6 h-6" />,
      challenge: "A large distributor managing 50+ warehouses and depots faced rising logistics costs, poor truck utilization, and imbalanced inventory across regions.",
      solution: "Modeled their entire distribution network with AI-based optimization tools. Introduced dynamic inventory allocation to ensure stock was balanced across nodes. Implemented route optimization algorithms to improve fleet efficiency and reduce fuel costs.",
      impact: [
        "15% reduction in logistics costs across the network",
        "Higher truck utilization and fewer empty return trips",
        "Balanced inventory across regions, ensuring faster deliveries and improved customer service levels"
      ]
    }
  ];

  const whyChoosePoints = [
    {
      icon: <Users className="w-6 h-6 text-bounty-orange" />,
      title: "Technology Partner, not just a vendor"
    },
    {
      icon: <Target className="w-6 h-6 text-bounty-orange" />,
      title: "Industry-specific expertise across 5 key sectors"
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-bounty-orange" />,
      title: "End-to-end delivery: Strategy → Build → Optimize → Support"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-bounty-orange" />,
      title: "Measurable ROI through efficiency, compliance, and customer satisfaction"
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white relative overflow-hidden">
        {/* Hero Section */}
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
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Badge className="mb-4 bg-bounty-orange text-white">
              ✨ "You have a problem, We have a solution."
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-bounty-orange bg-clip-text text-transparent">
              🚀 Your Trusted Tech Partner for Digital Transformation, AI, and Operational Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Bounti empowers Manufacturing, Pharma, Retail, Supply Chain, and Distribution businesses with intelligent technology solutions that solve today's challenges and prepare you for tomorrow.
            </p>
            <Button 
              size="lg" 
              className="bg-bounty-orange text-white hover:bg-bounty-orange/90 text-xl px-12 py-6 font-bold"
              onClick={() => setIsDemoModalOpen(true)}
            >
              👉 Let's Solve Your Problem Together
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
              1. Our Core Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full shadow-lg border-0 overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-bounty-navy">
                      🌐 {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div>
                      <h4 className="font-semibold text-bounty-navy mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-bounty-orange mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-bounty-orange hover:bg-bounty-orange/90 text-white"
              onClick={() => setIsDemoModalOpen(true)}
            >
              👉 Explore Our Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
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
              2. Industry Solutions
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg border-0">
                  {industry.image && (
                    <div className="relative h-48">
                      <img 
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {industry.icon}
                      <CardTitle className="text-xl text-bounty-navy ml-3">
                        {industry.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-red-600">
                      <strong>Challenges:</strong> {industry.challenges}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-bounty-navy mb-2">Solutions We Deliver:</h4>
                      <ul className="space-y-1">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-bounty-orange mr-2">•</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-bounty-navy mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {industry.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-green-600">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-bounty-orange hover:bg-bounty-orange/90 text-white"
              onClick={() => setIsDemoModalOpen(true)}
            >
              👉 See Industry Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Bounti Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
              3. Why Choose Bounti?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We don't just offer technology. We partner with you. Every solution is tailored to your problem — and we stay until it's solved.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {point.icon}
                <span className="ml-4 text-gray-700 font-medium">{point.title}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-bounty-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Promise:</h3>
            <p className="text-xl mb-6">"You have a problem, We have a solution."</p>
            <Button 
              size="lg" 
              className="bg-bounty-orange hover:bg-bounty-orange/90 text-white"
              onClick={() => setIsDemoModalOpen(true)}
            >
              👉 Work With Your Tech Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Proof of Impact Section */}
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
              4. Proof of Impact
            </h2>
          </motion.div>

          <div className="space-y-12">
            {proofOfImpact.map((proof, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {proof.icon}
                  <h3 className="text-2xl font-bold text-bounty-navy ml-3">{proof.industry}</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{proof.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-bounty-navy mb-2">Our Solution as a Tech Partner:</h4>
                    <p className="text-gray-600 text-sm">{proof.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Impact Delivered:</h4>
                    <ul className="space-y-1">
                      {proof.impact.map((impact, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 bg-gradient-to-r from-bounty-navy to-blue-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">💡 These are just three examples.</h3>
            <p className="text-lg mb-6">
              As your tech partner, we tailor every solution to your business challenges. Whether you're in manufacturing, pharma, retail, supply chain, or distribution — you have a problem, we have a solution.
            </p>
            <Button 
              size="lg" 
              className="bg-bounty-orange hover:bg-bounty-orange/90 text-white"
              onClick={() => setIsDemoModalOpen(true)}
            >
              👉 See How We Can Transform Your Business
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 gradient-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Solve Your Biggest Challenges — Together.
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              At Bounti, we're more than a solutions provider. We're your tech partner for growth.
            </p>
            <Button 
              size="lg" 
              className="bg-bounty-orange text-white hover:bg-bounty-orange/90 text-xl px-12 py-6 font-bold"
              onClick={() => setIsDemoModalOpen(true)}
            >
              👉 Start Your Transformation Today
            </Button>
          </motion.div>
        </div>
      </section>

      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default TechPartnerSection;