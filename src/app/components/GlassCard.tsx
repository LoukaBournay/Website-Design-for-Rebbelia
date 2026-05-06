import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-[20px] border border-[#1E4E8C]/10 bg-white/88 shadow-[0_24px_60px_rgba(30,78,140,0.12)] backdrop-blur-[20px] ${className}`}
      style={{
        backdropFilter: "blur(20px)",
      }}
    >
      {children}
    </div>
  );
}
