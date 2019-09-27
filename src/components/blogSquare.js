import React from 'react'

import { Link } from 'gatsby'
import TopicTag from './topicTag'

import './blogSquare.css'

const BlogSquare = ({ title, date, topic, path, description }) => (
  <section className="blogSquare">
    <Link
      to={path}
      style={{
        textDecoration: 'none',
      }}
    >
      <h2 className="blogSquare__title">{title}</h2>
      <p className="blogSquare__date">{date}</p>
      <TopicTag topic={topic} />
      <p className="blogSquare__description">{description}</p>
    </Link>
  </section>
)

export default BlogSquare
