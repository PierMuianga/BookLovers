"use client";

import { useState } from "react";
import { Play, Pause, Highlighter, NotebookPen, Trophy } from "lucide-react";
import type { ReaderData } from "@/types/reader";
import { cn } from "@/lib/utils";

export function ReaderShell({ data }: { data: ReaderData }) {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const chapter = data.chapters[chapterIndex];

  const handleTextToSpeech = () => {
    if (!("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(chapter.content);
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
  };

  return (
    <div className="glass-panel grid gap-6 p-6 lg:grid-cols-[260px,1fr]">
      <aside className="space-y-4">
        <h1 className="text-2xl font-semibold text-slate-900">{data.title}</h1>
        <p className="text-sm text-slate-600">{data.author}</p>
        <div className="rounded-2xl border border-white/40 bg-white/60 p-4 text-sm shadow-sm">
          <p className="font-medium text-slate-900">Progress</p>
          <p className="text-xs text-slate-600">{chapter.progress}</p>
          <p className="mt-2 text-xs text-emerald-600">Estimated time: {chapter.estimate}</p>
        </div>
        <div className="space-y-2">
          {data.chapters.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setChapterIndex(index)}
              className={cn(
                "w-full rounded-xl px-4 py-2 text-left text-sm transition-colors",
                chapterIndex === index ? "bg-slate-900 text-white shadow" : "bg-white/60 text-slate-700 hover:bg-white"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="reader-controls grid gap-2">
          <button onClick={handleTextToSpeech} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            {isPlaying ? (
              <span className="flex items-center gap-2">
                <Pause className="h-4 w-4" /> Pause narration
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Play className="h-4 w-4" /> Play narration
              </span>
            )}
          </button>
          <button className="rounded-xl bg-white px-4 py-2 text-sm text-slate-700 shadow">
            <span className="flex items-center gap-2">
              <Highlighter className="h-4 w-4" /> Highlight selection
            </span>
          </button>
          <button className="rounded-xl bg-white px-4 py-2 text-sm text-slate-700 shadow">
            <span className="flex items-center gap-2">
              <NotebookPen className="h-4 w-4" /> Add note
            </span>
          </button>
          <button className="rounded-xl bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white shadow">
            <span className="flex items-center gap-2">
              <Trophy className="h-4 w-4" /> Take quiz
            </span>
          </button>
        </div>
      </aside>
      <article className="prose prose-slate max-w-none rounded-3xl border border-white/40 bg-white/80 p-8 shadow-inner backdrop-blur">
        <h2 className="text-3xl font-semibold text-slate-900">{chapter.title}</h2>
        <p className="mt-4 whitespace-pre-line leading-7 text-slate-700" aria-live="polite">
          {chapter.content}
        </p>
      </article>
    </div>
  );
}
