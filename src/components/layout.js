import React from 'react'
import Navigation from './navigation'

import './layout.css'

const Layout = ({ children }) => (
  <div className="layout">
    <Navigation />
    <div className="layout__content">{children}</div>
  </div>
)

export default Layout
