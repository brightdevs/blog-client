import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import MdxNode from '../interfaces/mdx-node';
import Posts from '../components/Posts/Posts';
import '../styles/Blog.scss';
type DataProps = {
  allMdx: {
    nodes: MdxNode[];
  };
};

const blog = ({
  data: {
    allMdx: { nodes: allPosts },
  },
}: PageProps<DataProps>) => {
  console.log('nodes', allPosts);

  return (
    <Layout>
      <section className='projects-welcome grid-col-span-4 '>
        <div className='projects-welcome-intro '>
          <h1 className='txt-xl'>
            Inspiration, design, and code happens all together.
          </h1>
          <p className='txt-lg'>
            The projects, and blogs on this page are all open source and can be
            found on my GitHub. You can also find me on LinkedIn and Instagram.
            These projects are build using the following technologies: SASS,
            React, TypeScript, Node, Express, Docker, Mongo DB, to name a few.
          </p>
        </div>
      </section>
      <Posts latestPosts={allPosts} title='All Posts' gridColSpan={3} />
      <aside className='grid-col-span-1 bg-1'>
        <span>sidebar</span>
      </aside>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default blog;
