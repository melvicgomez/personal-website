import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import SkillCompetencies from '../components/SkillCompetencies/SkillCompetencies';
import RecentWorkSection from '../components/RecentWorkSection/RecentWorkSection';
import BlogsSection from '../components/BlogsSection/BlogsSection';
import { Project, Blog, SEOProps } from '../types/common';

import MelvicImage from '../images/melvic-image.jpg';

type Props = {
  children: React.ReactNode;
  allContentfulProject: { nodes: Project[] };
  allContentfulBlog: { nodes: Blog[] };
};
const meta: SEOProps = {
  meta: {
    title: 'Home',
    description:
      'Mabuhay! I am a full stack developer and UI/UX enthusiast from the Philippines with more than 7 years of experience on creating software application(web and mobile) and websites.',
    keywords: [
      {
        name: `keywords`,
        content:
          'Melvic Gomez, Personal Website, Technology, UI/UX, Software Developement, Games, Self Improvement, Business',
      },
      {
        property: `og:image`,
        content: MelvicImage,
      },
      {
        property: `og:type`,
        content: `website`,
      },
    ],
  },
};

const IndexPage: React.FC<PageProps<Props>> = ({ data, location }) => (
  <Layout showMenuBar={false} location={location} seo={meta}>
    <HeroSection />
    <SkillCompetencies />
    <RecentWorkSection projects={data.allContentfulProject.nodes || []} />
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
