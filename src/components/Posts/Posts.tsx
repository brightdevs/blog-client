import React from 'react';
import Card from '../Card/Card';
import MdxNode from '../../interfaces/mdx-node';
type Props = {
  latestPosts: MdxNode[];
  title: string;
  scrollable?: boolean;
  gridColSpan?: number;
};

const Posts = ({
  latestPosts,
  title,
  scrollable = true,
  gridColSpan = 2,
}: Props) => {
  return (
    <section className={`latest-blogs grid-col-span-${gridColSpan} bg-3 p-1`}>
      <h1 className='margin-bottom-1 txt-lg'>{title} </h1>
      <article className={scrollable ? 'scrollable-sidebar' : ''}>
        <div className=' column-center'>
          {latestPosts.map((post: MdxNode) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Posts;
