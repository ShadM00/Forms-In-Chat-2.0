import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'link';
  href?: string;
}

export function Button({ 
  children, 
  variant = 'default', 
  href,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded";
  const variantStyles = {
    default: "bg-gray-100 hover:bg-gray-200",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    link: "bg-transparent hover:underline p-0"
  };

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}