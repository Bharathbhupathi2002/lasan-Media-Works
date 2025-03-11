
import React from "react";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";

const MarketingFormSection: React.FC = () => {
  return (
    <section id="request-form" className="py-16 bg-white">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Request Our Services
          </h2>
          <div className="w-20 h-1 bg-lasan-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>
        <RequestForm />
      </motion.div>
    </section>
  );
};

export default MarketingFormSection;
