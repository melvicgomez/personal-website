import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Row, Col, Avatar, Icon, Divider } from "antd"

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

  .copyright-label {
    padding: 20px 0px;
    color: white;
  }
`

const AvatarImage = styled(Avatar)`
  margin-top: 75px;
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
    font-family: "Sen", sans-serif;
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
`

const IndexPage = () => (
  <Layout>
    <SEO title="Personal Website" />
    <HomePageContainer type="flex" justify="center">
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
            src={require("../images/melvic-profile-image.jpg")}
            shape="circle"
            size={200}
          />
        </div>

        <ContentComponent>
          <div className="row-wrapper">
            <div className="section-header">Melvic Gomez</div>
            <p>
              Hello! I am a{" "}
              <span className="highlight">full stack developer</span> and{" "}
              <span className="highlight">UI designer</span> enthusiast based in
              the Philippines with almost 5 years of experience on creating
              software application (mobile and web) and websites.
            </p>
            <p>
              I like spending my free times{" "}
              <b>reading books, drinking coffee</b> or{" "}
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

          <Divider />

          <Row type="flex" justify="center" gutter={[12, 12]}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
              <div>
                <div className="section-header">Mission</div>
                <div>
                  To equip myself with necessary knowledge and skills on
                  developing an efficient product.
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
              <div>
                <div className="section-header">Vision</div>
                <div>
                  To produce an efficient product that helps people improving
                  their basic daily process.
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
        </ContentComponent>
      </Col>
      <Col span={24} style={{ backgroundColor: "#C02F1D" }}>
        <Row type="flex" justify="center">
          <Col
            xs={{ span: 22 }}
            md={{ span: 18 }}
            lg={{ span: 14 }}
            xl={{ span: 9 }}
            xxl={{ span: 7 }}
          >
            <div className="copyright-label">
              <small>© 2020 Melvic Gomez | All Rights Reserved.</small>
            </div>
          </Col>
        </Row>
      </Col>
    </HomePageContainer>
  </Layout>
)

export default IndexPage
