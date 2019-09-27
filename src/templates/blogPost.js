import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

import backArrow from '../images/back-arrow.svg'

import './blogPost.css'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Link to="/blog" className="blogPost__back">
        <img className="blogPost__backIcon" src={backArrow} alt="Go back" />
        Back to blogs
      </Link>
      <h1 className="blogPost__title">{post.frontmatter.title}</h1>
      <p className="blogPost__date">{post.frontmatter.date}</p>
      <div
        className="blogPost__content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
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
        topic
        date
      }
    }
  }
`
