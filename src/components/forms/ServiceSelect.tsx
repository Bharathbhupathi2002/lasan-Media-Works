
import React from "react";

interface ServiceSelectProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  services: string[];
}

const ServiceSelect: React.FC<ServiceSelectProps> = ({
  id,
  name,
  value,
  onChange,
  services,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        Service You're Interested In
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
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
  );
};

export default ServiceSelect;
