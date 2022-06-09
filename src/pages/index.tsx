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
  <Layout showMenuBar={false} className="scroll-smooth">
    <HeroSection />
    <SkillCompetencies id="skills-and-stats" />
    <RecentWorkSection
      id="project-portfolio"
      projects={data.allContentfulProject.nodes || []}
    />
    <hr className="border-red-700" />
    <BlogsSection blogs={data.allContentfulBlog.nodes || []} />
    <Footer />
  </Layout>
);

export const query = graphql`
  query IndexPageQuery {
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

export default IndexPage;
