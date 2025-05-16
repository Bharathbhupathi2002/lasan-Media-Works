
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const CoreValues = () => {
  const coreValues = [
    "Empathy",
    "Integrity",
    "Growth Mindset",
    "Excellence with Velocity",
    "Be the Case",
    "Live the Mission",
    "Customer-Centric",
    "We Are a Tribe"
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-8 text-lasan-blue flex items-center">
        Values
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coreValues.map((value, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
            className="flex items-start mb-4"
          >
            <div className="flex-shrink-0 mr-3 text-lasan-blue">
              <Check className="h-6 w-6" />
            </div>
            <p className="text-gray-700">{value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoreValues;
