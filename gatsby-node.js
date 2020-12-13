const path = require(`path`);

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allStrapiBlogs {
        nodes {
          author
          content
          published_date(formatString: "MMMM DD, YYYY")
          strapiId
          slug
          tags
          title
          thumbnail_cover {
            url
          }
        }
      }
    }
  `);

  result.data.allStrapiBlogs.nodes.forEach((node, i, arr) => {
    const previousObj = arr[i - 1 === -1 ? arr.length - 1 : i];
    const nextObj = arr[i + 1 > arr.length ? 0 : i];
    createPage({
      path: `/blogs/${node.slug}`,
      component: path.resolve(`./src/page-template/blog-view-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: `/blogs/${node.slug}`,
        pageData: node,
        previousObj,
        nextObj,
      },
    });
  });
};
