import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PersonalInformation, WorkExperience } from '@/pages';
import { Markdown } from './markdown';

// Import the WorkExperience type from your types file

interface ExperienceItemProps extends WorkExperience {
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ position, company, startDate, endDate, description }) => (
  <div className="relative group">
    {/* Timeline line */}
    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
    
    {/* Timeline dot */}
    <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg transform group-hover:scale-125 transition-transform duration-300"></div>
    
    <div className="ml-20 pb-12">
      <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-gray-200/20 dark:border-gray-700/20 p-8 hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg group">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {position}
            </h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">{company}</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700">
              {startDate} - {endDate}
            </span>
          </div>
        </div>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <Markdown>{description}</Markdown>
        </div>
        
        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
      </div>
    </div>
  </div>
);

interface ExperienceSectionProps extends PersonalInformation {
}

const Experience: React.FC<ExperienceSectionProps> = ({ workExperience }) => {
  return (
    <div id="experience" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
          Work Experience
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          My professional journey and contributions to technology
        </p>
      </div>
      
      <div className="relative">
        {workExperience.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;