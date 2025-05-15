
import React from "react";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutUs = () => {
  const features = [
    {
      title: "Cutting-Edge Expertise",
      description: "We stay ahead of industry trends, leveraging the latest digital tools, marketing strategies, and technological advancements to give your business a competitive edge."
    },
    {
      title: "Tailored Growth Strategies",
      description: "No two businesses are alike. Our solutions are customized to align with your unique goals, target audience, and market positioning."
    },
    {
      title: "Results-Driven Approach",
      description: "We focus on measurable impact, ensuring that every campaign and initiative contributes to tangible business growth."
    },
    {
      title: "End-to-End Solutions",
      description: "Whether you're a startup looking to build a brand, an established business seeking digital transformation, or a company aiming to enhance its reach through influencer marketing, we have the expertise to make it happen."
    },
    {
      title: "Passionate Team, Proven Success",
      description: "Our team of skilled strategists, creatives, and consultants work collaboratively to bring your vision to life, turning challenges into opportunities."
    }
  ];

  const services = [
    {
      title: "Digital Marketing",
      description: "SEO, content marketing, social media management, paid advertising, and performance analytics to elevate your online presence."
    },
    {
      title: "Influencer Partnerships",
      description: "Strategic influencer collaborations that amplify brand awareness and foster authentic engagement."
    },
    {
      title: "Business Consulting",
      description: "Data-driven insights and actionable strategies to optimize operations, branding, and market positioning."
    }
  ];
  
  const coreValues = [
    "Empathy – We create with purpose, making brands that resonate deeply.",
    "Integrity – Transparency and ethical leadership are at our core.",
    "Growth Mindset – Adapting, evolving, and innovating—because stagnation isn't an option.",
    "Excellence with Velocity – High-quality execution with lightning speed.",
    "Be the Case – We set industry standards, proving what's possible.",
    "Live the Mission – Passion fuels every project, every strategy, every move we make.",
    "Customer-Centric – Client success drives our success.",
    "We Are a Tribe – Collaboration, loyalty, and unity define our culture."
  ];
  
  const mentors = [
    {
      name: "Vasu Komandur",
      title: "Our Esteemed Mentor",
      description: "At Lasan Media Works, we are honored to be guided by the invaluable expertise of Shri K. S. Vasu Komandur, a distinguished Senior Advocate, educational leader, and visionary strategist. His extensive experience in law, academia, and personal development has shaped institutions and empowered individuals, making him an exceptional force in leadership and innovation.",
      quote: "Leadership is about inspiring growth, driving change, and shaping a lasting legacy.",
      image: "/lovable-uploads/d923049a-be33-4b6b-86d1-b8f04ed1be14.png",
      initials: "VK"
    },
    {
      name: "Acharya Seshaiah Kandamuru",
      title: "Mentor",
      description: "Acharya Seshaiah Kandamuru is a distinguished retired Professor of Commerce and Management from Sri Venkateswara University, Tirupati, with decades of expertise in academia, research, and business leadership. Throughout his career, he has played a pivotal role in shaping the fields of entrepreneurship, strategic management, and organizational development, mentoring countless professionals and business leaders.",
      quote: "Success is not just measured by growth but by the ability to inspire, adapt, and create lasting impact.",
      image: "/lovable-uploads/4185b61f-b4b1-4de6-bbd8-12d1517c63b7.png",
      initials: "SK"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 min-h-screen">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn more about LaSan Media and our mission to empower businesses
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto glass-card p-8 mb-16">
              {/* Mission and Vision Section */}
              <div className="mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-lasan-blue flex items-center">
                    <span className="mr-2">🌟</span> Mission Statement
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
                    <span className="mr-2">🚀</span> Vision Statement
                  </h2>
                  <p className="text-lg leading-relaxed mb-8">
                    To become the go-to partner for brands seeking to dominate the digital world, 
                    known for our unmatched creativity, strategic foresight, and commitment to 
                    pushing the boundaries of digital marketing.
                  </p>
                </motion.div>
              </div>

              <Separator className="my-10" />

              {/* Core Values */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-8 text-lasan-blue flex items-center">
                  <span className="mr-2">💎</span> Core Values
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coreValues.map((value, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                      className="flex items-start mb-4"
                    >
                      <div className="flex-shrink-0 mr-3 text-lasan-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <Separator className="my-10" />

              <h2 className="text-2xl font-bold mb-6">About LaSan Media</h2>
              <p className="text-lg leading-relaxed mb-8">
                At LaSan Media, we are committed to empowering businesses with innovative, data-driven strategies 
                that foster sustainable growth. As a full-service agency specializing in digital marketing, 
                influencer collaborations, and business consulting, we provide comprehensive solutions that help 
                brands thrive in today's competitive landscape.
              </p>
              
              <h2 className="text-2xl font-bold mb-6">Why Choose LaSan Media?</h2>
              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lasan-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Our Services</h2>
              <div className="space-y-6 mb-8">
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    className="flex"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lasan-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                className="text-lg italic border-l-4 border-lasan-blue pl-4 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                At LaSan Media, we don't just provide services—we build long-term partnerships that drive success. 
                Let's work together to create a powerful, results-oriented strategy that propels your business forward.
              </motion.p>
            </div>

            {/* Mentors Section */}
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
                    className="glass-card p-6 md:p-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.2), duration: 0.6 }}
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0 flex justify-center">
                        <Avatar className="w-48 h-48 border-4 border-gray-200 shadow-lg">
                          <AvatarImage src={mentor.image} alt={mentor.name} />
                          <AvatarFallback>{mentor.initials}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-lasan-blue mb-1">{mentor.name}</h3>
                        <h4 className="text-xl text-gray-600 mb-4">{mentor.title}</h4>
                        <p className="text-gray-700 mb-6">{mentor.description}</p>
                        
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-lasan-blue">
                          <p className="italic text-gray-700">
                            "{mentor.quote}"
                            <span className="block mt-2 font-semibold">– {mentor.name}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default AboutUs;
