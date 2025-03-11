
import React from "react";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";
import ChecklistHero from "@/components/checklist/ChecklistHero";
import ChecklistItems from "@/components/checklist/ChecklistItems";

const DailyChecklist = () => {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <ChecklistHero />
            <ChecklistItems />
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default DailyChecklist;
