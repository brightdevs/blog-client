import * as React from 'react';

import { graphql, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import Posts from '../components/Posts/Posts';
import { ImageDataLike } from 'gatsby-plugin-image';
import MdxNode from '../interfaces/mdx-node';
type DataProps = {
  allMdx: {
    nodes: MdxNode[];
  };
};
const IndexPage = ({
  data: {
    allMdx: { nodes: latestPosts },
  },
}: PageProps<DataProps>) => {
  console.log('nodes', latestPosts);

  return (
    <Layout>
      <Hero />
      <Posts latestPosts={latestPosts} title='Latest Post' />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          author
          category
          readTime
          slug
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
