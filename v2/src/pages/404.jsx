import React from 'react';
import styled from 'styled-components';

import NotFoundBg from '../images/undraw-page-not-found.png';

const StyledNotFoundPage = styled.div``;

function NotFoundPage() {
  return (
    <StyledNotFoundPage>
      <div className="h-screen w-screen overflow-hidden p-10 flex flex-col justify-center items-center">
        <img
          className="h-auto w-96 lg:w-1/4"
          src={NotFoundBg}
          alt="Page not found placeholder."
        />
        <br />
        <div className="max-w-lg text-center">
          <p className="text-xl text-gray-700">
            You hit a page does not exist in my website. Try to click the link
            to see what I have in this website.
          </p>
          <br />
          <a
            className="bg-red-700 hover:opacity-80 text-white font-bold py-2 px-4 inline-flex items-center"
            href="/"
          >
            <span>Back to homepage</span>
          </a>
        </div>
      </div>
    </StyledNotFoundPage>
  );
}

export default NotFoundPage;
