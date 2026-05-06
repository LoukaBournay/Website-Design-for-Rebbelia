interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "light";
}

export function Badge({ children, variant = "blue" }: BadgeProps) {
  const variants = {
    blue: "border border-[#1E4E8C]/15 bg-[#1E4E8C]/8 text-[#1E4E8C]",
    light: "border border-[#1E4E8C]/10 bg-white/85 text-[#5E6B82] shadow-sm shadow-[#1E4E8C]/5",
  };

  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </div>
  );
}

