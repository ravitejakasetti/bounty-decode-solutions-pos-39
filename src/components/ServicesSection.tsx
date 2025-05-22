
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Cake, Car, Coffee as DriveIn, Utensils } from 'lucide-react';

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
      workflow: "Barista takes an order on a tablet ➝ Customizes the drink ➝ POS sends it to the kitchen or counter ➝ Payment is processed via card, wallet, or UPI ➝ Loyalty points added automatically."
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
      workflow: "Customer selects items ➝ Cashier scans barcodes ➝ Discounts or combos are auto-applied ➝ Customer pays and receives a receipt ➝ Order data syncs with CRM for future promotions."
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
      workflow: "Customer orders from the window ➝ Staff inputs the order ➝ Printed KOT goes to kitchen ➝ Customer pays via phone ➝ Dashboard syncs when online to update analytics."
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
      workflow: "Staff takes orders at the car ➝ Order hits kitchen via POS ➝ Food prepared and delivered ➝ Payment processed in-car ➝ Customer data saved for loyalty programs."
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
      workflow: "Host seats customer ➝ Server takes order via tablet ➝ Kitchen receives KOT ➝ Courses are timed and delivered ➝ Bill is generated and payment processed ➝ Analytics updated for insights."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
            Bounty: Tailored for Every Taste, Every Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From bustling cafes to fine dining establishments, Bounty adapts to your unique restaurant needs with specialized features and workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
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
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-bounty-orange mr-2">•</span>
                        {feature}
                      </li>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
