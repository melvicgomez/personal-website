import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import SkillCompetencies from '../components/SkillCompetencies/SkillCompetencies';
import RecentWorkSection from '../components/RecentWorkSection/RecentWorkSection';
import BlogsSection from '../components/BlogsSection/BlogsSection';
import { Project, Blog } from '../types/common';

type Props = {
  children: React.ReactNode;
  allContentfulProject: { nodes: Project[] };
  allContentfulBlog: { nodes: Blog[] };
};

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => (
  <Layout showMenuBar={false}>
    <HeroSection />
    <SkillCompetencies />
    <RecentWorkSection projects={data.allContentfulProject.nodes || []} />
    <BlogsSection blogs={data.allContentfulBlog.nodes || []} />
    <Footer />
  </Layout>
);

export const query = graphql`
  query ProjectsQuery {
    allContentfulProject(sort: { fields: order, order: ASC }) {
      nodes {
        android
        iOS
        id
        githubLink
        description {
          description
        }
        imageSrc {
          url
        }
        projectName
        web
        techStacks {
          techStacks
        }
      }
    }

    allContentfulBlog {
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
        publicationDate(formatString: "MMMM DD, YYYY")
        # coverImage {
        #   publicUrl
        # }
        content {
          raw
        }
      }
    }
  }
`;
export default IndexPage;
