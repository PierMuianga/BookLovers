"use client";

import { ShareReadTheme } from "@/components/layout/theme-provider";

const themes: { value: ShareReadTheme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "professional", label: "Pro" },
  { value: "cute", label: "Cute" },
  { value: "eco", label: "Eco" },
  { value: "wallpaper", label: "Wallpaper" }
];

interface ThemeSwitcherProps {
  value: ShareReadTheme;
  onChange: (value: ShareReadTheme) => void;
  dyslexic: boolean;
  onToggleDyslexic: (value: boolean) => void;
}

export function ThemeSwitcher({ value, onChange, dyslexic, onToggleDyslexic }: ThemeSwitcherProps) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs text-slate-600 shadow">
      <label className="hidden md:inline">Theme</label>
      <select value={value} onChange={(event) => onChange(event.target.value as ShareReadTheme)} className="bg-transparent">
        {themes.map((theme) => (
          <option key={theme.value} value={theme.value} className="text-slate-900">
            {theme.label}
          </option>
        ))}
      </select>
      <label className="flex items-center gap-1">
        <input
          type="checkbox"
          checked={dyslexic}
          onChange={(event) => onToggleDyslexic(event.target.checked)}
          aria-label="Toggle dyslexic-friendly font"
        />
        <span className="hidden md:inline">Dyslexic font</span>
      </label>
    </div>
  );
}
