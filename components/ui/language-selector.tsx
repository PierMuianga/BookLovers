"use client";

import { ChangeEvent } from "react";

const languages = [
  "en",
  "es",
  "fr",
  "de",
  "it",
  "pt",
  "hi",
  "ja",
  "zh",
  "ar",
  "sw",
  "yo",
  "tr"
];

interface LanguageSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <label className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs text-slate-600 shadow">
      <span className="hidden md:inline">Language</span>
      <select value={value} onChange={handleChange} className="bg-transparent text-slate-700 focus:outline-none">
        {languages.map((lng) => (
          <option key={lng} value={lng} className="text-slate-900">
            {lng.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
