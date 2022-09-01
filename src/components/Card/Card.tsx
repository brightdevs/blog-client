import React, { FunctionComponent } from 'react';
// import sample1 from '../../assets/sample-1.png';
import {
  StaticImage,
  GatsbyImage,
  getImage,
  GatsbyImageProps,
  ImageDataLike,
} from 'gatsby-plugin-image';
import MdxNode from '../../interfaces/mdx-node';
import './Card.scss';
type Props = {
  post: MdxNode;
};

const Card: FunctionComponent<Props> = ({
  // slug,
  // category,
  // excerpt,
  post: {
    id,
    excerpt,
    frontmatter: { date, author, image, slug, category, title },
  },
}: Props) => {
  console.log('image', image);
  const blogImage = image && getImage(image as ImageDataLike);

  return (
    <div className='card column-start '>
      <div className='card__img '>
        {blogImage && (
          <GatsbyImage image={blogImage} alt={title} className='card__img' />
        )}
      </div>
      <div className='card__content column-between-start'>
        <span className='highlight'>{category} </span>
        <h4>{slug} </h4>
        <p>{excerpt} </p>
        <span className='card__content__link'>Read more</span>
      </div>
    </div>
  );
};

export default Card;
