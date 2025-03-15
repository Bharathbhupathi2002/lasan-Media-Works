
import React from "react";
import { motion } from "framer-motion";
import { Check, TrendingUp, Users, Award, BarChart } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Data-Driven Strategies",
      description: "We use analytics and metrics to guide all our marketing decisions for maximum ROI."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Expert Team",
      description: "Our specialists bring years of experience across various marketing disciplines."
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Proven Track Record",
      description: "We've helped businesses of all sizes achieve significant growth."
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Transparent Reporting",
      description: "Regular updates and reports keep you informed about your campaign's performance."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full filter blur-3xl"></div>
        <div className="absolute top-60 -right-20 w-60 h-60 bg-purple-200 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-teal-200 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Marketing image above section */}
      <motion.div 
        className="relative max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20"></div>
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/lovable-uploads/08f6b81b-955c-4225-92fa-8b9c7d30eba3.png" 
            alt="Social Media Marketing Cycle" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
          <motion.div 
            className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-white text-2xl font-bold">Strategic Digital Marketing Solutions</h3>
            <p className="text-white/90 mt-2">The complete cycle that powers your social media success</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Why Choose <motion.span 
                className="text-lasan-blue"
                initial={{ color: "#3b82f6" }}
                animate={{ color: ["#3b82f6", "#8b5cf6", "#ec4899", "#3b82f6"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                LaSan Media
              </motion.span>?
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We believe in the power of tailored solutions. Our digital marketing strategies are meticulously designed to complement your brand's distinct voice, objectives, and target audience.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-lasan-blue mb-4"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl blur-lg opacity-20"
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              ></motion.div>
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&h=700&q=80" 
                  alt="Marketing Team" 
                  className="w-full"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
