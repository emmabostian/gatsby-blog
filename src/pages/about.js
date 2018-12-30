import React from 'react'
import Layout from '../components/layout'

import womanAtDesk from '../images/woman-at-desk.svg'
import date2015 from '../images/2015.svg'
import date2017 from '../images/2017.svg'
import date2018 from '../images/2018.svg'

const AboutPage = () => (
  <Layout>
    <img src={womanAtDesk} alt="Woman at desk" />
    <p>
      I never wanted to become a Software Engineer. This can be attributed to
      the fact that my father is a Software Engineer & Architect and my mother
      is a Designer. But I found my passion for engineering during college.
    </p>
    <img style={{ margin: '30px 0px' }} src={date2015} alt="2015" />
    <p>
      In 2015 I graduated from Siena College in Albany, New York with a B.S. in
      Computer Science. I loved my four years in college. I studied abroad at
      City University in London my Junior year. I took a service trip to Haiti
      my Senior year. And I was manager, and trumpet player, for the Pep Band.
    </p>
    <p>
      The Summer between my Junior and Senior years I completed an internship at
      IBM in Poughkeepsie. I worked on WebSphere Application Server and learned
      how to automate the installation of WAS on z/OS using Python. I even
      managed to squeeze in a win for the IBM intern video competition.
    </p>
    <p>
      After graduating from college I flew down to Austin, Texas to begin my
      career at IBM. During the next two years I would help build the UI for the
      IBM Spectrum Control and Storage Insights offerings. I worked primarily
      with JavaScript, Dojo, HTML, CSS, and a bit of Java when I would
      occasionally contribute to the test automation efforts. It was also during
      this time that I became the Accessibility Lead where I was responsible for
      ensuring W3C Accessibility Compliance for both products.
    </p>
    <img src={date2017} alt="2017" />
    <p>
      In October of 2017, I was approached by the VP of IBM Systems and
      Transformation. He wanted me to join their design team and help prototype
      in code. I got to work on many incredible projects during this time. I
      build the Linux on Power Developer Portal using WordPress. I helped
      transform the future of Support with the Support Transformation team. But
      my biggest accomplishment was IBM Quantum.
    </p>
    <p>
      I single-handedly build the IBM Q Network website using Vue.js. This was a
      major accomplishment for me, as I had never used Vue for proprietary code
      until this point. The website was a huge success.
    </p>
    <p>
      It was during my time at IBM that I met my current husband. He was a
      developer on the same project. The only catch? He lived in Germany.
    </p>
    <img src={date2018} alt="2018" />
    <p>
      In February of 2018, I left IBM, sold everything I owned, and flew my two
      cats and myself out to Germany. I had secured a job with LogMeIn prior to
      making the move, and it wasn’t an easy transition, but it was so worth the
      risk. Today I work on GoToMeeting and get to develop using React, Redux,
      Typescript and more.
    </p>
    <p>
      In my spare time, I enjoy blogging, reading, and traveling. I’ve read 70
      books thus far in 2018 and traveled to 10 countries this year alone. I’m
      looking forward to what the future has to offer.
    </p>
  </Layout>
)

export default AboutPage
