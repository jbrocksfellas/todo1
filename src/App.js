import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/List";
import Edit from "./pages/Edit";
import Add from './pages/Add';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [dataList, setDataList] = useState([
    {
      id: uuidv4(),
      title: "Taking My Sisterr To School sdfsdsdf fdssdsdfdfs",
      tag1: "School",
      tag2: "Everyday",
      date: "12 October 2021",
      time: "7:30 (Remind At 07:15",
      color: "#03fc88",
      place: "Denmark"
    },
    {
      id: uuidv4(),
      title: "Taking My Sisterr To School",
      tag1: "School",
      tag2: "Everyday",
      date: "12 October 2021",
      time: "7:30 (Remind At 07:15",
      color: "#fcc603",
      place: "Denmark"
    },
    {
      id: uuidv4(),
      title: "Taking My Sisterr To School",
      tag1: "School",
      tag2: "Everyday",
      date: "12 October 2021",
      time: "7:30 (Remind At 07:15",
      color: "#03f4fc",
      place: "Denmark"
    },
    {
      id: uuidv4(),
      title: "Taking My Sisterr To School",
      tag1: "School",
      tag2: "Everyday",
      date: "12 October 2021",
      time: "7:30 (Remind At 07:15",
      color: "#03fc88",
      place: "Denmark"
    },
  ]);
  const colors = [
    "#03fc88",
    "#fcc603",
    "#03f4fc",
    "#E27D60",
    "#FBEEC1",
    "#CAFAFE",
  ];

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/edit/:id">
            <Edit dataList={dataList} setDataList={setDataList} colors={colors} />
          </Route>
          <Route path="/add">
            <Add dataList={dataList} setDataList={setDataList} colors={colors} />
          </Route>
          <Route path="/delete">delete</Route>
          <Route path="/">
            <List dataList={dataList}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
