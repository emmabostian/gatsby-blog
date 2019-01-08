import React from 'react'
import Img from 'gatsby-image'

import './workItem.css'

const WorkItem = (({ image, title, date, tech, goal, link }) => (
  <section className='workItem'>
    <Img fluid={image.childImageSharp.fluid} alt={title} />
    <div className='workItem__content'>
      <h1 style={{ margin: '0' }}>{title}</h1>
      <p style={{ color: '#9B9B9B' }}>{date}</p>
      <h2 className='workItem__subtitle'>Technology</h2>
      <p>{tech}</p>
      <h2 className='workItem__subtitle'>Goal</h2>
      <p>{goal}</p>
      <a className='workItem__link' href={link} target='blank'>Check it out</a>
    </div>
  </section>
));

export default WorkItem