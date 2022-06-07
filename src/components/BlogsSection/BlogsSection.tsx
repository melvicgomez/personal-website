import React from 'react';
import styled from 'styled-components';
import { Blog } from '../../types/common';

type Props = {
  blogs: Blog[];
};

const BlogsSection: React.FC<Props> = ({ blogs }) => (
  <StyledWrapper>
    <div className="w-full h-30">Test</div>
    {/* <div className="w-full h-30">{blogs[0].id}</div>
    <div className="w-full h-30">
      {blogs[0].articleLengthInMinutes.articleLengthInMinutes}
    </div>
    <div className="w-full h-30">{blogs[0].title}</div>
    <div className="w-full h-30">{blogs[0].description.description}</div>
    <div className="w-full h-30">{blogs[0].publicationDate}</div>
    <div className="w-full h-30">{blogs[0].content.raw}</div>
    <div className="w-full h-30">{blogs[0].coverImage.url}</div>
    <div className="w-full h-30">{blogs[0]?.keywords?.toString()}</div> */}
  </StyledWrapper>
);

const StyledWrapper = styled.div``;

export default BlogsSection;
