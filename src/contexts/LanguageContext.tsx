import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import esLocale from "@/locales/es.json";
import enLocale from "@/locales/en.json";

type Language = "es" | "en";

type NestedTranslations = {
  [key: string]: string | NestedTranslations;
};

const locales: Record<Language, NestedTranslations> = {
  es: esLocale,
  en: enLocale,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper to get nested value from object using dot notation
const getNestedValue = (obj: NestedTranslations, path: string): string => {
  const keys = path.split(".");
  let current: string | NestedTranslations = obj;
  
  for (const key of keys) {
    if (typeof current === "string") return path; // Fallback to key
    if (current[key] === undefined) return path; // Fallback to key
    current = current[key];
  }
  
  return typeof current === "string" ? current : path;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "es";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }, []);

  const t = useCallback((key: string): string => {
    return getNestedValue(locales[language], key);
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
