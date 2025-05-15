import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 bg-white">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          {t('contact.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactItem 
            icon={<Mail size={24} />} 
            label="Email" 
            value={t('contact.email')} 
            link={`mailto:${t('contact.email')}`}
          />
          
          <ContactItem 
            icon={<Linkedin size={24} />} 
            label="LinkedIn" 
            value={t('contact.linkedin')} 
            link={`https://${t('contact.linkedin')}`}
          />
          
          <ContactItem 
            icon={<Github size={24} />} 
            label="GitHub" 
            value={t('contact.github')} 
            link={`https://${t('contact.github')}`}
          />
        </div>
      </div>
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
    >
      <div className="flex-shrink-0 mr-4 text-primary-600">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-lg font-medium text-gray-800 group-hover:text-primary-600 transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
};