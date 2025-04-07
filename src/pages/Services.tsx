
import React from "react";
import PageTransition from "@/components/PageTransition";
import ServicesSection from "@/components/ServicesSection";
import RequestFormSection from "@/components/RequestFormSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        {/* Services Hero Section */}
        <motion.section
          className="py-20 bg-gradient-to-br from-blue-800 to-purple-900 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-cyan-300">Services</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive digital marketing solutions tailored to elevate your brand's presence and drive measurable growth
              </p>
            </motion.div>
            
            {/* Animated service icons with hover cards */}
            <div className="flex justify-center gap-8 flex-wrap mt-10">
              {[
                { name: "Digital", icon: "📊", description: "Digital marketing solutions to boost your online presence" },
                { name: "Social", icon: "📱", description: "Social media strategies for better engagement" },
                { name: "Content", icon: "✍️", description: "Content creation that resonates with your audience" },
                { name: "SEO", icon: "🔍", description: "Search engine optimization for better visibility" },
                { name: "Analytics", icon: "📈", description: "Data-driven insights for informed decisions" }
              ].map((item, i) => (
                <HoverCard key={i}>
                  <HoverCardTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                      whileHover={{ y: -10, scale: 1.05 }}
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -8, 0],
                          rotate: [0, i % 2 === 0 ? 5 : -5, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "mirror" as const,
                          delay: i * 0.2
                        }}
                        className="w-16 h-16 mb-3 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg"
                      >
                        {item.icon}
                      </motion.div>
                      <span className="text-white font-medium">{item.name}</span>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-white/90 backdrop-blur-sm border border-blue-200">
                    <div className="flex flex-col space-y-2">
                      <h4 className="text-lg font-semibold">{item.name} Marketing</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <a 
                        href="#services" 
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline"
                      >
                        Learn more →
                      </a>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </motion.section>
        
        <ServicesSection />
        <RequestFormSection />
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Services;
