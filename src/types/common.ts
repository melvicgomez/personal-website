import { SEOProps } from '../components/layout';

export interface Props {
  id?: string;
  className?: string;
}

export interface Project extends Props {
  id: string;
  projectName?: string;
  description?: { description: string };
  imageSrc?: {
    url: string;
  };
  web?: boolean;
  android?: boolean;
  iOS?: boolean;
  techStacks?: { techStacks: string };
  githubLink?: string;
}

export interface Blog extends Props, SEOProps {
  id: string;
  title?: string;
  description?: { description: string };
  category?: string;
  slug?: string;
  keywords?: string[];
  articleLengthInMinutes?: { articleLengthInMinutes: string };
  publicationDate?: string;
  coverImage?: {
    url: string;
  };
  content?: { raw: string };
}