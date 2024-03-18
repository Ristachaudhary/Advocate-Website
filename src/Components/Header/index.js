import React from 'react';
import "./style.css";
import Logo from '../Assets/logo-1.png';

const Header = () => {
  return (
    <div className='header-parent-component'>
        <div className='header-logo-section'>
          <img src={Logo}/>
        </div>
        <div className='header-menu-contact-container'>
          <div className='header-menu-items'>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Practice Areas</li>
                    <li>Resource Centre</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>International Desk</li>
                </ul>
            </nav>
           
          </div>
          <div className='header-contact-info'> +919643106874</div>
        </div>
    </div>
  )
}

export default Header;