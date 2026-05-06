interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  role: string;
}

export function TestimonialCard({ quote, name, company, role }: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-[#1E4E8C]/10 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)]">
      <div className="mb-4 text-4xl text-[#1E4E8C]">"</div>
      <p className="mb-6 leading-relaxed text-[#172033] italic">{quote}</p>
      <div className="flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E4E8C] font-semibold text-white">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-[#172033]">{name}</div>
          <div className="text-sm text-[#5E6B82]">
            {role} · {company}
          </div>
        </div>
      </div>
    </div>
  );
}

