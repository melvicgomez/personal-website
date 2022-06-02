import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';

type Props = { children: React.ReactNode };

const IndexPage: React.FC<PageProps<Props>> = () => (
  <Layout showMenuBar={false}>
    <HeroSection />
    <Footer />
  </Layout>
);

export default IndexPage;
