
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Users, Settings, Database } from 'lucide-react';

const FeaturesSection = () => {
  const featureCategories = [
    {
      icon: <QrCode className="w-8 h-8 text-bounty-orange" />,
      title: "Sell Smarter, Not Harder",
      features: [
        "Dynamic Menu Management: Instantly change MRPs, disable unavailable items, and highlight specials",
        "Intelligent Discounting & Offers: QR-activated welcome discounts and bill value-based dynamic offers", 
        "Personalized Combo Creation: Craft irresistible combos based on customer budget and choice",
        "Welcome Drinks/Offers: Automate a delightful first impression for new and returning guests"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-bounty-orange" />,
      title: "Turn Every Customer into a Loyal Advocate",
      features: [
        "QR Code Revolution: Welcome discounts, easy menu access, on-container offers",
        "Know Your Customer: Recognize regulars, track visit history, and personalize experiences",
        "Targeted Communication via WhatsApp Bot: Send enticing messages about new dishes and offers",
        "Priority Service & Privileges: Offer faster service or special perks to loyal patrons"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-bounty-orange" />,
      title: "Streamline, Save, and Scale", 
      features: [
        "Smart Inventory Management: Track stock levels in real-time, minimize spoilage",
        "Vendor Management: Simplify supplier interactions and maintain optimal stock levels",
        "Dynamic Pricing Engine: Adjust prices based on peak/low hours or demand",
        "Restaurant Self-Sufficient Delivery System: Manage your own deliveries efficiently"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-bounty-orange" />,
      title: "Step into the Future, Leave Limitations Behind",
      features: [
        "Beyond Fixed Data: Bounty operates on dynamic, real-time information",
        "Trackable & Actionable Insights: Understand customer behavior and operational trends",
        "Control Your Supply Chain: Gain better oversight of inventory and vendor relationships",
        "Comprehensive Analytics: Make data-driven decisions for maximum profitability"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
            Explore the Power of Bounty
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Intelligent Features for Unstoppable Growth. Bounty isn't just software; it's your restaurant's central nervous system, intelligently connecting every aspect of your operation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featureCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <CardTitle className="text-2xl font-bold text-bounty-navy">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-bounty-orange text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
