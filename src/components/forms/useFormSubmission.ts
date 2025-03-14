
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  organization: string;
  phone: string;
  email: string;
  requirements: string;
  service?: string;
}

export const useFormSubmission = () => {
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
    console.log(`Field ${name} updated to: ${value}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    console.log("Form submission started with data:", formData);

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.requirements) {
        throw new Error('Please fill in all required fields');
      }

      console.log("Form validation passed");

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
      
      // Prepare the request payload
      const emailjsPayload = {
        service_id: "service_1wy2h5n",
        template_id: "template_jxexkjf",
        user_id: "r_B3a_JOPrPkxf8zv",
        template_params: {
          to_name: "LaSan Media Team",
          from_name: formData.name,
          from_email: formData.email,
          message: emailContent,
          service: formData.service,
          phone: formData.phone,
          organization: formData.organization,
          requirements: formData.requirements,
        }
      };
      
      console.log("Sending EmailJS request with payload:", emailjsPayload);
      
      // Use EmailJS to send the email
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(emailjsPayload)
      });
      
      console.log("EmailJS API response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error("EmailJS error response:", errorData);
        throw new Error('Email sending failed: ' + errorData);
      }
      
      console.log("Email sent successfully");
      
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
      
      console.log("Form reset after successful submission");
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("There was a problem submitting your request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit
  };
};
