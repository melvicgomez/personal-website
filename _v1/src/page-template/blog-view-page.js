import React from 'react';
import styled from 'styled-components';

import { Row, Col, Tag, Divider, Icon } from 'antd';
import WrapperLayout from '../components/WrapperLayout';

import SeoComponent from '../components/SeoComponent';

const PageWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  .thumbnail-wrapper {
    width: 100%;
    max-height: 250px;
    overflow: hidden;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }

  h1 {
    margin-bottom: 0px;
  }
  .content {
    white-space: pre-wrap;
  }

  .blog-info {
    font-size: 90%;
    opacity: 0.9;
    > p {
      margin-bottom: 0px;
    }
  }

  .ant-divider-horizontal {
    width: 150px;
    min-width: 150px;
    margin: 24px auto;
  }

  .prev-blog,
  .next-blog {
    a {
      h2 {
        line-height: 1;
        margin-bottom: 0px;
        color: red;
        :hover {
          opacity: 0.8;
          text-decoration: underline;
        }
      }
    }
  }

  .next-blog {
    text-align: right;
  }
`;

function BlogViewPageTemplateComponent({ pageContext }) {
  const { pageData, nextObj, previousObj } = pageContext;
  return (
    <PageWrapper>
      <SeoComponent
        title={pageData.title}
        description={pageData.content}
        meta={[
          {
            name: `keywords`,
            content: pageData.tags,
          },
        ]}
      />
      <WrapperLayout>
        <Row type="flex" justify="center" align="middle">
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 18 }}
            xl={{ span: 16 }}
            xxl={{ span: 16 }}
          >
            <div className="thumbnail-wrapper">
              <img src={pageData.thumbnail_cover[0].url} alt={pageData.title} />
            </div>
            <div style={{ padding: '40px 24px' }}>
              <h1>{pageData.title}</h1>
              <div className="blog-info">
                <p className="publish-date">
                  <Icon type="calendar" />
                  {'  '}
                  {pageData.published_date}
                </p>
                <p className="blog-author">
                  <Icon type="user" />
                  {'  '}
                  {pageData.author}
                </p>
              </div>

              <br />

              <div className="content">{pageData.content}</div>

              <Divider />

              <div style={{ textAlign: 'center', marginBottom: 10 }}>
                <p>
                  <b>TAGS:</b>
                </p>
                {pageData.tags.split(',').map(tag => (
                  <Tag key={tag} color="#D93621">
                    <a href={`/blogs?filter=${tag.trim()}`}>{tag.trim()}</a>
                  </Tag>
                ))}
              </div>

              <br />

              <Row type="flex" gutter={[16, 8]} justify="space-between">
                <Col span={10}>
                  <div className="prev-blog">
                    <div style={{ opacity: 0.8, marginBottom: 6 }}>
                      <Icon type="caret-left" /> Previous
                    </div>
                    <a href={`/blogs/${previousObj.slug}`}>
                      <h2>{previousObj.title}</h2>
                    </a>
                  </div>
                </Col>
                <Col span={10}>
                  <div className="next-blog">
                    <div style={{ opacity: 0.8, marginBottom: 6 }}>
                      Next <Icon type="caret-right" />
                    </div>
                    <a href={`/blogs/${nextObj.slug}`}>
                      <h2>{nextObj.title}</h2>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </WrapperLayout>
    </PageWrapper>
  );
}

export default BlogViewPageTemplateComponent;
