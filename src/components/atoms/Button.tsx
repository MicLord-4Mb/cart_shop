import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'outline';
}

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  return (
    <button className={`btn btn--${variant} ${className || ''}`} {...props} />
  );
};