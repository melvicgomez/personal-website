import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { Row, Col, Icon } from 'antd';
import StackGrid from 'react-stack-grid';
import WrapperLayout from '../components/WrapperLayout';
import PageHeroHeader from '../components/PageHeroHeader';

import { withSize } from 'react-sizeme';
import ProjectCardComponent from '../components/ProjectCardComponent';

const PageWrapper = styled.div`
  overflow: hidden;
  .header > p,
  h1 {
    color: white;
  }
  img.logo {
    max-width: 64px;
    margin-bottom: 0px;
  }
  p {
    margin-bottom: 0px;
  }

  .section-wrapper {
    margin: 24px 0px;
  }
`;

function ProjectsPageComponent({ size, data }) {
  return (
    <WrapperLayout>
      <PageWrapper className="body-gradient">
        <PageHeroHeader
          className="header"
          bgImg={require('../images/bgcover-project-min.jpg')}
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
              <img
                className="logo"
                src={require('../images/mg-icon-alt.png')}
                alt="Website Icon"
              />
              <h1>Personal Projects</h1>
              <p>
                Collection of projects I have done in the past, projects I
                developed involved with my previous and current employers are
                not included. These projects are done during my free time or I
                just want to experiment and learn new tech stacks. Feel free to
                check the projects source codes if you saw the{' '}
                <Icon type="github" theme="outlined" /> icon in the description.
              </p>
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
                {data.allStrapiProjects.nodes.map(node => (
                  <ProjectCardComponent
                    key={node.strapiId}
                    data={node}
                  ></ProjectCardComponent>
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
    allStrapiProjects(sort: { order: DESC, fields: posted_date }) {
      nodes {
        url_link
        tech_stack
        strapiId
        repository_link
        posted_date(formatString: "MMMM DD, YYYY")
        description
        project_name
        thumbnail {
          url
          formats {
            small {
              url
            }
            thumbnail {
              url
            }
            medium {
              url
            }
            large {
              url
            }
          }
        }
      }
    }
  }
`;

export default withSize()(ProjectsPageComponent);
