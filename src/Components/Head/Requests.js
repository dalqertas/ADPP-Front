import React, { Component } from "react";
import NewRequest from "./NewRequest";
import PrevRequests from "./PrevRequests";
import StudentRequest from "./StudentRequest";

class Requests extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <ul className="nav nav-tabs nav-info">
          <li className="nav-item ">
            <a className="nav-link active" data-toggle="tab" href="#new">
              New Vote Request
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" data-toggle="tab" href="#prev">
              Previous Vote Requests
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" data-toggle="tab" href="#student">
              Student Requests
            </a>
          </li>
        </ul>
        <div
          id="#myTabContent"
          className="tab-content"
          style={{
            border: "0.5px solid #dee2e6",
            borderTop: "0",
            padding: 10,
            borderRadius: 1,
          }}
        >
          <NewRequest />
          <PrevRequests />
          <StudentRequest />
        </div>
      </div>
    );
  }
}
export default Requests;
