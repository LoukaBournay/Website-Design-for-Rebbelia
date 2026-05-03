interface TeamMemberProps {
  name: string;
  role: string;
  initials: string;
}

export function TeamMember({ name, role, initials }: TeamMemberProps) {
  return (
    <div className="text-center group">
      <div className="w-32 h-32 bg-gradient-to-br from-[#1A6FD4] to-[#0D3B7C] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-semibold group-hover:scale-105 transition-transform duration-300">
        {initials}
      </div>
      <h3 className="font-semibold text-[#0D3B7C] mb-1">{name}</h3>
      <p className="text-[#8A8F9E]">{role}</p>
    </div>
  );
}
