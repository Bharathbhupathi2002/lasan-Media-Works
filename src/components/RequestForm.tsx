
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
  const [submitError, setSubmitError] = useState<string | null>(null);
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
    setSubmitError(null);

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
      
      // Use EmailJS to send the email
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: "service_30pxkij",  // Your EmailJS service ID
          template_id: "template_wqbnx0j", // Your EmailJS template ID
          user_id: "oTOEYtGYgjHI3i5Ye",   // Your EmailJS public key
          template_params: {
            to_email: "lasanmediaofficial@gmail.com",
            from_name: formData.name,
            from_email: formData.email,
            message: emailContent,
            service: formData.service,
            phone: formData.phone,
            organization: formData.organization,
            requirements: formData.requirements,
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
      console.error("Form submission error:", error);
      setSubmitError("There was a problem submitting your request. Please try again or contact us directly.");
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
      
      {submitError && (
        <Alert variant="destructive" className="mb-5">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{submitError}</AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
              Organization Name
            </label>
            <Input
              id="organization"
              name="organization"
              type="text"
              required
              value={formData.organization}
              onChange={handleChange}
              className="w-full"
              placeholder="Your organization"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
              placeholder="Your contact number"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full"
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
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-lasan-blue text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
