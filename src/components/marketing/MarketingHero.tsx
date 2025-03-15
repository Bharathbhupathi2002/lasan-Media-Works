
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Camera, Linkedin } from "lucide-react";

const MarketingHero: React.FC = () => {
  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };
  
  const floatingIconsVariants = {
    initial: (i: number) => ({
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      opacity: 0.9,
    }),
    animate: (i: number) => ({
      y: [0, -(5 + i * 2), 0],
      x: [0, (i % 2 === 0 ? 5 : -5), 0],
      scale: [1, 1.05, 1],
      rotate: [0, i % 2 === 0 ? 5 : -5, 0],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="relative overflow-hidden py-12 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating social media icons in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { Icon: Facebook, color: "bg-blue-500", size: 20, top: "10%", left: "5%" },
          { Icon: Twitter, color: "bg-blue-400", size: 16, top: "20%", left: "80%" },
          { Icon: Instagram, color: "bg-pink-500", size: 24, top: "70%", left: "15%" },
          { Icon: Youtube, color: "bg-red-500", size: 18, top: "65%", left: "75%" },
          { Icon: Linkedin, color: "bg-blue-700", size: 14, top: "40%", left: "90%" },
          { Icon: Camera, color: "bg-purple-500", size: 22, top: "85%", left: "60%" },
          { Icon: Facebook, color: "bg-blue-600", size: 12, top: "30%", left: "40%" },
        ].map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={floatingIconsVariants}
            initial="initial"
            animate="animate"
            className={`absolute ${item.color} bg-opacity-20 backdrop-blur-sm p-3 rounded-full flex items-center justify-center`}
            style={{ 
              top: item.top, 
              left: item.left, 
              width: `${item.size * 2}px`, 
              height: `${item.size * 2}px`,
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
            }}
          >
            <item.Icon className="text-white" style={{ width: item.size, height: item.size }} />
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Digital Marketing Solutions
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Elevate Your Brand's Presence Across All Social Media Platforms
          </motion.p>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                boxShadow: ["0 0 10px rgba(255,255,255,0.1)", "0 0 20px rgba(255,255,255,0.2)", "0 0 10px rgba(255,255,255,0.1)"]
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.1,
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <motion.div 
                className={`w-16 h-16 ${platform.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <platform.Icon className="h-8 w-8 text-white" />
              </motion.div>
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
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-75"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-1">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <motion.img 
                src="/lovable-uploads/6f353001-20bd-4365-abbc-e9a73d2b044b.png" 
                alt="Social Media Marketing" 
                className="w-full h-auto rounded-lg shadow-2xl" 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketingHero;
