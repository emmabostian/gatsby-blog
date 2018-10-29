import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import BlogSquare from '../components/blogSquare'

const BlogPage = ({data}) => (
  <Layout>
    <h1 style={{ 
      textTransform: 'uppercase', 
      fontWeight: '100',
      marginTop: '50px',
      fontSize: '25px',
      letterSpacing: '4px'
    }}>
      Blog
    </h1>
    {data.allMarkdownRemark.edges.map(post => (
      <BlogSquare
        title={post.node.frontmatter.title}
        date={post.node.frontmatter.date}
        path={post.node.frontmatter.path}
        image={post.node.frontmatter.image}
        key={post.node.id}
      />
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
            image
          }
        }
      }
    }
  }
`

export default BlogPage
