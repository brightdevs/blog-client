const path = require('path');
const postTemplate = path.resolve(`./src/templates/post-template.tsx`);

exports.createPages = async ({ graphql, actions, reporter }: any) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes;
  // Create all categories pages
  const categories = result.data.categories;

  // you'll call `createPage` for each result
  posts.forEach((node: any) => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `/blog/${node.frontmatter.slug}`,
      // path: node.frontmatter.slug,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
  categories.distinct.forEach((category: string) => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`./src/templates/category-template.tsx`),
      context: {
        category,
      },
    });
  });
};

/* const path = require('path');

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/post-template.tsx`),
      context: {
        slug,
      },
    });
  });
};
 */
