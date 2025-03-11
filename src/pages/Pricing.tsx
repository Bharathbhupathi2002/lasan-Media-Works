
import React from "react";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingCTA from "@/components/pricing/PricingCTA";

const Pricing = () => {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <PricingHero />
            <PricingPlans />
            <PricingCTA />
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Pricing;
