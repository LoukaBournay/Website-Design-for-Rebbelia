interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  role: string;
}

export function TestimonialCard({ quote, name, company, role }: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0b1730] p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#020817]/30">
      <div className="mb-4 text-4xl text-[#2563EB]">"</div>
      <p className="mb-6 leading-relaxed text-white italic">{quote}</p>
      <div className="flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] font-semibold text-white">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-white">{name}</div>
          <div className="text-sm text-[#8ea3c5]">
            {role} · {company}
          </div>
        </div>
      </div>
    </div>
  );
}
