
import React from "react";
import FormField from "@/components/forms/FormField";
import ServiceSelect from "@/components/forms/ServiceSelect";
import RequirementsField from "@/components/forms/RequirementsField";
import SubmitButton from "@/components/forms/SubmitButton";
import ErrorAlert from "@/components/forms/ErrorAlert";
import { useFormSubmission } from "@/components/forms/useFormSubmission";
import { services } from "@/components/forms/services";

const RequestForm: React.FC = () => {
  const {
    formData,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit
  } = useFormSubmission();

  return (
    <div className="kittl-card p-8 shadow-xl">
      <h3 className="text-2xl font-semibold text-center mb-2">
        Request a Proposal
      </h3>
      <p className="text-center text-gray-600 mb-6">
        Tell us about your project and requirements
      </p>
      
      <ErrorAlert message={submitError || ""} />
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            id="name"
            name="name"
            label="Name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          
          <FormField
            id="organization"
            name="organization"
            label="Organization Name"
            required
            value={formData.organization}
            onChange={handleChange}
            placeholder="Your organization"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            id="phone"
            name="phone"
            label="Phone Number"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your contact number"
          />
          
          <FormField
            id="email"
            name="email"
            label="Email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
          />
        </div>
        
        <ServiceSelect
          id="service"
          name="service"
          value={formData.service || ""}
          onChange={handleChange}
          services={services}
        />
        
        <RequirementsField
          id="requirements"
          name="requirements"
          required
          value={formData.requirements}
          onChange={handleChange}
        />
        
        <div className="pt-2">
          <SubmitButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
