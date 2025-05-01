import React, { useEffect, useState } from 'react';
import { graphql, navigate, PageProps } from 'gatsby';
import * as queryString from 'query-string';

import Layout from '../components/layout';
import Footer from '../components/Footer/Footer';
import { Blog, SEOProps } from '../types/common';
import BlogCard from '../molecules/BlogCard/BlogCard';
import StackGrid from 'react-stack-grid';
import sizeMe, { withSize } from 'react-sizeme';
import { BlogCategories } from '../types/contentful';

const meta: SEOProps = {
  meta: {
    title: 'Blogs',
    description:
      'Writing these blogs helped me refine all my understanding on tech and techniques I learned from the past. Good way to practice my grammar too!',
    keywords: [
      {
        name: `keywords`,
        content:
          'Melvic Gomez, Blogs, Personal Website, Technology, UI/UX, Software Developement, Games, Self Improvement, Business',
      },
      {
        property: `og:type`,
        content: `website`,
      },
    ],
  },
};

interface Props {
  showDivider: boolean;
  size: {
    width: number;
    height: number;
  };
  allContentfulBlog: { nodes: Blog[] };
}

const showMenuBar = true;

const cardDividerClass =
  'border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-gray-400 px-0 md:px-4 py-4 md:py-0 last:border-0';
const BlogPage: React.FC<Props & PageProps> = ({
  data,
  size,
  location,
}: Props & PageProps) => {
  const categories: string[] = Object.values(BlogCategories);
  const qsParam = queryString.parse(location.search);
  const foundCategory = categories.find(
    (category) => category.toLowerCase() === `${qsParam.filter}`.toLowerCase()
  );

  const [selectedCategory, setSelectedCategory] = useState(
    BlogCategories.ALL.toLowerCase()
  );
  const [filteredBlogs, setFilteredBlogs] = useState(
    data.allContentfulBlog.nodes
  );

  const filterBlogsByCategory = (category: BlogCategories) => {
    navigate(`/blogs/?filter=${category.toLowerCase()}`);
  };

  useEffect(() => {
    if (qsParam.filter && foundCategory) {
      setFilteredBlogs(
        foundCategory === BlogCategories.ALL
          ? data.allContentfulBlog.nodes
          : data.allContentfulBlog.nodes.filter(
              (blog: Blog) => blog.category === foundCategory
            )
      );
      setSelectedCategory(foundCategory as BlogCategories);
    } else {
      setFilteredBlogs(data.allContentfulBlog.nodes);
      navigate(`/blogs/?filter=${BlogCategories.ALL.toLowerCase()}`);
    }
  }, [qsParam.filter]);

  return (
    <Layout showMenuBar={showMenuBar} location={location} seo={meta}>
      <div className="pt-[104px] md:pt-24 bg-gray-100">
        <div className="p-4 md:py-6 md:p-10 lg:px-32">
          <div className="mb-2 text-2xl font-extrabold text-gray-700">
            CATEGORIES:
          </div>
          <div
            className="mb-6 inline-flex flex-wrap content-center items-center gap-2"
            role="group"
          >
            {Object.values(BlogCategories).map((category) => (
              <button
                key={category}
                type="button"
                className={`${
                  selectedCategory === category ? 'bg-red-700 text-white' : ''
                } py-1 px-4 text-md font-medium border-2 hover:cursor-pointer
                hover:text-white
                hover:opacity-90
                hover:bg-red-700
                `}
                onClick={() => {
                  filterBlogsByCategory(category);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <StackGrid
            columnWidth={size.width <= 550 ? '100%' : '33%'}
            gutterWidth={24}
            gutterHeight={24}
            monitorImagesLoaded={true}
          >
            {filteredBlogs.map((blog: Blog) => {
              return (
                <BlogCard
                  className={`${data.showDivider ? cardDividerClass : ''}`}
                  key={blog.id}
                  showImage
                  {...blog}
                />
              );
            })}
          </StackGrid>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

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
          url
        }
      }
    }
  }
`;

export default withSize({ monitorPosition: true } as sizeMe.SizeMeOptions)(
  BlogPage
);
