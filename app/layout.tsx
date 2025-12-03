import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "sonner";
import { I18nProvider } from "@/components/layout/i18n-provider";
import { WallpaperProvider } from "@/components/layout/wallpaper-context";
import { NavigationShell } from "@/components/layout/navigation-shell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareRead | Library & Donations Super-App",
  description:
    "Discover, borrow, and support writers with ShareRead — a liquid glass multi-theme library experience integrated with ShareKind donations."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider>
          <ThemeProvider>
            <WallpaperProvider>
              <NavigationShell>{children}</NavigationShell>
            </WallpaperProvider>
          </ThemeProvider>
        </I18nProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
