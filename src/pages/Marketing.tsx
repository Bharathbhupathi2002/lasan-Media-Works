
import React from "react";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";
import MarketingHero from "@/components/marketing/MarketingHero";
import MarketingContent from "@/components/marketing/MarketingContent";
import MarketingFormSection from "@/components/marketing/MarketingFormSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

const Marketing = () => {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen">
        <MarketingHero />
        
        <div className="relative">
          {/* Decorative waves */}
          <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
              <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,128C672,139,768,181,864,176C960,171,1056,117,1152,96C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          <MarketingContent />
        </div>
        
        <WhyChooseUsSection />
        <MarketingFormSection />
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Marketing;
