import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import { Project, Props } from '../../types/common';

interface ComponentProps extends Props {
  projects: Project[];
}

const RecentWorkSection: React.FC<ComponentProps> = ({ projects }) => (
  <StyledWrapper className="w-full bg-gray-100 pb-24">
    <div className="bg-red-700 px-4 md:px-16 lg:px-32 pt-20 pb-48">
      <p className="text-4xl font-extrabold tracking-wide text-white text-center">
        Project Portfolio
      </p>
      <p className="text-base md:text-lg mt-4 mx-auto max-w-4xl text-white text-center opacity-90 leading-relaxed">
        Some projects I am proud of because of the limitations I encountered
        during the development. Learning new technology is never an issue
        because I have a strong background on programming <b>DESIGN</b> and{' '}
        <b>PATTERN</b>.
      </p>
    </div>
    <div className="-mt-32 px-4 md:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-1 gap-6">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div``;

export default RecentWorkSection;
