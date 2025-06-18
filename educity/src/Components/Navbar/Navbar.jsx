import React from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css";

const Navbar = () => {
  return (
 <nav className='container'>
        <img src={logo} alt="Logo" className='logo'></img>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
        

    </nav>
  )
}

export default Navbar



