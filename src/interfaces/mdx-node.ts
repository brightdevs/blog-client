import { ImageDataLike, GatsbyImageProps } from 'gatsby-plugin-image';

export default interface MdxNode {
  excerpt: string;
  id: string;
  frontmatter: {
    author: string;
    date: string;
    readTime: string;
    slug: string;
    category: string;
    title: string;
    image: {
      childImageSharp: {
        gatsbyImageData: any;
      };
    };
  };
}
