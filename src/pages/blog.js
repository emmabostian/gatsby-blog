import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import BlogSquare from '../components/blogSquare'

const BlogPage = ({ data }) => (
  <Layout>
    <section
      style={{
        marginTop: '100px',
      }}
    >
      {data.allMarkdownRemark.edges.map(post => (
        <BlogSquare
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          path={post.node.frontmatter.path}
          description={post.node.frontmatter.description}
          key={post.node.id}
        />
      ))}
    </section>
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
            description
          }
        }
      }
    }
  }
`

export default BlogPage
