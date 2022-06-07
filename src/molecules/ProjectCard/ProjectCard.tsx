import React from 'react';
import styled from 'styled-components';
import { Project } from '../../types/common';

const ProjectCard: React.FC<Project> = (props: Project) => (
  <StyledCardWrapper
    className={`rounded-md bg-white drop-shadow-lg ${props.className}`}
  >
    <div className="card-image max-h-96 overflow-hidden relative z-0">
      <div className="absolute z-10 p-4 top-0 right-0">
        {props.web && (
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            WEBSITE
          </span>
        )}
        {props.android && (
          <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            ANDROID
          </span>
        )}
        {props.iOS && (
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
            IOS
          </span>
        )}
      </div>
      <img src={props.imageSrc.url} alt={props.projectName} />
    </div>
    <div className="p-4">
      <p className="text-base text-gray-900 mb-2 leading-snug">
        {props.description.description}
      </p>
      <hr className="border-red-700" />
      <p className="leading-5 mt-2 text-gray-500">
        {props.techStacks.techStacks}
      </p>
    </div>
  </StyledCardWrapper>
);

const StyledCardWrapper = styled.div`
  .card-image {
    position: relative;
    ::after {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.1) 60%,
        rgba(0, 0, 0, 0.38) 100%
      );
    }
  }
`;

export default ProjectCard;
