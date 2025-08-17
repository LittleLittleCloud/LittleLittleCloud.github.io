import { PersonalInformation, ProjectMetadata } from '@/pages';
import React from 'react';
import { Markdown } from './markdown';

interface ProjectProps extends ProjectMetadata {
}

const ProjectItem: React.FC<ProjectProps> = ({ name, description, url }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
      
      <div className="relative p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {name}
          </h3>
        </div>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <Markdown>{description}</Markdown>
        </div>
        
        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </div>
  );
};

interface ProjectSectionProps extends PersonalInformation {
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
    return (
        <div id="projects" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore my latest work and contributions to open-source projects
            </p>
          </div>
          
          <div className="grid gap-8 lg:gap-12">
            {projects.map((project, index) => (
                <ProjectItem key={index} {...project} />
            ))}
          </div>
        </div>
    );
};export default ProjectSection;