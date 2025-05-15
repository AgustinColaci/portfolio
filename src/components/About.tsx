import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { FileDown } from 'lucide-react';

export const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleDownload = () => {
    const lang = i18n.language;
    const fileName = lang === 'es' ? 'cv_es.pdf' : 'cv_en.pdf';
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          {t('about.title')}
        </h2>
        
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            {t('about.content')}
          </p>
          
          <div className="flex justify-center">
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-medium rounded-md shadow-md hover:bg-accent-600 transition-all transform hover:-translate-y-1 hover:shadow-lg"
              onClick={handleDownload}
            >
              <FileDown size={20} />
              {t('about.downloadCV')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};