import React from 'react'
import { Link } from 'gatsby'

import './navigation.css'

const Navigation = () => {
  return (
    <aside className="nav">
      <Link to="/" className="nav__link">
        <p className="nav__name">Emma Wedekind</p>
      </Link>
      <p className="nav__title">Software Engineer</p>

      <nav>
        <ul className="nav__list">
          <li>
            <Link
              className="nav__link"
              activeClassName="nav__link--active"
              to="/work"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="nav__link"
              activeClassName="nav__link--active"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="nav__link"
              activeClassName="nav__link--active"
              to="/talks"
            >
              Talks
            </Link>
          </li>
          <li>
            <Link
              className="nav__link"
              activeClassName="nav__link--active"
              to="/podcasts"
            >
              Podcasts
            </Link>
          </li>
          <li>
            <Link
              className="nav__link"
              activeClassName="nav__link--active"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Navigation
