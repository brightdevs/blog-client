import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Helo world</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
