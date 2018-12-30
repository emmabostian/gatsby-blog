import React from 'react'
import { Link } from 'gatsby'

import './menu.css'

const Menu = () => {
  return (
    <section className="menu__section">
      <ul className="menu">
        <li>
          <Link
            to="/"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            work
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            blog
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Menu
