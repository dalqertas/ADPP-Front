import React, { Component } from "react";
import HeadNavbar from "../Navbars/HeadNavbar";
import { Switch, Route } from "react-router";
import Requests from "./Requests";

class Head extends Component {
  render() {
    return (
      <div style={{ padding: 0 }}>
     <HeadNavbar/>
     <Switch>
       <Route path="/head/requests" component={Requests}/>
     </Switch>
     </div>
    );
  }
}
export default Head;
