'use client'; 

import React, { createContext, useContext, useState, useEffect } from 'react';

// Varsayılan dil dosyası (Hata durumunda veya ilk açılışta göstermek için)
import trDict from '@/src/Language/tr.json'; 

type Language = 'tr' | 'en' | 'de' | 'ru';
type Dictionary = any; 

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (obj: any, field: string) => string;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// BU KISIM ÖNEMLİ: Dosya yollarını açıkça belirtiyoruz.
// Böylece derleyici bu dosyaların projede kullanıldığını anlıyor.
const dictionaryList = {
  tr: () => import('@/src/Language/tr.json').then((module) => module.default),
  en: () => import('@/src/Language/en.json').then((module) => module.default),
  de: () => import('@/src/Language/de.json').then((module) => module.default),
  ru: () => import('@/src/Language/ru.json').then((module) => module.default),
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('tr');
  const [dict, setDict] = useState<Dictionary>(trDict); 

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['tr', 'en', 'de', 'ru'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        // Dinamik string yerine yukarıdaki haritadan seçiyoruz
        const loadFn = dictionaryList[language]; 
        
        if (loadFn) {
            const loadedDict = await loadFn();
            setDict(loadedDict);
        } else {
            // Eğer listede olmayan bir dil gelirse TR yükle
            setDict(trDict);
        }
      } catch (error) {
        console.error(`Dil dosyası yüklenemedi: ${language}`, error);
        setDict(trDict); 
      }
    };

    loadDictionary();
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (obj: any, field: string): string => {
    if (!obj) return '';
    const key = `${field}_${language}`;
    return obj[key] || obj[`${field}_tr`] || obj[`${field}_en`] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};