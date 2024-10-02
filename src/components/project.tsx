import { PersonalInformation, ProjectMetadata } from '@/pages';
import React from 'react';
import { Markdown } from './markdown';

interface ProjectProps extends ProjectMetadata {
}

const ProjectItem: React.FC<ProjectProps> = ({ name, description, url }) => {
  return (
    <div className="bg-primary/90 hover:bg-primary/50 rounded-lg  p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <Markdown>{description}</Markdown>
      <div className="flex items-center">
        <label htmlFor={`project-url-${name}`} className="mr-2 text-sm font-medium text-gray-700">
          Project URL:
        </label>
        <a
          id={`project-url-${name}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          {url}
        </a>
      </div>
    </div>
  );
};

interface ProjectSectionProps extends PersonalInformation {
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
    return (
        <div id="projects" className="my-8">
        <h2 className="text-2xl font-bold mb-4">Project</h2>
        {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
        ))}
        </div>
    );
    };

export default ProjectSection;