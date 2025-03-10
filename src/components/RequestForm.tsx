
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  organization: string;
  phone: string;
  email: string;
  requirements: string;
}

const RequestForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    phone: "",
    email: "",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would send this data to a server endpoint
      // that would handle the email sending to lasanmediaofficial@gmail.com
      
      // For demonstration, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Proposal Request Submitted",
        description: "We'll get back to you as soon as possible. Thank you!",
        variant: "default",
      });
      
      // Clear form
      setFormData({
        name: "",
        organization: "",
        phone: "",
        email: "",
        requirements: "",
      });
      
      console.log("Form submitted with data:", formData);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card p-8 max-w-2xl mx-auto animate-fade-up">
      <h3 className="text-2xl font-semibold text-center mb-2">
        Your Needs, Our Priority
      </h3>
      <p className="text-center text-gray-600 mb-6">
        Request a Proposal Today
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
            Organization Name
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            value={formData.organization}
            onChange={handleChange}
            className="form-input"
            placeholder="Your organization"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="Your contact number"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Your email address"
          />
        </div>
        
        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
            Your Requirements
          </label>
          <textarea
            id="requirements"
            name="requirements"
            rows={4}
            required
            value={formData.requirements}
            onChange={handleChange}
            className="form-input"
            placeholder="Tell us about your project and requirements"
          />
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              "Submit Request"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
