// Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../images/logowb1.png'
//import logoImage from '../images/logowb.png';
// import logoImage from '../images/logo.png';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container navcontainer relative">
      <header className="flex flex-wrap items-center justify-between mb-2 ">
        <div className='flex flex-wrap items-center justify-between navDiv'>
        <div className="col-md-3 mb-2 mb-md-0 ">
          <Link to="/dashboard" className="inline-flex items-center link-body-emphasis text-decoration-none">
            <span>
            <img src={logoImage} alt="logo" className="logoimage" />
              
              </span>
          </Link>
        </div>

        <div className={`nav-menu col-12 col-md-auto mb-2 justify-center md:justify-center ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav flex flex-wrap">
            <li><Link to='/dashboard' className="nav-link px-2 customLink">PYQs & NOTES</Link></li>
            {/* <li><Link to='/resources' className="nav-link px-2 customLink">Resources</Link></li>
            <li><Link to='/notes' className="nav-link px-2 customLink">Notes</Link></li> */}
            <li><Link to='/about' className="nav-link px-2 customLink">About</Link></li>
          </ul>
        </div>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary border-0 me-2"><Link to='/signin' className='customButton'> Login </Link></button>
          <button type="button" className="btn btn-primary"><Link to='/signup' className='customButton'>Sign-up</Link></button>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        </div>
      </header>
    </div>
  );
}
