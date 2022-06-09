import React from 'react';
import styled from 'styled-components';
import BlogCard from '../../molecules/BlogCard/BlogCard';
import { Blog } from '../../types/common';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

type Props = {
  blogs: Blog[];
};

const BlogsSection: React.FC<Props> = ({ blogs }) => (
  <StyledWrapper className="w-full px-4 md:px-16 lg:px-32 py-20 bg-gray-100 ">
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div
        className="
        border-r-0 md:border-r-2 border-b-2 md:border-b-0
        border-gray-400 px-0
        md:px-6 py-4 md:py-0"
      >
        <p className="text-4xl font-extrabold tracking-tight text-gray-900">
          Recent Blogs
        </p>
        <p className="mt-4 max-w-2xl text-lg text-gray-700 leading-relaxed">
          Writing these blogs helped me refine all my understanding on tech and
          techniques I learned from the past. Good way to practice my grammar
          too!
        </p>
        <a
          href="/blogs"
          className="mt-3 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-md hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Learn more
          <ArrowNarrowRightIcon className="ml-2 w-6 h-6" />
        </a>
      </div>

      {blogs.slice(0, 2).map((blogProp) => (
        <BlogCard
          className="
          border-r-0 md:border-r-2 border-b-2 md:border-b-0
          border-gray-400 px-0
          md:px-6 py-4 md:py-0
          last:border-0"
          key={blogProp.id}
          {...blogProp}
        />
      ))}
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div``;

export default BlogsSection;
