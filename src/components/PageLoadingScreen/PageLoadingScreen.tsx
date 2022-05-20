import React from 'react';
import styled from 'styled-components';

const PageLoadingScreen: React.FC = () => (
  <StyledWrapper className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-red-700 overflow-hidden p-6 flex justify-center items-center">
    <div className="text-center">
      <div className="dev-name font-century-gothic font-black text-white opacity-95 leading-none text-6xl sm:text-8xl md:text-7xl">
        MELVIC
      </div>
      <div className="dev-name font-century-gothic font-black text-white opacity-95 text-6xl sm:text-8xl md:text-7xl">
        GOMEZ
      </div>
      <div className="bar-line-yellow my-3 h-1 bg-amber-400 w-25 sm:w-96 sm:h-2 md:w-25" />
      <div className="dev-role font-dm-sans font-light text-white opacity-80 text-2xl sm:text-3xl md:text-2xl">
        FULL STACK DEVELOPER
      </div>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  .dev-name {
    letter-spacing: 0.5rem;
    line-height: 0.85;
  }
`;

export default PageLoadingScreen;
