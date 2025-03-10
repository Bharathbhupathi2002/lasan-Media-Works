
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Starter SM Marketing",
      price: "₹8,000/month",
      features: [
        "Social media management for 2 platforms",
        "Basic SEO",
        "Monthly performance reports",
        "Content creation",
        "Paid advertising management"
      ]
    },
    {
      title: "Growth SM Marketing",
      price: "₹12,000/month",
      features: [
        "Social media management for 3 platforms",
        "Advanced SEO",
        "Bi-weekly performance reports",
        "Content creation (20 reels, 20 posts, 20 stories)",
        "Paid advertising management"
      ]
    },
    {
      title: "Pro SM Marketing",
      price: "₹15,000/month",
      features: [
        "Social media management for 4 platforms",
        "Comprehensive SEO",
        "Weekly performance reports",
        "Content creation (30 reels, 30 posts, 30 stories)",
        "Paid advertising management"
      ]
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Plans</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Affordable digital marketing solutions tailored to your business needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <ServiceCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  delay={index * 0.2}
                  isPricing={true}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-4">
                Need a custom solution for your specific requirements?
              </p>
              <a href="#contact" className="btn-primary inline-flex">
                Contact Us
              </a>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Pricing;
