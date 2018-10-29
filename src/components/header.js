import React from 'react'
import { Link } from 'gatsby'

import Menu from './menu'
import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '0',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      overflow: 'hidden',
      alignItems: 'center'
    }}
  >
    <Menu />
   <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      <img style={{ width: '200px', marginBottom: '0'}} src={logo} alt="Logo" />
    </Link>
  </div>
)

export default Header
