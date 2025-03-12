
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Search, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Search Engine Optimization",
      description: "Boost your visibility in search results with our data-driven SEO strategies tailored to your business goals.",
      link: "#request-form"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Social Media Marketing",
      description: "Engage your audience and build your brand with targeted social media campaigns designed for growth.",
      link: "#request-form"
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Make data-driven decisions with comprehensive analytics and reporting that showcase your ROI.",
      link: "#request-form"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Digital Marketing Services
          </h2>
          <div className="w-20 h-1 bg-lasan-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to enhance your online presence and drive business growth
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <div className="p-8">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center text-lasan-blue mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a 
                  href={service.link} 
                  className="inline-flex items-center text-lasan-blue font-medium hover:underline group"
                >
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
