import * as React from 'react';
import styled from 'styled-components';
import { MediaLinkIcons } from '../../molecules/SocialMedia/SocialMedia';

const Footer: React.FC = () => (
  <StyledFooter>
    <div className="relative z-20 w-full bg-red-700 px-4 py-10 text-white flex flex-col md:justify-between md:flex-row italic md:p-10">
      <div>© 2019-2022 Melvic Gomez · All Rights Reserved </div>
      <div className="flex space-x-2 mt-4 md:mt-0">
        <MediaLinkIcons />
      </div>
    </div>
  </StyledFooter>
);

const StyledFooter = styled.div``;

export default Footer;
