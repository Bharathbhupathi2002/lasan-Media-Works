
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

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
    scale: 1.1,
    y: -5,
    transition: { duration: 0.3 }
  }
};

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {[
        { Icon: Facebook, color: "bg-blue-600" },
        { Icon: Twitter, color: "bg-blue-400" },
        { Icon: Instagram, color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" },
        { Icon: Youtube, color: "bg-red-600" },
        { Icon: Linkedin, color: "bg-blue-700" }
      ].map((platform, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer backdrop-blur-md`}
        >
          <platform.Icon size={20} color="white" />
        </motion.div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
