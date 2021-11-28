import React from "react";
import Card from "../components/Card";
import { useHistory, Route } from "react-router-dom";
import Header from "../components/Header";

export default function List(props) {
  const history = useHistory();

  return (
    <div className="container">
        <Header />
        <Route exact path="/" >
      {props.dataList.map((item) => {
        return <Card props={item} />;
      })}
      </Route>
      <Route path="/upcoming">
          upcoming
      </Route>
      <Route path="/task-done">
          upcoming
      </Route>
      <div style={{ height: "80px" }}></div>
      <div className="footerr">
        <button className="add-task d-flex align-items-center justify-content-center"
         onClick={(e) => history.push("/add")}
        >
          <img
            src="/svg/plus-square-fill.svg"
            className="add-svg me-2"
          />
          <div className="mt-1">
            Add Task
          </div>
        </button>
      </div>
    </div>
  );
}
