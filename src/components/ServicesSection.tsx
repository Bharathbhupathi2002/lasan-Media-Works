
import React from "react";
import { motion } from "framer-motion";
import { CupSoda, Citrus, Coffee } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Social Media Freshness",
      description: "Revitalize your social media presence with engaging content that resonates with your audience",
      image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      icon: <CupSoda className="h-8 w-8 text-orange-500" />
    },
    {
      title: "SEO Zest",
      description: "Add zest to your online visibility and drive more organic traffic to your website",
      image: "https://images.unsplash.com/photo-1597403491447-3ab08a1fb517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      icon: <Citrus className="h-8 w-8 text-orange-500" />
    },
    {
      title: "Brand Vitality",
      description: "Create a vibrant brand identity that stands out and connects with your target customers",
      image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      icon: <Coffee className="h-8 w-8 text-orange-500" />
    }
  ];

  return (
    <section id="services" className="py-16 bg-white juice-collage-pattern">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Fresh Digital Marketing Services
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A refreshing blend of solutions to enhance your online presence and grow your business
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="juice-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-2">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
                <a href="#" className="mt-4 inline-flex items-center text-orange-500 hover:underline">
                  Learn more <span className="ml-1">→</span>
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
