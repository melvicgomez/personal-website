import React from 'react';
import styled from 'styled-components';
import { Blog } from '../../types/common';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const BlogCard: React.FC<Blog> = (props: Blog) => (
  <StyledCardWrapper className={props.className}>
    <div className="py-2">
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
        {props.category}
      </span>
      <p className="text-2xl font-bold">{props.title}</p>
      <p className="text-sm italic">
        {props.publicationDate} ·{' '}
        {props.articleLengthInMinutes.articleLengthInMinutes} min read
      </p>
    </div>
    <p className="text-base text-gray-900 mb-4 leading-snug line-clamp-3">
      {props.description.description}
    </p>
    <a
      href={`/blogs/${props.slug}`}
      className="text-red-700 hover:text-red-900 text-right text-base font-bold inline-flex items-center justify-end w-full"
    >
      Read full article <ArrowNarrowRightIcon className="ml-2 w-6 h-6" />
    </a>
  </StyledCardWrapper>
);

const StyledCardWrapper = styled.div`
  .card-image {
    position: relative;
    ::after {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.1) 60%,
        rgba(0, 0, 0, 0.38) 100%
      );
    }
  }
`;

export default BlogCard;
