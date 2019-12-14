import React from 'react'
import { Link } from 'gatsby'

import './navigation.css'

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/writing">Writing</Link>
        </li>
        <li>
          <Link to="/speaking">Speaking</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
