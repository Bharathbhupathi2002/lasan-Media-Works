
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const iconVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2 + (i * 0.1),
        duration: 0.3,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Elevate Your <span className="text-cyan-400">Digital Presence</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-xl">
              Custom digital marketing strategies that drive growth and deliver measurable results for your business across all social media platforms.
            </p>
            
            <div className="flex justify-center md:justify-start mb-8">
              <Button 
                onClick={scrollToSection('request-form')}
                className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-all duration-300 group flex items-center h-auto text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                { Icon: Facebook, color: "bg-blue-600" },
                { Icon: Twitter, color: "bg-blue-400" },
                { Icon: Instagram, color: "bg-pink-600" },
                { Icon: Youtube, color: "bg-red-600" },
                { Icon: Linkedin, color: "bg-blue-700" }
              ].map((platform, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
                >
                  <platform.Icon size={20} color="white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-1">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/6f353001-20bd-4365-abbc-e9a73d2b044b.png" 
                    alt="Digital Marketing" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating social media icons */}
              <motion.div 
                className="absolute -right-6 top-1/4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center shadow-lg float-animation">
                  <Twitter size={24} color="white" />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 top-1/3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center shadow-lg float-animation">
                  <Instagram size={20} color="white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
