
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
            About Bounty: Engineering Your Restaurant's Success Story
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-bounty-navy mb-4">
                Bounty: Cultivating Growth for Restaurants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                At Bounty, we believe that every restaurant, regardless of its size or style, deserves the tools to thrive in a competitive landscape. Our mission is to provide an intuitive, powerful, and adaptive restaurant management software that doesn't just manage operations but actively drives sales, enhances customer experiences, and maximizes profitability. We are committed to being your partner in growth, helping you harvest the full potential of your culinary venture.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-bounty-navy mb-4">
                The Decode Solutions Foundation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Bounty is a proud offering from Decode Solutions, a company with a rich heritage of developing cutting-edge technological solutions for diverse industries and multinational corporations. This deep well of experience in software engineering, data analytics, and user-centric design is the bedrock upon which Bounty is built. While Decode Solutions explores a wide spectrum of technological advancements for various sectors, Bounty represents our specialized commitment to revolutionizing the restaurant industry.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-bounty-navy text-center mb-6">
              Our Core Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-bold text-bounty-orange text-xl mb-3">Innovation that Serves</h4>
                <p className="text-gray-700">We constantly explore new ways to make restaurant management smarter and more effective.</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-bounty-orange text-xl mb-3">Customer-Centric Growth</h4>
                <p className="text-gray-700">Your success is our benchmark. We build tools that deliver tangible results for your business.</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-bounty-orange text-xl mb-3">Efficiency Redefined</h4>
                <p className="text-gray-700">We streamline complexities, so you can focus on your passion for food and hospitality.</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-bounty-orange text-xl mb-3">Profitable Partnerships</h4>
                <p className="text-gray-700">We aim to be more than a software provider; we're your strategic ally in achieving greater profitability.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-bounty-navy mb-4">
            Powered by Innovation, Focused on Your Restaurant's Success
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Bounty is the dedicated restaurant management system from the forward-thinking minds at Decode Solutions. While Bounty is laser-focused on perfecting your restaurant's performance today, its foundation is built on technological expertise that anticipates the trends of tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
