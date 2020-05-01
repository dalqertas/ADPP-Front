import React from "react";
import StudentNavbar from "../Navbars/StudentNavbar";
import { Switch, Route } from "react-router-dom";
import Requests from "./Requests";
import DisplayCourses from "./DisplayCourses";
import RequestDetail from "./RequestDetail";
import Generate from "./Generate";

function Student() {
  return (
    <div style={{ padding: 0 }}>
      <StudentNavbar />
      <Switch>
        <Route path="/student/requests/:requestID" component={RequestDetail} />
        <Route path="/student/requests" component={Requests} />
        <Route path="/student/display" component={DisplayCourses} />
        <Route path="/student/generate" component={Generate}/>
      </Switch>
    </div>
  );
}

export default Student;
