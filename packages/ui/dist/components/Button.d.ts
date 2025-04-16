import React from "react";
export type ButtonVariant = "gradient" | "outline" | "white";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
