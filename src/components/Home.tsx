import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={ref}
      className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4 md:px-0"
    >
      <div className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
          {t('home.welcome')}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-primary-600 mb-6">
          {t('home.name')}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          {t('home.role')}
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('home.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection('about')}
            className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md shadow-md hover:bg-primary-700 transition-all transform hover:-translate-y-1 hover:shadow-lg"
          >
            {t('home.aboutButton')}
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-transparent border-2 border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-all transform hover:-translate-y-1 hover:shadow-md"
          >
            {t('home.projectsButton')}
          </button>
        </div>
      </div>
    </div>
  );
};