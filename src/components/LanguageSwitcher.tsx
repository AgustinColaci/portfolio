import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white hover:text-black transition-colors"
      aria-label={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Globe size={16} />
      <span>{i18n.language === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
};