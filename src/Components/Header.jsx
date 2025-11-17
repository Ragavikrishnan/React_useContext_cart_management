import React from 'react'
import { Link } from "react-router-dom";
import "./Style.css"

const Header = ({ cart }) => {
  return (
    <div className='Header-container'>
      <h1>Food Cart</h1>
      <ul>
        <li><Link to="/" className='Nav-link'>Home</Link></li>
        <li className='cart-with-value'>

          <h2>{cart.length}</h2>
          <Link to="/Cart" className='Nav-link'>
            Cart</Link>
        </li>



      </ul>
    </div>
  )
}

export default Header