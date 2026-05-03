import { ButtonHTMLAttributes } from "react";

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: React.ReactNode;
}

export function ButtonPrimary({ variant = "solid", children, className = "", ...props }: ButtonPrimaryProps) {
  const baseStyles = "px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 active:scale-95";

  const variantStyles = {
    solid: "bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-lg shadow-[#2563EB]/20",
    outline: "border-2 border-white text-white hover:bg-white/10",
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
