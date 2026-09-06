import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ja';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isJa: boolean;
}

const STORAGE_KEY = 'capgazer_user_lang';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  // 1. ローカルストレージに保存されている設定を優先
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'ja') {
    return saved;
  }

  // 2. ブラウザの言語設定を確認
  const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || '';
  if (browserLang.toLowerCase().startsWith('ja')) {
    return 'ja';
  }

  // 3. デフォルトは英語
  return 'en';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      // Google Analytics (GA4) に言語設定イベントを送信
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'language_set', {
          language: lang
        });
      }
    } catch {
      // ignore storage errors
    }
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const toggleLang = () => {
    setLangState(prev => (prev === 'en' ? 'ja' : 'en'));
  };

  const isJa = lang === 'ja';

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isJa }}>
      {children}
    </LanguageContext.Provider>
  );
};

// oxlint-disable-next-line react/only-export-components
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
