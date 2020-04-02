import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Row, Col, Avatar, Button, Icon } from "antd"

const HomePageContainer = styled(Row)`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(240, 240, 245, 1) 100%
  );

  .row-wrapper {
    margin-bottom: 24px;
  }

  > div {
    position: relative;
    z-index: 1;
  }

  ::after {
    position: absolute;
    height: 200px;
    content: "";
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    z-index: 0;
    background-color: ${props => props.theme.primaryColor};
  }
`

const AvatarImage = styled(Avatar)`
  margin-top: 50px;
  margin-bottom: 25px;
  border: 6px solid rgb(255, 255, 255);
`
const ContentComponent = styled.div`
  .btn-socials {
    border-color: transparent;
    margin-right: 6px;
    padding: 4px;
    display: inline-flex;
    border-radius: 4px;

    > i {
      font-size: 24px;
      color: #ffffff;
    }

    :hover {
      cursor: pointer;
      border-color: transparent;
      opacity: 0.9;
    }

    :first-child {
      background-color: #0e76a8;
    }
    :last-child {
      background: #0e76a8;
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      margin-right: initial;
    }

    :nth-child(2) {
      background-color: #3b5998;
    }
  }

  span.highlight {
    font-weight: 700;
    text-decoration: underline;
    color: ${props => props.theme.primaryColor};
  }

  span.my-name {
    font-weight: 900;
    font-family: "Sen", sans-serif;
    background-color: ${props => props.theme.primaryColor};
    color: white;
    padding: 0px 4px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageContainer type="flex" justify="center">
      <Col
        xs={{ span: 22 }}
        md={{ span: 18 }}
        lg={{ span: 14 }}
        xl={{ span: 9 }}
        xxl={{ span: 7 }}
      >
        {/* <div className="nav-section">
          <SayHelloBtn className="btn-hello" size="large">
            SAY HELLO
          </SayHelloBtn>
        </div> */}
        <div>
          <AvatarImage
            alt="M"
            src={require("../images/melvic-profile-image.jpg")}
            shape="circle"
            size={200}
          />
        </div>

        <ContentComponent>
          <div className="row-wrapper">
            <div className="section-header">About Me</div>
            <p>
              Hello! My name is <span className="my-name">Melvic Gomez</span>{" "}
              and I am a{" "}
              <span className="highlight">full stack developer </span>
              <span role="img" aria-label="computer">
                💻
              </span>{" "}
              and <span className="highlight">UI designer</span>
              <span role="img" aria-label="mobile phone">
                📱
              </span>{" "}
              enthusiast based in the Philippines with almost 5 years of
              experience on creating software application (mobile and web) and
              websites.
            </p>
            <p>
              I spend my free times{" "}
              <b>
                reading books partnered with hot coffee
                <span role="img" aria-label="coffee">
                  ☕
                </span>
              </b>{" "}
              or{" "}
              <b>
                playing games
                <span role="img" aria-label="controller">
                  🎮
                </span>{" "}
                at home
              </b>
              .
            </p>

            <Row type="flex" justify="space-between">
              <Col>
                <Button icon="download" type="primary">
                  Resume
                </Button>
              </Col>
              <Col>
                <a
                  className="btn-socials"
                  href="https://www.linkedin.com/in/melvic-gomez-3a563189"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="linkedin" theme="outlined" />
                </a>
                <a
                  className="btn-socials"
                  href="https://www.facebook.com/melvicgomez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="facebook" theme="outlined" />
                </a>
                <a
                  className="btn-socials"
                  href="https://www.instagram.com/melvicgomez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="instagram" theme="outlined" />
                </a>
              </Col>
            </Row>
          </div>

          <div className="row-wrapper">
            <div className="section-header">Mission</div>
            <p>
              Develop applications and websites that impact and solves the pain
              points of the users.
            </p>
          </div>

          <div className="row-wrapper">
            <div className="section-header">My Tools</div>
            <p>
              Develop applications and websites that impact and solves the pain
              points of the users.
            </p>
          </div>
        </ContentComponent>
      </Col>
    </HomePageContainer>
  </Layout>
)

export default IndexPage
