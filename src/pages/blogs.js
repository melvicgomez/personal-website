import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { withSize } from 'react-sizeme';

import { Row, Col, Button } from 'antd';
import StackGrid from 'react-stack-grid';
import WrapperLayout from '../components/WrapperLayout';
import PageHeroHeader from '../components/PageHeroHeader';

import BlogCardComponent from '../components/BlogCardComponent';
import SeoComponent from '../components/SeoComponent';

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
        color: ${props => props.theme.lightPrimaryColor};
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
        title="Projects"
        description={`Collection of projects I have done in the past, projects I
                developed involved with my previous and current employers are
                not included.`}
      />

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
              <a href="/">
                <img
                  className="logo"
                  src={require('../images/mg-icon-alt.png')}
                  alt="Website Icon"
                />
              </a>
              <h1>Blogs</h1>
              <p>
                I want to share my learnings about new tech and self-improvement
                that I learned. Writing my own blogs helps me construct my own
                thoughts specially when I'm sharing my ideas with other people
                in a group set-up. Consider it as my logs of realizations on
                things happening to me and no harm intended in each blog.
                <br />
                <br />
                Feel free to message me anytime if you find my blogs interesting
                or even worst.
              </p>
              <div className="nav-btn">
                <Button type="ghost" href="/projects">
                  PROJECTS
                </Button>
                <Button type="ghost" href="/designs">
                  DESIGNS
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
              <BlogCardComponent data={data.strapiBlogs} />
              <br />
              <StackGrid
                columnWidth={size.width <= 550 ? '100%' : '50%'}
                gutterWidth={24}
                gutterHeight={24}
                monitorImagesLoaded={true}
              >
                {data.allStrapiBlogs.nodes.map((node, i) => (
                  <BlogCardComponent key={`${node.strapiId}${i}`} data={node} />
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
    allStrapiBlogs(filter: { featured: { ne: true } }) {
      nodes {
        author
        content
        published_date(formatString: "MMMM DD, YYYY")
        strapiId
        slug
        tags
        title
        thumbnail_cover {
          formats {
            small {
              url
            }
          }
        }
      }
    }
    strapiBlogs(featured: { eq: true }) {
      author
      content
      published_date(formatString: "MMMM DD, YYYY")
      strapiId
      slug
      tags
      title
      featured
      thumbnail_cover {
        formats {
          small {
            url
          }
        }
      }
    }
  }
`;

export default withSize({ monitorPosition: true })(ProjectsPageComponent);
