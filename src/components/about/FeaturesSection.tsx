
import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      title: "Cutting-Edge Expertise",
      description: "We stay ahead of industry trends, leveraging the latest digital tools, marketing strategies, and technological advancements to give your business a competitive edge."
    },
    {
      title: "Tailored Growth Strategies",
      description: "No two businesses are alike. Our solutions are customized to align with your unique goals, target audience, and market positioning."
    },
    {
      title: "Results-Driven Approach",
      description: "We focus on measurable impact, ensuring that every campaign and initiative contributes to tangible business growth."
    },
    {
      title: "End-to-End Solutions",
      description: "Whether you're a startup looking to build a brand, an established business seeking digital transformation, or a company aiming to enhance its reach through influencer marketing, we have the expertise to make it happen."
    },
    {
      title: "Passionate Team, Proven Success",
      description: "Our team of skilled strategists, creatives, and consultants work collaboratively to bring your vision to life, turning challenges into opportunities."
    }
  ];
  
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Why Choose LaSan Media?</h2>
      <div className="space-y-6 mb-10">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="flex"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex-shrink-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lasan-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default FeaturesSection;
