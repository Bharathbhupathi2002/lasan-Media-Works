
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Briefcase, ExternalLink, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "lasanmediaofficial@gmail.com",
      link: "mailto:lasanmediaofficial@gmail.com",
      gradientClass: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 7032 360 404",
      link: "tel:+917032360404",
      gradientClass: "from-purple-500 to-pink-400"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: "Kotakommala St, Reddy and Reddy's Colony, Tirupati, Andhra Pradesh 517501",
      link: "https://maps.app.goo.gl/CuLSNLWiKnu5C4dYA",
      gradientClass: "from-green-500 to-emerald-400"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      value: "@lasan_media_works",
      link: "https://www.instagram.com/lasan_media_works/",
      gradientClass: "from-yellow-400 via-red-500 to-purple-600"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "LinkedIn",
      value: "LaSan Media Works",
      link: "https://www.linkedin.com/company/lasan-media-works/?originalSubdomain=in",
      gradientClass: "from-blue-700 to-blue-500"
    }
  ];

  return (
    <motion.div 
      id="contact"
      className="py-20 bg-gradient-to-b from-pink-50 via-blue-50 to-purple-50 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport({ once: true }}
          >
            Get in touch with our team to discuss how we can help grow your business
          </motion.p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.title === "Instagram" || item.title === "LinkedIn" || item.title === "Address" ? "_blank" : ""}
                rel={item.title === "Instagram" || item.title === "LinkedIn" || item.title === "Address" ? "noopener noreferrer" : ""}
                className="group bg-white border border-gray-100 rounded-xl p-8 shadow-lg transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ 
                  y: -12, 
                  backgroundColor: "#ffffff", 
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={`bg-gradient-to-r ${item.gradientClass} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 transform transition-all duration-300 group-hover:scale-110`}
                  whileHover={{
                    rotate: [0, -5, 5, -5, 0],
                    scale: 1.15,
                    transition: { duration: 0.5 }
                  }}
                  animate={hoveredCard === index ? {
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ],
                    transition: { duration: 1, repeat: Infinity }
                  } : {}}
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, 15, -15, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-4 break-words"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {item.value}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredCard === index ? 1 : 0,
                    y: hoveredCard === index ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-blue-500 font-medium flex items-center"
                >
                  {item.title === "Address" ? "View on Maps" : "Connect"} 
                  <motion.div
                    animate={hoveredCard === index ? { x: [0, 5, 0] } : { x: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-16 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="max-w-md mx-auto bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
            <p className="text-gray-600">© {new Date().getFullYear()} LaSan Media Works. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced background decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-40 right-10 w-36 h-36 bg-purple-200 rounded-full opacity-30 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default ContactSection;
