import React from "react";

export interface FeatureCardProps {
  title: string;
  description?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start transition hover:shadow-lg focus-within:shadow-lg">
    <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
    {description && <p className="text-gray-600 text-base">{description}</p>}
  </div>
);

export default FeatureCard;