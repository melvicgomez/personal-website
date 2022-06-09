import * as React from 'react';
import styled from 'styled-components';
import Seo from '../components/seo';
import NavigationMenuBar from '../molecules/NavigationMenuBar/NavigationMenuBar';
import { Props } from '../types/common';
// import PageLoadingScreen from '../components/PageLoadingScreen/PageLoadingScreen';

export interface Meta {
  name: string;
  content: string;
}

export interface SEOProps {
  meta: {
    description: string;
    lang: string;
    meta: Meta[];
    title: string;
  };
}

const Layout: React.FC<Props> = ({ children, showMenuBar = true }) => (
  <StyledLayout className="h-screen">
    <div className="max-w-screen-2xl mx-auto">
      <Seo title="Home" />
      {showMenuBar && <NavigationMenuBar />}
      {/* <PageLoadingScreen /> */}
      {children}
    </div>
  </StyledLayout>
);

const StyledLayout = styled.div``;
export default Layout;
