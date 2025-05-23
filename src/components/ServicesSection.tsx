
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Cake, Car, Coffee as DriveIn, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: <Coffee className="w-12 h-12 text-bounty-orange" />,
      title: "Cafes: Where Speed Meets Style",
      description: "Cafes need swift service and smooth customer flow. POS systems help manage high customer volumes without sacrificing quality.",
      features: [
        "Quick billing with modifiers (soy milk, extra shot, sugar-free)",
        "Order splitting for group customers", 
        "Loyalty programs and prepaid cards",
        "Tablet-based POS for tableside ordering",
        "Inventory alerts for coffee beans, syrups, and more"
      ],
      workflow: "Barista takes an order on a tablet ➝ Customizes the drink ➝ POS sends it to the kitchen or counter ➝ Payment is processed via card, wallet, or UPI ➝ Loyalty points added automatically.",
      image: "/lovable-uploads/c972e352-51d4-457c-ad0b-75fdcf0edc73.png"
    },
    {
      icon: <Cake className="w-12 h-12 text-bounty-orange" />,
      title: "Bakeries: Delightfully Organized",
      description: "In bakeries, every pastry and loaf matters. POS software helps manage daily stock, track expiry dates, and even pre-order seasonal items.",
      features: [
        "Barcode scanning for packaged goods",
        "Real-time stock updates",
        "Batch tracking for perishables", 
        "Advance order booking and delivery scheduling",
        "Customer relationship management (CRM)"
      ],
      workflow: "Customer selects items ➝ Cashier scans barcodes ➝ Discounts or combos are auto-applied ➝ Customer pays and receives a receipt ➝ Order data syncs with CRM for future promotions.",
      image: "/lovable-uploads/d1252c67-4478-4da3-a38f-7c7300930927.png"
    },
    {
      icon: <Car className="w-12 h-12 text-bounty-orange" />,
      title: "Food Trucks: Mobility & Efficiency Combined",
      description: "Food trucks need POS systems that are fast, compact, and capable of working offline.",
      features: [
        "Cloud-based POS with offline functionality",
        "Compact hardware with touch interfaces",
        "Integrated mobile payment and QR-code support",
        "Order and KOT printing",
        "Sales heatmaps for tracking popular time slots and locations"
      ],
      workflow: "Customer orders from the window ➝ Staff inputs the order ➝ Printed KOT goes to kitchen ➝ Customer pays via phone ➝ Dashboard syncs when online to update analytics.",
      image: "/lovable-uploads/8d788462-6059-4c90-ad48-8e4a1a5351ad.png"
    },
    {
      icon: <DriveIn className="w-12 h-12 text-bounty-orange" />,
      title: "Drive-Ins: Modernizing Classic Charm",
      description: "Drive-ins require a system that connects multiple touchpoints—from car-side ordering to kitchen communication and quick checkout.",
      features: [
        "Wireless tablets for car-hop staff",
        "Multiple printers (kitchen, billing, and drinks)",
        "Token system for order pickup",
        "Multi-mode payment options",
        "Customer car-tagging system"
      ],
      workflow: "Staff takes orders at the car ➝ Order hits kitchen via POS ➝ Food prepared and delivered ➝ Payment processed in-car ➝ Customer data saved for loyalty programs.",
      image: "/lovable-uploads/7b80c419-b908-4fe2-bba6-959f08c899aa.png"
    },
    {
      icon: <Utensils className="w-12 h-12 text-bounty-orange" />,
      title: "Restaurants: Full-Service, Fully Digital",
      description: "Restaurants deal with complex operations, large teams, and diverse menus. POS systems offer the backbone needed for excellence.",
      features: [
        "Table management with reservation integration",
        "Course-wise billing (appetizer, main, dessert)",
        "Kitchen Display Systems (KDS) and KOT",
        "Staff performance tracking",
        "Advanced analytics on dish popularity, peak hours, etc.",
        "Multi-location management from a centralized dashboard"
      ],
      workflow: "Host seats customer ➝ Server takes order via tablet ➝ Kitchen receives KOT ➝ Courses are timed and delivered ➝ Bill is generated and payment processed ➝ Analytics updated for insights.",
      image: "/lovable-uploads/ae960305-62b4-40ab-aa76-a8a610b0728a.png"
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

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 3, repeat: Infinity, repeatType: "reverse" as const }
    }
  };

  return (
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
            Bounty: Tailored for Every Taste, Every Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From bustling cafes to fine dining establishments, Bounty adapts to your unique restaurant needs with specialized features and workflows.
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
              <Card className="border-0 shadow-lg h-full">
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
                  {service.image && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <motion.img 
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
