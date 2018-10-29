import React from 'react'

import './workItem.css'

const WorkItem = ((props) => ( 
  <section className='workItem'>
    <img src={props.image} alt={props.title} />
    <div className='workItem__content'>
      <h1 style={{margin: '0'}}>{props.title}</h1>
      <p style={{color: '#9B9B9B'}}>{props.date}</p>
      <h2 className='workItem__subtitle'>Technology</h2>
      <p>{props.tech}</p>
      <h2 className='workItem__subtitle'>Goal</h2>
      <p>{props.goal}</p>
      <a className='workItem__link' href={props.link} target='blank'>Check it out</a>
    </div>
    <hr />
  </section>
));

export default WorkItem