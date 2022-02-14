import React from 'react';
import styled from 'styled-components';

const PageLoadingScreen: React.FC = () => (
  <StyledWrapper className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-red-700 overflow-hidden">
    TEXT
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  /* position: absolute; */
`;

export default PageLoadingScreen;
