import React from "react";
import { useParams, useHistory } from "react-router-dom";

export default function Edit(props) {
  const { id } = useParams();
  const history = useHistory();
  return (
    <div className="container mt-3">
      {/* {JSON.stringify(props.dataList[id - 1])} */}
      <div className="edit-header d-flex justify-content-between">
        <button className="icon-btn" onClick={(e) => history.push("/")}>
          <img src="/svg/arrow-left.svg" />
        </button>
        <h5>Edit Task</h5>
        <div></div>
      </div>
      <p className="mt-4">Color Task</p>
      <div className="colors-container d-flex justify-content-between">
        {props.dataList.map((item) => {
          return (
            <div>
              <button
                className="color-btn"
                style={{ backgroundColor: item.color }}
              ></button>
            </div>
          );
        })}
        <div>
          <button
            className="color-btn"
            style={{ backgroundColor: "pink" }}
            onClick={() => {}}
          >
            <img
              src="/svg/plus.svg"
              style={{ marginTop: "-8px", marginLeft: "-4px" }}
            />
          </button>
        </div>
      </div>
      <hr />
      <p className="grey-heading">Deadline</p>
      <div className="d-flex justify-content-between">
      <h5>{props.dataList[id].date}</h5>
      <button className="icon-btn">icon</button>
      </div>
    <hr />
    <p className="grey-heading">Title</p>
      <div className="d-flex justify-content-between">
      <h5>{props.dataList[id].title}</h5>
      <button className="icon-btn">icon</button>
      </div>
    <hr />
    <p className="grey-heading">Tag 1</p>
      <div className="d-flex justify-content-between">
      <h5>{props.dataList[id].tag1}</h5>
      <button className="icon-btn">icon</button>
      </div>
    <hr />
    <p className="grey-heading">Tag 2</p>
      <div className="d-flex justify-content-between">
      <h5>{props.dataList[id].tag1}</h5>
      <button className="icon-btn">icon</button>
      </div>
    <hr />
    <button className="save-task">Save Task</button>
    </div>
  );
}
