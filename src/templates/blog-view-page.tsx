import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer/Footer';
import { Blog } from '../types/common';

const BlogViewPageTemplate: React.FC<PageProps<Blog>> = ({ data }) => (
  <Layout showMenuBar={true}>
    {JSON.stringify(data)}
    <Footer />
  </Layout>
);

export default BlogViewPageTemplate;
