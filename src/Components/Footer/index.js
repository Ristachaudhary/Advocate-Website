import React from 'react';
import "./style.css";
import WorldMap from '../Assets/world-map.png';
import TradeMrk from '../Assets/trademrk.jpg';
import BgImg from '../Assets/bgn-footer.png';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
   
    <div className='Footer-main-container'>
        <div className='footer-other-territories'>
            <div className='other-territory'> <span>Other</span> Territories</div>
            <ul>
                <li>Ahmedabad</li>
                <li>Bangalore</li>
                <li>Chandigarh</li>
                <li>Chennai</li>
                <li>Goa</li>
                <li>Gurugram</li>
                <li>Hyderabad</li>
                <li>Kochi</li>
                <li>Kolkata</li>
                <li>Pune</li>
                <li>Shimla</li>
                <li>Surat</li>

            </ul>
        </div>
        <div className='footer-our-location'>
            <div className='footer-our-location'>OUR LOCATIONS</div>
            <div className='where-to-find'>Where to find Us</div>
            <div className='footer-location-map-contact'>
            <div className='footer-our-location-map'> <img src={WorldMap}></img></div>
            <div className='footer-location-contact'>
                <div className='location'><span><FaLocationDot /></span>
Delhi :+91 1141354615</div>
                <div className='location'><span><FaLocationDot /></span>
Mumbai :022-68841510</div>
            </div>
            </div>
        </div>
        <div className='footer-social-connect'>
            <div className='download-btn'>Download Firm Profile</div>
            <div className='stay-con'>Stay Connect with Us</div>
            <div className='footer-social-social-btn'>
           <div className='icons'><FaFacebookF /></div> 

            <div className='icons'><FaLinkedinIn /></div>
            <div className='icons'><FaInstagram /></div>

            </div>
            <div className='Footer-TradeMrk'><img src={TradeMrk}/></div>
            <div className='back-to-top'>^ BACK TO TOP</div>
        </div>
        
         </div>
         
  )
}

export default Footer