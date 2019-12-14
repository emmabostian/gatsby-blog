import React from 'react'
import Layout from '../components/layout'
// import { graphql } from 'gatsby'

// import BlogSquare from '../components/blogSquare'

import './pages.css'

const WritingPage = ({ data }) => {
  return (
    <Layout>
      <h1 className="page__title">Blogging</h1>
      {/* <section
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
            topic={post.node.frontmatter.topic}
          />
        ))}
      </section> */}
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             topic
//             date
//             description
//           }
//         }
//       }
//     }
//   }
// `

export default WritingPage
