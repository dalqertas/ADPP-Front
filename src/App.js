import React from "react";

//Components

//Stores
import HeadNavbar from "./Components/Navbars/HeadNavbar";
import Head from "./Components/Head/Head";
import StudentNavbar from "./Components/Navbars/StudentNavbar";
import Student from "./Components/Student/Student";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div id="app" className="container-fluid" style={{ padding: 0 }}>
      <Switch>
        <Route path="/login" component={LoginForm}/>
        <Route path="/student" component={Student} />
        <Route path="/head/" component={Head} />]
      </Switch>
    </div>
  );
}

export default App;
