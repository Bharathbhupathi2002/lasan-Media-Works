
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { 
  Search, 
  Share2, 
  TrendingUp, 
  Calendar, 
  Users, 
  Palette, 
  BarChart
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Digital Marketing Services",
      description: "Empowering brands with digital marketing solutions, including SEO, PPC, content creation, Meta ads, and data analytics. Our strategies are crafted to boost online visibility, engagement, and conversions, driving measurable growth and customer loyalty.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Media Marketing Services",
      description: "Transforming social media presence with tailored strategies, engaging content, targeted ads, and community management. Our services build brand loyalty, enhance audience engagement, and drive results through data-driven insights and consistent optimization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Sales Strategy Services",
      description: "Developing customized sales strategies focused on lead generation, CRM, customer retention, and conversion optimization. Our approach combines data analysis, funnel development, and targeted outreach to boost revenue, maximize ROI, and sustain growth.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Experiential and Event Marketing",
      description: "Creating memorable brand experiences through virtual and in-person events, interactive campaigns, and live social media coverage. Our experiential marketing connects audiences with brands, driving engagement, awareness, and lasting customer relationships.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Influencer Marketing",
      description: "Leveraging influencer partnerships to expand reach, build trust, and connect authentically with target audiences. Our influencer marketing focuses on brand-aligned collaborations, driving engagement, brand loyalty, and measurable results across platforms.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Branding & 360° Solutions",
      description: "Offering comprehensive branding solutions, from logo design to messaging, market positioning, and campaign execution. Our 360° approach builds strong brand identities, enhances visibility, and fosters customer loyalty across all touchpoints.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics and Optimization",
      description: "Utilizing data analytics and performance tracking to optimize campaigns, improve user experience, and drive conversions. Our approach focuses on continuous improvement, providing actionable insights to maximize ROI and achieve business goals.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80"
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
            Our Services
          </h2>
          <div className="w-20 h-1 bg-primary-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to enhance your online presence and drive business growth
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center text-primary-purple mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a 
                  href="#request-form" 
                  className="inline-flex items-center text-primary-purple font-medium hover:underline"
                >
                  Request this service
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
