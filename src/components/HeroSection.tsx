
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin } from "lucide-react";
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('/lovable-uploads/6f353001-20bd-4365-abbc-e9a73d2b044b.png')] bg-cover bg-center opacity-10 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90"></div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-32 h-32 bg-white/5 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="text-cyan-400 h-6 w-6" />
              <span className="text-cyan-400 font-medium">Tirupati, Andhra Pradesh</span>
            </motion.div>

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
                onClick={() => scrollToSection('request-form')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group flex items-center h-auto text-lg shadow-lg hover:shadow-cyan-500/50"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                { Icon: Facebook, color: "bg-blue-600" },
                { Icon: Twitter, color: "bg-blue-400" },
                { Icon: Instagram, color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" },
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
                  className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer backdrop-blur-md`}
                >
                  <platform.Icon size={20} color="white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
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
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -right-6 top-1/4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [-5, 5, -5]
                }}
                transition={{ 
                  opacity: { delay: 0.8, duration: 0.5 },
                  y: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Twitter size={24} color="white" />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 top-1/3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [5, -5, 5]
                }}
                transition={{ 
                  opacity: { delay: 1.0, duration: 0.5 },
                  y: { duration: 4, repeat: Infinity, repeatType: "reverse", delay: 0.5 }
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Instagram size={20} color="white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
