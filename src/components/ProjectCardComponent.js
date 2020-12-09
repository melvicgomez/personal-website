import { Divider, Icon } from 'antd';
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;

  background-color: #f2f2f5;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);

  .card-cover {
    width: 100%;
    margin-bottom: 0px;
  }

  .card-content {
    padding: 24px;
  }

  .repo-link {
    position: absolute;
    z-index: 1;
    padding: 10px 12px;
    font-size: 28px;
    right: 0px;
    top: 0px;
  }
`;

function ProjectCardComponent({ data }) {
  return (
    <CardWrapper>
      <div>
        <div className="repo-link">
          <a href="">
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
              <div>carousel</div>
            )
          ) : null
        ) : null}

        <div className="card-content">
          <h3>{data.project_name}</h3>
          <div>{data.posted_date}</div>
          <p>{data.description}</p>
          <Divider />
          <div className="card-info">
            <p>TECH STACK</p>
            <p>
              {data.tech_stack}
              <span>·</span>NodeJs<span>·</span>ReactJs<span>·</span>
              React&nbsp;Native
            </p>
          </div>
          <Divider />
          <div className="card-footer">
            <div>Check the link here{data.url_link}</div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default ProjectCardComponent;
