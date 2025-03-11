
import React from "react";
import RequestForm from "@/components/RequestForm";

const RequestFormSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Fresh Start Today
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Request a freshly-squeezed proposal tailored to your business needs
            </p>
          </div>
          <RequestForm />
        </div>
      </div>
    </section>
  );
};

export default RequestFormSection;
