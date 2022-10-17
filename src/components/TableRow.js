import React, { useState } from "react";

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

          <button
            className="btn btn-light my-btn"
            onClick={() => setDisplay(!display)}
            style={{
              cursor: "pointer",              
              borderRadius: "10px",
              width: "60px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0.818182C4.87674e-08 0.366312 0.366313 0 0.818182 0L17.1818 1.41426e-06C17.6337 1.46302e-06 18 0.366314 18 0.818182C18 1.27005 17.6337 1.63637 17.1818 1.63637L0.818182 1.63636C0.366312 1.63636 0 1.27005 0 0.818182ZM0 9C4.87674e-08 8.54813 0.366313 8.18182 0.818182 8.18182L17.1818 8.18182C17.6337 8.18182 18 8.54813 18 9C18 9.45187 17.6337 9.81818 17.1818 9.81818L0.818182 9.81818C0.366312 9.81818 0 9.45187 0 9ZM0 17.1818C4.87674e-08 16.73 0.366313 16.3636 0.818182 16.3636L17.1818 16.3636C17.6337 16.3636 18 16.73 18 17.1818C18 17.6337 17.6337 18 17.1818 18L0.818182 18C0.366312 18 0 17.6337 0 17.1818Z"
                fill="black"
              />
            </svg>            
          </button>
        </td>
      </tr>
      {subName.map((item, index) => {
        return (
          <tr key={index}>
            <td
              style={{
                color: "white",
                backgroundColor: "#B4B5BE",
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