import React from 'react'

import { Link } from 'gatsby'

import './blogSquare.css'

const BlogSquare = ({ title, date, path, description }) => (
  <section className="blogSquare">
    <h2 className="blogSquare__title">{title}</h2>
    <p className="blogSquare__date">{date}</p>
    <p>{description}</p>
    <Link to={path} className="blogSquare__readMore">
      Read more
    </Link>
  </section>
)

export default BlogSquare
