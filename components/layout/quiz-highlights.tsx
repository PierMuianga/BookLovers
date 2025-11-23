import { Sparkles } from "lucide-react";
import type { QuizHighlight } from "@/types/home";

interface QuizHighlightsProps {
  quizzes: QuizHighlight[];
}

export function QuizHighlights({ quizzes }: QuizHighlightsProps) {
  if (!quizzes.length) return null;

  return (
    <section className="glass-panel grid gap-4 p-6">
      <header className="flex items-center gap-2 text-primary">
        <Sparkles className="h-4 w-4" />
        <h2 className="text-lg font-semibold">AI Quiz Highlights</h2>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="rounded-2xl border border-white/40 bg-white/60 p-4 text-sm shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-500">{quiz.bookTitle}</p>
            <h3 className="mt-2 font-semibold text-slate-900">Chapter {quiz.chapter}</h3>
            <p className="mt-3 text-slate-600">{quiz.prompt}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
              {quiz.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/60 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
