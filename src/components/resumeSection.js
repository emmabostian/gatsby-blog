import React from 'react'
import Img from 'gatsby-image'

import './resumeSection.css'

const ResumeSection = ({ image, title, link }) => (
  <section className="resumeSection">
    <Img
      className="resumeSection__image"
      fluid={image.childImageSharp.fluid}
      alt={title}
    />
    <a href={link} target="blank">
      <button type="submit" className="button">Download</button>
    </a>
  </section>
)

export default ResumeSection
