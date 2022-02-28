import React from 'react';
import styled from 'styled-components';

const PageLoadingScreen: React.FC = () => (
  <StyledWrapper className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-red-700 overflow-hidden p-6 flex justify-center items-center">
    <div>
      <div className="dev-name font-century-gothic font-black italic text-white opacity-95 leading-none text-6xl sm:text-8xl md:text-7xl">
        MELVIC
      </div>
      <div className="dev-name font-century-gothic font-black italic text-white opacity-95 text-6xl sm:text-8xl md:text-7xl">
        GOMEZ
      </div>
      <div className="bar-line-yellow my-3 h-1 bg-amber-400 w-10 sm:w-96 sm:h-2 md:w-20" />
      <div className="dev-role font-dm-sans font-extrabold text-white opacity-80 text-2xl sm:text-3xl md:text-3xl">
        FULL STACK DEVELOPER
      </div>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  .dev-name:first-child {
    line-height: 0.55;
  }
`;

export default PageLoadingScreen;
