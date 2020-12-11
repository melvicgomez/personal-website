import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { withSize } from 'react-sizeme';

import { Row, Col, Button } from 'antd';
import StackGrid from 'react-stack-grid';
import WrapperLayout from '../components/WrapperLayout';
import PageHeroHeader from '../components/PageHeroHeader';

import SeoComponent from '../components/SeoComponent';
import DesignCardComponent from '../components/DesignsCardComponents';

const PageWrapper = styled.div`
  width: 100%;

  overflow: hidden;
  .header > p,
  h1 {
    color: white;
  }
  img.logo {
    max-width: 64px;
    margin-bottom: 0px;
  }

  .section-wrapper {
    padding: 24px 0px;
  }

  .nav-btn {
    display: flex;
    flex-wrap: wrap;
    a {
      color: white;
      :hover {
        color: ${props => props.theme.lightprimrayColor};
      }
    }
    a:first-child {
      margin-right: 12px;
    }
  }
`;

function ProjectsPageComponent({ size, data }) {
  return (
    <WrapperLayout>
      <SeoComponent
        title="Designs"
        description={`Excellent UI leads to a good user experience and returning users.`}
      />

      <PageWrapper className="body-gradient">
        <PageHeroHeader
          className="header"
          bgImg={require('../images/bgcover-design-min.jpg')}
        >
          <Row type="flex" justify="center" align="middle">
            <Col
              xs={{ span: 22 }}
              sm={{ span: 22 }}
              md={{ span: 22 }}
              lg={{ span: 18 }}
              xl={{ span: 16 }}
              xxl={{ span: 16 }}
            >
              <a href="/">
                <img
                  className="logo"
                  src={require('../images/mg-icon-alt.png')}
                  alt="Website Icon"
                />
              </a>
              <h1>UI Designs</h1>
              <p>
                Design exists in our life and it is everywhere. Designing is not
                really my thing but when it comes to UI design, I am particular
                about good and bad design. Excellent UI leads to a good user
                experience and returning users. Some of my experimentals are
                uploaded in this page, I used Adobe XD and Adobe Photoshop for
                this designs.
              </p>
              <div className="nav-btn">
                <Button type="ghost" href="/projects">
                  PROJECTS
                </Button>
                <Button type="ghost" href="/blogs">
                  BLOGS
                </Button>
              </div>
            </Col>
          </Row>
        </PageHeroHeader>
        <div className="section-wrapper">
          <Row type="flex" justify="center" align="middle">
            <Col
              xs={{ span: 22 }}
              sm={{ span: 22 }}
              md={{ span: 22 }}
              lg={{ span: 18 }}
              xl={{ span: 16 }}
              xxl={{ span: 16 }}
            >
              <StackGrid
                columnWidth={size.width <= 550 ? '100%' : '50%'}
                gutterWidth={24}
                gutterHeight={24}
                monitorImagesLoaded={true}
              >
                {data.allStrapiDesigns.nodes.map((node, i) => (
                  <DesignCardComponent key={i} data={node} />
                ))}
              </StackGrid>
            </Col>
          </Row>
        </div>
      </PageWrapper>
    </WrapperLayout>
  );
}

export const query = graphql`
  {
    allStrapiDesigns {
      nodes {
        url_link
        strapiId
        posted_date(formatString: "MMMM DD,YYYY")
        description
        design_name
        images {
          formats {
            small {
              url
            }
          }
        }
      }
    }
  }
`;

export default withSize({ monitorPosition: true })(ProjectsPageComponent);
