
import React from "react";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-[35px] md:text-5xl font-bold mb-6 logo-gradient"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              LaSan Media Works
            </motion.h1>
            
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-xl text-gray-600 mb-8">
                Digital Marketing Solutions for Medium-Scale Businesses
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="glass-card p-6 card-hover">
                  <h3 className="text-lg font-semibold mb-2">Social Media Marketing</h3>
                  <p className="text-gray-600">
                    Engage and grow your audience with data-driven campaigns tailored to your brand
                  </p>
                </div>
                
                <div className="glass-card p-6 card-hover">
                  <h3 className="text-lg font-semibold mb-2">SEO Optimization</h3>
                  <p className="text-gray-600">
                    Improve your online visibility and drive more traffic to your website
                  </p>
                </div>
                
                <div className="glass-card p-6 card-hover">
                  <h3 className="text-lg font-semibold mb-2">Branding Solutions</h3>
                  <p className="text-gray-600">
                    Create a strong brand identity that resonates with your target customers
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Digital Marketing Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our full-service digital marketing agency offers affordable and effective digital 
                marketing plans. We work to deliver improved rankings, increased traffic, and, 
                in turn, more business.
              </p>
            </motion.div>
            
            {/* Form Section */}
            <RequestForm />
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Index;
