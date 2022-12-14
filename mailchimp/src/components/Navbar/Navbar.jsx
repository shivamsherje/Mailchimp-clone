import React from 'react'
import './Navbar.css'

import Applogo from '../../assets/Applogo3.png'
import website from '../../assets/website.png'
import search from "../../assets/search.png"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-div-1'>

        <h3>Products</h3>
        <h3>Resources</h3>
        <h3>Inspirations</h3>
        <h3>Pricing</h3>
        </div>
        <img  src={Applogo} alt="cyber-domain" />
        <div className='sales'><h3>Sales:</h3>  <span>+1(800)315-5939</span></div>
        <div className='navbar-div-2'>
        <img src={website} alt="website" />
        <img src={search} alt="search" />
        <button >Login</button>
        <button >Sign up</button>
        </div>
        
    </div>
  )
}

export default Navbar