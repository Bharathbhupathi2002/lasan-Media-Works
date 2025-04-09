
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Briefcase, ExternalLink, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "lasanmediaofficial@gmail.com",
      link: "mailto:lasanmediaofficial@gmail.com",
      gradientClass: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 7032 360 404",
      link: "tel:+917032360404",
      gradientClass: "from-purple-500 to-pink-400"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      value: "Kotakommala St, Reddy and Reddy's Colony, Tirupati, Andhra Pradesh 517501",
      link: "https://maps.google.com/?q=Kotakommala+St,+Reddy+and+Reddy's+Colony,+Tirupati,+Andhra+Pradesh+517501",
      gradientClass: "from-green-500 to-emerald-400"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram",
      value: "@lasan_media_works",
      link: "https://www.instagram.com/lasan_media_works/",
      gradientClass: "from-yellow-400 via-red-500 to-purple-600"
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
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
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Contact Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help grow your business
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.title === "Instagram" || item.title === "LinkedIn" ? "_blank" : ""}
                rel={item.title === "Instagram" || item.title === "LinkedIn" ? "noopener noreferrer" : ""}
                className="group bg-white border border-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -8, backgroundColor: "#ffffff", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
              >
                <div className={`bg-gradient-to-r ${item.gradientClass} w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 mb-3 break-all">{item.value}</p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredCard === index ? 1 : 0,
                    y: hoveredCard === index ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-blue-500 font-medium flex items-center"
                >
                  Connect <ExternalLink className="ml-1 h-3 w-3" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-16 relative"
          whileHover={{ scale: 1.05 }}
        >
          <div className="max-w-md mx-auto bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
            <p className="text-gray-600">© {new Date().getFullYear()} LaSan Media Works. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 right-10 w-36 h-36 bg-purple-200 rounded-full opacity-30 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
    </motion.div>
  );
};

export default ContactSection;
