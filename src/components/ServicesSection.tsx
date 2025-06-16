import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Cake, Car, Coffee as DriveIn, Utensils, Wine, Cloud, Building, ChefHat, Users, IceCream, Pizza, Zap, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import DemoModal from './DemoModal';

const ServicesSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const services = [
    {
      icon: <Utensils className="w-12 h-12 text-bounty-orange" />,
      title: "Fine Dine",
      description: "Elevate your fine dining experience with sophisticated POS solutions that match your restaurant's elegance and attention to detail.",
      features: [
        "Multi-course meal management",
        "Wine pairing suggestions",
        "Premium customer profiles",
        "Advanced table reservation system",
        "Chef's special tracking"
      ],
      workflow: "Host welcomes guests ➝ Sommelier recommendations via POS ➝ Course-wise ordering ➝ Kitchen coordination ➝ Premium service delivery ➝ Elegant billing process.",
      image: "/lovable-uploads/02546268-d488-48fa-be25-62472e82137f.png"
    },
    {
      icon: <Wine className="w-12 h-12 text-bounty-orange" />,
      title: "Bar & Restaurants",
      description: "Manage complex operations with integrated bar and kitchen systems, ensuring seamless service from cocktails to main courses.",
      features: [
        "Integrated bar and kitchen POS",
        "Cocktail recipe management",
        "Age verification system",
        "Happy hour pricing automation",
        "Inventory tracking for liquor and food"
      ],
      workflow: "Customer orders drinks and food ➝ Split billing between bar and kitchen ➝ Synchronized preparation ➝ Combined service delivery ➝ Integrated payment processing.",
      image: "/lovable-uploads/59788541-b2be-4350-8505-f8696df7cfe2.png"
    },
    {
      icon: <Cloud className="w-12 h-12 text-bounty-orange" />,
      title: "Cloud Kitchens",
      description: "Optimize delivery-only operations with cloud-based solutions designed for maximum efficiency and multi-platform order management.",
      features: [
        "Multi-platform order aggregation",
        "Delivery partner integration",
        "Kitchen display optimization",
        "Real-time order tracking",
        "Performance analytics by platform"
      ],
      workflow: "Orders from multiple apps ➝ Centralized order management ➝ Kitchen preparation ➝ Delivery coordination ➝ Customer satisfaction tracking.",
      image: "/lovable-uploads/ec04254c-2a39-40c9-b9a0-511a2c636ec7.png"
    },
    {
      icon: <Building className="w-12 h-12 text-bounty-orange" />,
      title: "Chain Restaurants",
      description: "Centralized management system for multiple locations with standardized operations, reporting, and brand consistency across all outlets.",
      features: [
        "Multi-location management dashboard",
        "Standardized menu and pricing",
        "Centralized inventory control",
        "Performance comparison tools",
        "Brand consistency enforcement"
      ],
      workflow: "Centralized menu updates ➝ Location-specific customization ➝ Real-time performance monitoring ➝ Consolidated reporting ➝ Chain-wide analytics.",
      image: "/lovable-uploads/537d89f3-a122-42a7-a92b-a4bd0c2628f4.png"
    },
    {
      icon: <ChefHat className="w-12 h-12 text-bounty-orange" />,
      title: "Central Kitchens",
      description: "Streamline large-scale food production with specialized systems for bulk preparation, quality control, and distribution management.",
      features: [
        "Bulk production planning",
        "Quality control checkpoints",
        "Distribution scheduling",
        "Batch tracking and traceability",
        "Waste management optimization"
      ],
      workflow: "Production planning ➝ Bulk preparation monitoring ➝ Quality assurance ➝ Distribution coordination ➝ Delivery tracking to outlets.",
      image: "/lovable-uploads/02f468b9-d786-4f4b-a094-b42940d4f498.png"
    },
    {
      icon: <Users className="w-12 h-12 text-bounty-orange" />,
      title: "Caterers",
      description: "Manage complex catering operations with event-specific pricing, advance booking systems, and large-scale order coordination.",
      features: [
        "Event-based order management",
        "Custom menu creation",
        "Advance booking calendar",
        "Large quantity calculations",
        "Delivery scheduling and tracking"
      ],
      workflow: "Event consultation ➝ Custom menu planning ➝ Advance order confirmation ➝ Large-scale preparation ➝ Event delivery and setup.",
      image: "/lovable-uploads/6137f15f-ceb9-4bc3-baeb-bc6ca95d10cd.png"
    },
    {
      icon: <Cake className="w-12 h-12 text-bounty-orange" />,
      title: "Bakeries",
      description: "Perfect for bakeries with fresh product tracking, batch management, and customer pre-order systems for special occasions.",
      features: [
        "Fresh product lifecycle management",
        "Custom cake order system",
        "Batch production tracking",
        "Expiry date monitoring",
        "Special occasion calendar"
      ],
      workflow: "Daily production planning ➝ Batch preparation ➝ Fresh product display ➝ Custom order management ➝ Quality-assured sales.",
      image: "/lovable-uploads/bf87d363-f0a6-4f1e-8a96-6411517cf34c.png"
    },
    {
      icon: <Coffee className="w-12 h-12 text-bounty-orange" />,
      title: "Cafes & Pizzaria",
      description: "Combining cafe efficiency with pizza kitchen management, perfect for establishments offering both quick service and made-to-order items.",
      features: [
        "Dual service model management",
        "Pizza customization system",
        "Coffee preparation tracking",
        "Combined inventory management",
        "Quick service optimization"
      ],
      workflow: "Customer orders coffee and pizza ➝ Parallel preparation ➝ Timing coordination ➝ Combined service delivery ➝ Integrated billing.",
      image: "/lovable-uploads/fc55ee63-2343-45c7-8943-18e54d24727d.png"
    },
    {
      icon: <IceCream className="w-12 h-12 text-bounty-orange" />,
      title: "Ice Cream Parlours",
      description: "Specialized for frozen treat businesses with temperature monitoring, flavor management, and seasonal menu adjustments.",
      features: [
        "Flavor inventory tracking",
        "Temperature monitoring alerts",
        "Seasonal menu management",
        "Topping and mix-in options",
        "Customer preference tracking"
      ],
      workflow: "Flavor selection ➝ Customization options ➝ Portion control ➝ Temperature maintenance ➝ Quick service delivery.",
      image: "/lovable-uploads/397daf7d-ed66-49be-a368-846ef97e67bd.png"
    },
    {
      icon: <Truck className="w-12 h-12 text-bounty-orange" />,
      title: "Food Trucks",
      description: "Agile, mobile-friendly POS solutions tailored for dynamic environments with limited space and high foot traffic, enabling fast service and real-time inventory tracking.",
      features: [
        "Compact POS interface for small spaces",
        "Offline mode for remote operations",
        "Real-time inventory sync",
        "Mobile payment support (QR, UPI, Tap-to-pay)",
        "Location-based order management"
      ],
      workflow: "Quick order input ➝ Auto inventory deduction ➝ Swift prep in compact space ➝ On-the-go payment ➝ Customer served in seconds.",
      image: "/lovable-uploads/d9337f66-4d47-4070-adee-4a73630863c8.png"
    },
    {
      icon: <Zap className="w-12 h-12 text-bounty-orange" />,
      title: "Quick Service Restaurants",
      description: "High-speed operations with optimized workflows for maximum customer throughput while maintaining food quality and service standards.",
      features: [
        "Speed-optimized ordering",
        "Rapid kitchen communication",
        "Queue management system",
        "Mobile ordering integration",
        "Drive-thru optimization"
      ],
      workflow: "Quick order input ➝ Instant kitchen notification ➝ Rapid preparation ➝ Fast service delivery ➝ Efficient payment processing.",
      image: "/lovable-uploads/be258696-4f71-4055-8849-396da0815d49.png"
    }
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    inView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
              Bounty: Tailored for Every Restaurant Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate fine dining to high-volume quick service, Bounty adapts to your unique restaurant needs with specialized features and workflows.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileInView="inView"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="border-0 shadow-lg h-full overflow-hidden">
                  {service.image && (
                    <div className="relative h-48 w-full">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    <CardTitle className="text-xl font-bold text-bounty-navy mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-bounty-navy mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="text-sm text-gray-600 flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-bounty-orange mr-2">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-bounty-navy mb-2">Example Workflow:</h4>
                      <p className="text-sm text-gray-600 italic">
                        {service.workflow}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="pt-4"
                    >
                      <Button
                        onClick={() => setIsDemoModalOpen(true)}
                        className="w-full bg-bounty-orange hover:bg-bounty-orange/90 text-white transition-all duration-300"
                      >
                        Book a Demo
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default ServicesSection;
