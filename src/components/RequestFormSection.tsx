
import React from "react";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";

const RequestFormSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Get Started Today
            </h2>
            <div className="w-20 h-1 bg-lasan-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Request a proposal tailored to your business needs
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <RequestForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RequestFormSection;
