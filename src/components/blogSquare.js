import React from 'react'

import { Link } from 'gatsby'

import './blogSquare.css'

const BlogSquare = ({ title, date, path, description }) => (
  <section className="blogSquare">
    <Link to={path} style={{
      textDecoration: 'none'
    }}>
      <h2 className="blogSquare__title">{title}</h2>
      <p className="blogSquare__date">{date}</p>
      <p>{description}</p>
      <p style={{ fontSize: '.8em', textDecoration: 'underline' }}>Read more</p>
    </Link >
  </section >
)

export default BlogSquare
