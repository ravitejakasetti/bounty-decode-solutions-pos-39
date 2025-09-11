import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the best POS billing software for restaurants in India?",
      answer: "Bounti POS is the leading billing software for Indian restaurants, offering GST compliance, multi-language support, UPI integration, and 24/7 customer support. Our software is specifically designed for Indian businesses with features like regional payment gateways, local tax compliance, and offline mode functionality."
    },
    {
      question: "How much does restaurant billing software cost in India?",
      answer: "Restaurant billing software in India typically costs between ₹1,500 to ₹15,000 per month, depending on features and business size. Bounti POS offers competitive pricing starting at ₹2,499/month with no hidden fees, including GST billing, inventory management, and payment integration."
    },
    {
      question: "Is Bounti POS software GST compliant?",
      answer: "Yes, Bounti POS is fully GST compliant with automatic tax calculations, GST-invoice generation, return filing support, and HSN code integration. Our software automatically applies correct GST rates (5% for non-AC restaurants, 18% for AC restaurants) and helps with input tax credit management."
    },
    {
      question: "Can I use Bounti POS for cloud kitchen and food delivery business?",
      answer: "Absolutely! Bounti POS is perfect for cloud kitchens with seamless integration with Zomato, Swiggy, Uber Eats, and other delivery platforms. Our system automatically syncs orders, manages inventory, tracks delivery performance, and provides analytics for each platform."
    },
    {
      question: "Does Bounti POS work offline during power cuts?",
      answer: "Yes, Bounti POS has robust offline functionality that ensures your business continues running during internet outages or power cuts. All transactions are saved locally and automatically sync when connectivity is restored, ensuring zero data loss."
    },
    {
      question: "What payment methods does Bounti POS support in India?",
      answer: "Bounti POS supports all popular Indian payment methods including UPI (PhonePe, Paytm, Google Pay), credit/debit cards, cash, digital wallets, NEFT/RTGS, and QR code payments. We integrate with major payment gateways like Razorpay, PayU, and CCAvenue."
    },
    {
      question: "How does Bounti POS help increase restaurant sales?",
      answer: "Bounti POS increases sales through advanced analytics, customer loyalty programs, inventory optimization, staff productivity tools, and marketing automation. Our system identifies trending items, peak hours, and customer preferences to help you make data-driven decisions that boost revenue."
    },
    {
      question: "Can I manage multiple restaurant locations with Bounti POS?",
      answer: "Yes, Bounti POS offers enterprise solutions for restaurant chains with centralized management, real-time reporting across locations, inventory synchronization, staff management, and franchise tracking. You can monitor and control all locations from a single dashboard."
    },
    {
      question: "What customer support does Bounti POS provide?",
      answer: "Bounti POS provides 24/7 customer support in multiple languages including Hindi, English, and regional languages. Our support includes phone, email, WhatsApp, live chat, on-site training, remote assistance, and dedicated account managers for enterprise clients."
    },
    {
      question: "How quickly can I setup Bounti POS in my restaurant?",
      answer: "Bounti POS can be setup in your restaurant within 24-48 hours. Our team provides complete installation, data migration, staff training, and go-live support. We also offer cloud-based quick setup for businesses that want to start immediately."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about POS billing software, pricing, and features for Indian restaurants
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-bounty-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Schema markup for FAQ - Enhanced for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "headline": "Frequently Asked Questions about POS Billing Software in India",
              "description": "Common questions and answers about restaurant POS software, billing systems, and management solutions for Indian businesses",
              "author": {
                "@type": "Organization",
                "name": "Bounti POS",
                "url": "https://bountipos.com"
              },
              "datePublished": "2024-12-15",
              "dateModified": "2024-12-15",
              "mainEntity": faqs.map((faq, index) => ({
                "@type": "Question",
                "name": faq.question,
                "position": index + 1,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                  "author": {
                    "@type": "Organization",
                    "name": "Bounti POS"
                  },
                  "dateCreated": "2024-12-15"
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default FAQSection;