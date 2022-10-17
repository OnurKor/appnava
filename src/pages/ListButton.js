import React from "react";
import ButtonDropDownOpen from "../components/ListButtonOpen";
import { MainEvents } from "../data/MainEvents";

const ButtonDropDown = () => {

  

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",  margin:"30px auto", borderRadius:"8px", padding:"10px", overFlow:"hidden", backgroundColor:"#113f67", maxWidth:"550px"}}>
      {MainEvents.map((buttonName,index) => (
        <ButtonDropDownOpen button={buttonName} key={index}/>
      ))}
    </div>
  );
};

export default ButtonDropDown;
