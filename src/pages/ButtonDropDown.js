import React from "react";
import ButtonDropDownOpen from "../components/ButtonDropDownOpen";
import { MainEvents } from "../data/MainEvents";

const ButtonDropDown = () => {

  // const Main = MainEvents;
  // console.log(Main);
  // const NewSubEvents = [];

  // const SubEvents = ["level", "total", "name", "avatar", "player"];
  // MainEvents.map((x) => {
  //   return x;
  // });

  // console.log(SubEvents);
  

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",  margin:"30px auto", borderRadius:"8px", padding:"10px", overFlow:"hidden", backgroundColor:"#113f67", maxWidth:"550px"}}>
      {MainEvents.map((buttonName,index) => (
        <ButtonDropDownOpen button={buttonName} key={index}/>
      ))}
    </div>
  );
};

export default ButtonDropDown;
