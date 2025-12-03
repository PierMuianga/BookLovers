"use client";

import { createContext, useContext, useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getTranslations } from "@/lib/data/i18n";

const defaultLng = "en";

type I18nContextValue = {
  language: string;
  setLanguage: (lng: string) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const resources = getTranslations();

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: defaultLng,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState(defaultLng);

  useEffect(() => {
    void i18n.changeLanguage(language);
  }, [language]);

  return <I18nContext.Provider value={{ language, setLanguage }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
