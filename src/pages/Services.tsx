
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee, Cake, Car, Coffee as DriveIn, Utensils, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  
  // Add a new state for the billing process animation
  const [animationStep, setAnimationStep] = useState(0);
  
  React.useEffect(() => {
    // Auto-advance the animation steps
    if (animationStep < 5) {
      const timer = setTimeout(() => {
        setAnimationStep(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setAnimationStep(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [animationStep]);
  
  const services = [
    {
      id: 'cafes',
      icon: <Coffee className="w-16 h-16 text-bounty-orange" />,
      title: "Cafes: Where Speed Meets Style",
      description: "Cafes need swift service and smooth customer flow. POS systems help manage high customer volumes without sacrificing quality.",
      image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80",
      features: [
        "Quick billing with modifiers (soy milk, extra shot, sugar-free)",
        "Order splitting for group customers", 
        "Loyalty programs and prepaid cards",
        "Tablet-based POS for tableside ordering",
        "Inventory alerts for coffee beans, syrups, and more"
      ]
    },
    {
      id: 'bakeries',
      icon: <Cake className="w-16 h-16 text-bounty-orange" />,
      title: "Bakeries: Delightfully Organized",
      description: "In bakeries, every pastry and loaf matters. POS software helps manage daily stock, track expiry dates, and even pre-order seasonal items.",
      image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=800&q=80",
      features: [
        "Barcode scanning for packaged goods",
        "Real-time stock updates",
        "Batch tracking for perishables", 
        "Advance order booking and delivery scheduling",
        "Customer relationship management (CRM)"
      ]
    },
    {
      id: 'food-trucks',
      icon: <Car className="w-16 h-16 text-bounty-orange" />,
      title: "Food Trucks: Mobility & Efficiency Combined",
      description: "Food trucks need POS systems that are fast, compact, and capable of working offline.",
      image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80",
      features: [
        "Cloud-based POS with offline functionality",
        "Compact hardware with touch interfaces",
        "Integrated mobile payment and QR-code support",
        "Order and KOT printing",
        "Sales heatmaps for tracking popular time slots and locations"
      ]
    },
    {
      id: 'drive-ins',
      icon: <DriveIn className="w-16 h-16 text-bounty-orange" />,
      title: "Drive-Ins: Modernizing Classic Charm",
      description: "Drive-ins require a system that connects multiple touchpoints—from car-side ordering to kitchen communication and quick checkout.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      features: [
        "Wireless tablets for car-hop staff",
        "Multiple printers (kitchen, billing, and drinks)",
        "Token system for order pickup",
        "Multi-mode payment options",
        "Customer car-tagging system"
      ]
    },
    {
      id: 'restaurants',
      icon: <Utensils className="w-16 h-16 text-bounty-orange" />,
      title: "Restaurants: Full-Service, Fully Digital",
      description: "Restaurants deal with complex operations, large teams, and diverse menus. POS systems offer the backbone needed for excellence.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      features: [
        "Table management with reservation integration",
        "Course-wise billing (appetizer, main, dessert)",
        "Kitchen Display Systems (KDS) and KOT",
        "Staff performance tracking",
        "Advanced analytics on dish popularity, peak hours, etc.",
        "Multi-location management from a centralized dashboard"
      ]
    }
  ];

  const billingProcess = [
    {
      icon: "📱",
      title: "Customer Scans Menu QR",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80",
      description: "Customer scans the QR code on the table to view the digital menu"
    },
    {
      icon: "🍽️",
      title: "Order Placement",
      image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=800&q=80",
      description: "Customer places order directly through their phone or with wait staff"
    },
    {
      icon: "👨‍🍳",
      title: "Kitchen Processing",
      image: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=800&q=80",
      description: "Order appears instantly on kitchen display system for preparation"
    },
    {
      icon: "🧾",
      title: "Bill Generation",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=800&q=80",
      description: "System calculates bill automatically with all applicable taxes and discounts"
    },
    {
      icon: "💳",
      title: "Payment Processing",
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=800&q=80",
      description: "Customer pays via multiple methods: UPI, cards, or cash"
    },
    {
      icon: "📊",
      title: "Data Analysis",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=80", 
      description: "System logs transaction data for inventory, sales analysis and customer insights"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
              Bounty: Tailored for Every Taste, Every Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From bustling cafes to fine dining establishments, Bounty adapts to your unique restaurant needs with specialized features and workflows.
            </p>
          </div>

          {/* Billing Process Animation Section */}
          <div className="mb-20">
            <motion.h3 
              className="text-3xl font-bold text-bounty-navy text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              The Seamless Bounty Billing Process
            </motion.h3>
            
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-bounty-orange/30 -translate-y-1/2 rounded-full"></div>
              <div className="grid md:grid-cols-6 gap-4 relative">
                {billingProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col items-center z-10 ${animationStep === index ? 'relative z-20' : ''}`}
                    initial={{ opacity: 0.7, scale: 0.9 }}
                    animate={animationStep === index ? { opacity: 1, scale: 1.05, y: -10 } : { opacity: 0.7, scale: 0.9, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative mb-6">
                      <motion.div 
                        className={`w-24 h-24 rounded-full overflow-hidden border-4 ${animationStep === index ? 'border-bounty-orange' : 'border-gray-200'}`}
                        animate={animationStep === index ? { 
                          boxShadow: ["0px 0px 0px rgba(255,126,103,0.3)", "0px 0px 20px rgba(255,126,103,0.7)", "0px 0px 0px rgba(255,126,103,0.3)"]
                        } : {}}
                        transition={{ duration: 1.5, repeat: animationStep === index ? Infinity : 0 }}
                      >
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${animationStep === index ? 'bg-bounty-orange' : 'bg-gray-200'} text-white`}>
                        {index + 1}
                      </div>
                    </div>
                    <motion.div
                      className={`text-center ${animationStep === index ? 'text-bounty-navy font-medium' : 'text-gray-500'}`}
                      animate={animationStep === index ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                      transition={{ duration: 0.5, repeat: animationStep === index ? 3 : 0 }}
                    >
                      <div className="text-3xl mb-1">{step.icon}</div>
                      <h4 className="font-semibold text-sm">{step.title}</h4>
                      <p className="text-xs mt-1 max-w-[150px] mx-auto">{animationStep === index ? step.description : ""}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {services.map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -5 }}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className={`cursor-pointer ${activeService === service.id ? 'ring-2 ring-bounty-orange' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <div 
                    className="h-40 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="w-full h-full bg-bounty-navy/70 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold text-lg text-bounty-navy group-hover:text-bounty-orange transition-colors">
                      {service.title.split(":")[0]}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {activeService && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {services.filter(s => s.id === activeService).map(service => (
                  <Card key={service.id} className="mt-8 overflow-hidden border-0 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div 
                        className="h-80"
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.div 
                        className="p-6"
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-2xl font-bold text-bounty-navy mb-4">{service.title}</h3>
                        <p className="text-gray-700 mb-6">{service.description}</p>
                        
                        <h4 className="font-semibold text-bounty-navy mb-2">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start"
                            >
                              <span className="text-bounty-orange mr-2 text-xl">•</span>
                              <span className="text-gray-600">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Testimonials with billing images */}
          <div className="mt-20">
            <motion.h3 
              className="text-3xl font-bold text-bounty-navy text-center mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What Our Customers Say
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex space-x-4 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
                    alt="Restaurant Owner" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">Amit Sharma</h4>
                    <p className="text-sm text-gray-600">Owner, Spice Garden</p>
                  </div>
                </div>
                <p className="italic text-gray-700 mb-6">
                  "Bounty's billing system has cut our checkout time by 65%. Customers love the quick payment process and digital receipts. The real-time data helps us spot best-selling dishes and optimize our menu accordingly."
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <img 
                    src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=400&q=80" 
                    alt="POS System" 
                    className="rounded-lg object-cover h-28 w-full"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=400&q=80" 
                    alt="Mobile Payment" 
                    className="rounded-lg object-cover h-28 w-full"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 text-5xl">
                  "
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex space-x-4 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
                    alt="Restaurant Manager" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">Priya Patel</h4>
                    <p className="text-sm text-gray-600">Manager, Urban Café</p>
                  </div>
                </div>
                <p className="italic text-gray-700 mb-6">
                  "The QR-based billing system has transformed our operations. We've reduced paper waste and staff can focus on customer service instead of running back and forth with bills. Our customers appreciate the transparency and convenience."
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <img 
                    src="https://images.unsplash.com/photo-1534273749985-beb9bff9c3d3?auto=format&fit=crop&w=400&q=80" 
                    alt="QR Code Billing" 
                    className="rounded-lg object-cover h-28 w-full"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=400&q=80" 
                    alt="Digital Receipt" 
                    className="rounded-lg object-cover h-28 w-full"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 text-5xl">
                  "
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
