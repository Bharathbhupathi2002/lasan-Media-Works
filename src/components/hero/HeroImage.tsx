
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Instagram } from "lucide-react";
import FloatingBadge from "./FloatingBadge";

const HeroImage = () => {
  return (
    <motion.div 
      className="md:w-1/2"
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="relative">
        <motion.div 
          className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-30"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-1">
          <motion.div 
            className="bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src="/lovable-uploads/6f353001-20bd-4365-abbc-e9a73d2b044b.png" 
              alt="Digital Marketing" 
              className="w-full h-full object-cover transform"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </div>
        
        <FloatingBadge 
          Icon={Twitter} 
          color="bg-gradient-to-r from-blue-400 to-cyan-400" 
          delay={0.8}
          position="right"
        />
        
        <FloatingBadge 
          Icon={Instagram} 
          color="bg-gradient-to-r from-pink-500 to-rose-500" 
          delay={1.0}
          position="left"
        />
      </div>
    </motion.div>
  );
};

export default HeroImage;
