
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bounty-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src="/lovable-uploads/4070a0c5-b541-4558-a125-7b8bc650fc06.png" 
                alt="Bounti Software" 
                className="h-12 w-auto"
              />
              <div className="flex items-center space-x-2 text-sm">
                <span>Powered by</span>
                <img 
                  src="/lovable-uploads/073bd684-06ff-415e-8d0e-89fec6e40584.png" 
                  alt="Decode Solutions" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bounti by Decode Solutions - Revolutionizing restaurant management with intelligent automation, dynamic customer engagement, and data-driven strategies for exponential growth.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-bounty-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-bounty-orange transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-bounty-orange transition-colors">Services</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-bounty-orange transition-colors">Features</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: Info@bountiapps.com</li>
              <li>Phone: +91 9704697947</li>
              <li>Phone: +91 6309897947</li>
              <li>Support: Support@bountiapps.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            &copy; 2025 Decode Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-bounty-orange transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-bounty-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
