import React from 'react'
import CartWitdget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#" className="btn">Inicio</a></li>
        <li><a href="#" className="btn">Productos</a></li>
        <li><a href="#" className="btn">Contacto</a></li>
        <li>
          <CartWitdget />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
