import React, { useState } from "react";
// import { IoMdArrowDropdown } from "react-icons/bs";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'



const TableRow = ({ NewSubEvents, main }) => {
  const [display, setDisplay] = useState(false);

  const subName = NewSubEvents.filter(
    (sub) => sub.startsWith(main) && sub.length > main.length
  );
  return (
    <>
      <tr>
        <td
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {main}
          {/* <i
            style={{ width: "2rem" }}
            class="fa-sharp fa-solid fa-caret-down"
          ></i> */}
          {/* <FontAwesomeIcon icon="fa-sharp fa-sCD ..olid fa-caret-down" /> */}

          <button
            className="btn btn-info btn-hover"
            onClick={() => setDisplay(!display)}
            style={{
              cursor: "pointer",
              fontWeight: "500",
              borderRadius: "10px",
              transition: "all 2.5s ease-out",
            }}
          >
            Open SubEvents
          </button>
        </td>
      </tr>
      {subName.map((item, index) => {
        return (
          <tr key={index}>
            <td
              style={{
                color: "white",
                backgroundColor: "#a9a9a9",
                display: display ? "block" : "none",
              }}
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
