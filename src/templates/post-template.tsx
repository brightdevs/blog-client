import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

type Props = {};

const PostTemplate = ({ data }: any) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date },
    },
  } = data;
  const blogImage = image && getImage(image);
  console.log('data', data);

  return (
    <Layout>
      <article className='blog__content grid-col-span-3 p-1'>
        <div className='blog__content__info grid p-1'>
          <div className=' grid-col-span-2 p-1'>
            <span className='highlight'> {category}</span>
            <h1>{title}</h1>
            <span>{date} </span>
          </div>
          <div className='grid-col-span-2 column-center '>
            <GatsbyImage
              image={blogImage}
              alt={title}
              className='  rounded  shadow-sketch'
            />
          </div>
        </div>
        <hr />
      </article>
      <aside className='blog__sidebar grid-col-span-1 bg-2'>
        <span>sidebar</span>
      </aside>
    </Layout>
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
