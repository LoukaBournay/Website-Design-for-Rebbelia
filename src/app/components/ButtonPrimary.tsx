import { ButtonHTMLAttributes } from "react";

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: React.ReactNode;
}

export function ButtonPrimary({ variant = "solid", children, className = "", ...props }: ButtonPrimaryProps) {
  const baseStyles = "px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 active:scale-95";

  const variantStyles = {
    solid: "bg-[#1E4E8C] text-white hover:bg-[#2F7A5F] shadow-lg shadow-[#1E4E8C]/20",
    outline: "border-2 border-[#1E4E8C]/20 bg-white text-[#1E4E8C] hover:border-[#D4A64A] hover:bg-[#D4A64A]/10",
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

