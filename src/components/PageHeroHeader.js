import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 24px 0px;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 300px;
  width: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;

  ::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
  > div {
    position: relative;
    z-index: 1;
    color: white;
  }
`;

function PageHeroHeader({ bgImg, children }) {
  return <Wrapper bgImg={bgImg}>{children}</Wrapper>;
}

export default PageHeroHeader;
