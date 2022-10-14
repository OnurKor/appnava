import React, { useState } from "react";
import TableRow from "../components/TableRow";
import { MainEvents } from "../data/MainEvents";

const TableDropDown = () => {
  // const SubEvents = ["level", "total", "name", "avatar", "player"];
  const [display, setDisplay] = useState(false);

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
      }
      x++;
    }
  }
  console.log(NewSubEvents);
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <table className="table" style={{width: '250px', border:"1px solid black"}}>
      <thead>
        <tr>
          <th>
            Table Events
          </th>
        </tr>
      </thead>
      <tbody>

      {MainEvents.map((main, index) => <TableRow key={index} main={main} NewSubEvents={NewSubEvents}/>
      )}
      </tbody>
      </table>
    </div>
  );
};

export default TableDropDown;
