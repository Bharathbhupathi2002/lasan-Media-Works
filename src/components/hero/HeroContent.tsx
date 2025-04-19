
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialMediaIcons from "./SocialMediaIcons";

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
      {/* Removed location section */}

      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Leading Digital Marketing Agency in{" "}
        <motion.span 
          className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Tirupati
        </motion.span>
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-blue-100 mb-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Elevating businesses across Tirupati with custom digital marketing strategies that drive growth and deliver measurable results across all social media platforms.
      </motion.p>
      
      <motion.div 
        className="flex justify-center md:justify-start space-x-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Button 
          onClick={onGetStarted}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group flex items-center h-auto text-lg shadow-lg hover:shadow-cyan-500/50"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </motion.div>
      
      <SocialMediaIcons />
    </motion.div>
  );
};

export default HeroContent;
