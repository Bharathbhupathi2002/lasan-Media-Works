
import React from "react";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";

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
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default AboutUs;
