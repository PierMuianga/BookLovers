"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/layout/i18n-provider";
import { useEffect, ReactNode, useMemo } from "react";
import { useShareReadTheme } from "@/components/layout/theme-provider";
import { LanguageSelector } from "@/components/ui/language-selector";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { WallpaperUploader } from "@/components/ui/wallpaper-uploader";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Discover" },
  { href: "/library", label: "Library" },
  { href: "/writers", label: "Writers" },
  { href: "/admin", label: "Admin" }
];

export function NavigationShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { language, setLanguage } = useI18n();
  const { theme, setTheme, dyslexicFont, setDyslexicFont } = useShareReadTheme();

  useEffect(() => {
    document.documentElement.dataset.font = dyslexicFont ? "dyslexic" : "";
  }, [dyslexicFont]);

  const wallpaperTint = useMemo(() => {
    switch (theme) {
      case "eco":
        return "from-emerald-400/40 to-emerald-900/40";
      case "cute":
        return "from-pink-300/30 to-pink-700/30";
      case "professional":
        return "from-slate-700/40 to-slate-900/40";
      default:
        return "from-blue-300/30 to-indigo-700/30";
    }
  }, [theme]);

  return (
    <div className="relative min-h-screen">
      <div className={cn("pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br blur-3xl", wallpaperTint)} />
      <div className="pointer-events-none wallpaper-overlay" />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 pb-24 pt-6">
        <header className="glass-panel sticky top-6 z-50 flex items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-semibold">
              ShareRead
            </Link>
            <nav className="hidden items-center gap-4 text-sm md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 transition-colors",
                    pathname === item.href ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-white/40"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <LanguageSelector value={language} onChange={setLanguage} />
            <ThemeSwitcher value={theme} onChange={setTheme} dyslexic={dyslexicFont} onToggleDyslexic={setDyslexicFont} />
            <WallpaperUploader />
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
