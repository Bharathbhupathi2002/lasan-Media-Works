
import React from "react";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
