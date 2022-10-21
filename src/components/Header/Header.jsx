import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="logo" className="logo"/>
        {/* why this step */}
        <ul className="header-menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Transfomations</li>
            <li>Why us</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Header