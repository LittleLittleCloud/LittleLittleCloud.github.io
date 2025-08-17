import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Education, PersonalInformation, WorkExperience } from "@/pages";

// Import the WorkExperience type from your types file

interface EducationItemProps extends Education {}

const EducationItem: React.FC<EducationItemProps> = ({
  school,
  degree,
  major,
  description,
  graduation,
  startDate,
  endDate,
}) => (
  <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg">
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/10 to-yellow-400/10 rounded-full translate-y-12 -translate-x-12"></div>
    
    <div className="relative p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {school}
          </h3>
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            {degree} in {major}
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-200 text-sm font-medium rounded-full border border-emerald-200 dark:border-emerald-700">
            {startDate} - {endDate}
          </span>
        </div>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
    </div>
  </div>
);

interface ExperienceSectionProps extends PersonalInformation {}

const EducationSection: React.FC<ExperienceSectionProps> = ({ education }) => {
  return (
    <div id="education" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 dark:from-white dark:via-emerald-200 dark:to-teal-200 bg-clip-text text-transparent mb-4">
          Education
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Academic foundation and learning journey
        </p>
      </div>
      
      <div className="space-y-8">
        {education.map((exp, index) => (
          <EducationItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
