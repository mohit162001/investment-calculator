import React from 'react'
import logo from '../assets/logo.jpg'
function Header() {
  return (
    <div id='header'>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
    </div>
    
  )
}

export default Header