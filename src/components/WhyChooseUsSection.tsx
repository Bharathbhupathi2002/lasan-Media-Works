
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    "Naturally data-driven marketing strategies",
    "A team of marketing nutritionists",
    "Freshly-pressed custom solutions",
    "Proven track record of nutritional success",
    "Transparent and pure communication"
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-orange-500">LaSan Media</span> Works?
            </h2>
            <p className="text-gray-600 mb-8">
              We provide freshly-squeezed marketing solutions that are organic, authentic, and tailored specifically for your unique brand personality.
            </p>
            
            <div className="space-y-4">
              {benefits.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 bg-orange-100 rounded-full p-1">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1589483232748-515c025575bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&h=700&q=80" 
                alt="Fresh Marketing Team" 
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
