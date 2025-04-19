
import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FloatingBadgeProps {
  Icon: LucideIcon;
  color: string;
  delay?: number;
  position: "left" | "right";
}

const FloatingBadge = ({ Icon, color, delay = 0, position }: FloatingBadgeProps) => {
  return (
    <motion.div 
      className={`absolute ${position === 'left' ? '-left-4 top-1/3' : '-right-6 top-1/4'}`}
      initial={{ opacity: 0, x: position === 'left' ? -20 : 20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        y: position === 'left' ? [5, -5, 5] : [-5, 5, -5]
      }}
      transition={{ 
        opacity: { delay: delay, duration: 0.5 },
        y: { duration: position === 'left' ? 4 : 3, repeat: Infinity, repeatType: "reverse", delay: position === 'left' ? 0.5 : 0 }
      }}
    >
      <div className={`${color} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm ${position === 'left' ? 'w-14 h-14' : 'w-16 h-16'}`}>
        <Icon size={position === 'left' ? 20 : 24} color="white" />
      </div>
    </motion.div>
  );
};

export default FloatingBadge;
