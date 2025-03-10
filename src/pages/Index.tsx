
import React from "react";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pb-32 pt-36 hero-pattern overflow-hidden">
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
                <a href="#services" className="kittl-button">
                  Our Services
                </a>
                <a href="#contact" className="border-2 border-lasan-blue text-lasan-blue hover:bg-lasan-blue/5 font-medium py-3 px-8 rounded-lg transition-all duration-300">
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
        
        {/* Features Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Our Digital Marketing Services
              </h2>
              <div className="w-20 h-1 bg-lasan-blue mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions to enhance your online presence and grow your business digitally
              </p>
            </motion.div>
            
            <div className="kittl-grid">
              {[
                {
                  title: "Social Media Marketing",
                  description: "Engage and grow your audience with data-driven campaigns tailored to your brand",
                  image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80"
                },
                {
                  title: "SEO Optimization",
                  description: "Improve your online visibility and drive more traffic to your website",
                  image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80"
                },
                {
                  title: "Branding Solutions",
                  description: "Create a strong brand identity that resonates with your target customers",
                  image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="kittl-card overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <a href="#" className="mt-4 inline-flex items-center text-lasan-blue hover:underline">
                      Learn more <span className="ml-1">→</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="text-lasan-blue">LaSan Media</span> Works?
                </h2>
                <p className="text-gray-600 mb-8">
                  We believe in the power of tailored solutions. Our digital marketing strategies are meticulously designed to complement your brand's distinct voice, objectives, and target audience.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Data-driven marketing strategies",
                    "Dedicated team of marketing experts",
                    "Customized solutions for your business",
                    "Proven track record of success",
                    "Transparent reporting and communication"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 bg-lasan-blue/10 rounded-full p-1">
                        <Check className="h-4 w-4 text-lasan-blue" />
                      </div>
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&h=700&q=80" 
                    alt="Marketing Team" 
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Request Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Get Started Today
                </h2>
                <div className="w-20 h-1 bg-lasan-blue mx-auto mb-6"></div>
                <p className="text-lg text-gray-600">
                  Request a proposal tailored to your business needs
                </p>
              </div>
              <RequestForm />
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Index;
