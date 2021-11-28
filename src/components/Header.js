import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const home = location.pathname === "/" ? "nav-black" : "";
  const upcoming = location.pathname === "/upcoming" ? "nav-black" : "";
  const taskDone = location.pathname === "/task-done" ? "nav-black" : "";

  const handleNav = (e) => {
    history.push(e.target.value);
  };
  return (
    <>
      <div className="header d-flex justify-content-between">
        <div className="window my-3">
          <img src="/svg/menu-button-wide-fill.svg" alt="" />
        </div>
        <div className="logo my-3">
          <h3>Task Manager</h3>
        </div>
        <div className="notifications my-3 position-relative">
          <img src="/svg/bell.svg" alt="" />
          <span class="red-badge position-absolute bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span>
        </div>
      </div>
      <div className="welcome d-flex justify-content-between">
        <div className="welcome-text">
          <p>Welcome Back!</p>
          <h3 className="mb-4">Here's Update Today.</h3>
        </div>
        <div className="search me-3">
          <img src="/svg/search.svg" alt="" />
        </div>
      </div>
      <div className="nav d-flex justify-content-between">
        <button
          className={`nav-button ${home}`}
          value="/"
          onClick={handleNav}
        >
          Today
        </button>
        <button
          className={`nav-button ${upcoming}`}
          value="upcoming"
          onClick={handleNav}
        >
          Upcoming
        </button>
        <button
          className={`nav-button ${taskDone}`}
          value="task-done"
          onClick={handleNav}
        >
          Task Done
        </button>
      </div>
    </>
  );
}
