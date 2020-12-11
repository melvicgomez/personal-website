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
    padding: 16px;
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
    margin-bottom: 0px;
    text-align: right;
    a {
      font-size: 90%;
    }
  }
`;

function DesignCardComponent({ data }) {
  return (
    <CardWrapper>
      <div>
        {data.images ? (
          data.images.length > 0 ? (
            data.images.length === 1 ? (
              <img
                className="card-cover"
                src={data.images[0].formats.small.url}
                alt={data.design_name}
              />
            ) : (
              <Carousel effect="fade">
                {data.images.map(image => (
                  <div>
                    <img src={image.formats.small.url} alt={data.design_name} />
                  </div>
                ))}
              </Carousel>
            )
          ) : null
        ) : null}

        <div className="card-content">
          <h2 className="card-title">
            <a href={data.url_link}>{data.design_name}</a>
          </h2>
          <p className="card-date">{data.posted_date}</p>

          <p className="card-description">{data.description}</p>
          <p className="card-info">
            <a href={data.url_link}>
              Design Preview <Icon type="arrow-right" />
            </a>
          </p>
        </div>
      </div>
    </CardWrapper>
  );
}

export default DesignCardComponent;
