/* This example requires Tailwind CSS v2.0+ */
import * as React from 'react';
import styled from 'styled-components';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import SocialMedia from '../SocialMedia/SocialMedia';

import AppLogo from '../../images/mg-icon-alt.png';

const navigation = [
  { name: 'Skill Competencies', href: '/#skills-and-stats' },
  { name: 'Current Stats', href: '/#skills-and-stats' },
  { name: 'Project Portfolio', href: '/#project-portfolio' },
  { name: 'Blogs', href: '/blogs' },
];

const NavigationMenuBar = () => (
  <StyledNavigationMenu className="max-w-screen-2xl mx-auto w-full z-20 pb-8 bg-red-700 drop-shadow-md fixed">
    <Popover>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0">
            <div className="flex items-center justify-between w-full">
              <a href="/" className=" hover:opacity-80">
                <span className="sr-only">HOME</span>
                <img
                  className="border-solid border-2 border-white h-12 w-auto"
                  src={AppLogo}
                  alt="app logo for my website"
                />
              </a>

              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg px-3 py-2 font-medium text-white hover:text-red-700 hover:bg-amber-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center md:hidden">
                <Popover.Button className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* MOBILE VIEW NAV BAR  */}
      <Transition
        as={React.Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-20 top-0 inset-x-0 transition transform origin-top-right h-screen"
        >
          <div className="bg-red-700 overflow-hidden h-full flex flex-col justify-between">
            <div>
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="border-solid border-2 border-white h-12 w-auto"
                    src={AppLogo}
                    alt="app logo for my website"
                  />
                </div>
                <div>
                  <Popover.Button className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-5 pb-3 space-y-2 mr-1 ml-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-lg font-medium text-white hover:text-red-700 hover:bg-amber-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pb-6">
              <hr className="my-6 border-amber-400 mx-auto dark:white w-full" />
              <SocialMedia />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </StyledNavigationMenu>
);

const StyledNavigationMenu = styled.div``;

export default NavigationMenuBar;
