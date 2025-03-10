
import React from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  return (
    <motion.div 
      id="contact"
      className="bg-gray-50 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h2>
          <div className="w-20 h-1 bg-lasan-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help grow your business
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto kittl-card p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-lasan-blue/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lasan-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a href="mailto:lasanmediaofficial@gmail.com" className="text-gray-600 hover:text-lasan-blue transition-colors">
                  lasanmediaofficial@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-lasan-blue/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lasan-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <a href="tel:+917032360404" className="text-gray-600 hover:text-lasan-blue transition-colors">
                  +91 7032 360 404
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-lasan-blue/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lasan-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Instagram</h3>
                <a 
                  href="https://www.instagram.com/lasan_media_works/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-lasan-blue transition-colors"
                >
                  @lasan_media_works
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-lasan-blue/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lasan-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/company/lasan-media-works/?originalSubdomain=in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-lasan-blue transition-colors"
                >
                  LaSan Media Works
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500">© {new Date().getFullYear()} LaSan Media Works. All rights reserved.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
