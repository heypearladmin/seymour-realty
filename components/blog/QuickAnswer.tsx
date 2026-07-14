interface QuickAnswerProps {
  answer: string;
}

export default function QuickAnswer({ answer }: QuickAnswerProps) {
  return (
    <aside
      aria-label="Quick answer"
      className="border-l-4 border-terracotta bg-beige/30 px-6 py-5 my-10"
    >
      <p className="eyebrow text-terracotta mb-2">Quick Answer</p>
      <p className="text-charcoal/90 leading-relaxed text-[1.0625rem]">{answer}</p>
    </aside>
  );
}
