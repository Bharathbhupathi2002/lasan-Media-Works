
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  organization: string;
  phone: string;
  email: string;
  requirements: string;
  service?: string;
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
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a formatted message for the email
      const emailContent = `
        New Service Request:
        
        Name: ${formData.name}
        Organization: ${formData.organization}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Service Interested In: ${formData.service || "Not specified"}
        Requirements: ${formData.requirements}
      `;
      
      // In a live environment, you would need a serverless function or backend API
      // Here we're using a simple email service for demonstration
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID in production
          template_id: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID in production
          user_id: "YOUR_PUBLIC_KEY", // Replace with your EmailJS user ID in production
          template_params: {
            to_email: "lasanmediaofficial@gmail.com",
            from_name: formData.name,
            from_email: formData.email,
            message: emailContent
          }
        })
      });
      
      if (!response.ok) {
        throw new Error('Email sending failed');
      }
      
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
        service: "",
      });
      
      console.log("Form submitted with data:", formData);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at lasanmediaofficial@gmail.com",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Digital Marketing Services",
    "Social Media Marketing Services",
    "Sales Strategy Services",
    "Experiential and Event Marketing",
    "Influencer Marketing",
    "Branding & 360° Solutions",
    "Analytics and Optimization"
  ];

  return (
    <div className="kittl-card p-8 shadow-xl">
      <h3 className="text-2xl font-semibold text-center mb-2">
        Request a Proposal
      </h3>
      <p className="text-center text-gray-600 mb-6">
        Tell us about your project and requirements
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your organization"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your email address"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service You're Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a Service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your project and requirements"
          />
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-lasan-blue text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
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
