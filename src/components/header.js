import React from 'react'
import { Link } from 'gatsby'

import Menu from './menu'
import logo from '../images/logo.svg'

import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <Link to="/" className="header__link">
      <img className="header__logo" src={logo} alt="Logo" />
    </Link>
    <Menu />
  </div>
)

export default Header
