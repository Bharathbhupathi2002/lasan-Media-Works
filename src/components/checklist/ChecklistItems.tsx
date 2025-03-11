
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

const ChecklistItems: React.FC = () => {
  const checklistItems = [
    {
      title: "Content Development",
      description: "Plan and create engaging social media content aligned with your brand voice."
    },
    {
      title: "Real-Time Engagement",
      description: "Interact directly with your audience on social media to show your engagement."
    },
    {
      title: "Hashtag Strategy",
      description: "Research and include relevant hashtags in your posts to maximize your reach."
    },
    {
      title: "Aesthetic Visuals",
      description: "Create visually appealing content that reinforces your brand identity and fits your visual style."
    },
    {
      title: "Metrics and Analytics",
      description: "Regularly track key metrics to optimize future content and refine your social media strategy."
    },
    {
      title: "Influencer Engagement",
      description: "Explore partnerships with other brands and content creators in your industry."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2 text-lasan-blue uppercase">
          Social Media Marketing
        </h2>
        <div className="w-24 h-1 bg-lasan-blue mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {checklistItems.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            description={item.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default ChecklistItems;
