const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.jsx`)
  
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
      },
    })
  })
}