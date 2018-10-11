import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}) => (
  <Layout>
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted {post.node.frontmatter.date}</small>
        <br />
        <Link to={post.node.frontmatter.path}>Read more</Link>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`

export default BlogPage
