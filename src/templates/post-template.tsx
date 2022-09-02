import { graphql } from 'gatsby';
import React from 'react';

type Props = {};

const PostTemplate = (data: any) => {
  console.log('data', data);

  return (
    <div>
      <h1>Post TEmplate</h1>
    </div>
  );
};

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMMM Do, YYYY")
        slug
        title
        readTime
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default PostTemplate;
