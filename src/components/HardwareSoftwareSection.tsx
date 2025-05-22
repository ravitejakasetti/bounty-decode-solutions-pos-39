
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HardwareSoftwareSection = () => {
  return (
    <section id="hardware" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
            The Engine Behind Your Success
          </h2>
          <p className="text-xl text-gray-600">
            Bounty's Robust Hardware & Intuitive Software
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-bounty-navy mb-4">
                Sophisticated Software, Simple to Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                At the heart of Bounty is a powerful, cloud-based software platform, meticulously engineered by Decode Solutions. Designed with the busy restaurateur in mind, it boasts:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>User-Friendly Interface:</strong> Navigate with ease, manage operations intuitively, and access critical data without a steep learning curve.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>Robust & Reliable:</strong> Built for performance, ensuring uptime and seamless operation even during your busiest hours.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>Scalable Architecture:</strong> Whether you're a single outlet or a growing chain, Bounty scales with your ambition.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>Real-time Analytics:</strong> Access dashboards and reports that provide actionable insights into sales, customer behavior, and operational efficiency.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>Secure Platform:</strong> Your data, and your customers' data, is protected with industry-standard security measures.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-bounty-navy mb-4">
                Seamless Integration for a Smooth Workflow
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Bounty is designed to work harmoniously within your existing setup or with our recommended hardware solutions for optimal performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>POS Integration:</strong> Works with a variety of modern Point of Sale systems.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>Tablet & Mobile Accessibility:</strong> Manage your restaurant from anywhere, on any device.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>QR Scanners & Printers:</strong> We can recommend or provide compatible hardware to ensure your QR code strategies and order printing run flawlessly.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-bounty-orange text-lg">•</span>
                  <span><strong>Kitchen Display Systems (KDS):</strong> Streamline communication between front-of-house and kitchen staff for faster, more accurate order fulfillment.</span>
                </li>
              </ul>
              <p className="text-gray-700 italic mt-4">
                Our goal is to ensure a hassle-free setup and a technology ecosystem that empowers, not encumbers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HardwareSoftwareSection;
