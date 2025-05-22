
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Dynamic Sales Amplification",
      description: "Watch your revenue soar with intelligent pricing, personalized offers, and targeted promotions that turn every interaction into an opportunity.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Seamless Operational Efficiency", 
      description: "From inventory to orders, and vendors to delivery, Bounty streamlines your processes, freeing you to focus on what you do best – delighting your customers.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Unmatched Customer Loyalty",
      description: "Recognize, reward, and re-engage your patrons like never before. Build lasting relationships that keep them coming back for more.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Data-Driven Profitability",
      description: "Make informed decisions with real-time insights. Optimize your menu, reduce costs, and maximize your margins effortlessly.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
            More Sales, Less Waste, Happier Customers
          </h2>
          <p className="text-xl text-gray-600">
            That's the Bounty Promise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-bounty-navy text-xl font-bold mb-4">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
