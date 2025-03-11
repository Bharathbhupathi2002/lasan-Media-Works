
import React from "react";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";
import MarketingHero from "@/components/marketing/MarketingHero";
import MarketingContent from "@/components/marketing/MarketingContent";
import MarketingFormSection from "@/components/marketing/MarketingFormSection";

const Marketing = () => {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <MarketingHero />
            <MarketingContent />
            <MarketingFormSection />
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Marketing;
