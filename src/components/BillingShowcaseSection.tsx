
import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const BillingShowcaseSection = () => {
  const billingImages = [
    {
      url: "/lovable-uploads/9a159203-2596-4619-af15-5b5d5d60c31b.png",
      title: "POS Billing Software"
    },
    {
      url: "/lovable-uploads/fbe61a8f-b517-4376-8c4f-1c6703a80df5.png",
      title: "Dynamic Pricing System"
    },
    {
      url: "/lovable-uploads/69a6f564-accc-4416-b2bc-cb9b1f788f3c.png", 
      title: "Interactive Dashboard"
    },
    {
      url: "/lovable-uploads/4c720d4e-ac2d-475c-8fb6-9e695db3289e.png",
      title: "Mobile Payment Processing"
    },
    {
      url: "/lovable-uploads/d8ba5824-041d-4344-8b8a-8747fd444af8.png",
      title: "Customer Loyalty Integration"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-bounty-orange/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-bounty-navy/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-orange-300/20 rounded-full blur-md"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bounty-navy mb-6">
            Streamlined Restaurant Billing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            BOUNTI transforms your billing experience with smart, digital solutions that delight customers and increase efficiency
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {billingImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="p-2 h-full"
                    whileHover={{ scale: 1.05, zIndex: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-2xl h-full border-2 border-bounty-orange/30 hover:border-bounty-orange hover:shadow-3xl transition-all duration-300">
                      <div className="aspect-w-16 aspect-h-9 relative">
                        <img 
                          src={image.url} 
                          alt={image.title} 
                          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bounty-navy/90 to-transparent flex items-end p-4">
                          <h3 className="text-white font-semibold text-sm md:text-base transform translate-y-0 hover:-translate-y-1 transition-transform duration-300">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BillingShowcaseSection;
