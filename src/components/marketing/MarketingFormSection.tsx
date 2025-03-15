
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
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.6 
            }}
          >
            <MessageSquare className="h-8 w-8 text-blue-600" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Start Your Digital Journey
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          ></motion.div>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Ready to transform your social media presence? Fill out the form below and our team of digital marketing experts will create a customized strategy for your brand.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 1.0
          }}
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <div className="p-8">
            <RequestForm />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MarketingFormSection;
