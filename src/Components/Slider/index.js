import React from "react";
import "./style.css";


/*

<SliderContainer>
    <Slider heading={["Cost", "Effective", "&"]} />
    <Slider  />
</SliderContainer>
{ heading = [] }
*/
{
  /* {heading.map(word=>{
                return word+"<br/>"
            })} */
}

const Slider = (props) => {
  return (
    <div className="slider-main-components" style={{backgroundImage: 'url(' + props.bgImg + ")"}}>
      <div>
        <div className="Slider-content">
          {props.heading.map((word) => {
            if (word.isRed) {
              return (
                <>
                  {<span style={{color:"#e43738"}}>{word.title}</span> }   
                  <br />
                </>
              );
            } else
                return (
            <>{word.title} <br/></>
            )
            ;
          })}
          {/* <span>Cost<br/> Effective<br/> &</span> <br/>Personalized <br/>Services */}
        </div>
      </div>

      {/* <div className="slider-blank-div"></div> */}
    </div>
  );
};

export default Slider;
