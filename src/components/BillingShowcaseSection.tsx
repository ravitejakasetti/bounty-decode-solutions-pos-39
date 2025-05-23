
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion } from 'framer-motion';

const BillingShowcaseSection = () => {
  const billingImages = [
    {
      url: "/lovable-uploads/c48aa58e-af6c-4973-af27-6bb89086539b.png",
      title: "QR Code Billing Experience"
    },
    {
      url: "/lovable-uploads/0125b849-d03f-4131-9aa1-3c5a7a757853.png",
      title: "Dynamic Pricing System"
    },
    {
      url: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=800&q=80",
      title: "Mobile Payment Processing"
    },
    {
      url: "/lovable-uploads/6e40dab7-d5e7-4309-8046-9b9c09ada9b9.png", 
      title: "Drive-In Restaurant Billing"
    },
    {
      url: "/lovable-uploads/ca73a960-993d-4792-b91b-6c3dcbe88c1d.png",
      title: "Customer Loyalty Integration"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
            Streamlined Restaurant Billing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bounty transforms your billing experience with smart, digital solutions that delight customers and increase efficiency
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {billingImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="p-2 h-full"
                    whileHover={{ scale: 1.05, zIndex: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-2xl h-full">
                      <div className="aspect-w-16 aspect-h-9 relative">
                        <img 
                          src={image.url} 
                          alt={image.title} 
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bounty-navy/80 to-transparent flex items-end p-4">
                          <h3 className="text-white font-semibold">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 mx-0" />
              <CarouselNext className="relative inset-0 translate-y-0 mx-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BillingShowcaseSection;
