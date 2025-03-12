
import React from "react";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";

const RequestFormSection = () => {
  return (
    <section id="request-form" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-12 text-white hidden lg:block">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">Ready to grow your business?</h3>
                <p className="text-blue-100 mb-8">
                  Fill out the form and our team will get back to you within 24 hours to discuss how we can help achieve your goals.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom tailored solutions</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Data-driven approach</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated support team</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-12">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-2">
                  Get Started Today
                </h2>
                <p className="text-gray-600">
                  Request a proposal tailored to your business needs
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <RequestForm />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default RequestFormSection;
