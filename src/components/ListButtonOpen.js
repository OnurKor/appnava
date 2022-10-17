import React, { useState } from "react";
import AnimateHeight from 'react-animate-height';

const ButtonDropDownOpen = ({ button }) => {
  const SubEvents = ["level", "total", "name", "avatar", "player"];

  const [height, setHeight] = useState(false);

  console.log(height);

  return (
    <div style={{ width: "100%", maxWidth: "500px" }}>
      <div
        className=""
        style={{ width: "100%", textAlign:"left", backgroundColor:"#a2a8d3", padding:"10px", cursor: "pointer", color:"black", textTransform:"capitalize", fontWeight:"bold", margin:"auto", marginTop:"3px" }}
        onClick={() => setHeight(!height)}
      >
        {button}
      </div>
      <AnimateHeight
        id="example-panel"
        duration={500}
        height={height?"auto":0}
      >
        <ul
        style={{
          // height: display,
          overflow: "hidden",
          // opacity: "1",
          // transition: "opacity 200ms",
          margin:"0"
        }}
      >
        {SubEvents.map((item,index) => (
          <li key={index} style={{color:"white"}}>
            {button}_{item}
          </li>
        ))}
      </ul>
      </AnimateHeight>


    </div>
  );
};

export default ButtonDropDownOpen;
