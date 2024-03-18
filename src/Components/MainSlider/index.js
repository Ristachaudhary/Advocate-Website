import React from 'react';
import './style.css';
import SliderComp from '../Slider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../Assets/slider1.jpg';
import Slider2 from  '../Assets/slider2.jpg';
import Slider3 from  '../Assets/Slider3.jpg';
import Slider4 from  '../Assets/slider4.jpg';


const MainSlider = () => {
    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000

      };
  return (
    <Slider {...settings}>
     
   <SliderComp heading={[{title:"Cost", isRed: true}, {title:"Effective", isRed: true}, {title:"&", isRed: true}, {title:"Personalized"},  {title:'Services'}]} bgImg={Slider1}/>
   
   <SliderComp heading={[{title:"Pan India", isRed: true}, {title:"Presence"}]} bgImg={Slider2}/>
   
   <SliderComp heading={[{title:"Handling", isRed: true}, {title:"Complex"}, {title:"Deals"}]} bgImg={Slider3}/>
   
   <SliderComp heading={[{title:"Represent", isRed: true}, {title:"Fortune", isRed: true},{title:"500"}, {title:"Companies"}]} bgImg={Slider4}/>
   

  </Slider>
  )
}
// {
// heading{[{
    //  red: 'Cost',

// }]}
// }

export default MainSlider;