
import React from "react";
import { motion } from "framer-motion";

const AboutHeader = () => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Learn more about LaSan Media and our mission to empower businesses
      </p>
    </motion.div>
  );
};

export default AboutHeader;
