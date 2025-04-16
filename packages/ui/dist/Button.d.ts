import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'link';
    href?: string;
}
export declare function Button({ children, variant, href, className, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
