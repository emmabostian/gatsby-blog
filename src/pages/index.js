import React from 'react'
import Layout from '../components/layout'

import homeGraphic from '../images/home-graphic.svg'

import './index.css';

const IndexPage = () => (
  <Layout>
    <img className='home__graphic' src={homeGraphic} alt='Woman at computer' />
    <h1>Hi, I’m Emma. I’m a Front-end Developer, Designer, & cat mom.</h1>
    <p>I love all things web development & design. I was born and raised in Upstate New York. After a few years in Austin, Texas I sold everything and moved to Karlsruhe, Germany.</p>
    <p>Feel free to send me a message on Twitter!</p>
  </Layout>
)

export default IndexPage
