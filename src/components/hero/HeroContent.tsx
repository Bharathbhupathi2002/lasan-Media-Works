
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialMediaIcons from "./SocialMediaIcons";
import TypewriterText from "./TypewriterText";

interface HeroContentProps {
  onGetStarted: () => void;
}

const HeroContent = ({ onGetStarted }: HeroContentProps) => {
  return (
    <motion.div 
      className="md:w-1/2 text-center md:text-left"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <TypewriterText 
          text="Leading Digital Marketing Agency in India"
          className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text"
        />
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-blue-100 mb-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Elevating businesses with custom digital marketing strategies that drive growth and deliver measurable results across all social media platforms.
      </motion.p>
      
      <motion.div 
        className="flex justify-center md:justify-start space-x-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={onGetStarted}
            className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group flex items-center h-auto text-lg shadow-lg overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-full"
              initial={{ scale: 0 }}
              whileHover={{ 
                scale: [0, 1.5, 0],
                transition: { duration: 0.6 }
              }}
            />
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
      
      <SocialMediaIcons />
    </motion.div>
  );
};

export default HeroContent;
