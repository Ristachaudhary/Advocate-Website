import React from 'react';
import GetInTouchComp from '../GetInTouchComp';
import './style.css';
import GITBG from '../Assets/GITBG.png';


const GetInTouch = () => {
  return (
    <div className='get-in-touch-parent-container'>
     <div className='get-in-touch-first-child-main-container'>
     <div className='get-in-first-child-our-office'>OUR OFFICES</div>
     <div className='get-in-first-child-get-in-touch'><span>Get In </span>Touch</div>
     <div className='get-in-first-child-get-slogan'>Let our experience pave the path to your success.</div>
     <GetInTouchComp/>
     <GetInTouchComp/>

     <GetInTouchComp/>

     </div>
     <div className='get-in-touch-sec-child-main-container'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.02558667919!2d77.17760265828528!3d28.554552659036016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3908958262f%3A0x2113071a39f2789d!2sB7%2F118%20Safdarjung%20Enclave%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1710573626081!5m2!1sen!2sin"
      width="600" 
      height="450" 
      style={{border: "0"}}
      allowfullscreen="" 
      loading="lazy"
       referrerpolicy="no-referrer-when-downgrade"></iframe>   
       </div>
    </div>
    
  )
}

export default GetInTouch;