import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-[#0b1730]">
      <button
        className="w-full px-6 py-5 flex items-center justify-between bg-[#0b1730] hover:bg-[#0f1b33] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-white text-left">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#1A6FD4] flex-shrink-0 ml-4" />
        ) : (
          <Plus className="w-5 h-5 text-[#1A6FD4] flex-shrink-0 ml-4" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-5 bg-[#0b1730]">
          <p className="text-[#8ea3c5] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
