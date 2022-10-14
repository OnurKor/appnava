import React, { useState } from "react";

const TableRow = ({ NewSubEvents, main }) => {
const [display, setDisplay] = useState(false)

  const subName = NewSubEvents.filter(
    (sub) => sub.startsWith(main) && sub.length > main.length
  );
  return (
    <>
      <tr>
        <td
          onClick={() => setDisplay(!display)}
          style={{ color: "blue", backgroundColor: "#bbb", cursor: "pointer" }}
        >
          {main}
        </td>
      </tr>
      {subName.map((item, index) => {
        return (
          <tr key={index}>
            <td
              style={{ color: "red", backgroundColor: "#ddd", display: display?"block":"none" }}
            >
              {item}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableRow;
