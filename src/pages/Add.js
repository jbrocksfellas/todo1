import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Add(props) {
  const history = useHistory();
  const [object, setObject] = useState({
    id: uuidv4(),
    title: "",
    tag1: "",
    tag2: "",
    date: "",
    time: "",
    color: "",
    place: "",
  });

  return (
    <div className="container mt-3">
      <div className="edit-header d-flex justify-content-between">
        <button className="icon-btn" onClick={(e) => history.push("/")}>
          <img src="/svg/arrow-left.svg" />
        </button>
        <h5 style={{ marginLeft: "-30px" }}>New Task</h5>
        <div></div>
      </div>
      <p className="grey-heading mt-4">Color Task</p>
      <div className="colors-container d-flex justify-content-between">
        {props.colors.map((item) => {
          return (
            <div>
              <button
                className="color-btn"
                style={{ backgroundColor: item }}
                onClick={() => setObject({...object, color: item})}
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
              style={{ marginTop: "-6px", marginLeft: "-3px" }}
            />
          </button>
        </div>
      </div>
      <hr />
      <p className="grey-heading">Deadline</p>
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="input-text"
          value={object.date}
          maxLength="30"
          onChange={(e) => setObject({ ...object, date: e.target.value })}
        />
        <img src="/svg/calendar4-week.svg" />
      </div>
      <hr />
      <p className="grey-heading">Time</p>
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="input-text"
          value={object.time}
          maxLength="100"
          onChange={(e) => setObject({ ...object, time: e.target.value })}
        />
      </div>
      <hr />

      <p className="grey-heading">Title</p>
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="input-text"
          value={object.title}
          maxLength="100"
          onChange={(e) => setObject({ ...object, title: e.target.value })}
        />
      </div>
      <hr />
      
      <p className="grey-heading">Place</p>
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="input-text"
          maxLength="40"
          value={object.place}
          onChange={(e) => setObject({ ...object, place: e.target.value })}
        />

        <img src="/svg/geo-alt.svg" />
      </div>
      <hr />
      <p className="grey-heading">Tag 1</p>
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="input-text"
          maxLength="10"
          value={object.tag1}
          onChange={(e) => setObject({ ...object, tag1: e.target.value })}
        />
        <img src="/svg/tag.svg" />
      </div>
      <hr />
      <p className="grey-heading">Tag 2</p>
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="input-text"
          maxLength="10"
          value={object.tag2}
          onChange={(e) => setObject({ ...object, tag2: e.target.value })}
        />
        <img src="/svg/tag.svg" />
      </div>
      <div style={{ height: "200px" }}></div>
      <hr />
      <button
        className="save-task"
        onClick={(e) => {
          props.setDataList([...props.dataList, object]);
          history.push("/");
        }}
      >
        Save Task
      </button>
    </div>
  );
}
