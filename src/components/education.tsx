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
  <article className="mb-6 p-4 hover:bg-accent rounded-lg">
    <header>
      <h3 className="text-lg font-semibold">{school}</h3>
      <p className="text-sm text-gray-500">
        {degree} in {major}
      </p>
    </header>
    <div className="mt-2">

      <p className="text-sm text-gray-500">
        {startDate} - {endDate}
      </p>
      <p className="mt-2">{description}</p>
    </div>
  </article>
);

interface ExperienceSectionProps extends PersonalInformation {}

const EducationSection: React.FC<ExperienceSectionProps> = ({ education }) => {
  return (
    <div id="education" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {education.map((exp, index) => (
        <EducationItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default EducationSection;
