
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const MentorsSection = () => {
  const mentors = [
    {
      name: "Vasu Komandur",
      title: "Our Esteemed Mentor",
      description: "At Lasan Media Works, we are honored to be guided by the invaluable expertise of Shri K. S. Vasu Komandur, a distinguished Senior Advocate, educational leader, and visionary strategist. His extensive experience in law, academia, and personal development has shaped institutions and empowered individuals, making him an exceptional force in leadership and innovation.",
      quote: "Leadership is about inspiring growth, driving change, and shaping a lasting legacy.",
      image: "/lovable-uploads/4185b61f-b4b1-4de6-bbd8-12d1517c63b7.png",
      initials: "VK"
    },
    {
      name: "Acharya Seshaiah Kandamuru",
      title: "Mentor",
      description: "Acharya Seshaiah Kandamuru is a distinguished retired Professor of Commerce and Management from Sri Venkateswara University, Tirupati, with decades of expertise in academia, research, and business leadership. Throughout his career, he has played a pivotal role in shaping the fields of entrepreneurship, strategic management, and organizational development, mentoring countless professionals and business leaders.",
      quote: "Success is not just measured by growth but by the ability to inspire, adapt, and create lasting impact.",
      image: "/lovable-uploads/d923049a-be33-4b6b-86d1-b8f04ed1be14.png",
      initials: "SK"
    }
  ];
  
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <motion.h2 
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Our Mentors
      </motion.h2>
      
      <div className="space-y-12">
        {mentors.map((mentor, index) => (
          <motion.div 
            key={index}
            className="glass-card p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-blue-50 hover:scale-[1.02] hover:border-lasan-blue/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + (index * 0.2), duration: 0.6 }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 flex justify-center">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Avatar className="w-48 h-48 border-4 border-gray-200 shadow-lg transition-all hover:border-lasan-blue">
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                    <AvatarFallback>{mentor.initials}</AvatarFallback>
                  </Avatar>
                </motion.div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-lasan-blue mb-1">{mentor.name}</h3>
                <h4 className="text-xl text-gray-600 mb-4">{mentor.title}</h4>
                <p className="text-gray-700 mb-6">{mentor.description}</p>
                
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-lasan-blue transition-all hover:bg-blue-50"
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <p className="italic text-gray-700">
                    "{mentor.quote}"
                    <span className="block mt-2 font-semibold">– {mentor.name}</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MentorsSection;
