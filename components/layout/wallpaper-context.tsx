"use client";

import { createContext, useContext, useState } from "react";

interface WallpaperContextValue {
  wallpaper?: string;
  setWallpaper: (url?: string) => void;
}

const WallpaperContext = createContext<WallpaperContextValue | undefined>(undefined);

export function WallpaperProvider({ children }: { children: React.ReactNode }) {
  const [wallpaper, setWallpaper] = useState<string | undefined>();

  return <WallpaperContext.Provider value={{ wallpaper, setWallpaper }}>{children}</WallpaperContext.Provider>;
}

export function useWallpaper() {
  const ctx = useContext(WallpaperContext);
  if (!ctx) {
    throw new Error("useWallpaper must be used within WallpaperProvider");
  }
  return ctx;
}
