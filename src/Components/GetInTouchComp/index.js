import React from 'react';
import { ImOffice } from "react-icons/im";
import './style.css';


const GetInTouchComp = () => {
  return (
    <div className='get-in-touch-comp-main-component'>
     <div className='get-in-touch-comp-logo'><ImOffice /></div>
     <div className='get-in-touch-comp-parent-office-address'>
        <div className='get-in-touch-comp-office-name'>Corporate <span>Office</span></div>
        <div  className='get-in-touch-comp-office-address'>G Block, Plot C 59 11th Floor, Platina,Bandra Kurla Complex Mumbai Maharashtra - 400 051</div>
        <div  className='get-in-touch-comp-office-email'><b>E:</b> info@maheshwariandco.com</div>
     </div>
    </div>
  )
}

export default GetInTouchComp;