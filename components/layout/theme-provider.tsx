"use client";

import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { createContext, useContext, useMemo, useState } from "react";

export type ShareReadTheme =
  | "light"
  | "dark"
  | "professional"
  | "cute"
  | "eco"
  | "wallpaper";

type ThemeContextValue = {
  theme: ShareReadTheme;
  setTheme: (theme: ShareReadTheme) => void;
  dyslexicFont: boolean;
  setDyslexicFont: (value: boolean) => void;
};

const ShareReadThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function ThemeBridge({ children }: { children: React.ReactNode }) {
  const { theme = "light", setTheme } = useTheme();
  const [dyslexicFont, setDyslexicFont] = useState(false);

  const value = useMemo(
    () => ({
      theme: theme as ShareReadTheme,
      setTheme: setTheme as (theme: ShareReadTheme) => void,
      dyslexicFont,
      setDyslexicFont
    }),
    [theme, setTheme, dyslexicFont]
  );

  return <ShareReadThemeContext.Provider value={value}>{children}</ShareReadThemeContext.Provider>;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      themes={["light", "dark", "professional", "cute", "eco", "wallpaper"]}
    >
      <ThemeBridge>{children}</ThemeBridge>
    </NextThemeProvider>
  );
}

export function useShareReadTheme() {
  const ctx = useContext(ShareReadThemeContext);
  if (!ctx) {
    throw new Error("useShareReadTheme must be used within ThemeProvider");
  }
  return ctx;
}
