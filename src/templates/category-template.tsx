import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import MdxNode from '../interfaces/mdx-node';
import Posts from '../components/Posts/Posts';
import HeroImage from '../components/Hero/HeroImage';
import Categories from '../components/Categories';
type DataProps = {
  allMdx: {
    nodes: MdxNode[];
  };
};

interface PageContext {
  category: string;
}
const CategoryTemplate: React.FC<PageProps<DataProps>> = (props) => {
  const {
    data: {
      allMdx: { nodes: allPosts },
    },
    pageContext,

    // page
  } = props;
  const { category } = pageContext as PageContext;

  return (
    <Layout>
      <HeroImage />
      <Posts
        latestPosts={allPosts}
        title={`Category: ${category}`}
        scrollable={false}
        gridColSpan={3}
      />
      <aside className='grid-col-span-1 bg-3 rounded'>
        <Categories />
      </aside>
    </Layout>
  );
};

export const query = graphql`
  query GetCategory($category: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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

export default CategoryTemplate;
