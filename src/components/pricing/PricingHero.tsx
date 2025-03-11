
import React from "react";
import { motion } from "framer-motion";

const PricingHero: React.FC = () => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Plans</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Affordable digital marketing solutions tailored to your business needs
      </p>
    </motion.div>
  );
};

export default PricingHero;
