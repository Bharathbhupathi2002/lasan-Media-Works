
import React from "react";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";
import { Separator } from "@/components/ui/separator";
import AboutHeader from "@/components/about/AboutHeader";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import CompanyDescription from "@/components/about/CompanyDescription";
import FeaturesSection from "@/components/about/FeaturesSection";
import ServicesSection from "@/components/about/ServicesSection";
import MentorsSection from "@/components/about/MentorsSection";

const AboutUs = () => {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <AboutHeader />
            
            <div className="max-w-4xl mx-auto glass-card p-8 mb-16">
              {/* Mission, Vision, and Core Values */}
              <MissionVision />
              <Separator className="my-10" />
              <CoreValues />
              <Separator className="my-10" />

              {/* Company Description and Features */}
              <CompanyDescription />
              <FeaturesSection />
              
              {/* Services */}
              <ServicesSection />
            </div>

            {/* Mentors Section */}
            <MentorsSection />
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default AboutUs;
