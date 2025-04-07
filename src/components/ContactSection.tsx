
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Briefcase } from "lucide-react";

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "lasanmediaofficial@gmail.com",
      link: "mailto:lasanmediaofficial@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 7032 360 404",
      link: "tel:+917032360404"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram",
      value: "@lasan_media_works",
      link: "https://www.instagram.com/lasan_media_works/"
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "LinkedIn",
      value: "LaSan Media Works",
      link: "https://www.linkedin.com/company/lasan-media-works/?originalSubdomain=in"
    }
  ];

  return (
    <motion.div 
      id="contact"
      className="py-20 bg-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-lasan-blue mx-auto mb-6"></div>
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
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-lasan-blue mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-500">© {new Date().getFullYear()} LaSan Media Works. All rights reserved.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
