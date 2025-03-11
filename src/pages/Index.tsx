
import React from "react";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";
import { Check, Citrus, Coffee, CupSoda } from "lucide-react";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pb-32 pt-36 juice-pattern overflow-hidden">
          <div className="fruit-circle fruit-circle-1"></div>
          <div className="fruit-circle fruit-circle-2"></div>
          <div className="fruit-circle fruit-circle-3"></div>
          
          <div className="container mx-auto px-4 text-center md:text-left md:flex md:items-center md:justify-between gap-12 relative z-10">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="juice-heading mb-6">
                Fresh <span className="text-green-600">Digital</span> Marketing
              </h1>
              
              <p className="kittl-subheading mb-8 max-w-xl">
                Squeeze the most out of your brand's online presence with our refreshing digital marketing services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#services" className="juice-button">
                  Our Services
                </a>
                <a href="#contact" className="border-2 border-orange-400 text-orange-500 hover:bg-orange-50 font-medium py-3 px-8 rounded-lg transition-all duration-300">
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
                  src="https://images.unsplash.com/photo-1589365252845-092198ba5334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&h=700&q=80" 
                  alt="Fresh Marketing Concept" 
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
              {[
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
              ].map((service, index) => (
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
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="text-orange-500">LaSan Media</span> Works?
                </h2>
                <p className="text-gray-600 mb-8">
                  We provide freshly-squeezed marketing solutions that are organic, authentic, and tailored specifically for your unique brand personality.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Naturally data-driven marketing strategies",
                    "A team of marketing nutritionists",
                    "Freshly-pressed custom solutions",
                    "Proven track record of nutritional success",
                    "Transparent and pure communication"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 bg-orange-100 rounded-full p-1">
                        <Check className="h-4 w-4 text-orange-500" />
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
                    src="https://images.unsplash.com/photo-1589483232748-515c025575bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&h=700&q=80" 
                    alt="Fresh Marketing Team" 
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
                  Fresh Start Today
                </h2>
                <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600">
                  Request a freshly-squeezed proposal tailored to your business needs
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
