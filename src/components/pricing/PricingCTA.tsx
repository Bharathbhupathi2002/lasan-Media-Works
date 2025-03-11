
import React from "react";
import { motion } from "framer-motion";

const PricingCTA: React.FC = () => {
  return (
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <p className="text-gray-600 mb-4">
        Need a custom solution for your specific requirements?
      </p>
      <a href="#contact" className="btn-primary inline-flex">
        Contact Us
      </a>
    </motion.div>
  );
};

export default PricingCTA;
