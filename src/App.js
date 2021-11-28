import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/List";
import Edit from "./pages/Edit";

function App() {
  const dataList = [
    {
      id: 1,
      title: "Taking My Sisterr To School",
      tag1: "School",
      tag2: "Everyday",
      date: "12 October 2021",
      time: "7:30 (Remind At 07:15",
      color: "#03fc88",
    },
    {
      id: 2,
      title: "Taking My Sisterr To School",
      tag1: "School",
      tag2: "Everyday",
      date: "12 October 2021",
      time: "7:30 (Remind At 07:15",
      color: "#fcc603",
    },
    {
      id: 3,
      title: "Taking My Sisterr To School",
      tag1: "School",
      tag2: "Everyday",
      date: "12 October 2021",
      time: "7:30 (Remind At 07:15",
      color: "#03f4fc",
    },
    {
      id: 4,
      title: "Taking My Sisterr To School",
      tag1: "School",
      tag2: "Everyday",
      date: "12 October 2021",
      time: "7:30 (Remind At 07:15",
      color: "#03fc88",
    },
  ];
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <List dataList={dataList}/>
          </Route>
          <Route path="/add">add</Route>
          <Route path="/edit/:id">
            <Edit dataList={dataList}/>
          </Route>
          <Route path="/delete">delete</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
