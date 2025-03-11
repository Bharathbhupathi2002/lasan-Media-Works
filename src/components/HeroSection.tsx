
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pb-32 pt-36 juice-pattern overflow-hidden">
      <div className="fruit-circle fruit-circle-1"></div>
      <div className="fruit-circle fruit-circle-2"></div>
      <div className="fruit-circle fruit-circle-3"></div>
      
      <div className="container mx-auto px-4 text-center md:text-left md:flex md:items-center md:justify-between gap-12 relative z-10">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="juice-heading mb-6">
            Fresh <span className="text-green-600">Digital</span> Marketing
          </h1>
          
          <p className="kittl-subheading mb-8 max-w-xl">
            Squeeze the most out of your brand's online presence with our refreshing digital marketing services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#services" className="juice-button">
              Our Services
            </a>
            <a href="#contact" className="border-2 border-orange-400 text-orange-500 hover:bg-orange-50 font-medium py-3 px-8 rounded-lg transition-all duration-300">
              Contact Us
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1589365252845-092198ba5334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&h=700&q=80" 
              alt="Fresh Marketing Concept" 
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      
      <div className="wave-pattern">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
