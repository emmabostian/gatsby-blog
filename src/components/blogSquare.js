import React from 'react'

import { Link } from 'gatsby'

import './blogSquare.css'

const BlogSquare = ({ title, date, path, image }) => (
  <section className='blogSquare'>
    <img className='blogSquare__image' src={image} alt={title} />
    <div className='blogSquare__banner'>
      <h2 className='blogSquare__title'>{title}</h2>
      <p className='blogSquare__date'>{date}</p>
      <Link to={path} className='blogSquare__readMore'>Read more</Link>
    </div>
  </section>
)

export default BlogSquare
