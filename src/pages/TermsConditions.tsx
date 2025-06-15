
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.div 
        className="pt-24 pb-16 bg-gradient-to-br from-bounty-navy via-blue-900 to-bounty-navy text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-bounty-orange bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Please read these terms carefully before using our service
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700 mb-8">
              By using the Bounti POS software ("Service"), you agree to the following terms and conditions:
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">1. Definitions</h2>
                <div className="space-y-3 text-gray-700">
                  <p><strong>"Bounti" or "Company":</strong> Refers to Bounti Pvt. Ltd., the provider of the Service.</p>
                  <p><strong>"User" or "Customer":</strong> The restaurant, business, or individual who subscribes to and uses the Service.</p>
                  <p><strong>"Account":</strong> The user account and credentials provided to the Customer to access the Service.</p>
                  <p><strong>"Service" or "Software":</strong> The cloud-based POS software, mobile apps, web interface, and related services provided by Bounti.</p>
                  <p><strong>"Content" or "Data":</strong> All business data, menu information, transaction records, and other information input by the User into the Service.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">2. Account Registration and Access</h2>
                <p className="text-gray-700 leading-relaxed">
                  Users must register for an account to access Bounti. The Customer is responsible for providing accurate and complete information during registration. Each account must have a secure, unique login and may only be used by the authorized employees of the subscribing restaurant. The User is fully responsible for all activity that occurs under its account. The User must keep login credentials confidential and promptly notify Bounti if any unauthorized use is suspected. Bounti reserves the right to suspend or terminate any account if misuse is detected or if false information is provided.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">3. Use of the Service</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bounti grants the User a limited, non-exclusive, non-transferable, revocable license to access and use the Service during the subscription period, solely for the User's internal restaurant operations. The Service is provided over the internet; the User must provide a compatible device and internet connection. The User agrees to use the Service only for lawful business purposes and in accordance with these Terms. The User must comply with all applicable laws (including tax, labor, and food safety regulations) when using Bounti. Bounti does not warrant that the Service will meet all legal requirements for your jurisdiction; you remain responsible for compliance with local laws (for example, using the Service to generate GST invoices as required by Indian tax law).
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">4. Acceptable Use</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The User agrees not to misuse the Service. Prohibited activities include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Using the Service to commit any unlawful or fraudulent act (such as identity theft or tax evasion).</li>
                  <li>Attempting to gain unauthorized access to the Service's systems or other users' accounts.</li>
                  <li>Uploading or transmitting viruses, malware, or any harmful code.</li>
                  <li>Interfering with the Service's operation, bypassing usage limits, or reverse-engineering the Software.</li>
                  <li>Violating any intellectual property rights or confidentiality of others.</li>
                  <li>Sending unsolicited commercial communications (spam) through the Service.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Bounti may monitor service usage to ensure compliance. If the User breaches any part of this Acceptable Use section or these Terms, Bounti may immediately suspend or terminate the User's access without liability.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">5. Software License and Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All intellectual property rights in the Service (including software, documentation, and content) are owned by Bounti. Except for the limited license granted above, the User acquires no rights or ownership in the Service. The User may not copy, modify, distribute, sell, lease, sublicense, or reverse-engineer any part of Bounti's software. The User may not remove or obscure any proprietary notices or labels.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">6. Data Ownership</h2>
                <p className="text-gray-700 leading-relaxed">
                  The User retains all ownership rights to its Content. Bounti does not claim ownership of user-provided data or menu information. Bounti uses the User's data only to provide the Service. On termination, Bounti may delete or anonymize the User's data according to its data retention policy, unless otherwise required by law.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">7. Subscription Fees and Billing</h2>
                <p className="text-gray-700 leading-relaxed">
                  Access to the Service is based on a subscription plan. The User agrees to pay the fees and charges in accordance with Bounti's pricing schedule. All fees are in Indian Rupees (INR) unless stated otherwise. Payments are due by the dates specified in invoices. The User is responsible for any taxes or duties related to the Service.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">8. Warranties and Disclaimers</h2>
                <p className="text-gray-700 leading-relaxed">
                  <strong>No Warranty:</strong> Bounti provides the Service on an "AS-IS" basis without any warranty of any kind. Except as expressly stated in these Terms, Bounti disclaims all warranties, whether express or implied, including any warranty of merchantability, fitness for a particular purpose, title, or non-infringement. Bounti does not guarantee that the Service will be uninterrupted, error-free, or completely secure. The User is responsible for backing up its own data and implementing appropriate security measures.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by law, Bounti shall not be liable for any indirect, incidental, special or consequential damages arising out of or relating to the use of (or inability to use) the Service. This includes, but is not limited to, loss of profits, loss of data, loss of business, or any punitive damages. In no event will Bounti's total liability exceed the amount of subscription fees actually paid by the User for the Service in the twelve months preceding the claim. By using the Service, the User acknowledges these limitations. (Some jurisdictions do not allow limitation of certain warranties or damages; to the extent these limitations are unenforceable, the User's remedy shall be limited to the minimum required by law.)
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">10. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  The User agrees to indemnify and hold Bounti and its officers, directors and employees harmless from any claim, damage, loss or expense (including legal fees) arising from the User's breach of these Terms or misuse of the Service. This includes infringement claims based on the User's data or use of the Service.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">11. Term and Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms remain in effect as long as the User has an active subscription. Bounti may suspend or terminate the User's access to the Service with or without cause by providing notice. In particular, if the User fails to pay any fees within 30 days of their due date, Bounti may terminate access. Upon termination, the User's license to use the Service immediately ends, and the User must cease all use. Bounti will delete or disable access to the User's account and data in accordance with our data policy. Termination does not relieve the User of obligation to pay any accrued fees. The User may cancel the subscription by giving advance notice as required by the applicable plan; however, fees already paid will not be refunded except as required by law.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-bounty-navy mb-4">12. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of courts in the city where Bounti is headquartered, unless otherwise agreed in writing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
