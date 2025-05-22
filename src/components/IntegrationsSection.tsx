
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
            Bounty Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Connected for Peak Performance and Profitability. In today's interconnected world, seamless integration is key to efficiency. Bounty connects with leading service providers to streamline your operations, expand your reach, and simplify your financial management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-bounty-navy mb-4">
                Your Delicious Dishes, Delivered Further, Faster
              </CardTitle>
              <h3 className="text-2xl font-semibold text-bounty-orange">Donzo & Porter</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Reach more customers and manage your delivery operations effortlessly with our built-in integrations:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>Donzo:</strong> Tap into Donzo's extensive delivery network to get your food to hungry customers quickly and reliably.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>Porter:</strong> Leverage Porter for efficient logistics and delivery solutions, ensuring your food arrives fresh and on time.</span>
                </li>
              </ul>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Benefits:</strong> Streamlined order processing from platform to delivery, wider customer base, reduced hassle of managing multiple systems. With Bounty, your restaurant can even explore a self-sufficient delivery model, complemented by these powerful partnerships.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-bounty-navy mb-4">
                Effortless Payments, Happy Customers
              </CardTitle>
              <h3 className="text-2xl font-semibold text-bounty-orange">Razorpay</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Provide a smooth and secure payment experience with our premier payment integration:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>Razorpay:</strong> Offer your customers a multitude of payment options (credit/debit cards, UPI, wallets, etc.) through a secure, reliable, and widely trusted gateway.</span>
                </li>
              </ul>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Benefits:</strong> Faster checkouts, reduced payment errors, enhanced customer trust, and quick settlements for improved cash flow.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-bounty-navy text-center mb-4">
              More Than Just Integrations – A Synergy for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4 text-center">
              These integrations aren't just add-ons; they are vital components of the Bounty ecosystem, working together to:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-bold text-bounty-orange mb-2">Optimize Overall Sales</h4>
                <p className="text-gray-700">By making ordering and payment easier and expanding your delivery reach.</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-bounty-orange mb-2">Ensure Efficient Operations</h4>
                <p className="text-gray-700">By reducing manual data entry and streamlining workflows.</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-bounty-orange mb-2">Enhance Customer Experience</h4>
                <p className="text-gray-700">By offering convenience and choice.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntegrationsSection;
