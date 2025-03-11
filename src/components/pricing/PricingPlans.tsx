
import React from "react";
import ServiceCard from "@/components/ServiceCard";

const PricingPlans: React.FC = () => {
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
  );
};

export default PricingPlans;
