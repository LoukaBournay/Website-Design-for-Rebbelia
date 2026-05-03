import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-[20px] bg-white/[0.06] border border-white/[0.12] rounded-[20px] ${className}`}
      style={{
        backdropFilter: "blur(20px)",
      }}
    >
      {children}
    </div>
  );
}
