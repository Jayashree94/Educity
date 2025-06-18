import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css";

const Navbar = () => {
  const [sticky,setSticky] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
 <nav className={`container ${sticky ? 'dark-navbar' : '' }`}>
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



