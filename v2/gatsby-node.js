/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-view-page.tsx`);
  const result = await graphql(`
    query {
      allContentfulBlog(sort: { fields: publicationDate, order: DESC }) {
        nodes {
          id
          title
          description {
            description
          }
          category
          slug
          keywords
          articleLengthInMinutes {
            articleLengthInMinutes
          }
          publicationDate(formatString: "MMMM D, YYYY")
          content {
            raw
          }
          appearance
          coverImage {
            url
          }
        }
      }
    }
  `);
  result.data.allContentfulBlog.nodes.forEach((node) => {
    createPage({
      path: `blogs/${node.slug}`,
      component: blogPostTemplate,
      context: node,
    });
  });
};
