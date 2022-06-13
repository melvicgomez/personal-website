/* eslint-disable @typescript-eslint/no-explicit-any */
import { SEOProps } from '../components/layout';
import { BlogCardTypes, BlogCategories } from './contentful';

export interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  showMenuBar?: boolean;
  seo?: SEOProps;
  location?: any;
}

export interface Project extends Props {
  id: string;
  projectName: string;
  description: { description: string };
  imageSrc: {
    url: string;
  };
  web: boolean;
  android: boolean;
  iOS: boolean;
  techStacks: { techStacks: string };
  githubLink?: string;
}

export interface Blog extends Props, SEOProps {
  id: string;
  title: string;
  description: { description: string };
  category: string;
  slug: string;
  keywords: string[];
  articleLengthInMinutes: { articleLengthInMinutes: string };
  publicationDate: string;
  coverImage?: {
    url: string;
  };
  content: { raw: string };
  appearance: BlogCardTypes;
  showImage?: boolean;
}

export const ColorDesignCategory = {
  [BlogCategories.BUSINESS]:
    'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800',
  [BlogCategories.GAMES]:
    'bg-amber-100 text-amber-800 dark:bg-amber-200 dark:text-amber-800',
  [BlogCategories.SELF_IMPROVEMENT]:
    'bg-orange-100 text-orange-800 dark:bg-orange-200 dark:text-orange-800',
  [BlogCategories.SOFTWARE]:
    'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800',
  [BlogCategories.TECHNOLOGY]:
    'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800',
  [BlogCategories.UI_UX]:
    'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-800',
};
