import { ImageDataLike } from 'gatsby-plugin-image';

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
    image: ImageDataLike;
  };
}
