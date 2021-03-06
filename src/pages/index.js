import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import WrapperLayout from '../components/WrapperLayout';
import SeoComponent from '../components/SeoComponent';

import { Row, Col, Avatar, Icon, Divider } from 'antd';

import projectIcon from '../images/project.png';
import blogIcon from '../images/social-media.png';
import uxIcon from '../images/ux.png';

const HomePageContainer = styled(Row)`
  min-height: 100vh;

  width: 100%;
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
    content: '';
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    z-index: 0;
    background-color: ${props => props.theme.primaryColor};
  }

  .stats-wrapper {
    height: 100px;
    > div {
      height: 100%;
      padding: 10px 16px;
    }
  }

  .stats-wrapper.projects {
    border-radius: 5px;
    overflow: hidden;
    background-color: #021b79;
    background-image: url(${projectIcon});
    background-size: 45%;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 20px;

    > div {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background: linear-gradient(
        45deg,
        rgba(33, 33, 33, 0.87) 0%,
        rgba(33, 33, 33, 0) 100%
      );

      > div:first-child {
        font-size: 2em;
        font-weight: bold;
        line-height: 1;
      }
      > div:last-child {
        opacity: 0.9;
      }
    }
  }

  .stats-wrapper.blogs {
    border-radius: 5px;
    overflow: hidden;
    background-color: #159957;
    background-image: url(${blogIcon});
    background-size: 45%;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 20px;

    > div {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background: linear-gradient(
        45deg,
        rgba(33, 33, 33, 0.87) 0%,
        rgba(33, 33, 33, 0) 100%
      );

      > div:first-child {
        font-size: 2em;
        font-weight: bold;
        line-height: 1;
      }
      > div:last-child {
        opacity: 0.9;
      }
    }
  }

  .stats-wrapper.designs {
    border-radius: 5px;
    overflow: hidden;
    background-color: #fdbb2d;
    background-image: url(${uxIcon});
    background-size: 45%;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 20px;

    > div {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background: linear-gradient(
        45deg,
        rgba(33, 33, 33, 0.87) 0%,
        rgba(33, 33, 33, 0) 100%
      );

      > div:first-child {
        font-size: 2em;
        font-weight: bold;
        line-height: 1;
      }
      > div:last-child {
        opacity: 0.9;
      }
    }
  }
`;

const AvatarImage = styled(Avatar)`
  margin-top: 75px;
  margin-bottom: 25px;
  border: 6px solid rgb(255, 255, 255);
`;
const ContentComponent = styled.div`
  .btn-socials {
    border-color: transparent;
    margin-right: 8px;
    padding: 4px;
    display: inline-flex;
    border-radius: 4px;

    > i {
      font-size: 20px;
      color: #ffffff;
    }

    :hover {
      cursor: pointer;
      border-color: transparent;
      opacity: 0.9;
    }

    :first-child {
      background-color: #24292e;
    }
    :nth-child(2) {
      background-color: #0e76a8;
    }

    :nth-child(3) {
      background-color: #3b5998;
    }
    :last-child {
      background: ${props => props.theme.primaryColor};
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
  }

  span.highlight {
    font-weight: 700;
    text-decoration: underline;
    color: ${props => props.theme.primaryColor};
  }

  span.my-name {
    font-weight: 900;
    font-family: 'Sen', sans-serif;
    background-color: ${props => props.theme.primaryColor};
    color: white;
    padding: 0px 4px;
  }

  .tools-individual {
    display: inline-flex;
    flex-flow: wrap;

    span {
      margin: 0px 4px;
    }
  }
`;

const IndexPage = ({ data }) => (
  <WrapperLayout>
    <SeoComponent
      title="Personal Website"
      description={`Hello! I am a full stack developer and UI designer enthusiast based in the Philippines with almost 5 years of experience on creating software application (mobile and web) and websites.`}
    />
    <HomePageContainer className="body-gradient" type="flex" justify="center">
      <Col
        xs={{ span: 22 }}
        sm={{ span: 22 }}
        md={{ span: 18 }}
        lg={{ span: 14 }}
        xl={{ span: 9 }}
        xxl={{ span: 7 }}
      >
        <div>
          <AvatarImage
            alt="Melvic Gomez Profile Photo"
            src={require('../images/melvic-profile-image.jpg')}
            shape="circle"
            size={200}
          />
        </div>

        <ContentComponent>
          <div className="row-wrapper">
            <div className="section-header">Melvic Gomez</div>
            <p>
              Hello! I am a{' '}
              <span className="highlight">full stack developer</span> and{' '}
              <span className="highlight">UI designer</span> enthusiast based in
              the Philippines with almost 5 years of experience on creating
              software application (mobile and web) and websites.
            </p>
            <p>
              I like spending my free times <b>reading books</b>,{' '}
              <b>listening to podcast</b>, <b>drinking coffee</b> or{' '}
              <b>playing computer games</b>.
            </p>

            <Row type="flex" justify="space-between">
              <Col>
                <a
                  className="btn-socials"
                  href="https://github.com/melvicgomez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="github" theme="outlined" />
                </a>
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
              </Col>
            </Row>
          </div>

          <Divider />

          <Row type="flex" justify="center" gutter={[12, 12]}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
              <div>
                <div className="section-header">Mission</div>
                <div>
                  To equip myself with necessary knowledge and skills on making
                  a worldwide software.
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
              <div>
                <div className="section-header">Vision</div>
                <div>
                  To publish a worldwide software that helps people on improving
                  their daily processes.
                </div>
              </div>
            </Col>
          </Row>

          <Divider />

          <div className="row-wrapper">
            <div className="section-header">Development</div>
            <div className="tools-individual">
              Javascript<span>·</span>NodeJs<span>·</span>ReactJs<span>·</span>
              React&nbsp;Native<span>·</span>PHP<span>·</span>Laravel
              <span>·</span>MySQL<span>·</span>CI/CD<span>·</span>VS&nbsp;Code
              <span>·</span>Android&nbsp;Studio
              <span>·</span>Xcode<span>·</span>GIT<span>·</span>Bootstrap
              <span>·</span>Ant&nbsp;Design
            </div>
          </div>

          <div className="row-wrapper">
            <div className="section-header">Design</div>
            <div className="tools-individual">
              Adobe XD<span>·</span>Adobe Photoshop
            </div>
          </div>

          <Divider />

          <div className="row-wrapper">
            <div className="section-header" style={{ marginBottom: 5 }}>
              My Personal Stats
            </div>
            <Row gutter={[12, 12]}>
              <Col xs={24} sm={24} md={8}>
                <a href="/projects">
                  <div className="stats-wrapper projects">
                    <div>
                      <div>{data.allStrapiProjects.totalCount}</div>
                      <div>Projects</div>
                    </div>
                  </div>
                </a>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <a href="/blogs">
                  <div className="stats-wrapper blogs">
                    <div>
                      <div>{data.allStrapiBlogs.totalCount}</div>
                      <div>Blogs</div>
                    </div>
                  </div>
                </a>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <a href="/designs">
                  <div className="stats-wrapper designs">
                    <div>
                      <div>{data.allStrapiDesigns.totalCount}</div>
                      <div>Designs</div>
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
          </div>
        </ContentComponent>
      </Col>
    </HomePageContainer>
  </WrapperLayout>
);

export const query = graphql`
  {
    allStrapiBlogs {
      totalCount
    }
    allStrapiDesigns {
      totalCount
    }
    allStrapiProjects {
      totalCount
    }
  }
`;
export default IndexPage;
