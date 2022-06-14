import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer/Footer';
import { Blog, SEOProps } from '../types/common';
import CategoryLabel from '../molecules/CategoryLabel/CategoryLabel';
import { BlogCardTypes, ContentType } from '../types/contentful';
import BlogContentNode from '../molecules/BlogContentNode/BlogContentNode';

const BlogViewPageTemplate: React.FC<PageProps> = ({ pageContext }) => {
  const blogData = pageContext as Blog;

  const contentData = JSON.parse(blogData.content.raw).content as ContentType[];

  const meta: SEOProps = {
    meta: {
      title: blogData.title,
      description: blogData.description.description,
      keywords: [
        {
          name: `keywords`,
          content: `Melvic Gomez, ${blogData.keywords.toString()}`,
        },
        {
          property: `og:type`,
          content: `article`,
        },
      ],
    },
  };

  return (
    <Layout showMenuBar={true} seo={meta}>
      <div className="pt-[104px] md:pt-24 bg-gray-100">
        <div className="p-4 md:py-6 md:p-10 lg:px-32 mx-auto md:max-w-2xl lg:max-w-4xl">
          {blogData.appearance === BlogCardTypes.Medium && (
            <img
              src={blogData?.coverImage?.url}
              alt={blogData.title}
              className="mb-4 w-full"
            />
          )}
          <CategoryLabel category={blogData.category} />
          <p className="text-4xl font-extrabold mb-1">{blogData.title}</p>
          <p className="text-sm italic">
            {blogData.publicationDate} ·{' '}
            {blogData.articleLengthInMinutes.articleLengthInMinutes} min read
          </p>

          <hr className="my-4 border-red-700" />

          {contentData.map((contentNode: ContentType) => (
            <BlogContentNode {...contentNode} title={blogData.title} />
          ))}

          <hr className="my-4 border-red-700" />
          <div className="flex flex-row flex-wrap align-center gap-1">
            <p className="text-lg font-bold text-gray-700">KEYWORDS:</p>
            {(blogData.keywords || [])?.sort().map((keyword) => (
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-stone-600 bg-stone-200 uppercase last:mr-0 mr-1">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default BlogViewPageTemplate;
