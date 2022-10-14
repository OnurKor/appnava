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
      }}
    >
      <div>
        {MainEvents.map((item, index) => {
          const newMap = SubEvents.map((item2, index2) => {
            return {
             value: item + "-" + item2,
             label: item + "-" + item2
            };
          });
          console.log(newMap)
          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "30px",
                padding: "7px",
                backgroundColor: "#c8d9eb",
              }}
            >
              <div
                style={{
                  flex: "1",
                  listStyleType: "none",
                  fontSize: "large",
                  fontWeight: "bold",
                  // margin:"10px"
                  // padding:"10px"
                }}
              >
                {item}
              </div>
              <Select
                placeholder={"Dropdown"}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={newMap}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputDropDown;
