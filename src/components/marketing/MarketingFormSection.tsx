
import React from "react";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";
import { MessageSquare } from "lucide-react";

const MarketingFormSection: React.FC = () => {
  return (
    <section id="request-form" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <MessageSquare className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Start Your Digital Journey
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your social media presence? Fill out the form below and our team of digital marketing experts will create a customized strategy for your brand.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
          <div className="p-8">
            <RequestForm />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MarketingFormSection;
