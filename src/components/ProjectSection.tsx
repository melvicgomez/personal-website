'use client';

import React from 'react';
import { DefaultProps } from 'src/types/Component';

import projectJson from 'src/data/projects.json';
import { Typography } from '@mui/material';
import { Project } from 'src/models/Project';
import ProjectCard from './ProjectCard';

const ProjectSection = React.forwardRef<HTMLDivElement, DefaultProps>(
  ({ className }, ref) => {
    const projectsArr: Project[] = projectJson;
    return (
      <section ref={ref} className={className}>
        <div className="h-full flex flex-col justify-center relative">
          <div
            id="project-div-elem"
            className="
            flex flex-col md:flex-row
            gap-x-16 pb-10 h-1/2
            md:max-w-7xl md:mx-auto md:overflow-x-auto"
          >
            <div className="md:sticky md:left-0 md:top-0 md:z-10 md:flex-shrink-0 bg-red-500 text-white p-4 md:p-8 flex flex-col justify-center md:max-w-[300px]">
              <Typography variant="h2" fontWeight={600}>
                Projects
              </Typography>

              <Typography variant="body2" className="md:mb-8">
                Some projects I am proud of because of the limitations I
                encountered during the development. Learning new technology is
                never an issue because I have a strong background on programming
                <strong> DESIGN </strong> and <strong> PATTERN </strong>.
              </Typography>
            </div>

            {projectsArr.map((projectObj, i) => (
              <ProjectCard
                key={i}
                role={projectObj.role}
                shortDescription={projectObj.shortDescription}
                stack={projectObj.stack}
                title={projectObj.title}
                year={projectObj.year}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

ProjectSection.displayName = 'ProjectSection';

export default ProjectSection;
