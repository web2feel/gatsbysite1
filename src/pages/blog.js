import React from "react"

import {Link, graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"

const Blog = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
          edges {
              node{
                  frontmatter{
                      title
                      date
                      author
                  }
                  excerpt
                  fields{
                      slug
                  }
              }
          }
        }
      }
      
    `)
    return (
        <Layout>
            <h1> Blog Posts </h1>
            { data.allMarkdownRemark.edges.map( item => {
                return (

                    <div>
                        <Link to={`blog/${item.node.fields.slug}`}>
                    <h3>
                        {item.node.frontmatter.title}
                    </h3>
                    </Link>
                    <p> Posted on : {item.node.frontmatter.date} | Posted by {item.node.frontmatter.author} </p>
                    <div className="excerpt">
                        {item.node.excerpt}
                    </div>
                  
                    
                    
                    </div>
                )
            })}
        </Layout>
    )
}

export default Blog