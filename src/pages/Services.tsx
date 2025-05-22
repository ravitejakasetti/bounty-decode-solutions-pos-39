
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee, Cake, Car, Coffee as DriveIn, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  
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

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {services.map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -5 }}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className={`cursor-pointer ${activeService === service.id ? 'ring-2 ring-bounty-orange' : ''}`}
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
                  <Card key={service.id} className="mt-8 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="h-80">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
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
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
