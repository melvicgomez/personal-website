import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer/Footer';

const BlogViewPageTemplate: React.FC<PageProps> = ({ pageContext }) => (
  <Layout showMenuBar={true}>
    {JSON.stringify(pageContext)}
    <Footer />
  </Layout>
);

export default BlogViewPageTemplate;
