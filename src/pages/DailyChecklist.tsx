
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";

const DailyChecklist = () => {
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
    <PageTransition>
      <div className="pt-24 min-h-screen">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Daily Checklist</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive social media marketing checklist for consistent brand growth
              </p>
            </motion.div>
            
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
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default DailyChecklist;
