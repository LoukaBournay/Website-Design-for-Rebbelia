import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg transition-all duration-200 font-medium";

  const variantStyles = {
    primary: "bg-[#1E4E8C] text-white hover:bg-[#2F7A5F] hover:shadow-lg hover:shadow-[#1E4E8C]/20",
    secondary: "border-2 border-[#1E4E8C] text-[#D4A64A] bg-transparent hover:bg-[#1E4E8C] hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

