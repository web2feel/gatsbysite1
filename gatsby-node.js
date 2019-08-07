/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
module.exports.onCreateNode = ({node,actions}) => {
    const { createNodeField } = actions

    if(node.internal.type === "MarkdownRemark"){
        const slug = path.basename(node.fileAbsolutePath, '.md')
        //console.log(JSON.stringify(node,undefined,4))

        console.log('##########',slug)
        createNodeField({
            node,
            name:'slug',
            value: slug
        })
    }
}

module.exports.createPages = ({ graphql, actions }) => {
    const {createPage} = actions
    const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
    return graphql(`
    {
        allMarkdownRemark{
          edges{
            node{
              fields{
                slug
              }
            }
          }
        }
      }
    `).then( res => {
        console.log('@@@@@',res)

        res.data.allMarkdownRemark.edges.forEach( edge => {
            createPage({
                component: blogPostTemplate,
                path:`/blog/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }

        )
    }

    )
}