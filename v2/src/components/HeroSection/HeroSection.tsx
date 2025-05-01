import React from 'react';
import styled from 'styled-components';

import AppLogo from '../../images/mg-icon-alt.png';
import MelvicImage from '../../images/melvic-image.jpg';
import ScrollIndicator from '../../molecules/ScrollIndicator/ScrollIndicator';

const HeroSection: React.FC = () => (
  <StyledWrapper>
    <div className="relative bg-red-700 overflow-hidden">
      <div className="max-w-screen-xl md:max-w-screen-2xl mx-auto">
        <div className="relative z-10 pb-10 bg-red-700 sm:pb-16 md:pb-20 lg:max-w-lg xl:max-w-screen-md lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 h-full w-48 text-red-700 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-0 px-4 sm:px-8 lg:px-8 md:pt-6 invisible lg:visible " />
          <main className="mt-10 mx-auto lg:max-w-7xl px-4 sm:mt-12 sm:px-8 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left text-white">
              <img
                className="border-solid border-2 border-white h-20 w-auto mb-3 relative sm:mx-0  md:mx-auto lg:mx-0"
                src={AppLogo}
                alt="app logo for my website"
              />
              <h1 className="text-5xl tracking-tight font-extrabold text-white dev-name">
                Melvic Gomez
              </h1>
              <h2 className="text-5xl tracking-tighter font-extrabold text-white dev-role md:mb-3 sm:mb-5">
                Full Stack Developer
              </h2>
              <p className="mt-3 text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0 text-xl leading-relaxed">
                Mabuhay! I am a full stack developer and UI/UX enthusiast from
                the Philippines with more than 7 years of experience on creating
                software application(web and mobile) and websites.
              </p>

              <p className="mt-3 text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0 text-xl ">
                I like spending my free times on cycling, reading books,
                listening to podcasts, drinking coffee, or playing computer
                games.
              </p>
            </div>

            <ScrollIndicator />
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="w-full object-cover lg:w-full h-full"
          src={MelvicImage}
          alt=""
        />
      </div>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  .dev-name {
    text-shadow: 2px 2px 5px #0000004a;
  }

  .dev-role {
    text-shadow: 2px 2px 5px #0000004a;
    position: relative;
    ::after {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 0.5rem;
      z-index: -1;
      background-color: #fad127;
    }

    // Breakpoint = MD for medium size devices
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      ::after {
        right: 0;
        margin: auto;
      }
    }
  }
`;

export default HeroSection;
