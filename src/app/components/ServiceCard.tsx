import { LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="group rounded-xl border border-[#1E4E8C]/10 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)]">
      <div className="w-14 h-14 bg-[#1E4E8C]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1E4E8C] transition-colors duration-300">
        <Icon className="w-7 h-7 text-[#1E4E8C] group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-[#172033]">{title}</h3>
      <p className="mb-6 leading-relaxed text-[#5E6B82]">{description}</p>

      {link && (
        <Link
          to={link}
          className="inline-flex items-center text-[#D4A64A] transition-colors hover:text-[#1E4E8C]"
        >
          En savoir plus
          <span className="ml-2">→</span>
        </Link>
      )}
    </div>
  );
}

