
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Share2, 
  TrendingUp, 
  Calendar, 
  Users, 
  Palette, 
  BarChart,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Digital Marketing Services",
      description: "Empowering brands with digital marketing solutions, including SEO, PPC, content creation, Meta ads, and data analytics. Our strategies are crafted to boost online visibility, engagement, and conversions, driving measurable growth and customer loyalty.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80",
      details: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing",
        "Meta & Social Ads",
        "Data Analytics & Reporting"
      ]
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Media Marketing Services",
      description: "Transforming social media presence with tailored strategies, engaging content, targeted ads, and community management. Our services build brand loyalty, enhance audience engagement, and drive results through data-driven insights and consistent optimization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80",
      details: [
        "Social Media Strategy",
        "Content Creation & Curation",
        "Community Management",
        "Social Media Advertising",
        "Analytics & Performance Tracking"
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Sales Strategy Services",
      description: "Developing customized sales strategies focused on lead generation, CRM, customer retention, and conversion optimization. Our approach combines data analysis, funnel development, and targeted outreach to boost revenue, maximize ROI, and sustain growth.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80",
      details: [
        "Lead Generation & Nurturing",
        "CRM Implementation & Management",
        "Sales Funnel Development",
        "Conversion Rate Optimization",
        "Customer Retention Strategies"
      ]
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Experiential and Event Marketing",
      description: "Creating memorable brand experiences through virtual and in-person events, interactive campaigns, and live social media coverage. Our experiential marketing connects audiences with brands, driving engagement, awareness, and lasting customer relationships.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80",
      details: [
        "Virtual & In-Person Events",
        "Interactive Brand Experiences",
        "Live Social Media Coverage",
        "Brand Activation Campaigns",
        "Measurement & ROI Analysis"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Influencer Marketing",
      description: "Leveraging influencer partnerships to expand reach, build trust, and connect authentically with target audiences. Our influencer marketing focuses on brand-aligned collaborations, driving engagement, brand loyalty, and measurable results across platforms.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80",
      details: [
        "Influencer Identification & Vetting",
        "Campaign Strategy & Management",
        "Content Collaboration",
        "Performance Tracking",
        "Long-Term Partnership Development"
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Branding & 360° Solutions",
      description: "Offering comprehensive branding solutions, from logo design to messaging, market positioning, and campaign execution. Our 360° approach builds strong brand identities, enhances visibility, and fosters customer loyalty across all touchpoints.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80",
      details: [
        "Brand Identity Development",
        "Visual Design & Logo Creation",
        "Brand Messaging & Voice",
        "Market Positioning",
        "Integrated Marketing Campaigns"
      ]
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics and Optimization",
      description: "Utilizing data analytics and performance tracking to optimize campaigns, improve user experience, and drive conversions. Our approach focuses on continuous improvement, providing actionable insights to maximize ROI and achieve business goals.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&h=1000&q=80",
      details: [
        "Performance Tracking & Reporting",
        "Data Analysis & Insights",
        "A/B Testing & Optimization",
        "User Experience Enhancement",
        "ROI Measurement & Forecasting"
      ]
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
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to enhance your online presence and drive business growth
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={`bg-white border border-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform ${expandedService === index ? 'lg:col-span-3 md:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: expandedService === index ? 1 : 1.03 }}
              layout
            >
              <div 
                className={`h-48 overflow-hidden ${expandedService === index ? 'md:h-64' : ''}`}
                style={{
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: expandedService === index ? 1.1 : 1 
                  }}
                  transition={{ duration: 0.5 }}
                />
                {expandedService === index && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white text-2xl font-bold p-6">{service.title}</h3>
                  </motion.div>
                )}
              </div>
              <div className="p-6">
                {expandedService !== index && (
                  <>
                    <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                  </>
                )}
                
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      
                      <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {service.details.map((detail, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <span className="text-blue-600">
                              <ArrowRight className="h-4 w-4" />
                            </span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="flex justify-between items-center">
                        <a 
                          href="#request-form" 
                          className="inline-flex items-center text-blue-600 font-medium hover:underline"
                        >
                          Request this service
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <Button
                  variant="ghost" 
                  size="sm"
                  className="mt-4 w-full flex items-center justify-center text-blue-600"
                  onClick={() => toggleService(index)}
                >
                  {expandedService === index ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span>Learn More</span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
