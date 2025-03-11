
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WhyChooseUsSection = () => {
  const keyPoints = [
    "Data-driven marketing strategies",
    "Dedicated team of marketing experts",
    "Customized solutions for your business",
    "Proven track record of success",
    "Transparent reporting and communication"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-lasan-blue">LaSan Media</span> Works?
            </h2>
            <p className="text-gray-600 mb-8">
              We believe in the power of tailored solutions. Our digital marketing strategies are meticulously designed to complement your brand's distinct voice, objectives, and target audience.
            </p>
            
            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  <div className="flex-shrink-0 mt-1 mr-3 bg-lasan-blue/10 rounded-full p-1">
                    <Check className="h-4 w-4 text-lasan-blue" />
                  </div>
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl pulse-glow">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&h=700&q=80" 
                alt="Marketing Team" 
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
