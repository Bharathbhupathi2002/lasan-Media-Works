
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-lasan-blue">LaSan Media</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              We believe in the power of tailored solutions. Our digital marketing strategies are meticulously designed to complement your brand's distinct voice, objectives, and target audience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-lasan-blue mb-4">
                    {feature.icon}
                  </div>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&h=700&q=80" 
                  alt="Marketing Team" 
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
