
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export interface LocalizationContextType {
  language: 'en' | 'ar';
  setLanguage: (language: 'en' | 'ar') => void;
  t: (key: string) => string;
}
