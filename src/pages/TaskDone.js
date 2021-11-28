import React from "react";
import Card from "../components/Card";
import { useHistory } from "react-router-dom";

export default function TaskDone() {
    const history = useHistory();
    return (
        <div className="container">
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
          <button className="nav-black nav-button today">Today</button>
          <button className="nav-button upcoming">Upcoming</button>
          <button className="nav-button task-done">Task Done</button>
        </div>
        {props.dataList.map((item) => {
          return <Card props={item} />;
        })}
        <div style={{ height: "80px" }}></div>
        <div className="footerr">
          <button className="add-task d-flex align-items-center justify-content-center">
            <img
              src="/svg/plus-square-fill.svg"
              className="add-svg me-2"
              alt=""
            />
            <div className="mt-1"
            onClick={e => history.push('/add')} 
            >Add Task</div>
          </button>
        </div>
      </div>
    )
}
