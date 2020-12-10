import React from 'react';
import styled from 'styled-components';
import { Divider, Icon, Carousel } from 'antd';

const CardWrapper = styled.div`
  position: relative;

  background-color: #f2f2f5;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);

  .card-cover {
    width: 100%;
    margin-bottom: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .card-content {
    padding: 24px;
  }

  .repo-link {
    position: absolute;
    z-index: 1;
    font-size: 28px;
    right: 0px;
    top: 0px;

    min-width: 40px;
    min-height: 40px;
    background: #0000004d;
    text-align: center;
  }
  .card-title {
    a {
      font-family: 'Sen', sans-serif;
    }
  }

  .card-date {
    opacity: 80%;
    font-size: 80%;
  }

  .card-title,
  .card-date {
    margin-bottom: 0px;
  }

  .card-description {
    margin: 6px 0px;
  }

  .card-info {
    h4 {
      margin-bottom: 0px;
    }
    p {
      font-size: 90%;
    }
  }
`;

function ProjectCardComponent({ data }) {
  return (
    <CardWrapper>
      <div>
        <div className="repo-link">
          <a href={data.repository_link}>
            <Icon type="github" />
          </a>
        </div>
        {data.thumbnail ? (
          data.thumbnail.length > 0 ? (
            data.thumbnail.length === 1 ? (
              <img
                className="card-cover"
                src={data.thumbnail[0].formats.small.url}
                alt={data.project_name}
              />
            ) : (
              <Carousel effect="fade">
                {data.thumbnail.map(thumbnail => (
                  <div>
                    <img
                      src={thumbnail.formats.small.url}
                      alt={data.project_name}
                    />
                  </div>
                ))}
              </Carousel>
            )
          ) : null
        ) : null}

        <div className="card-content">
          <h2 className="card-title">
            <a href={data.repository_link}>{data.project_name}</a>
          </h2>
          <p className="card-date">{data.posted_date}</p>

          <p className="card-description">{data.description}</p>
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          <div className="card-info">
            <h4>TECH STACK</h4>
            <p>{data.tech_stack.split(',').join(`  ·  `)}</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default ProjectCardComponent;
