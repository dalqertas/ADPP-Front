import React from "react";
import StudentNavbar from "../Navbars/StudentNavbar";
import {Switch, Route} from 'react-router-dom';
import Requests from "./Requests";

function Student() {
  return (
    <div style={{ padding: 0 }}>
      <StudentNavbar />
      <Switch>
          <Route  path="/student/requests" component={Requests}/>
      </Switch>
    </div>
  );
}

export default Student;
