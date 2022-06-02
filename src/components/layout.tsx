import * as React from 'react';
import styled from 'styled-components';
import Seo from '../components/seo';
import NavigationMenuBar from '../molecules/NavigationMenuBar/NavigationMenuBar';
// import PageLoadingScreen from '../components/PageLoadingScreen/PageLoadingScreen';

type Props = {
  children?: React.ReactNode;
  showMenuBar?: boolean;
};

const Layout: React.FC<Props> = ({ children, showMenuBar = true }) => (
  <StyledLayout className=" bg-zinc-100 h-screen">
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
