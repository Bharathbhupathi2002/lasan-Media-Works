
import React from "react";
import { motion } from "framer-motion";
import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";
import ParticleBackground from "./hero/ParticleBackground";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="relative min-h-screen py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-[url('/lovable-uploads/6f353001-20bd-4365-abbc-e9a73d2b044b.png')] bg-cover bg-center opacity-10 blur-sm"
          animate={{ 
            y: [0, -20, 0] 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90"></div>
      </motion.div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-32 h-32 bg-white/5 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              scale: [1, 1.5, 1],
              rotate: [0, 360, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <HeroContent onGetStarted={() => scrollToSection('request-form')} />
          <HeroImage />
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </motion.section>
  );
};

export default HeroSection;
