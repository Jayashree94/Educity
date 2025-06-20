import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"

import "./Navbar.css";
import {Link} from "react-scroll";

const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () =>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true)
  }

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
 <nav className={`container ${sticky ? 'dark-navbar' : '' }`}>
        <img src={logo} alt="Logo" className='logo'></img>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500} >Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500} >About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img className="menu-icon" src={menu_icon} alt="menu_icon" onClick={toggleMenu}></img>
        

    </nav>
  )
}

export default Navbar



