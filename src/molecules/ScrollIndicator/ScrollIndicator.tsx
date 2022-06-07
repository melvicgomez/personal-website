import * as React from 'react';
import styled from 'styled-components';

const ScrollIndicator: React.FC = () => (
  <StyledWrapper>
    <div id="wrapper">
      <div id="wrapper-inner">
        <div id="scroll-down">
          <span className="arrow-down"></span>
        </div>
      </div>
    </div>
    <span id="scroll-title">Scroll</span>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  #wrapper {
    display: table;
    margin-top: 2rem;
    height: 100%;
  }

  #wrapper-inner {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  #scroll-down {
    display: block;
    position: relative;
    padding-top: 23px;
    text-align: center;
  }
  .arrow-down {
    display: block;
    margin: 0 auto;
    width: 10px;
    height: 10px;
  }
  .arrow-down:after {
    content: '';
    display: block;
    margin: 0;
    padding: 0;
    width: 8px;
    height: 8px;
    border-top: 2px solid #fad127;
    border-right: 2px solid #fad127;
    behavior: url(-ms-transform.htc);
    -moz-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  #scroll-title {
    text-transform: uppercase;
    color: #fad127;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.1em;
  }
  #scroll-down::before {
    -webkit-animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
    /* Safari 4+ */

    -moz-animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
    /* Fx 5+ */

    -o-animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
    /* Opera 12+ */

    animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
    /* IE 10+, Fx 29+ */

    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -2px;
    width: 2px;
    height: 30px;
    background: #fad127;
    content: ' ';
  }
  @-webkit-keyframes elasticus {
    0% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
    }
    50% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50.1% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
    }
  }
  @-moz-keyframes elasticus {
    0% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
    }
    50% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50.1% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
    }
  }
  @-o-keyframes elasticus {
    0% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
    }
    50% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50.1% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
    }
  }
  @keyframes elasticus {
    0% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
    }
    50% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50.1% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
    }
  }

  // codepen profile logo
  #paschka {
    display: block;
    color: white;
    font-family: helvetica neue, helvetica, arial;
    font-size: 32px;
    text-decoration: none;
    position: fixed;
    bottom: 0px;
    right: 0px;
    padding: 0px;
    transition: all 0.1s ease;
    background: #000;
    height: 40px;
    line-height: 30px;
    width: 40px;
    text-align: center;
    border-radius: 5%;
    bottom: 20px;
    right: 20px;

    &:hover {
      background: #232323;
      transition: all 0.1s ease;
      color: #fad127;
    }
  }

  // Breakpoint = MD for medium size devices
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    #wrapper {
      display: flex;
      align-content: center;
    }
    #scroll-title {
      display: block;
      text-align: center;
    }
  }
`;

export default ScrollIndicator;