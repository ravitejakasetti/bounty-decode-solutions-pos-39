
import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const BillingShowcaseSection = () => {
  const billingImages = [
    {
      url: "/lovable-uploads/6b884a1c-5776-4b24-9ed2-f7d35cdad36b.png",
      title: "Mobile Payment Processing"
    },
    {
      url: "/lovable-uploads/d5275aac-0de5-4845-a30d-b7947013397c.png",
      title: "Dynamic Pricing System"
    },
    {
      url: "/lovable-uploads/4fd01671-5bc0-4a9c-a6e4-7be2b27570da.png",
      title: "POS Billing Software"
    },
    {
      url: "/lovable-uploads/ca73a960-993d-4792-b91b-6c3dcbe88c1d.png", 
      title: "Interactive Dashboard"
    },
    {
      url: "/lovable-uploads/87d4e930-ee29-473e-a26d-b71bad3c3399.png",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bounty-navy mb-6">
            Streamlined Restaurant Billing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Bounti transforms your billing experience with smart, digital solutions that delight customers and increase efficiency
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
                delay: 3000,
              }),
            ]}
          >
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
                          <h3 className="text-white font-semibold text-sm md:text-base">{image.title}</h3>
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
