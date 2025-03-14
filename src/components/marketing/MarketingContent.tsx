
import React from "react";
import { motion } from "framer-motion";
import { Share2, TrendingUp, BarChart, Users, Smartphone, Globe } from "lucide-react";

const MarketingContent: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6
      }
    })
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto glass-card p-8 mb-16 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Transform Your Digital Presence</h2>
          
          <p className="mb-6 text-lg leading-relaxed">
            In today's digital landscape, a strong social media presence is essential for brand success. At Matebiz, we craft compelling and targeted social media strategies that elevate your brand's visibility and credibility across all platforms.
          </p>
          
          <p className="mb-6 text-lg leading-relaxed">
            Every brand has a unique story to tell, and we believe in the power of strategic storytelling to engage consumers. Our expert team creates content that resonates with your audience, builds authentic connections, and drives meaningful engagement.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Strategic Content Tailored for Your Brand</h3>
            <p className="mb-4 text-lg leading-relaxed">
              We design custom social media strategies that align with your brand's voice, objectives, and target audience. Using data-driven insights, we ensure that each piece of content delivers value, builds trust, and fosters meaningful connections.
            </p>
          </div>
          
          <p className="mb-6 text-lg leading-relaxed">
            Our solutions empower your brand to stand out in a crowded digital landscape, driving greater brand awareness, higher engagement, and increased conversions. We take pride in our client-centric approach, treating your brand as our own and prioritizing your unique business objectives.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Share2 className="h-8 w-8 text-white" />,
              title: "Platform Strategy",
              description: "Custom strategies for each social platform to maximize reach and engagement.",
              color: "from-blue-500 to-blue-700"
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-white" />,
              title: "Growth Tactics",
              description: "Data-driven approaches to increase followers, engagement, and conversions.",
              color: "from-purple-500 to-purple-700"
            },
            {
              icon: <BarChart className="h-8 w-8 text-white" />,
              title: "Analytics & Insights",
              description: "Comprehensive reporting to track performance and optimize campaigns.",
              color: "from-cyan-500 to-cyan-700"
            },
            {
              icon: <Users className="h-8 w-8 text-white" />,
              title: "Community Management",
              description: "Engage with your audience to build lasting relationships and loyalty.",
              color: "from-indigo-500 to-indigo-700"
            },
            {
              icon: <Smartphone className="h-8 w-8 text-white" />,
              title: "Mobile Optimization",
              description: "Ensure content performs perfectly across all mobile devices and apps.",
              color: "from-pink-500 to-pink-700"
            },
            {
              icon: <Globe className="h-8 w-8 text-white" />,
              title: "Global Reach",
              description: "Connect with audiences worldwide through targeted digital campaigns.",
              color: "from-teal-500 to-teal-700"
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-24 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                {service.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingContent;
