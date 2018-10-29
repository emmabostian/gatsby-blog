import React from 'react'
import { Link } from 'gatsby'

import menu from '../images/menu.svg'
import close from '../images/close.svg'

import './menu.css'

const Menu = (() => {
  function showMenu() {
    document.querySelector('.menu__section').classList.add('menu__section--show');
  }

  function hideMenu() {
    document.querySelector('.menu__section').classList.remove('menu__section--show');
  }
  
  return ( 
    <div>
      <button 
        className='menu__button'
        onClick={showMenu}
      >
        <img src={menu} alt='Menu' />
      </button>
      <section className='menu__section'>
        <div className='menu__content-wrapper'>
          <button 
            className='menu__button menu__button--close'
            onClick={hideMenu}
          >
            <img src={close} alt='Close' />
          </button>
          <ul className='menu'>
            <li><Link to="/" className="menu__item" activeClassName='menu__item--selected'>Home</Link></li>
            <li><Link to="/about" className="menu__item" activeClassName='menu__item--selected'>About</Link></li>
            <li><Link to="/work" className="menu__item" activeClassName='menu__item--selected'>Work</Link></li>
            <li><Link to="/blog" className="menu__item" activeClassName='menu__item--selected'>Blog</Link></li>
          </ul>
        </div>
      </section>
    </div>
  );
})

export default Menu