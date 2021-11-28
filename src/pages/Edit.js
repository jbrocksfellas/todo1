import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Edit(props) {
  const { id } = useParams();
  const history = useHistory();
  const colors = ["#03fc88", "#fcc603", "#03f4fc", "#E27D60", "#FBEEC1", "#CAFAFE"]
  const [object, setObject] = useState({})  

  useEffect(() => {
    for(let x of props.dataList) {
      if(x.id == id) {
        let object = {
          id: x.id,
          title: x.title,
          tag1: x.tag1,
          tag2: x.tag2,
          date: x.date,
          time: x.time,
          color: x.color,
          place: x.place
        }
        setObject(object)
      }
    }

    
  }, [])
  
  const updateFieldChange = (key, index) => e => {

        let newArr = [...props.dataList];
        newArr[index][key] = e.target.value;
        props.setDataList(newArr)
    }

    const updateColor = (index, value) => {
        let newArr = [...props.dataList];
        newArr[index]["color"] = value;
        props.setDataList(newArr)
    }

    const handleEdit = () => {
      let newArr = [...props.dataList];
      for (let x in props.dataList) {
        if (props.dataList[x].id == id) {
          newArr[x] = object;
          props.setDataList(newArr)
        }
      }
      history.push('/')
    }

    const handleDelete = () => {
      props.setDataList(props.dataList.filter(item => item.id != id))
      history.push('/')
    }

  return (
    <div className="container mt-3">
      <div className="edit-header d-flex justify-content-between">
        <button className="icon-btn" onClick={(e) => history.push("/")}>
          <img src="/svg/arrow-left.svg" />
        </button>
        <h5 className="icon-btn">Edit Task</h5>
        <button className="icon-btn"
        onClick={handleDelete}
        >
          <img src="/svg/trash.svg" />
        </button>
      </div>
      <p className="grey-heading mt-4">Color Task</p>
      <div className="colors-container d-flex justify-content-between">
        {colors.map((item) => {
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
      <input type="text" className="input-text" value={object.date}
          maxLength="30"
          onChange={(e) => setObject({...object, date: e.target.value})}
          />
      <img src="/svg/calendar4-week.svg"/>
      </div>
    <hr />
    <p className="grey-heading">Time</p>
      <div className="d-flex justify-content-between">
      <input type="text" className="input-text" value={object.time}
          maxLength="40"
          onChange={(e) => setObject({...object, time: e.target.value})}
          />
      <img src="/svg/calendar4-week.svg"/>
      </div>
    <hr />
    <p className="grey-heading">Title</p>
      <div className="d-flex justify-content-between">
          <input type="text" className="input-text" value={object.title}
          maxLength="100"
          onChange={(e) => setObject({...object, title: e.target.value})}
          />
      </div>
    <hr />
    <p className="grey-heading">Place</p>
      <div className="d-flex justify-content-between">
          <input type="text" className="input-text" maxLength="40"
          value={object.place}
          onChange={(e) => setObject({...object, place: e.target.value})}
          />
      <img src="/svg/geo-alt.svg" />
      </div>
    <hr />
    <p className="grey-heading">Tag 1</p>
      <div className="d-flex justify-content-between">
      <input type="text" className="input-text" maxLength="10"
          value={object.tag1}
          onChange={(e) => setObject({...object, tag1: e.target.value})}
          />
      <img src="/svg/tag.svg" />
      </div>
    <hr />
    <p className="grey-heading">Tag 2</p>
      <div className="d-flex justify-content-between">
      <input type="text" className="input-text" maxLength="10"
          value={object.tag2}
          onChange={(e) => setObject({...object, tag2: e.target.value})}
          />
      <img src="/svg/tag.svg" />
      </div>
      
      <div style={{ height: "100px" }}></div>
    <hr />
    <button className="save-task" 
    onClick={handleEdit}
    >Save Task</button>
    </div>
  );
}
