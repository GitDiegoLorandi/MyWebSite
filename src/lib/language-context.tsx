'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

type Language = 'en' | 'pt-BR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with 'en' for both server and client consistency
  const [language, setLanguage] = useState<Language>('en');
  const [hasMounted, setHasMounted] = useState(false);

  // Only run on client after mount
  useEffect(() => {
    setHasMounted(true);
    
    // Load saved language from localStorage only after mounting
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt-BR')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
    }
  };

  // Translation function - always returns English until component is mounted
  const t = (key: string, section: string = 'HomePage'): string => {
    // Use English for SSR and initial client render to prevent hydration mismatches
    const effectiveLanguage = hasMounted ? language : 'en';
    const currentTranslations = translations[effectiveLanguage];
    
    // Handle nested section paths like 'AboutPage.background'
    const sectionParts = section.split('.');
    let sectionTranslations: Record<string, unknown> = currentTranslations;
    
    // Navigate through nested objects
    for (const part of sectionParts) {
      if (sectionTranslations && typeof sectionTranslations === 'object' && part in sectionTranslations) {
        const nextLevel = sectionTranslations[part];
        if (typeof nextLevel === 'object' && nextLevel !== null) {
          sectionTranslations = nextLevel as Record<string, unknown>;
        } else {
          console.warn(`Translation section not found: ${section}`);
          return key;
        }
      } else {
        console.warn(`Translation section not found: ${section}`);
        return key;
      }
    }
    
    if (sectionTranslations && typeof sectionTranslations === 'object' && key in sectionTranslations) {
      const result = sectionTranslations[key];
      return typeof result === 'string' ? result : key;
    }
    
    console.warn(`Translation key not found: ${key} in section ${section}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 