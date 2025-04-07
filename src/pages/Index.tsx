
import React from "react";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import RequestFormSection from "@/components/RequestFormSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <RequestFormSection />
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Index;
