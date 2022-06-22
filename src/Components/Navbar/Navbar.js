import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <ul className='navbar-contents'>
        <li><a href="">Home</a></li>
        <li><a href="">Originals</a></li>
        <li><a href="">Action</a></li>
        <li><a href="">Comedy</a></li>
        <li><a href="">Horror</a></li>
        <li><a href="">Romance</a></li>
        <li><a href="">Documentry</a></li>
      </ul>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default Navbar
