
import React from "react";
import { motion } from "framer-motion";

const MarketingContent: React.FC = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto glass-card p-8 mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p className="mb-6 text-lg leading-relaxed">
        Are you ready to take your brand to peaks and connect with your target audience with the magic of words and engagement? Look no further! At Matebiz, we are passionate about crafting compelling and targeted content marketing strategies that elevate your brand's visibility and credibility.
      </p>
      
      <p className="mb-6 text-lg leading-relaxed">
        Every company has a unique narrative to tell, and we think that storytelling has the potential to engage consumers. Our creative mastermind team is skilled in crafting narratives that evoke emotions, spark curiosity, and forge meaningful connections with your target audience. Whether through captivating blog posts, thought-provoking articles, or engaging social media campaigns, we curate content that resonates with your customers, leaving an indelible mark in their minds.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Strategic Content Tailored for Your Brand</h3>
      <p className="mb-6 text-lg leading-relaxed">
        We believe in the power of tailored solutions. Our content marketing services packages are meticulously designed to complement your brand's distinct voice, objectives, and target audience. We ensure that each piece of content we develop gives value, creates trust, and fosters meaningful connections with your consumers using data-driven insights.
      </p>
      
      <p className="mb-6 text-lg leading-relaxed">
        At Matebiz, your success is our ultimate goal. We go the extra mile to understand your business, industry, and customers, enabling us to create content that resonates and inspires action within affordable content marketing service packages. Our content marketing expertise empowers your brand to stand out in a crowded digital landscape, driving greater brand awareness, higher organic traffic, and increased conversions. We take pride in our client-centric approach. We treat your brand as our own, prioritizing your objectives. Whether you seek to raise brand awareness, drive website traffic, generate leads, or enhance customer engagement, our content marketing strategies are custom-designed to achieve your unique goals.
      </p>
    </motion.div>
  );
};

export default MarketingContent;
