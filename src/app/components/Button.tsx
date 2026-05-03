import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg transition-all duration-200 font-medium";

  const variantStyles = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-[#2563EB]/20",
    secondary: "border-2 border-[#2563EB] text-[#60a5fa] bg-transparent hover:bg-[#2563EB] hover:text-white",
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
