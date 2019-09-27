import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './navigation'

import './layout.css'

const Layout = ({ children }) => (
  <div className="layout">
    <Navigation />
    <div className="layout__content">{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
