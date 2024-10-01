import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PersonalInformation, WorkExperience } from '@/pages';

// Import the WorkExperience type from your types file

interface ExperienceItemProps extends WorkExperience {
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ position, company, startDate, endDate, description }) => (
    <article className="mb-6 p-4 bg-primary/90 hover:bg-primary/50 rounded-lg">
      <header>
        <h3 className="text-lg font-semibold">{position}</h3>
        <p className="text-sm text-gray-500">{company}</p>
      </header>
      <div className="mt-2">
        <p className="text-sm text-gray-600 mb-2">
          {startDate} - {endDate}
        </p>
        <p className="text-sm">{description}</p>
      </div>
    </article>
  );

interface ExperienceSectionProps extends PersonalInformation {
}

const Experience: React.FC<ExperienceSectionProps> = ({ workExperience }) => {
  return (
    <div id="experience" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {workExperience.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;