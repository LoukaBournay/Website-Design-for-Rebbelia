interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "light";
}

export function Badge({ children, variant = "blue" }: BadgeProps) {
  const variants = {
    blue: "bg-[#2563EB]/10 text-[#60a5fa] border border-[#2563EB]/20",
    light: "bg-white/5 text-white/70 border border-white/10",
  };

  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </div>
  );
}
