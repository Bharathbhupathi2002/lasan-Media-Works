
import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <div className="mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-lasan-blue flex items-center">
          Mission
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          To craft compelling digital experiences that elevate brands, connect them with their audience, 
          and drive meaningful growth. We aim to set new standards in digital and social media marketing, 
          combining innovation, insight, and creativity to make every brand unforgettable.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-lasan-blue flex items-center">
          Vision
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          To become the go-to partner for brands seeking to dominate the digital world, 
          known for our unmatched creativity, strategic foresight, and commitment to 
          pushing the boundaries of digital marketing.
        </p>
      </motion.div>
    </div>
  );
};

export default MissionVision;
