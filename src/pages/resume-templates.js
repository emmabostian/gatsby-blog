import React from 'react'
import Layout from '../components/layout'
import ResumeSection from '../components/resumeSection'

import { StaticQuery, graphql } from 'gatsby'

const ResumeTemplatesPage = () => (
  <StaticQuery query={graphql`
      {
        purple: file(relativePath: {eq: "resume-purple.png"}) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        turquoise: file(relativePath: {eq: "resume-turquoise.png"}) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `} render={(data) => (
      <Layout>
        <p
          style={{
            maxWidth: '400px',
            margin: '50px auto'
          }}
        >
          I love creating fun resume templates in Sketch! If you'd like to use one of my styles, feel free! If you'd like to give me a donation, you can support me on <a href="https://www.patreon.com/user?u=16755243" target="blank">Patreon</a>!</p>
        <ResumeSection image={data.purple} title="Purple resume" link="https://www.dropbox.com/s/5pcpk7vdm3ull96/purple-sketch.sketch?dl=0" />
        <ResumeSection image={data.turquoise} title="Turquoise resume" link="https://www.dropbox.com/s/tcdm7sbpbtlqjs8/turquoise-sketch.sketch?dl=0" />
      </Layout>
    )}
  />
)

export default ResumeTemplatesPage
