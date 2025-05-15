import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Helper function to get project data
  const getProjects = () => {
    return t('projects.items', { returnObjects: true }) as Array<{
      id: number;
      title: string;
      description: string;
      link: string;
    }>;
  };

  const projects = getProjects();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          {t('projects.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-40 bg-gradient-to-r from-primary-500 to-primary-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex justify-end">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-primary-600 font-medium hover:text-primary-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('projects.viewProject')}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};