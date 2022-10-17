import React, { useState } from "react";
import TableRow from "../components/TableRow";
import { MainEvents } from "../data/MainEvents";

const TableDropDown = () => {
 
  const SubEvents = ["", "level", "total", "name", "avatar", "player"];
  const NewSubEvents = [];
  let x = 6;
  console.log(SubEvents);
  for (let i = 0; i < MainEvents.length; i++) {
    for (let j = 0; j < SubEvents.length; j++) {
      if (x % 6 == 0) {
        NewSubEvents.push(MainEvents[i]);
      } else {
        NewSubEvents.push(MainEvents[i] + "_" + SubEvents[j]);
      };
      x++;
    };
  };
  console.log(NewSubEvents);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:"30px"}}
    >
      <table
        className="table table-primary "
        style={{ width: "100%", maxWidth:"500px", border: "3px solid darkblue" }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "center", color: "#001f3f", fontSize: "25px",}}>
             EVENTS TABLE 
            </th>
          </tr>
        </thead>
        <tbody>
          {MainEvents.map((main, index) => (
            <TableRow key={index} main={main} NewSubEvents={NewSubEvents} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDropDown;
