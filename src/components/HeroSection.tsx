
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pb-32 pt-36 modern-pattern overflow-hidden">
      <div className="container mx-auto px-4 text-center md:text-left md:flex md:items-center md:justify-between gap-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="kittl-heading mb-6">
            Digital <span className="kittl-accent">Marketing</span> Solutions
          </h1>
          
          <p className="kittl-subheading mb-8 max-w-xl">
            Elevate your brand's online presence with our comprehensive digital marketing services tailored for medium-scale businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#services" className="modern-button group">
              <span className="flex items-center">
                Our Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
            <a href="#contact" className="border-2 border-lasan-blue text-lasan-blue hover:bg-lasan-blue/5 font-medium py-3 px-8 rounded-full transition-all duration-300">
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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white float-animation">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&h=700&q=80" 
              alt="Digital Marketing Team" 
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
