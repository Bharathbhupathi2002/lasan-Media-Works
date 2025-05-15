
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const CoreValues = () => {
  const coreValues = [
    "Empathy – We create with purpose, making brands that resonate deeply.",
    "Integrity – Transparency and ethical leadership are at our core.",
    "Growth Mindset – Adapting, evolving, and innovating—because stagnation isn't an option.",
    "Excellence with Velocity – High-quality execution with lightning speed.",
    "Be the Case – We set industry standards, proving what's possible.",
    "Live the Mission – Passion fuels every project, every strategy, every move we make.",
    "Customer-Centric – Client success drives our success.",
    "We Are a Tribe – Collaboration, loyalty, and unity define our culture."
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-8 text-lasan-blue flex items-center">
        <span className="mr-2">💎</span> Core Values
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700">{value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoreValues;
