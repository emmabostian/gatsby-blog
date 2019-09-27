import React from 'react'

const TopicTag = ({ topic }) => (
  <div
    style={{
      textTransform: 'uppercase',
      backgroundColor: '#d8d8d8',
      fontSize: '11px',
      padding: '4px 20px',
      borderRadius: '20px',
      display: 'inline-block',
    }}
  >
    {topic}
  </div>
)

export default TopicTag
