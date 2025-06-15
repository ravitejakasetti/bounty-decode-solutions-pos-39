
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    phone: ''
  });

  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 10;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Demo request submitted:', formData);
    
    toast({
      title: "Demo Request Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    
    // Reset form and close modal
    setFormData({ name: '', phone: '', email: '' });
    setValidationErrors({ email: '', phone: '' });
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Phone number validation and restriction
    if (name === 'phone') {
      const cleanValue = value.replace(/\D/g, '');
      if (cleanValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: cleanValue }));
        
        // Real-time validation for phone number
        if (cleanValue.length > 0) {
          if (validatePhone(cleanValue)) {
            setValidationErrors(prev => ({ ...prev, phone: 'Valid phone number' }));
          } else {
            setValidationErrors(prev => ({ ...prev, phone: 'Invalid phone number (must be exactly 10 digits)' }));
          }
        } else {
          setValidationErrors(prev => ({ ...prev, phone: '' }));
        }
      }
      return;
    }

    // Email validation
    if (name === 'email') {
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Real-time validation for email
      if (value.length > 0) {
        if (validateEmail(value)) {
          setValidationErrors(prev => ({ ...prev, email: 'Valid email address' }));
        } else {
          setValidationErrors(prev => ({ ...prev, email: 'Invalid email address' }));
        }
      } else {
        setValidationErrors(prev => ({ ...prev, email: '' }));
      }
      return;
    }

    // Regular input handling for other fields
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-bounty-navy">
            Book Your Free Demo
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number (10 digits) *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="9876543210"
              className="mt-1"
              maxLength={10}
            />
            {validationErrors.phone && (
              <p className={`text-sm mt-1 ${
                validationErrors.phone === 'Valid phone number' 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
                {validationErrors.phone}
              </p>
            )}
          </div>
          
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your.email@example.com"
              className="mt-1"
            />
            {validationErrors.email && (
              <p className={`text-sm mt-1 ${
                validationErrors.email === 'Valid email address' 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
                {validationErrors.email}
              </p>
            )}
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-bounty-orange hover:bg-bounty-orange/90 text-white"
            >
              Submit Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
