
import React from "react";

interface RequirementsFieldProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const RequirementsField: React.FC<RequirementsFieldProps> = ({
  id,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        Your Requirements
      </label>
      <textarea
        id={id}
        name={name}
        rows={4}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Tell us about your project and requirements"
      />
    </div>
  );
};

export default RequirementsField;
