import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/menu.scss';

export const Submenu = (props) => (
  <div className={`submenu ${props.colorScheme}-submenu-bg-color`}>
    <div className="link-container">
      <Link to="/" className="links">Home</Link>
    </div>
    <div className="link-container">
      <Link to="/about" className="links">About</Link>
    </div>
    <div className="link-container">
      <Link to="/work" className="links">Work</Link>
    </div>
  </div>
)

const HexagonImage = () => (
  <svg className="hex_image" fill="#2f52a0" height="40" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 483.013 483.013" xmlSpace="preserve">
    <path d="M477.043,219.205L378.575,48.677c-7.974-13.802-22.683-22.292-38.607-22.292H143.041c-15.923,0-30.628,8.49-38.608,22.292  L5.971,219.205c-7.961,13.801-7.961,30.785,0,44.588l98.462,170.543c7.98,13.802,22.685,22.293,38.608,22.293h196.926  c15.925,0,30.634-8.491,38.607-22.293l98.469-170.543C485.003,249.99,485.003,233.006,477.043,219.205z" />
  </svg>
)

const MenuImage = () => (
  <div className="menu_image">
    <svg height="20" version="1.1" fill="#fff" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 512 512" xmlSpace="preserve">
      <g>
        <path d="M502.154,59.077H9.846C4.408,59.077,0,54.669,0,49.231s4.408-9.846,9.846-9.846h492.308
  c5.438,0,9.846,4.408,9.846,9.846S507.592,59.077,502.154,59.077z"/>
        <path d="M502.154,196.923H9.846c-5.438,0-9.846-4.408-9.846-9.846c0-5.438,4.408-9.846,9.846-9.846h492.308
  c5.438,0,9.846,4.408,9.846,9.846C512,192.515,507.592,196.923,502.154,196.923z"/>
        <path d="M502.154,334.769H9.846c-5.438,0-9.846-4.408-9.846-9.846c0-5.438,4.408-9.846,9.846-9.846h492.308
  c5.438,0,9.846,4.408,9.846,9.846C512,330.361,507.592,334.769,502.154,334.769z"/>
        <path d="M502.154,472.615H9.846c-5.438,0-9.846-4.408-9.846-9.846c0-5.438,4.408-9.846,9.846-9.846h492.308
  c5.438,0,9.846,4.408,9.846,9.846C512,468.207,507.592,472.615,502.154,472.615z"/>
      </g>
    </svg>
  </div>
)

const Menu = () => {
  return (
    <div className="menu">
      <HexagonImage />
      <MenuImage />
      <Submenu />
    </div>
  )
}

export default Menu
