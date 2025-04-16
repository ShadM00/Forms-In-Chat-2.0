import React from "react";

export type ButtonVariant = "gradient" | "outline" | "white";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const base =
  "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  gradient:
    "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md hover:from-purple-700 hover:to-blue-700 focus-visible:ring-white",
  outline:
    "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus-visible:ring-blue-600",
  white:
    "bg-white text-blue-600 border border-white hover:bg-blue-50 focus-visible:ring-blue-600",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "gradient",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      type={props.type || "button"}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;