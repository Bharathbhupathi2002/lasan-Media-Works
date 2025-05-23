
import React from "react";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import RequestFormSection from "@/components/RequestFormSection";
import ContactSection from "@/components/ContactSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import SampleWorksSection from "@/components/SampleWorksSection";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <HeroSection />
        <RequestFormSection />
        <ClientLogosSection />
        <SampleWorksSection />
        <WhyChooseUsSection />
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Index;
