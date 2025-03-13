
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
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
  );
};

export default SubmitButton;
