
import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description?: string;
  price?: string;
  features?: string[];
  delay?: number;
  isPricing?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  features,
  delay = 0,
  isPricing = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className={`glass-card overflow-hidden card-hover ${
        isPricing
          ? "p-6 border border-gray-200 h-full flex flex-col"
          : "p-6 text-center h-full flex flex-col justify-between"
      }`}
    >
      {isPricing ? (
        <>
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="text-2xl font-bold text-lasan-blue mb-4">{price}</div>
            <ul className="space-y-2 mb-6">
              {features?.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-lasan-blue flex-shrink-0 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-auto btn-primary w-full">Get Started</button>
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-gray-800">
            {title}
          </h3>
          {description && <p className="text-gray-600 mb-4">{description}</p>}
        </>
      )}
    </motion.div>
  );
};

export default ServiceCard;
