import * as React from 'react';
import styled from 'styled-components';
import Seo from '../components/seo';
import NavigationMenuBar from '../molecules/NavigationMenuBar/NavigationMenuBar';
import { Props } from '../types/common';
// import PageLoadingScreen from '../components/PageLoadingScreen/PageLoadingScreen';

const Layout: React.FC<Props> = ({ children, showMenuBar = true, seo }) => {
  return (
    <StyledLayout className="h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <Seo
          title={seo?.meta.title || 'Home'}
          description={seo?.meta.description}
          meta={seo?.meta.keywords || []}
        />
        {showMenuBar && <NavigationMenuBar />}
        {/* <PageLoadingScreen /> */}
        {children}
      </div>
    </StyledLayout>
  );
};

const StyledLayout = styled.div``;
export default Layout;
