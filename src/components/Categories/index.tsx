import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import './categories.scss';
type Props = {
  center?: boolean;
};

const Categories = (props: Props) => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(query);
  console.log('distinct', distinct);

  return (
    <div className='p-1 categories'>
      <h1 className='categories__title'>Categories</h1>

      <ul className={props.center ? 'column-center' : ''}>
        {distinct.map((category: string) => {
          return (
            <li className='margin-bottom-2' key={category}>
              <Link to={`/${category}`} className='highlight '>
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const query = graphql`
  query MyQuery {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`;

export default Categories;
