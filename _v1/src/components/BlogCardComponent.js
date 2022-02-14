import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';

const CardWrapper = styled.div`
  position: relative;

  background-color: #f2f2f5;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);

  .card {
    display: ${props => (props.featured ? 'flex' : 'block')};
    flex-wrap: wrap;
  }

  .card-cover {
    width: 100%;
    margin-bottom: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .thumbnail-cover {
    height: ${props => (props.featured ? 'inherit' : '100%')};
    width: ${props => (props.featured ? '300px' : '100%')};
    @media only screen and (max-width: 500px) {
      min-height: 150px;
      width: 100%;
    }
    position: ${props => (props.featured ? 'relative' : 'absolute')};
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center;
  }

  .card-content {
    flex: ${props => (props.featured ? '1' : 'initial')};
    padding: ${props => (props.featured ? '16px' : '80px 16px 16px 16px')};
    z-index: 1;
    position: relative;
    background: rgba(0, 0, 0, 0);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 34%,
      rgba(0, 0, 0, 0.5) 65%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  .card-content.featured {
    background: white;
    color: #000000cc;
    .card-title > a {
      color: #000000cc;
    }
  }

  .card-content.white {
    background: white;
    color: #000000cc;
    .card-title > a {
      color: #000000cc;
    }
  }

  .card-content.red {
    background: ${props => props.theme.darkPrimaryColor};
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

  .card-title > a {
    font-family: 'Sen', sans-serif;
  }
  .card-title > a,
  .card-content {
    color: white;
  }
`;

function BlogCardComponent({ data }) {
  return (
    <CardWrapper
      bgImg={data.thumbnail_cover[0].formats.small.url}
      featured={data.featured}
    >
      <div className="card">
        <div className="thumbnail-cover" />
        <div
          className={`card-content ${
            data.featured
              ? 'featured'
              : data.title.toLowerCase().startsWith('m')
              ? 'red'
              : data.title.toLowerCase().startsWith('g')
              ? 'white'
              : ''
          }`}
        >
          <h2 className="card-title">
            <a href={`/blogs/${data.slug}`}>{data.title}</a>
          </h2>
          <p className="card-date">{data.published_date}</p>
          <p className="card-description">{data.content}</p>
          <div>
            {data.tags.split(',').map(tag => (
              <Tag key={tag} color="#D93621">
                <a href={`/blogs?filter=${tag.trim()}`}>{tag.trim()}</a>
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default BlogCardComponent;
