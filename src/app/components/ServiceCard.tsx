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
    <div className="group bg-[#0b1730] border border-white/10 rounded-xl p-8 hover:shadow-xl hover:shadow-[#020817]/30 transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 bg-[#2563EB]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2563EB] transition-colors duration-300">
        <Icon className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-[#8ea3c5] mb-6 leading-relaxed">{description}</p>

      {link && (
        <Link
          to={link}
          className="inline-flex items-center text-[#60a5fa] hover:text-white transition-colors"
        >
          En savoir plus
          <span className="ml-2">→</span>
        </Link>
      )}
    </div>
  );
}
