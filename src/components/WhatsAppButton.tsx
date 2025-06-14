
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = "+919704697947"; // Using the phone number from the footer
  const message = encodeURIComponent("Hi! I'm interested in booking a demo for BOUNTI. Can you help me?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 group flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 4px 20px rgba(34, 197, 94, 0.3)",
            "0 4px 30px rgba(34, 197, 94, 0.5)",
            "0 4px 20px rgba(34, 197, 94, 0.3)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <MessageCircle size={24} />
        <span className="hidden group-hover:block whitespace-nowrap text-sm font-medium">
          Demo Request
        </span>
      </motion.button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us for demo!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;
