import React, { Component } from "react";
import RequestStore from "../Stores/requestStore";
import { observer } from "mobx-react";

class Generate extends Component {
  render() {
    const courses = RequestStore.generate;
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <div className="card">
          
          <table style={{ height: 250, padding: 15 }}>
            <tr style={{ backgroundColor: "lightblue" }}>
              <th>Course</th>
              <th>Category</th>
            </tr>
            <tr>
              <td>{courses[0].courseName}</td>
              <td>{courses[0].department}</td>
            </tr>
            <tr>
              <td>{courses[1].courseName}</td>
              <td>{courses[1].department}</td>
            </tr>
            <tr>
              <td>{courses[2].courseName}</td>
              <td>{courses[2].department}</td>
            </tr>
            <tr>
              <td>{courses[3].courseName}</td>
              <td>{courses[3].department}</td>
            </tr>
            <tr>
              <td>{courses[4].courseName}</td>
              <td>{courses[4].department}</td>
            </tr>

          </table>
        </div>
      </div>
    );
  }
}
export default observer(Generate);
