import React from 'react';
import { motion } from 'framer-motion';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Cookie Policy
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide you with a better experience on our website</li>
                <li>To remember your preferences and settings</li>
                <li>To understand how you use our website</li>
                <li>To improve our website's functionality</li>
                <li>To provide personalized content and advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies are necessary for the website to function properly. They enable basic functions 
                    like page navigation and access to secure areas of the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies enable the website to provide enhanced functionality and personalization. 
                    They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Marketing Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies are used to track visitors across websites. The intention is to display ads 
                    that are relevant and engaging for the individual user.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Some cookies on our website are set by third-party services. We use third-party analytics services 
                like Google Analytics to help us understand how our website is being used. These services may set 
                cookies on your device to collect information about your usage patterns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Managing Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings. 
                  You can set your browser to refuse cookies or to alert you when cookies are being sent.
                </li>
                <li>
                  <strong>Third-Party Tools:</strong> You can opt out of certain third-party cookies by visiting 
                  the respective opt-out pages.
                </li>
                <li>
                  <strong>Mobile Settings:</strong> Mobile devices typically have settings that allow you to 
                  control cookies and other tracking technologies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cookie Consent
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By using our website, you consent to our use of cookies as described in this policy. 
                If you do not agree to our use of cookies, you should set your browser settings accordingly 
                or not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Changes to This Cookie Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this cookie policy from time to time to reflect changes in our practices or 
                for other operational, legal, or regulatory reasons. We will notify you of any material changes 
                by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our use of cookies or this cookie policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  Email: pythoncoderexpert@gmail.com<br />
                  Phone: +923444675899
                </p>
              </div>
            </section>

            <div className="border-t pt-8">
              <p className="text-sm text-gray-500">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;