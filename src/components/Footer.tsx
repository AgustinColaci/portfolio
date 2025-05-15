import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Agustín Colaci. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};