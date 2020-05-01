import React, { Component } from "react";
import HeadNavbar from "../Navbars/HeadNavbar";
import { Switch, Route } from "react-router";
import Requests from "./Requests";
import RequestDetail from "./RequestDetail";
import RequestStore from "../Stores/requestStore";
import Courses from "./Courses";
import StudentRequestDetail from "./StudentRequestDetail";


class Head extends Component {
  render() {

    return (
      <div style={{ padding: 0 }}>
     <HeadNavbar/>
     
     <Switch>
     <Route path="/head/requests/studentrequest/:requestID" component={StudentRequestDetail}/>
     <Route path="/head/requests/:requestID" component={RequestDetail}/>
       <Route path="/head/requests" component={Requests}/>

       <Route path="/head/courses" component={Courses}/>       
     </Switch>
     </div>
    );
  }
}
export default Head;
