"use client";

import { useRef } from "react";
import { ImageUp } from "lucide-react";
import { useWallpaper } from "@/components/layout/wallpaper-context";

export function WallpaperUploader() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setWallpaper } = useWallpaper();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      document.documentElement.style.setProperty("--wallpaper", `url(${result})`);
      const overlay = document.querySelector<HTMLElement>(".wallpaper-overlay");
      if (overlay) {
        overlay.style.backgroundImage = `url(${result})`;
      }
      setWallpaper(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-1.5 text-xs text-slate-600 shadow"
    >
      <ImageUp className="h-4 w-4" /> Wallpaper
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleChange} />
    </button>
  );
}
