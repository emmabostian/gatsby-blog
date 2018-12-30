import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import BlogSquare from '../components/blogSquare'

const BlogPage = ({ data }) => (
  <Layout>
    <p
      style={{
        background: '#F7C0AB',
        padding: '15px',
        fontSize: '.8em',
        color: 'white',
        marginTop: '30px',
      }}
    >
      More blog posts can be found on{' '}
      <a
        href="https://medium.com/@emmawedekind"
        target="blank"
        style={{
          color: 'white',
        }}
      >
        Medium
      </a>{' '}
      and{' '}
      <a
        href="https://dev.to/emmawedekind"
        target="blank"
        style={{
          color: 'white',
        }}
      >
        Dev Community
      </a>
    </p>
    <section
      style={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column-reverse',
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
