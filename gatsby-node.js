/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async function ({ actions, graphql }) {
  const componentMapping = {
    'project': require.resolve(`./src/templates/ProjectTemplate.js`),
    'post': require.resolve(`./src/templates/BlogPostTemplate.js`),
  }

  const { data } = await graphql(`
      {
        allMarkdownRemark(filter: {fields: {dynamic: {eq: true}}}) {
          edges {
            node {
              id
              fields {
                path
              }
              frontmatter {
                layout
              }
            }
          }
        }
      }    
    `);

  data.allMarkdownRemark.edges.forEach(edge => {
    if (componentMapping[edge.node.frontmatter.layout]) {
      actions.createPage({
        path: edge.node.fields.path,
        component: componentMapping[edge.node.frontmatter.layout],
        context: { id: edge.node.id },
      });
    }
  })
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const { createNodeField } = actions;
    const { sourceInstanceName, relativePath, ext } = findFileNode(node, getNode);
    // 'content' folder doesn't hold collections, so no need for dynamic pages
    if (sourceInstanceName !== 'content') {
      const path = `/${sourceInstanceName}/${relativePath.replace(ext, "")}/`
      createNodeField({ node, name: `path`, value: path });
      createNodeField({ node, name: `dynamic`, value: true });
    }
  }
};

function findFileNode(node, getNode) {
  let fileNode = node;
  let whileCount = 0;

  while (fileNode.internal.type !== `File` && fileNode.parent && getNode(fileNode.parent) !== undefined && whileCount < 101) {
    fileNode = getNode(fileNode.parent);
    whileCount += 1;

    if (whileCount > 100) {
      console.log(`It looks like you have a node that's set its parent as itself`, fileNode);
    }
  }

  return fileNode;
}