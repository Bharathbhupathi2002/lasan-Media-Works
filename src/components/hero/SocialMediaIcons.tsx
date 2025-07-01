
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const iconVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2 + (i * 0.1),
      duration: 0.3,
      type: "spring",
      stiffness: 100
    }
  }),
  hover: {
    scale: 1.2,
    y: -8,
    transition: { duration: 0.3 }
  }
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.1, 1],
    boxShadow: [
      "0 0 0 0 rgba(59, 130, 246, 0.4)",
      "0 0 0 10px rgba(59, 130, 246, 0)",
      "0 0 0 0 rgba(59, 130, 246, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeOut"
    }
  }
};

const SocialMediaIcons = () => {
  const socialLinks = [
    { 
      Icon: Instagram, 
      color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600",
      link: "https://www.instagram.com/lasan_media_works/"
    },
    { 
      Icon: Youtube, 
      color: "bg-red-600", 
      link: "https://www.youtube.com/@LaSanMediaworks/shorts"
    },
    { 
      Icon: Linkedin, 
      color: "bg-blue-700", 
      link: "https://in.linkedin.com/company/lasan-media-works"
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {socialLinks.map((platform, i) => (
        <motion.a
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
          custom={i}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className={`relative w-12 h-12 ${platform.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer backdrop-blur-md overflow-hidden`}
          aria-label={`Visit our ${platform.Icon.name} page`}
        >
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="absolute inset-0 rounded-full"
          />
          <motion.div
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            <platform.Icon size={20} color="white" />
          </motion.div>
          
          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 bg-white opacity-0 rounded-full"
            whileHover={{
              scale: [0, 1.5],
              opacity: [0, 0.2, 0],
              transition: { duration: 0.6 }
            }}
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
