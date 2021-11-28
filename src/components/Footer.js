import React from "react";

export default function Footer() {
  return (
    <div className="footerr">
      <button className="add-task d-flex align-items-center justify-content-center">
        <img src="/svg/plus-square-fill.svg" className="add-svg me-2" alt="" />
        <div className="mt-1" onClick={(e) => history.push("/add")}>
          Add Task
        </div>
      </button>
    </div>
  );
}
