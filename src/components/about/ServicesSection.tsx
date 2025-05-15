
import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "SEO, content marketing, social media management, paid advertising, and performance analytics to elevate your online presence."
    },
    {
      title: "Influencer Partnerships",
      description: "Strategic influencer collaborations that amplify brand awareness and foster authentic engagement."
    },
    {
      title: "Business Consulting",
      description: "Data-driven insights and actionable strategies to optimize operations, branding, and market positioning."
    }
  ];
  
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Our Services</h2>
      <div className="space-y-6 mb-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="flex"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          >
            <div className="flex-shrink-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lasan-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.p 
        className="text-lg italic border-l-4 border-lasan-blue pl-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        At LaSan Media, we don't just provide services—we build long-term partnerships that drive success. 
        Let's work together to create a powerful, results-oriented strategy that propels your business forward.
      </motion.p>
    </>
  );
};

export default ServicesSection;
