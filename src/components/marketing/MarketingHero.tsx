
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Camera } from "lucide-react";

const MarketingHero: React.FC = () => {
  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative overflow-hidden py-12 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Digital Marketing Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Elevate Your Brand's Presence Across All Social Media Platforms
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center flex-wrap gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { Icon: Facebook, color: "bg-blue-600", name: "Facebook" },
            { Icon: Twitter, color: "bg-blue-400", name: "Twitter" },
            { Icon: Instagram, color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600", name: "Instagram" },
            { Icon: Youtube, color: "bg-red-600", name: "YouTube" },
            { Icon: Camera, color: "bg-blue-500", name: "Visual Content" }
          ].map((platform, index) => (
            <motion.div
              key={index}
              variants={iconVariants}
              whileHover="hover"
              className={`p-8 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-20 bg-white border border-white/20 transform transition-all duration-300 pulse-glow`}
            >
              <div className={`w-16 h-16 ${platform.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                <platform.Icon className="h-8 w-8 text-white" />
              </div>
              <p className="text-white font-medium">{platform.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mx-auto max-w-2xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-75"></div>
          <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-1">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <img 
                src="/lovable-uploads/6f353001-20bd-4365-abbc-e9a73d2b044b.png" 
                alt="Social Media Marketing" 
                className="w-full h-auto rounded-lg shadow-2xl" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketingHero;
