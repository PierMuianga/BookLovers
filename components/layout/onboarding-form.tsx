"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, User, Mail, Key } from "lucide-react";
import { cn } from "@/lib/utils";
import { useOfflineCache } from "@/lib/hooks/use-offline-cache";

const genres = ["Fantasy", "Sci-Fi", "Mystery", "Romance", "Non-fiction", "Poetry"];
const levels = ["Beginner", "Intermediate", "Advanced"];

export function OnboardingForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"guest" | "login" | "admin">("guest");
  const [preferences, setPreferences] = useOfflineCache<string[]>("preferences", []);
  const [level, setLevel] = useOfflineCache<string | null>("reading-level", null);

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  const togglePreference = (genre: string) => {
    const next = preferences.includes(genre)
      ? preferences.filter((g) => g !== genre)
      : [...preferences, genre];
    void setPreferences(next);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel space-y-6 p-8">
      <header>
        <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-primary">
          <Sparkles className="h-4 w-4" /> AI Preferences Concierge
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Welcome to ShareRead</h1>
        <p className="mt-2 text-sm text-slate-600">Pick how you'd like to get started and share your reading vibe.</p>
      </header>
      <div className="flex flex-wrap gap-2">
        {(["guest", "login", "admin"] as const).map((variant) => (
          <button
            key={variant}
            type="button"
            className={cn(
              "rounded-full px-4 py-2 text-sm",
              mode === variant ? "bg-slate-900 text-white" : "bg-white/70 text-slate-600"
            )}
            onClick={() => setMode(variant)}
          >
            {variant === "admin" ? "Admin code" : variant.charAt(0).toUpperCase() + variant.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/80 px-4 py-3">
          <User className="h-4 w-4" />
          <input placeholder="Name" className="flex-1 bg-transparent text-sm focus:outline-none" required />
        </label>
        <label className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/80 px-4 py-3">
          <Mail className="h-4 w-4" />
          <input placeholder="Email (optional)" className="flex-1 bg-transparent text-sm focus:outline-none" type="email" />
        </label>
        <label className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/80 px-4 py-3">
          <span className="text-xs uppercase text-slate-500">Age</span>
          <input placeholder="Age" className="flex-1 bg-transparent text-sm focus:outline-none" type="number" min={8} />
        </label>
        {mode === "admin" ? (
          <label className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/80 px-4 py-3">
            <Key className="h-4 w-4" />
            <input placeholder="Admin code" className="flex-1 bg-transparent text-sm focus:outline-none" required />
          </label>
        ) : null}
      </div>
      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase text-slate-500">Favorite genres</h2>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => togglePreference(genre)}
              className={cn(
                "rounded-full px-4 py-2 text-xs uppercase",
                preferences.includes(genre) ? "bg-primary text-white" : "bg-white/70 text-slate-600"
              )}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase text-slate-500">Reading level</h2>
        <div className="flex flex-wrap gap-2">
          {levels.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs uppercase text-slate-600"
            >
              <input
                type="radio"
                name="level"
                value={option}
                className="accent-slate-900"
                checked={level === option}
                onChange={() => void setLevel(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </section>
      <button type="submit" className="w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white shadow-lg">
        Enter ShareRead
      </button>
    </form>
  );
}
