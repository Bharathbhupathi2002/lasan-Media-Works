
import React from "react";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";

const MarketingFormSection: React.FC = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <RequestForm />
    </motion.div>
  );
};

export default MarketingFormSection;
