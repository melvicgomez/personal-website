import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import { Project } from '../../types/common';

type Props = {
  projects: Project[];
};

const RecentWorkSection: React.FC<Props> = ({ projects }) => (
  <StyledWrapper className="w-full">
    <div className="bg-red-700 px-4 md:px-16 lg:px-32 pt-20 pb-48">
      <p className="text-2xl md:text-4xl leading-8 font-extrabold tracking-wide text-white text-center">
        Recent Projects
      </p>
      <p className="text-base md:text-lg mt-4 mx-auto max-w-4xl text-white text-center">
        On my early career years working hard to developed and enhanced these
        skills by myself. I've been involved in each step of the process from
        <b className="text-white"> start (planning)</b> and{' '}
        <b className="text-white">delivery (deployment)</b>.
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
