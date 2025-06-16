
import React, { useEffect } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const phoneNumber = "+919704697947";
  const message = "Hi! I'm interested in booking a demo for BOUNTI. Can you help me?";

  useEffect(() => {
    if (isOpen) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      const smsUrl = `sms:${phoneNumber}?body=${encodedMessage}`;
      
      // Try WhatsApp first
      const whatsappWindow = window.open(whatsappUrl, '_blank');
      
      // If WhatsApp fails to open (user doesn't have it), fallback to SMS
      setTimeout(() => {
        if (whatsappWindow && whatsappWindow.closed) {
          window.open(smsUrl, '_self');
        }
      }, 1000);
      
      // Close the modal immediately
      onClose();
    }
  }, [isOpen, onClose, phoneNumber, message]);

  // Return null since we don't want to show any UI
  return null;
};

export default DemoModal;
