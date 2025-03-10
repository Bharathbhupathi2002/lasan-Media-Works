
import React from "react";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";

const Careers = () => {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our talented team and help shape the future of digital marketing
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto glass-card p-10 text-center">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                We're Hiring – Join Our Team Today!
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <motion.div 
                  className="glass-card p-6 card-hover"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="text-2xl font-bold mb-2 text-lasan-blue">IT Sales Executive</div>
                  <p className="text-gray-600">
                    Looking for enthusiastic sales professionals to join our growing team.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="glass-card p-6 card-hover"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="text-2xl font-bold mb-2 text-lasan-blue">Content Writer</div>
                  <p className="text-gray-600">
                    Creative minds wanted to craft compelling content for our clients.
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <a 
                  href="mailto:lasanmediaofficial@gmail.com" 
                  className="btn-primary flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send your CV: lasanmediaofficial@gmail.com
                </a>
                
                <a 
                  href="tel:+917032360404" 
                  className="btn-primary flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call us: +91 7032 360 404
                </a>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Careers;
