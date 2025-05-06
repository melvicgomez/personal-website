'use client';

import React from 'react';
import { DefaultProps } from 'src/types/Component';

import experienceJson from 'src/data/experiences.json';
import { Experience } from 'src/models/Experience';
import ExperienceCard from './ExperienceCard';
import { Divider, Typography } from '@mui/material';

const ExperienceSection = React.forwardRef<HTMLDivElement, DefaultProps>(
  ({ className }, ref) => {
    const experiencesArr: Experience[] = experienceJson;
    return (
      <section ref={ref} className={className}>
        <div className="h-full flex flex-col justify-center overflow-y-auto flex-1 p-4 md:py-10">
          <div className="mb-4 max-w-5xl mx-auto w-full">
            <Typography
              variant="h3"
              className="text-red-500 mb-4"
              fontWeight={600}
            >
              EXPERIENCE
            </Typography>
            <Divider orientation="horizontal" variant="fullWidth" flexItem />
          </div>

          <div id="experience-div-elem" className="flex-1 overflow-auto">
            <div className="max-w-5xl mx-auto w-full">
              {experiencesArr.map((experienceObj, i) => (
                <ExperienceCard
                  key={i}
                  company={experienceObj.company}
                  dtRange={experienceObj.dtRange}
                  description={experienceObj.description}
                  position={experienceObj.position}
                  stack={experienceObj.stack}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ExperienceSection.displayName = 'ExperienceSection';

export default ExperienceSection;
