import React, { useState } from "react";
import { MainEvents } from "../data/MainEvents";
import Select from "react-select";
const InputDropDown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const SubEvents = ["level", "total", "name", "avatar", "player"];
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
        marginBottom: "150px",
      
      }}
    >
      <div >
        {MainEvents.map((item, index) => {
          const newMap = SubEvents.map((item2, index2) => {
            return {
              value: item + "-" + item2,
              label: item + "-" + item2,
            };
          });
          // console.log(newMap)
          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "30px",
                padding: "7px",
                backgroundColor: "#d7acd4",
              }}
            >
              <div
                style={{
                  flex: "1",                  
                  fontSize: "large",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  
                }}
              >
                {item}
              </div>
              <Select
                placeholder={"Options"}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={newMap}
                menuPlacement="auto"
                styles={{
                  control: (base, state) => ({
                    ...base,
                   
                    "&:hover": {border:"2px purple solid" },
  
                  }),
                  menu: (base) => ({
                    ...base,
                    // override border radius to match the box
                    borderRadius: "0",
                    // kill the gap
                    marginTop: 0,
                    margin: "auto",
                    textAlign: "left",
                    width: "250px",
                    verticalAlign: "middle",
    
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused ? "#c3bef0" : "white",
                    color: state.isFocused ? "white" : "black",
                   
                  }),
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default InputDropDown;