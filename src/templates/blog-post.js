import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

import backArrow from '../images/back-arrow.svg'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Link
        to="/blog"
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '.8em',
          color: '#4A4A4A',
          textDecoration: 'none',
          marginTop: '50px',
        }}
      >
        <img
          style={{ width: '7px', marginBottom: '0', marginRight: '10px' }}
          src={backArrow}
          alt="Go back"
        />
        Back to blogs
      </Link>
      <h1
        style={{
          marginTop: '20px',
        }}
      >
        {post.frontmatter.title}
      </h1>
      <h4
        style={{
          fontSize: '.8em',
          color: '#9fa7a7',
          fontWeight: '400',
        }}
      >
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
