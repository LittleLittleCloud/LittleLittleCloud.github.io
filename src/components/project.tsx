import { PersonalInformation, ProjectMetadata } from '@/pages';
import React from 'react';
import { Markdown } from './markdown';

interface ProjectProps extends ProjectMetadata {
}

const ProjectItem: React.FC<ProjectProps> = ({ name, description, url }) => {
  return (
    <div className="hover:bg-accent rounded-lg  p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <Markdown>{description}</Markdown>
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