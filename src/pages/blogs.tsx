import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer/Footer';
import { Blog } from '../types/common';
import BlogCard from '../molecules/BlogCard/BlogCard';

type Props = {
  children: React.ReactNode;
  allContentfulBlog: { nodes: Blog[] };
};

const showMenuBar = true;
const BlogPage: React.FC<PageProps<Props>> = ({ data }) => (
  <Layout showMenuBar={showMenuBar}>
    <div className="pt-[104px] md:t-24">
      {data.allContentfulBlog.nodes.map((blog: Blog) => (
        <BlogCard
          className="
          border-r-0 md:border-r-2 border-b-2 md:border-b-0
          border-gray-400 px-0
          md:px-4 py-4 md:py-0
          last:border-0"
          key={blog.id}
          {...blog}
        />
      ))}
    </div>
    <Footer />
  </Layout>
);

export const query = graphql`
  query BlogPageQuery {
    allContentfulBlog(sort: { fields: publicationDate, order: DESC }) {
      nodes {
        id
        title
        description {
          description
        }
        category
        slug
        keywords
        articleLengthInMinutes {
          articleLengthInMinutes
        }
        publicationDate(formatString: "MMMM D, YYYY")
        content {
          raw
        }
        appearance
        coverImage {
          publicUrl
        }
      }
    }
  }
`;

export default BlogPage;
