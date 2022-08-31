import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero/Hero';
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
