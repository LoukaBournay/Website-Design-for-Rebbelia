import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-[#1E4E8C]/10 bg-white shadow-[0_18px_50px_rgba(30,78,140,0.08)]">
      <button
        className="flex w-full items-center justify-between bg-white px-6 py-5 transition-colors hover:bg-[#1E4E8C]/5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-semibold text-[#172033]">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#1E4E8C] flex-shrink-0 ml-4" />
        ) : (
          <Plus className="w-5 h-5 text-[#1E4E8C] flex-shrink-0 ml-4" />
        )}
      </button>

      {isOpen && (
        <div className="bg-white px-6 pb-5">
          <p className="leading-relaxed text-[#5E6B82]">{answer}</p>
        </div>
      )}
    </div>
  );
}

